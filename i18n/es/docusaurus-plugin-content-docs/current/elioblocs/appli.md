---
last_modified_on: 
title: "Aplicación para PC"
description: "Aplicación para Windows, macOS y Linux"
---

# Aplicación de Elioblocs para PC

Elioblocs también está disponible como aplicación para **Windows**, **macOS** y **Linux**.

:::warning
Te aconsejo que utilices la aplicación web Elioblocs disponible en [app.eliobot.com](https://app.eliobot.com) para una experiencia óptima.
La aplicación para PC está destinada principalmente a usuarios que desean trabajar sin conexión o tienen problemas de conexión con la aplicación web.
:::

![Aplicación Elioblocks](/img/elioblocs/appli/appli.png)

---

## Descarga la aplicación

Elige tu sistema operativo:

[![Descargar para Windows](https://img.shields.io/badge/Download-Windows-blue?style=for-the-badge&logo=windows)](https://app.eliobot.com/desktop/windows/Elioblocs%20Setup.exe)  
[![Descargar para macOS (Apple Silicon)](https://img.shields.io/badge/Download-macOS%20(Apple%20Silicon)-black?style=for-the-badge&logo=apple)](https://app.eliobot.com/desktop/mac/Elioblocs-arm64.dmg)  
[![Descargar para macOS (Intel)](https://img.shields.io/badge/Download-macOS%20(Intel)-black?style=for-the-badge&logo=apple)](https://app.eliobot.com/desktop/mac/Elioblocs.dmg)  
[![Descargar para Linux](https://img.shields.io/badge/Download-Linux-orange?style=for-the-badge&logo=linux)](https://app.eliobot.com/desktop/linux/Elioblocs.AppImage)  
[![Descargar para Linux (ARM64)](https://img.shields.io/badge/Download-Linux%20(ARM64)-orange?style=for-the-badge&logo=linux)](https://app.eliobot.com/desktop/linux/Elioblocs-arm64.AppImage)

:::tip ¿No sabes cuál elegir?

- **Windows**: haz clic en el botón azul.
- **macOS**:
  - Mac reciente (desde 2020) → **Apple Silicon**
  - Mac anterior → **Intel**
- **Linux**:
  - Procesador Intel o AMD (escritorio y portátil) → **Linux**
  - Procesador ARM (Raspberry Pi, Chromebook, etc.) → **Linux (ARM64)**
:::

---

## Instalación en Windows

1. Descargue el archivo `Elioblocs Setup.exe` mediante el botón de arriba.
2. Abre el archivo descargado.
3. Haga clic en **"Sí"** si Windows le solicita autorización.

![Elioblocks Instalación de Windows](/img/elioblocs/appli/windows/elevator.png)

4. Siga los pasos de instalación. Las opciones predeterminadas generalmente están bien.
5. Una vez instalado, inicie Elioblocs desde el menú Inicio o el acceso directo del escritorio.

---

## Instalación en macOS

1. Descargue el archivo `.dmg` adecuado para su Mac.
2. Abra el archivo para montar la imagen del disco.
3. Arrastre el icono **Elioblocs** a la carpeta **Aplicaciones**.
4. Autorizar la aplicación a través del terminal:

```bash
   xattr -rc com.apple.quarantine "/Applications/Elioblocs.app"
   ```

:::warning
Si no realiza este paso, recibirá un mensaje de error al iniciar.  
No te preocupes, esta es la seguridad estándar de macOS para aplicaciones no verificadas.

![Instalación de Elioblocks en macOS](/img/elioblocs/appli/mac/error.png)
:::

5. Inicie Elioblocs desde la carpeta **Aplicaciones** o mediante Spotlight.

---

## Instalación en Linux

1. Descargue el archivo `.AppImage` adecuado para su sistema.
2. Mueva el archivo descargado a una carpeta de su elección (por ejemplo, el escritorio o una carpeta específica, por ejemplo `~/Applications`).
3. Abra una terminal y navegue hasta la carpeta donde movió el archivo.
4. Haga que el archivo sea ejecutable con el comando:

```bash
   chmod +x Elioblocs.AppImage
   ```

o para ARM64:

```bash
    chmod +x Elioblocs-arm64.AppImage
   ```

También puede hacer clic derecho en el archivo, seleccionar "Propiedades" y luego marcar la casilla `Executable comme un programme`.
   ![Permisos de Elioblocs Linux](/img/elioblocs/appli/linux/permissions.png)

5. Inicie la aplicación con el comando:

```bash
   ./Elioblocs.AppImage
   ```

o para ARM64:

```bash
   ./Elioblocs-arm64.AppImage
   ```

También puede hacer doble clic en el archivo para abrirlo.

:::warning
   En algunas distribuciones de Linux, es posible que necesites instalar dependencias adicionales para que la aplicación funcione correctamente. Consulte la documentación de su distribución para obtener más información.
   :::

:::tip
   Si quieres que la aplicación sea accesible desde el menú de aplicaciones, puedes crear un archivo `.desktop` en la carpeta `~/.local/share/applications/`, te aconsejo que sigas un tutorial específico de tu distribución para ello.
   :::

## Actualización de la aplicación

Para actualizar Elioblocs, simplemente descargue la última versión del sitio web oficial y siga nuevamente el proceso de instalación.
Si ya has instalado Elioblocs, el instalador reemplazará automáticamente la versión antigua por la nueva.
