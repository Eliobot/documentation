---
last_modified_on: 
title: "PC application"
description: "Application for Windows, macOS and Linux"
---

# Application Elioblocs pour PC

Elioblocs is also available as an application for **Windows**, **macOS** and **Linux**.

:::warning
I advise you to use the Elioblocs web application available on [app.eliobot.com](https://app.eliobot.com) for an optimal experience.
The PC application is mainly intended for users who want to work offline or have connection problems with the web application.
:::

![Elioblocks Application](/img/elioblocs/appli/appli.png)

---

## Download the app

Choose your operating system:

[![Download for Windows](https://img.shields.io/badge/Download-Windows-blue?style=for-the-badge&logo=windows)](https://app.eliobot.com/desktop/windows/Elioblocs%20Setup.exe)  
[![Download for macOS (Apple Silicon)](https://img.shields.io/badge/Download-macOS%20(Apple%20Silicon)-black?style=for-the-badge&logo=apple)](https://app.eliobot.com/desktop/mac/Elioblocs-arm64.dmg)  
[![Download for macOS (Intel)](https://img.shields.io/badge/Download-macOS%20(Intel)-black?style=for-the-badge&logo=apple)](https://app.eliobot.com/desktop/mac/Elioblocs.dmg)  
[![Download for Linux](https://img.shields.io/badge/Download-Linux-orange?style=for-the-badge&logo=linux)](https://app.eliobot.com/desktop/linux/Elioblocs.AppImage)  
[![Download for Linux (ARM64)](https://img.shields.io/badge/Download-Linux%20(ARM64)-orange?style=for-the-badge&logo=linux)](https://app.eliobot.com/desktop/linux/Elioblocs-arm64.AppImage)

:::tip Don't know which one to choose?

- **Windows**: click on the blue button.
- **macOS**:
  - Recent Mac (since 2020) → **Apple Silicon**
  - Older Mac → **Intel**
- **Linux**:
  - Intel or AMD processor (Desktop and Laptop) → **Linux**
  - ARM processor (Raspberry Pi, Chromebook, etc.) → **Linux (ARM64)**
:::

---

## Installation on Windows

1. Download the file `Elioblocs Setup.exe` via the button above.
2. Opens the downloaded file.
3. Click **"Yes"** if Windows asks you for authorization.

![Elioblocks Windows Installation](/img/elioblocs/appli/windows/elevator.png)

4. Follow the installation steps. The default options are generally fine.
5. Once installed, launch Elioblocs from the Start menu or desktop shortcut.

---

## Installing on macOS

1. Download the `.dmg` file suitable for your Mac.
2. Open the file to mount the disk image.
3. Drag the **Elioblocs** icon into the **Applications** folder.
4. Authorize the application via the terminal:

```bash
   xattr -rc com.apple.quarantine "/Applications/Elioblocs.app"
   ```

:::warning
If you don't do this step, you will get an error message when launching.  
Don't worry, this is standard macOS security for unverified apps.

![Elioblocks macOS Installation](/img/elioblocs/appli/mac/error.png)
:::

5. Launch Elioblocs from the **Applications** folder or via Spotlight.

---

## Installing on Linux

1. Download the `.AppImage` file suitable for your system.
2. Move the downloaded file to a folder of your choice (for example, the desktop or a specific folder for example `~/Applications`).
3. Open a terminal and navigate to the folder where you moved the file.
4. Make the file executable with the command:

```bash
   chmod +x Elioblocs.AppImage
   ```

or for ARM64:

```bash
    chmod +x Elioblocs-arm64.AppImage
   ```

You can also right-click on the file, select "Properties", then check the box `Executable comme un programme`.
   ![Elioblocs Linux Permissions](/img/elioblocs/appli/linux/permissions.png)

5. Launch the application with the command:

```bash
   ./Elioblocs.AppImage
   ```

or for ARM64:

```bash
   ./Elioblocs-arm64.AppImage
   ```

You can also double-click on the file to open it.

:::warning
   On some Linux distributions, you may need to install additional dependencies for the application to work properly. Consult your distribution's documentation for more information.
   :::

:::tip
   If you want the application to be accessible from the applications menu, you can create a file `.desktop` in the `~/.local/share/applications/` folder, I advise you to follow a tutorial specific to your distribution for this.
   :::

## App update

To update Elioblocs, simply download the latest version from the official website and follow the installation process again.
If you have already installed Elioblocs, the installer will automatically replace the old version with the new one.