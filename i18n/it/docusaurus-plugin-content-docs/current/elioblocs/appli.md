---
last_modified_on: 
title: "Applicazione per PC"
description: "Applicazione per Windows, macOS e Linux"
---

# Applicazione Elioblocs per PC

Elioblocs è disponibile anche come applicazione per **Windows**, **macOS** e **Linux**.

:::warning
Ti consiglio di utilizzare l'applicazione web Elioblocs disponibile su [app.eliobot.com](https://app.eliobot.com) per un'esperienza ottimale.
L'applicazione per PC è destinata principalmente agli utenti che desiderano lavorare offline o che hanno problemi di connessione con l'applicazione web.
:::

![Applicazione Elioblocks](/img/elioblocs/appli/appli.png)

---

## Scarica l'app

Scegli il tuo sistema operativo:

[![Scarica per Windows](https://img.shields.io/badge/Download-Windows-blue?style=for-the-badge&logo=windows)](https://app.eliobot.com/desktop/windows/Elioblocs%20Setup.exe)
[![Scarica per macOS (Apple Silicon)](https://img.shields.io/badge/Download-macOS%20(Apple%20Silicon)-black?style=for-the-badge&logo=apple)](https://app.eliobot.com/desktop/mac/Elioblocs-arm64.dmg)
[![Scarica per macOS (Intel)](https://img.shields.io/badge/Download-macOS%20(Intel)-black?style=for-the-badge&logo=apple)](https://app.eliobot.com/desktop/mac/Elioblocs.dmg)
[![Scarica per Linux](https://img.shields.io/badge/Download-Linux-orange?style=for-the-badge&logo=linux)](https://app.eliobot.com/desktop/linux/Elioblocs.AppImage)
[![Scarica per Linux (ARM64)](https://img.shields.io/badge/Download-Linux%20(ARM64)-orange?style=for-the-badge&logo=linux)](https://app.eliobot.com/desktop/linux/Elioblocs-arm64.AppImage)

:::tip Tu ne sais pas lequel choisir ?

- **Windows**: fare clic sul pulsante blu.
- **macOS**:
- Mac recenti (dal 2020) → **Apple Silicon**
- Mac meno recenti → **Intel**
- **Linux**:
- Processore Intel o AMD (desktop e laptop) → **Linux**
- Processore ARM (Raspberry Pi, Chromebook, ecc.) → **Linux (ARM64)**
:::

---

## Installazione su Windows

1. Scarica il file `Elioblocs Setup.exe` tramite il pulsante in alto.
2. Apre il file scaricato.
3. Fare clic su **"Sì"** se Windows richiede l'autorizzazione.

![Installazione Windows Elioblocks](/img/elioblocs/appli/windows/elevator.png)

4. Seguire i passaggi di installazione. Le opzioni predefinite generalmente vanno bene.
5. Una volta installato, avviare Elioblocs dal menu Start o dal collegamento sul desktop.

---

## Installazione su macOS

1. Scarica il file `.dmg` adatto al tuo Mac.
2. Apri il file per montare l'immagine del disco.
3. Trascinare l'icona **Elioblocs** nella cartella **Applicazioni**.
4. Autorizzare l'applicazione tramite terminale:

   ```bash
   xattr -rc com.apple.quarantine "/Applications/Elioblocs.app"
   ```

:::warning
Se non esegui questo passaggio, riceverai un messaggio di errore all'avvio.
Non preoccuparti, questa è la sicurezza standard di macOS per le app non verificate.

![Installazione Elioblocks macOS](/img/elioblocs/appli/mac/error.png)
:::

5. Avviare Elioblocs dalla cartella **Applicazioni** o tramite Spotlight.

---

## Installazione su Linux

1. Scarica il file `.AppImage` adatto al tuo sistema.
2. Sposta il file scaricato in una cartella a tua scelta (ad esempio, il desktop o una cartella specifica, ad esempio `~/Applications`).
3. Apri un terminale e vai alla cartella in cui hai spostato il file.
4. Rendi eseguibile il file con il comando:

   ```bash
   chmod +x Elioblocs.AppImage
   ```

o per ARM64:

   ```bash
    chmod +x Elioblocs-arm64.AppImage
   ```

Puoi anche fare clic con il pulsante destro del mouse sul file, selezionare "Proprietà", quindi selezionare la casella `Executable comme un programme`.
![Permessi Linux Elioblocs](/img/elioblocs/appli/linux/permissions.png)

5. Avvia l'applicazione con il comando:

   ```bash
   ./Elioblocs.AppImage
   ```

o per ARM64:

   ```bash
   ./Elioblocs-arm64.AppImage
   ```

Puoi anche fare doppio clic sul file per aprirlo.

   :::warning
Su alcune distribuzioni Linux, potrebbe essere necessario installare dipendenze aggiuntive affinché l'applicazione funzioni correttamente. Consulta la documentazione della tua distribuzione per ulteriori informazioni.
   :::

   :::tip
Se vuoi che l'applicazione sia accessibile dal menu delle applicazioni, puoi creare un file `.desktop` nella cartella `~/.local/share/applications/`, ti consiglio di seguire un tutorial specifico per la tua distribuzione per questo.
   :::

## Aggiornamento dell'app

Per aggiornare Elioblocs è sufficiente scaricare l'ultima versione dal sito ufficiale e seguire nuovamente il processo di installazione.
Se hai già installato Elioblocs, il programma di installazione sostituirà automaticamente la vecchia versione con quella nuova.