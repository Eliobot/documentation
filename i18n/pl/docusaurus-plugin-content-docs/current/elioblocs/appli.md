---
last_modified_on: 
title: "Aplikacja na komputer"
description: "Aplikacja dla systemów Windows, macOS i Linux"
---

# Aplikacja Elioblocs na PC

Elioblocs jest również dostępny jako aplikacja dla **Windows**, **macOS** i **Linux**.

:::warning
Radzę skorzystać z aplikacji internetowej Elioblocs dostępnej pod adresem [app.eliobot.com](https://app.eliobot.com), aby uzyskać optymalne wrażenia.
Aplikacja na PC przeznaczona jest głównie dla użytkowników, którzy chcą pracować w trybie offline lub mają problemy z połączeniem z aplikacją internetową.
:::

![Aplikacja Elioblocks](/img/elioblocs/appli/appli.png)

---

## Pobierz aplikację

Wybierz swój system operacyjny:

[![Pobierz dla Windows](https://img.shields.io/badge/Download-Windows-blue?style=for-the-badge&logo=windows)](https://app.eliobot.com/desktop/windows/Elioblocs%20Setup.exe)
[![Pobierz dla systemu macOS (Apple Silicon)](https://img.shields.io/badge/Download-macOS%20(Apple%20Silicon)-black?style=for-the-badge&logo=apple)](https://app.eliobot.com/desktop/mac/Elioblocs-arm64.dmg)
[![Pobierz dla systemu macOS (Intel)](https://img.shields.io/badge/Download-macOS%20(Intel)-black?style=for-the-badge&logo=apple)](https://app.eliobot.com/desktop/mac/Elioblocs.dmg)
[![Pobierz dla systemu Linux](https://img.shields.io/badge/Download-Linux-orange?style=for-the-badge&logo=linux)](https://app.eliobot.com/desktop/linux/Elioblocs.AppImage)
[![Pobierz dla systemu Linux (ARM64)](https://img.shields.io/badge/Download-Linux%20(ARM64)-orange?style=for-the-badge&logo=linux)](https://app.eliobot.com/desktop/linux/Elioblocs-arm64.AppImage)

:::tip Tu ne sais pas lequel choisir ?

- **Windows**: kliknij niebieski przycisk.
- **macOS**:
- Najnowsze komputery Mac (od 2020 r.) → **Apple Silicon**
- Starszy Mac → **Intel**
- **Linuks**:
- Procesor Intel lub AMD (komputer stacjonarny i laptop) → **Linux**
- Procesor ARM (Raspberry Pi, Chromebook itp.) → **Linux (ARM64)**
:::

---

## Instalacja w systemie Windows

1. Pobierz plik `Elioblocs Setup.exe` za pomocą przycisku powyżej.
2. Otwiera pobrany plik.
3. Kliknij **„Tak”**, jeśli system Windows poprosi o autoryzację.

![Elioblokuje instalację systemu Windows](/img/elioblocs/appli/windows/elevator.png)

4. Postępuj zgodnie z instrukcjami instalacji. Domyślne opcje są ogólnie w porządku.
5. Po zainstalowaniu uruchom Elioblocs z menu Start lub skrótu na pulpicie.

---

## Instalacja na macOS

1. Pobierz plik `.dmg` odpowiedni dla Twojego komputera Mac.
2. Otwórz plik, aby zamontować obraz dysku.
3. Przeciągnij ikonę **Elioblocs** do folderu **Aplikacje**.
4. Autoryzuj wniosek poprzez terminal:

   ```bash
   xattr -rc com.apple.quarantine "/Applications/Elioblocs.app"
   ```

:::warning
Jeśli nie wykonasz tego kroku, podczas uruchamiania pojawi się komunikat o błędzie.
Nie martw się, to standardowe zabezpieczenia macOS dla niezweryfikowanych aplikacji.

![Elioblocks Instalacja macOS](/img/elioblocs/appli/mac/error.png)
:::

5. Uruchom Elioblocs z folderu **Aplikacje** lub poprzez Spotlight.

---

## Instalacja w systemie Linux

1. Pobierz plik `.AppImage` odpowiedni dla Twojego systemu.
2. Przenieś pobrany plik do wybranego folderu (na przykład na pulpit lub do określonego folderu, na przykład `~/Applications`).
3. Otwórz terminal i przejdź do folderu, do którego przeniosłeś plik.
4. Spraw, aby plik był wykonywalny za pomocą polecenia:

   ```bash
   chmod +x Elioblocs.AppImage
   ```

lub dla ARM64:

   ```bash
    chmod +x Elioblocs-arm64.AppImage
   ```

Możesz także kliknąć plik prawym przyciskiem myszy, wybrać „Właściwości”, a następnie zaznaczyć pole `Executable comme un programme`.
![Elioblocs uprawnienia Linux](/img/elioblocs/appli/linux/permissions.png)

5. Uruchom aplikację za pomocą polecenia:

   ```bash
   ./Elioblocs.AppImage
   ```

lub dla ARM64:

   ```bash
   ./Elioblocs-arm64.AppImage
   ```

Możesz także kliknąć dwukrotnie plik, aby go otworzyć.

   :::warning
W niektórych dystrybucjach Linuksa może być konieczne zainstalowanie dodatkowych zależności, aby aplikacja działała poprawnie. Aby uzyskać więcej informacji, zapoznaj się z dokumentacją swojej dystrybucji.
   :::

   :::tip
Jeśli chcesz, aby aplikacja była dostępna z menu aplikacji, możesz utworzyć plik `.desktop` w folderze `~/.local/share/applications/`. Radzę ci w tym celu skorzystać z samouczka specyficznego dla twojej dystrybucji.
   :::

## Aktualizacja aplikacji

Aby zaktualizować Elioblocs, wystarczy pobrać najnowszą wersję z oficjalnej strony internetowej i ponownie przeprowadzić proces instalacji.
Jeśli zainstalowałeś już Elioblocs, instalator automatycznie zastąpi starą wersję nową.