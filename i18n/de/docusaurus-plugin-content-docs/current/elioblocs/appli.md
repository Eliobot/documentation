---
last_modified_on: 
title: "PC-Anwendung"
description: "Anwendung für Windows, macOS und Linux"
---

# Application Elioblocs pour PC

Elioblocs ist auch als Anwendung für **Windows**, **macOS** und **Linux** verfügbar.

:::warning
Für ein optimales Erlebnis empfehle ich Ihnen, die unter [app.eliobot.com](https://app.eliobot.com)] verfügbare Elioblocs-Webanwendung zu verwenden.
Die PC-Anwendung ist vor allem für Nutzer gedacht, die offline arbeiten möchten oder Verbindungsprobleme mit der Webanwendung haben.
:::

![Elioblocks-Anwendung](/img/elioblocs/appli/appli.png)

---

## Laden Sie die App herunter

Wählen Sie Ihr Betriebssystem:

[![Download für Windows](https://img.shields.io/badge/Download-Windows-blue?style=for-the-badge&logo=windows)](https://app.eliobot.com/desktop/windows/Elioblocs%20Setup.exe)  
[![Download für macOS (Apple Silicon)](https://img.shields.io/badge/Download-macOS%20(Apple%20Silicon)-black?style=for-the-badge&logo=apple)](https://app.eliobot.com/desktop/mac/Elioblocs-arm64.dmg)  
[![Download für macOS (Intel)](https://img.shields.io/badge/Download-macOS%20(Intel)-black?style=for-the-badge&logo=apple)](https://app.eliobot.com/desktop/mac/Elioblocs.dmg)  
[![Download für Linux](https://img.shields.io/badge/Download-Linux-orange?style=for-the-badge&logo=linux)](https://app.eliobot.com/desktop/linux/Elioblocs.AppImage)  
[![Download für Linux (ARM64)](https://img.shields.io/badge/Download-Linux%20(ARM64)-orange?style=for-the-badge&logo=linux)](https://app.eliobot.com/desktop/linux/Elioblocs-arm64.AppImage)

:::tip Sie wissen nicht, welches Sie wählen sollen?

- **Windows**: Klicken Sie auf die blaue Schaltfläche.
- **macOS**:
  - Aktueller Mac (seit 2020) → **Apple Silicon**
  - Älterer Mac → **Intel**
- **Linux**:
  - Intel- oder AMD-Prozessor (Desktop und Laptop) → **Linux**
  - ARM-Prozessor (Raspberry Pi, Chromebook usw.) → **Linux (ARM64)**
:::

---

## Installation unter Windows

1. Laden Sie die Datei `Elioblocs Setup.exe` über die Schaltfläche oben herunter.
2. Öffnet die heruntergeladene Datei.
3. Klicken Sie auf **„Ja“**, wenn Windows Sie zur Autorisierung auffordert.

![Elioblockiert die Windows-Installation](/img/elioblocs/appli/windows/elevator.png)

4. Befolgen Sie die Installationsschritte. Die Standardoptionen sind im Allgemeinen in Ordnung.
5. Starten Sie Elioblocs nach der Installation über das Startmenü oder die Desktop-Verknüpfung.

---

## Installation unter macOS

1. Laden Sie die für Ihren Mac geeignete `.dmg`-Datei herunter.
2. Öffnen Sie die Datei, um das Disk-Image bereitzustellen.
3. Ziehen Sie das **Elioblocs**-Symbol in den Ordner **Anwendungen**.
4. Autorisieren Sie die Anwendung über das Terminal:

```bash
   xattr -rc com.apple.quarantine "/Applications/Elioblocs.app"
   ```

:::warning
Wenn Sie diesen Schritt nicht ausführen, erhalten Sie beim Start eine Fehlermeldung.  
Keine Sorge, dies ist die standardmäßige macOS-Sicherheit für nicht verifizierte Apps.

![Elioblocks macOS Installation](/img/elioblocs/appli/mac/error.png)
:::

5. Starten Sie Elioblocs aus dem Ordner **Anwendungen** oder über Spotlight.

---

## Installation unter Linux

1. Laden Sie die für Ihr System geeignete `.AppImage`-Datei herunter.
2. Verschieben Sie die heruntergeladene Datei in einen Ordner Ihrer Wahl (z. B. den Desktop oder einen bestimmten Ordner, z. B. `~/Applications`).
3. Öffnen Sie ein Terminal und navigieren Sie zu dem Ordner, in den Sie die Datei verschoben haben.
4. Machen Sie die Datei mit dem folgenden Befehl ausführbar:

```bash
   chmod +x Elioblocs.AppImage
   ```

oder für ARM64:

```bash
    chmod +x Elioblocs-arm64.AppImage
   ```

Sie können auch mit der rechten Maustaste auf die Datei klicken, „Eigenschaften“ auswählen und dann das Kontrollkästchen `Executable comme un programme` aktivieren.
   ![Elioblocs Linux-Berechtigungen](/img/elioblocs/appli/linux/permissions.png)

5. Starten Sie die Anwendung mit dem Befehl:

```bash
   ./Elioblocs.AppImage
   ```

oder für ARM64:

```bash
   ./Elioblocs-arm64.AppImage
   ```

Sie können auch auf die Datei doppelklicken, um sie zu öffnen.

:::warning
   Bei einigen Linux-Distributionen müssen Sie möglicherweise zusätzliche Abhängigkeiten installieren, damit die Anwendung ordnungsgemäß funktioniert. Weitere Informationen finden Sie in der Dokumentation Ihrer Distribution.
   :::

:::tip
   Wenn Sie möchten, dass die Anwendung über das Anwendungsmenü zugänglich ist, können Sie eine Datei `.desktop` im Ordner `~/.local/share/applications/` erstellen. Ich empfehle Ihnen, hierfür einem für Ihre Distribution spezifischen Tutorial zu folgen.
   :::

## App-Update

Um Elioblocs zu aktualisieren, laden Sie einfach die neueste Version von der offiziellen Website herunter und folgen Sie dem Installationsvorgang erneut.
Wenn Sie Elioblocs bereits installiert haben, ersetzt das Installationsprogramm automatisch die alte Version durch die neue.