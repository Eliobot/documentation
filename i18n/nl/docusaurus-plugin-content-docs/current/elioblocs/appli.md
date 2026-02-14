---
last_modified_on: 
title: "PC-applicatie"
description: "Applicatie voor Windows, macOS en Linux"
---

# Elioblocs-applicatie voor pc

Elioblocs is ook beschikbaar als applicatie voor **Windows**, **macOS** en **Linux**.

:::warning
Voor een optimale ervaring raad ik u aan om de Elioblocs-webapplicatie te gebruiken die beschikbaar is op [app.eliobot.com](https://app.eliobot.com).
De pc-applicatie is vooral bedoeld voor gebruikers die offline willen werken of verbindingsproblemen hebben met de webapplicatie.
:::

![Elioblocks-applicatie](/img/elioblocs/appli/appli.png)

---

## Download de app

Kies uw besturingssysteem:

[![Downloaden voor Windows](https://img.shields.io/badge/Download-Windows-blue?style=for-the-badge&logo=windows)](https://app.eliobot.com/desktop/windows/Elioblocs%20Setup.exe)
[![Downloaden voor macOS (Apple Silicon)](https://img.shields.io/badge/Download-macOS%20(Apple%20Silicon)-black?style=for-the-badge&logo=apple)](https://app.eliobot.com/desktop/mac/Elioblocs-arm64.dmg)
[![Downloaden voor macOS (Intel)](https://img.shields.io/badge/Download-macOS%20(Intel)-black?style=for-the-badge&logo=apple)](https://app.eliobot.com/desktop/mac/Elioblocs.dmg)
[![Downloaden voor Linux](https://img.shields.io/badge/Download-Linux-orange?style=for-the-badge&logo=linux)](https://app.eliobot.com/desktop/linux/Elioblocs.AppImage)
[![Downloaden voor Linux (ARM64)](https://img.shields.io/badge/Download-Linux%20(ARM64)-orange?style=for-the-badge&logo=linux)](https://app.eliobot.com/desktop/linux/Elioblocs-arm64.AppImage)

:::tip Tu ne sais pas lequel choisir ?

- **Windows**: klik op de blauwe knop.
- **macOS**:
- Recente Mac (sinds 2020) → **Apple Silicon**
- Oudere Mac → **Intel**
- **Linux**:
- Intel- of AMD-processor (desktop en laptop) → **Linux**
- ARM-processor (Raspberry Pi, Chromebook, etc.) → **Linux (ARM64)**
:::

---

## Installatie op Windows

1. Download het bestand `Elioblocs Setup.exe` via de bovenstaande knop.
2. Opent het gedownloade bestand.
3. Klik op **"Ja"** als Windows u om autorisatie vraagt.

![Elioblocks Windows-installatie](/img/elioblocs/appli/windows/elevator.png)

4. Volg de installatiestappen. De standaardopties zijn over het algemeen prima.
5. Eenmaal geïnstalleerd, start u Elioblocs vanuit het Start-menu of de snelkoppeling op het bureaublad.

---

## Installeren op macOS

1. Download het `.dmg`-bestand dat geschikt is voor uw Mac.
2. Open het bestand om de schijfkopie te koppelen.
3. Sleep het **Elioblocs**-pictogram naar de map **Applicaties**.
4. Autoriseer de aanvraag via de terminal:

   ```bash
   xattr -rc com.apple.quarantine "/Applications/Elioblocs.app"
   ```

:::warning
Als u deze stap niet uitvoert, krijgt u een foutmelding bij het opstarten.
Maak je geen zorgen: dit is standaard macOS-beveiliging voor niet-geverifieerde apps.

![Elioblokkeert macOS-installatie](/img/elioblocs/appli/mac/error.png)
:::

5. Start Elioblocs vanuit de map **Applicaties** of via Spotlight.

---

## Installeren op Linux

1. Download het bestand `.AppImage` dat geschikt is voor uw systeem.
2. Verplaats het gedownloade bestand naar een map naar keuze (bijvoorbeeld het bureaublad of een specifieke map bijvoorbeeld `~/Applications`).
3. Open een terminal en navigeer naar de map waarnaar u het bestand hebt verplaatst.
4. Maak het bestand uitvoerbaar met de opdracht:

   ```bash
   chmod +x Elioblocs.AppImage
   ```

of voor ARM64:

   ```bash
    chmod +x Elioblocs-arm64.AppImage
   ```

U kunt ook met de rechtermuisknop op het bestand klikken, "Eigenschappen" selecteren en vervolgens het vakje `Executable comme un programme` aanvinken.
![Elioblocs Linux-machtigingen](/img/elioblocs/appli/linux/permissions.png)

5. Start de applicatie met het commando:

   ```bash
   ./Elioblocs.AppImage
   ```

of voor ARM64:

   ```bash
   ./Elioblocs-arm64.AppImage
   ```

U kunt ook dubbelklikken op het bestand om het te openen.

   :::warning
Op sommige Linux-distributies moet u mogelijk extra afhankelijkheden installeren om de toepassing correct te laten werken. Raadpleeg de documentatie van uw distributie voor meer informatie.
   :::

   :::tip
Als u wilt dat de applicatie toegankelijk is vanuit het applicatiemenu, kunt u een bestand `.desktop` aanmaken in de map `~/.local/share/applications/`. Ik raad u aan hiervoor een tutorial te volgen die specifiek is voor uw distributie.
   :::

## App-update

Om Elioblocs bij te werken, downloadt u eenvoudig de nieuwste versie van de officiële website en volgt u het installatieproces opnieuw.
Als u Elioblocs al hebt geïnstalleerd, zal het installatieprogramma de oude versie automatisch vervangen door de nieuwe.