---
last_modified_on: "2024-02-26"
title: "Netwerk"
description: "Elioblocs - Netwerken"
---

Met netwerkblokken kunt u acties uitvoeren die verband houden met het verbinden van Eliobot met een draadloos netwerk.

## **Draadloze verbinding**

---

### Maak verbinding met een draadloos netwerk

![Verbinden met een Wi-Fi-netwerk](/img/elioblocs/blocs/wifi/connect-wifi.jpg)

**Type**: Bestelling

**Definitie** :

Met dit blok kunt u Eliobot verbinden met een draadloos netwerk. U moet de netwerknaam en het wachtwoord invoeren.
De verbindingsinformatie wordt opgeslagen in een bestand met de naam `settings.toml` op Eliobot, wat betekent dat u deze niet elke keer hoeft in te voeren.
Eliobot zal bij het opstarten automatisch verbinding maken met het draadloze netwerk.

**Gebruik** :

Als u wilt dat Eliobot verbinding maakt met een draadloos netwerk om toegang te krijgen tot internet of een lokale server.

### Verbinding met een draadloos netwerk verbreken

![Verbinding met een Wi-Fi-netwerk verbreken](/img/elioblocs/blocs/wifi/disconnect-wifi.jpg)

**Type**: Bestelling

**Definitie** :

Met dit blok kunt u Eliobot loskoppelen van een draadloos netwerk.

**Gebruik** :

Als u wilt dat Eliobot de verbinding met een draadloos netwerk verbreekt om verbinding te maken met een ander netwerk of om energie te besparen.

### Open een toegangspunt vanuit Eliobot

![Open een Wi-Fi-toegangspunt](/img/elioblocs/blocs/wifi/open-hotspot.jpg)

**Type**: Bestelling

**Definitie** :

Met dit blok kunt u een Wi-Fi-toegangspunt van Eliobot openen. Hierdoor kunnen andere apparaten verbinding maken met Eliobot, zoals uw telefoon of computer.

:::warning
Het wachtwoord moet tussen 8 en 64 tekens lang zijn.
:::

**Gebruik** :

Als je een html-bestand van Eliobot wilt aanleveren om van je telefoon bijvoorbeeld een afstandsbediening te maken.

### Hostnaam instellen

![Stel de hostnaam in](/img/elioblocs/blocs/wifi/hostname.jpg)

**Type**: Bestelling

**Definitie** :

Met dit blok kunt u de naam van de Eliobot-host definiëren. De hostnaam is de naam die Eliobot op het netwerk identificeert.
Typ eenvoudig de hostnaam samen met de extensie `.local` om toegang te krijgen tot Eliobot vanaf een ander apparaat op hetzelfde netwerk.

**Gebruik** :

Als u toegang wilt krijgen tot Eliobot vanaf een ander apparaat op hetzelfde netwerk.
Als u bijvoorbeeld vanaf uw telefoon toegang wilt krijgen tot de html-pagina die u op Eliobot heeft gemaakt.

### Is verbonden met een draadloos netwerk?

![Is verbonden met een Wi-Fi-netwerk](/img/elioblocs/blocs/wifi/is-connected.jpg)

**Type**: Booleaans blok

**Definitie** :

Met dit blok kunt u testen of Eliobot is verbonden met een draadloos netwerk. Het retourneert `waar` als Eliobot is verbonden met een draadloos netwerk en anders `onwaar`.

**Gebruik** :

Als u alleen een actie wilt uitvoeren als Eliobot is verbonden met een draadloos netwerk.

### Scan beschikbare draadloze netwerken

![Beschikbare Wi-Fi-netwerken scannen](/img/elioblocs/blocs/wifi/scan-wifi.jpg)

**Type**: Waarde

**Definitie** :

Met dit blok kunt u beschikbare draadloze netwerken scannen. Het retourneert een lijst met beschikbare draadloze netwerken met hun naam en signaalsterkte.

**Gebruik** :

Als u de beschikbare draadloze netwerken wilt bekijken, kunt u kiezen met welk netwerk u verbinding wilt maken.

### Ontvang het IP-adres van het draadloze netwerk

