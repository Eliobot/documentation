#!/usr/bin/env python3
"""
Update only the modified Python documentation files across all language translations.
Targets:
  - python_lib/intro.md
  - python_lib/_category_.json
  - eliobot/motors.md
  - eliobot/buzzer.md
  - eliobot/sensors-proximity.md
  - eliobot/sensors-line.md
"""

import json
import re
import time
import urllib.parse
import urllib.request
from pathlib import Path

SRC_DOCS = Path("docs")
LANGUAGES = {
    "en": "en",
    "de": "de",
    "es": "es",
    "it": "it",
    "nl": "nl",
    "pl": "pl",
    "ro": "ro",
}

TARGET_FILES = [
    "python_lib/intro.md",
    "python_lib/_category_.json",
    "python_lib/motors.md",
    "python_lib/buzzer.md",
    "python_lib/obstacle-sensor.md",
    "python_lib/line-sensor.md",
    "python_lib/wifi.md",
    "python_lib/ir-remote.md",
    "python_lib/eyes-matrix.md",
    "eliobot/motors.md",
    "eliobot/buzzer.md",
    "eliobot/sensors-proximity.md",
    "eliobot/sensors-line.md",
]

stats = {"requests": 0, "errors": 0, "translated_lines": 0}


def load_cache(cache_file):
    if cache_file.exists():
        try:
            return json.loads(cache_file.read_text(encoding="utf-8"))
        except Exception:
            return {}
    return {}


def save_cache(cache, cache_file):
    cache_file.write_text(json.dumps(cache, ensure_ascii=False, indent=2), encoding="utf-8")


def gtranslate(text, source_lang, target_lang, cache):
    if text in cache:
        return cache[text]
    if not text.strip() or not re.search(r"[A-Za-zÀ-ÿ]", text):
        cache[text] = text
        return text

    q = urllib.parse.quote(text)
    url = (
        "https://translate.googleapis.com/translate_a/single"
        f"?client=gtx&sl={source_lang}&tl={target_lang}&dt=t&q={q}"
    )
    try:
        req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
        with urllib.request.urlopen(req, timeout=10) as resp:
            data = json.loads(resp.read().decode("utf-8"))
        translated = "".join(part[0] for part in data[0] if part and part[0] is not None)
        cache[text] = translated
        stats["requests"] += 1
        time.sleep(0.1)
        return translated
    except Exception as e:
        stats["errors"] += 1
        print(f"  [WARN] translate error: {e}")
        cache[text] = text
        return text


def protect_tokens(text):
    tokens = []

    def repl(match):
        idx = len(tokens)
        tokens.append(match.group(0))
        return f"@@PH{idx}@@"

    patterns = [
        r"`[^`]*`",                              # inline code
        r"\{[^{}]*\}",                           # JSX expressions
        r"<[^>]+>",                              # JSX/HTML tags
        r"\]\([^\)]+\)",                         # markdown link targets
        r"https?://\S+",                         # URLs
        r":::(note|tip|warning|danger|info)\b",  # Docusaurus admonitions
    ]
    out = text
    for pat in patterns:
        out = re.sub(pat, repl, out)
    return out, tokens


def restore_tokens(text, tokens):
    # Google Translate may alter placeholder casing/spaces — normalize first
    out = re.sub(r"@@\s*ph\s*([0-9]+)\s*@@", r"@@PH\1@@", text, flags=re.IGNORECASE)
    for i in range(len(tokens) - 1, -1, -1):
        out = out.replace(f"@@PH{i}@@", tokens[i])
    return out


def translate_line(line, source_lang, target_lang, cache):
    protected, tokens = protect_tokens(line)
    translated = gtranslate(protected, source_lang, target_lang, cache)
    out = restore_tokens(translated, tokens)
    if out != line:
        stats["translated_lines"] += 1
    return out


