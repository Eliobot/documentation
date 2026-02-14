#!/usr/bin/env python3
import json
import re
import shutil
import time
import urllib.parse
import urllib.request
from pathlib import Path

SRC_DOCS = Path("docs")
DST_DOCS = Path("i18n/pl/docusaurus-plugin-content-docs/current")
CACHE_FILE = Path(".translation_cache_fr_pl.json")

SOURCE_LANG = "fr"
TARGET_LANG = "pl"

stats = {
    "requests": 0,
    "errors": 0,
    "translated_lines": 0,
}


def load_cache():
    if CACHE_FILE.exists():
        try:
            return json.loads(CACHE_FILE.read_text(encoding="utf-8"))
        except Exception:
            return {}
    return {}


def save_cache(cache):
    CACHE_FILE.write_text(json.dumps(cache, ensure_ascii=False, indent=2), encoding="utf-8")


def gtranslate(text, cache):
    if text in cache:
        return cache[text]

    if not text.strip() or not re.search(r"[A-Za-zÀ-ÿ]", text):
        cache[text] = text
        return text

    q = urllib.parse.quote(text)
    url = (
        "https://translate.googleapis.com/translate_a/single"
        f"?client=gtx&sl={SOURCE_LANG}&tl={TARGET_LANG}&dt=t&q={q}"
    )

    last_err = None
    for _ in range(3):
        try:
            with urllib.request.urlopen(url, timeout=8) as resp:
                data = json.loads(resp.read().decode("utf-8"))
            translated = "".join(part[0] for part in data[0] if part and part[0] is not None)
            cache[text] = translated
            stats["requests"] += 1
            return translated
        except Exception as exc:
            last_err = exc
            time.sleep(0.25)

    # Fallback: keep original instead of blocking forever
    cache[text] = text
    stats["errors"] += 1
    return text


def protect_tokens(text):
    tokens = []

    def repl(match):
        idx = len(tokens)
        tokens.append(match.group(0))
        return f"@@PH{idx}@@"

    patterns = [
        r"`[^`]*`",
        r"\{[^{}]*\}",
        r"<[^>]+>",
        r"\]\([^\)]+\)",
        r"https?://\S+",
    ]

    out = text
    for pat in patterns:
        out = re.sub(pat, repl, out)
    return out, tokens


def restore_tokens(text, tokens):
    # Google Translate may alter placeholder casing/spaces; normalize first.
    out = re.sub(r"@@\s*ph\s*([0-9]+)\s*@@", r"@@PH\1@@", text, flags=re.IGNORECASE)
    # Restore in reverse order so nested placeholders are fully resolved.
    for i in range(len(tokens) - 1, -1, -1):
        out = out.replace(f"@@PH{i}@@", tokens[i])
    return out


def translate_line(line, cache):
    protected, tokens = protect_tokens(line)
    translated = gtranslate(protected, cache)
    out = restore_tokens(translated, tokens)
    if out != line:
        stats["translated_lines"] += 1
    return out


def translate_frontmatter_line(line, cache):
    m = re.match(r'^(\s*(title|description)\s*:\s*)(["\'])(.*)(\3)(\s*)$', line)
    if not m:
        return line
    prefix, _, quote, value, _, suffix = m.groups()
    translated = translate_line(value, cache)
    return f"{prefix}{quote}{translated}{quote}{suffix}"


def normalize_static_paths(line):
    # Relative links to static/ break inside i18n docs; use site-absolute /img/.
    out = re.sub(r"\]\((?:\.\./)+static/img/", "](/img/", line)
    out = re.sub(r'((?:src|href)\s*=\s*["\'])(?:\.\./)+static/img/', r"\1/img/", out)
    return out


def process_markdown(path, cache):
    content = path.read_text(encoding="utf-8")
    lines = content.splitlines(keepends=True)
    out = []

    i = 0
    if lines and lines[0].strip() == "---":
        out.append(lines[0])
        i = 1
        while i < len(lines):
            raw = lines[i]
            has_nl = raw.endswith("\n")
            line = raw[:-1] if has_nl else raw
            if line.strip() == "---":
                out.append(raw)
                i += 1
                break
            out_line = translate_frontmatter_line(line, cache)
            out.append(out_line + ("\n" if has_nl else ""))
            i += 1

    in_code_fence = False
    while i < len(lines):
        raw = lines[i]
        has_nl = raw.endswith("\n")
        line = raw[:-1] if has_nl else raw
        stripped = line.strip()

        if stripped.startswith("```"):
            in_code_fence = not in_code_fence
            out.append(raw)
            i += 1
            continue

        if in_code_fence or stripped.startswith("import ") or stripped.startswith("export ") or stripped.startswith(":::"):
            out.append(raw)
            i += 1
            continue

        translated = translate_line(line, cache)
        translated = normalize_static_paths(translated)
        out.append(translated + ("\n" if has_nl else ""))
        i += 1

    path.write_text("".join(out), encoding="utf-8")


def process_category_json(path, cache):
    data = json.loads(path.read_text(encoding="utf-8"))
    if isinstance(data, dict):
        if isinstance(data.get("label"), str):
            data["label"] = translate_line(data["label"], cache)
        link = data.get("link")
        if isinstance(link, dict) and isinstance(link.get("description"), str):
            link["description"] = translate_line(link["description"], cache)
    path.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")


def process_message_json(path, cache, key_filter=None):
    data = json.loads(path.read_text(encoding="utf-8"))
    for key, val in data.items():
        if key_filter and not key_filter(key):
            continue
        if isinstance(val, dict) and isinstance(val.get("message"), str):
            val["message"] = translate_line(val["message"], cache)
    path.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")


def main():
    cache = load_cache()
    print(f"Loaded cache: {len(cache)} entries", flush=True)

    if DST_DOCS.exists():
        shutil.rmtree(DST_DOCS)
    shutil.copytree(SRC_DOCS, DST_DOCS)

    md_files = sorted([p for p in DST_DOCS.rglob("*.md")])
    cat_files = sorted([p for p in DST_DOCS.rglob("_category_.json")])

    for idx, p in enumerate(md_files, start=1):
        process_markdown(p, cache)
        if idx % 5 == 0 or idx == len(md_files):
            save_cache(cache)
            print(f"MD {idx}/{len(md_files)}", flush=True)

    for idx, p in enumerate(cat_files, start=1):
        process_category_json(p, cache)
        if idx % 5 == 0 or idx == len(cat_files):
            save_cache(cache)
            print(f"CAT {idx}/{len(cat_files)}", flush=True)

    process_message_json(Path("i18n/pl/docusaurus-theme-classic/navbar.json"), cache)
    process_message_json(Path("i18n/pl/docusaurus-theme-classic/footer.json"), cache)
    process_message_json(Path("i18n/pl/docusaurus-plugin-content-docs/current.json"), cache)

    code_path = Path("i18n/pl/code.json")
    def code_key_filter(k):
        return k.startswith("homepage.") or k.startswith("playground.") or k.startswith("theme.IdealImageMessage.")
    process_message_json(code_path, cache, key_filter=code_key_filter)

    save_cache(cache)
    print("Done.", flush=True)
    print(f"requests={stats['requests']} translated_lines={stats['translated_lines']} errors={stats['errors']} cache={len(cache)}", flush=True)


if __name__ == "__main__":
    main()