![Wifi-netwerk IP-adres ophalen](/img/elioblocs/blocs/wifi/get-ip.jpg)

**Type**: Waarde

**Definitie** :

Met dit blok kunt u het IP-adres verkrijgen van het draadloze netwerk waarmee Eliobot is verbonden.

**Gebruik** :

Als u het IP-adres van het draadloze netwerk wilt weten om met Eliobot te kunnen communiceren, heeft u dit nodig om vanaf een ander apparaat verbinding te maken met Eliobot.

---

### Creëert een HTML-pagina

![Maak een HTML-pagina](/img/elioblocs/blocs/wifi/create-html-page.jpg)

**Type**: Bestelling

**Definitie** :

Met dit blok kunt u een HTML-pagina maken. Een HTML-pagina is een webpagina die in een webbrowser kan worden weergegeven.
Het wordt opgeslagen in een html-bestand op Eliobot met de naam `index.html` en wordt in de map `www` geplaatst.
U kunt de titel van de pagina kiezen en de inhoud ervan plaatsen. Zodra dit blok is geplaatst, worden alle lussen uitgeschakeld
voor onbepaalde tijd herhaald om de webserver te starten, u kunt er toegang toe krijgen door verbinding te maken met Eliobot in toegangspuntmodus
en het invoeren van het IP-adres van Eliobot in uw webbrowser.

**Gebruik** :

Als u een webpagina wilt maken om informatie weer te geven en interactieve elementen zoals knoppen of displays te plaatsen.

### Voeg een knop toe aan uw HTML-pagina

![Voeg een knop toe aan een HTML-pagina](/img/elioblocs/blocs/wifi/add-html-button.jpg)

**Type**: Bestelling

**Definitie** :

Met dit blok kunt u een knop toevoegen aan een HTML-pagina.
Een knop is een interactief element waarop de gebruiker kan klikken.
Daar kunt u de tekst van de knop kiezen en de code die wordt uitgevoerd wanneer op de knop wordt geklikt.
Je kunt ook de kleur van de knop kiezen.

**Gebruik** :

Als u een afstandsbediening wilt maken om Eliobot vanaf uw telefoon te bedienen.

### Voeg een viewer toe aan uw html-pagina

![Voeg een weergave toe aan een HTML-pagina](/img/elioblocs/blocs/wifi/add-html-value.jpg)

**Type**: Bestelling

**Definitie** :

Met dit blok kun je een display toevoegen aan een HTML-pagina, een display is een element dat de waarde weergeeft die je eraan geeft.
U kunt de waarde die u wilt weergeven in het display plaatsen, evenals de naam van het display.

**Gebruik** :

Als je vanaf je telefoon wilt weten of er een obstakel voor Eliobot staat.

### Maak een html-tag

![Maak een HTML-tag](/img/elioblocs/blocs/wifi/create-html-div.jpg)

**Type**: Bestelling

**Definitie** :

Met dit blok kunt u een HTML-tag maken. Een HTML-tag is een element van een webpagina dat helpt de inhoud te structureren.
Daar kunt u het type tag kiezen en de inhoud ervan plaatsen.

Beschikbare opties:
-div
- centrum

**Gebruik** :

Als u de inhoud van uw html-pagina wilt structureren.


### Maak een HTML-titel

![Maak een HTML-titel](/img/elioblocs/blocs/wifi/create-html-title.jpg)

**Type**: Bestelling

**Definitie** :

Met dit blok kunt u een HTML-titel maken. Een HTML-titel is tekst van een bepaalde grootte en vetgedrukt.
Daar kunt u de titeltekst en de grootte ervan kiezen.

Beschikbare opties:
- h1
- h2
- h3
- h4
- h5
- h6

**Gebruik** :

Als u een titel op uw HTML-pagina wilt weergeven.

### Maak een HTML-paragraaf

![Maak een HTML-paragraaf](/img/elioblocs/blocs/wifi/create-html-text.jpg)

**Type**: Bestelling

**Definitie** :

Met dit blok kunt u een HTML-paragraaf maken. Een HTML-paragraaf is tekst die op de webpagina wordt weergegeven.

**Gebruik** :

Als u tekst op uw HTML-pagina wilt weergeven.