def translate_frontmatter_line(line, source_lang, target_lang, cache):
    m = re.match(r'^(\w[\w-]*\s*:\s*)(["\']?)(.+?)(["\']?)\s*$', line)
    if not m:
        return line
    prefix, quote, value, suffix = m.group(1), m.group(2), m.group(3), m.group(4)
    translated = translate_line(value, source_lang, target_lang, cache)
    return f"{prefix}{quote}{translated}{suffix}"


def normalize_static_paths(line):
    # Ensure @site/static paths are kept as-is (they don't need translation)
    return line


def process_markdown(src_path, dst_path, source_lang, target_lang, cache):
    text = src_path.read_text(encoding="utf-8")
    lines = text.splitlines(keepends=True)
    out = []
    in_frontmatter = False
    frontmatter_done = False
    in_code_block = False

    for i, line in enumerate(lines):
        stripped = line.rstrip("\n")

        # Frontmatter
        if i == 0 and stripped == "---":
            in_frontmatter = True
            out.append(line)
            continue
        if in_frontmatter:
            if stripped == "---":
                in_frontmatter = False
                frontmatter_done = True
                out.append(line)
            else:
                # Only translate certain frontmatter fields
                if re.match(r"^(title|description|sidebar_label)\s*:", stripped):
                    out.append(translate_frontmatter_line(stripped, source_lang, target_lang, cache) + "\n")
                else:
                    out.append(line)
            continue

        # Code blocks — never translate
        if stripped.startswith("```"):
            in_code_block = not in_code_block
            out.append(line)
            continue
        if in_code_block:
            out.append(line)
            continue

        # Empty lines
        if not stripped:
            out.append(line)
            continue

        # Lines with only special chars / JSX / HTML — skip
        if re.match(r"^\s*[<>{|]", stripped):
            out.append(line)
            continue

        # Headings — translate the text part
        heading_m = re.match(r"^(#{1,6}\s+)(.*)", stripped)
        if heading_m:
            prefix = heading_m.group(1)
            content = heading_m.group(2)
            translated = translate_line(content, source_lang, target_lang, cache)
            has_nl = line.endswith("\n")
            out.append(prefix + translated + ("\n" if has_nl else ""))
            continue

        # Regular lines
        has_nl = line.endswith("\n")
        translated = translate_line(stripped, source_lang, target_lang, cache)
        translated = normalize_static_paths(translated)
        out.append(translated + ("\n" if has_nl else ""))

    dst_path.parent.mkdir(parents=True, exist_ok=True)
    dst_path.write_text("".join(out), encoding="utf-8")
    print(f"  ✓ {dst_path}")


def process_category_json(src_path, dst_path, source_lang, target_lang, cache):
    data = json.loads(src_path.read_text(encoding="utf-8"))
    if "label" in data:
        data["label"] = translate_line(data["label"], source_lang, target_lang, cache)
    if "link" in data and "description" in data["link"]:
        data["link"]["description"] = translate_line(
            data["link"]["description"], source_lang, target_lang, cache
        )
    dst_path.parent.mkdir(parents=True, exist_ok=True)
    dst_path.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"  ✓ {dst_path}")


def main():
    for lang_code, target_lang in LANGUAGES.items():
        print(f"\n=== {lang_code} ===")
        dst_base = Path(f"i18n/{lang_code}/docusaurus-plugin-content-docs/current")
        cache_file = Path(f".translation_cache_fr_{lang_code}.json")
        cache = load_cache(cache_file)

        for rel_file in TARGET_FILES:
            src = SRC_DOCS / rel_file
            dst = dst_base / rel_file
            if not src.exists():
                print(f"  [SKIP] {src} not found")
                continue

            if rel_file.endswith("_category_.json"):
                process_category_json(src, dst, "fr", target_lang, cache)
            else:
                process_markdown(src, dst, "fr", target_lang, cache)

        save_cache(cache, cache_file)
        print(f"  Cache saved ({len(cache)} entries)")

    print(f"\nDone. requests={stats['requests']} translated={stats['translated_lines']} errors={stats['errors']}")


if __name__ == "__main__":
    main()
