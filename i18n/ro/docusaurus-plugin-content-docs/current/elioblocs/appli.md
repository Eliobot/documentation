---
last_modified_on: 
title: "aplicatie PC"
description: "Aplicație pentru Windows, macOS și Linux"
---

# Aplicație Elioblocs pentru PC

Elioblocs este disponibil și ca aplicație pentru **Windows**, **macOS** și **Linux**.

:::warning
Vă sfătuiesc să utilizați aplicația web Elioblocs disponibilă pe [app.eliobot.com](https://app.eliobot.com) pentru o experiență optimă.
Aplicația pentru PC este destinată în principal utilizatorilor care doresc să lucreze offline sau au probleme de conectare cu aplicația web.
:::

![Aplicația Elioblocks](/img/elioblocs/appli/appli.png)

---

## Descărcați aplicația

Alegeți sistemul dvs. de operare:

[![Descărcați pentru Windows](https://img.shields.io/badge/Download-Windows-blue?style=for-the-badge&logo=windows)](https://app.eliobot.com/desktop/windows/Elioblocs%20Setup.exe)
[![Descărcare pentru macOS (Apple Silicon)](https://img.shields.io/badge/Download-macOS%20(Apple%20Silicon)-black?style=for-the-badge&logo=apple)](https://app.eliobot.com/desktop/mac/Elioblocs-arm64.dmg)
[![Descărcați pentru macOS (Intel)](https://img.shields.io/badge/Download-macOS%20(Intel)-black?style=for-the-badge&logo=apple)](https://app.eliobot.com/desktop/mac/Elioblocs.dmg)
[![Descărcați pentru Linux](https://img.shields.io/badge/Download-Linux-orange?style=for-the-badge&logo=linux)](https://app.eliobot.com/desktop/linux/Elioblocs.AppImage)
[![Descărcare pentru Linux (ARM64)](https://img.shields.io/badge/Download-Linux%20(ARM64)-orange?style=for-the-badge&logo=linux)](https://app.eliobot.com/desktop/linux/Elioblocs-arm64.AppImage)

:::tip Tu ne sais pas lequel choisir ?

- **Windows**: faceți clic pe butonul albastru.
- **macOS**:
- Mac recent (din 2020) → **Apple Silicon**
- Mac mai vechi → **Intel**
- **Linux**:
- Procesor Intel sau AMD (desktop și laptop) → **Linux**
- Procesor ARM (Raspberry Pi, Chromebook etc.) → **Linux (ARM64)**
:::

---

## Instalare pe Windows

1. Descărcați fișierul `Elioblocs Setup.exe` prin butonul de mai sus.
2. Deschide fișierul descărcat.
3. Faceți clic pe **„Da”** dacă Windows vă solicită autorizarea.

![Elioblocks Instalare Windows](/img/elioblocs/appli/windows/elevator.png)

4. Urmați pașii de instalare. Opțiunile implicite sunt în general bune.
5. Odată instalat, lansați Elioblocs din meniul Start sau din comanda rapidă de pe desktop.

---

## Se instalează pe macOS

1. Descărcați fișierul `.dmg` potrivit pentru Mac-ul dvs.
2. Deschideți fișierul pentru a monta imaginea de disc.
3. Trageți pictograma **Elioblocs** în folderul **Aplicații**.
4. Autorizați aplicația prin terminal:

   ```bash
   xattr -rc com.apple.quarantine "/Applications/Elioblocs.app"
   ```

:::warning
Dacă nu faceți acest pas, veți primi un mesaj de eroare la lansare.
Nu vă faceți griji, aceasta este securitatea macOS standard pentru aplicațiile neverificate.

![Elioblocks macOS Installation](/img/elioblocs/appli/mac/error.png)
:::

5. Lansați Elioblocs din folderul **Aplicații** sau prin Spotlight.

---

## Instalare pe Linux

1. Descărcați fișierul `.AppImage` potrivit pentru sistemul dumneavoastră.
2. Mutați fișierul descărcat într-un folder la alegere (de exemplu, desktopul sau un folder specific, de exemplu `~/Applications`).
3. Deschideți un terminal și navigați la folderul în care ați mutat fișierul.
4. Faceți fișierul executabil cu comanda:

   ```bash
   chmod +x Elioblocs.AppImage
   ```

sau pentru ARM64:

   ```bash
    chmod +x Elioblocs-arm64.AppImage
   ```

De asemenea, puteți face clic dreapta pe fișier, selectați „Proprietăți”, apoi bifați caseta `Executable comme un programme`.
![Permisiuni Linux Elioblocs](/img/elioblocs/appli/linux/permissions.png)

5. Lansați aplicația cu comanda:

   ```bash
   ./Elioblocs.AppImage
   ```

sau pentru ARM64:

   ```bash
   ./Elioblocs-arm64.AppImage
   ```

De asemenea, puteți face dublu clic pe fișier pentru a-l deschide.

   :::warning
Pe unele distribuții Linux, poate fi necesar să instalați dependențe suplimentare pentru ca aplicația să funcționeze corect. Consultați documentația distribuției dvs. pentru mai multe informații.
   :::

   :::tip
Dacă doriți ca aplicația să fie accesibilă din meniul de aplicații, puteți crea un fișier `.desktop` în folderul `~/.local/share/applications/`, vă sfătuiesc să urmați un tutorial specific distribuției dvs. pentru asta.
   :::

## Actualizare aplicație

Pentru a actualiza Elioblocs, pur și simplu descărcați cea mai recentă versiune de pe site-ul oficial și urmați din nou procesul de instalare.
Dacă ați instalat deja Elioblocs, programul de instalare va înlocui automat versiunea veche cu cea nouă.