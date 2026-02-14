---
last_modified_on: "2024-02-26"
title: "Terminal"
description: "Terminal Elioblocs"
---

#### Zo is de terminal samengesteld. Dit deel van de uitleg zal later van pas komen.

![Elioblocs-terminal](/img/elioblocs/terminal/terminal.jpg)

> 1. Het is de "lade"-knop waarmee u de terminal kunt openen of sluiten.
> 
> 2. Dit is het tekstgebied, hier kunt u met Eliobot communiceren, de fout- of succesberichten van uw programma bekijken en wat het mogelijk op u heeft gereageerd.
> 
> 3. Dit is het gebied met terminalknoppen:
> 
> - Herstart het programma: om het programma dat u naar Eliobot heeft geüpload opnieuw te starten.
> - Programma stoppen: om het lopende programma te stoppen.
> 
> 4. Met deze twee knoppen kunt u de terminal bedienen:
> 
> - Uploaden: deze knop verzendt de code naar Eliobot, zoals eerder gezien, maar als u naar de terminal gaat nadat u de code heeft geüpload, kunt u de verzonden code zien (de code wordt verzonden in een taal die binair wordt genoemd; het is normaal als u deze niet kunt lezen).
>   
> ![Elioblocks-terminalcode](/img/elioblocs/terminal/terminal-televerser.jpg)
>   
> - Verbinden: Met deze knop kunt u de verbinding tot stand brengen tussen Eliobot en uw computer, dit maakt communicatie tussen de twee mogelijk. De terminal zal hiervoor dienen als berichtenuitwisseling.
>    
> ![Elioblocs-terminalconnector](/img/elioblocs/terminal/terminal-connecter.jpg)

Eliobot is een robot die spreekt met de programmeertaal Python. Daarom ziet u in de terminal berichten in het Engels. Maar maak je geen zorgen, we helpen je begrijpen wat hij je vertelt.

---

### Terminalfunctionaliteiten

#### Luister naar Eliobot

Wanneer u in een van uw programma's met Elioblocs het <img src={require('@site/static/img/elioblocs/terminal/ecrire.jpg').default} style={{ width: '9%', verticalAlign: 'middle' }} alt="Bloc écrire" />- of <img src={require('@site/static/img/elioblocs/terminal/afficher-la-valeur.jpg').default} style={{ width: '14%', verticalAlign: 'middle' }} alt="Bloc afficher la valeur" />-blok gebruikt, zal Eliobot naar de terminal schrijven. Je zult kunnen zien wat hij je vertelt en begrijpen wat er aan de hand is.
Als een van uw programma's niet werkt en de LED rood knippert, kunt u in de terminal zien wat er mis is.

#### Stuur opdrachten naar Eliobot

Als je in de terminal `>>>` ziet, vraagt ​​Eliobot je om hem een ​​commando te sturen. Je kunt er opdrachten in Python naar sturen, zodat deze deze uitvoert.
Als je meer wilt weten, kun je de <a href="https://learn.adafruit.com/welcome-to-circuitpython/the-repl" target="_blank" rel="noopener noreferrer" style={{color : 'blue'}}>CircuitPython</a> Documentatie bekijken.


#### Terminalproblemen?

Als, nadat u op de knop <img src={require('@site/static/img/elioblocs/terminal/connect-button.jpg').default} style={{ width: '12%', verticalAlign: 'middle' }} alt="Knop verbinden" /> heeft geklikt, het bericht `Eliobot is verbonden` verschijnt, maar er gebeurt niets, kunt u proberen op de knop <img src={require('@site/static/img/elioblocs/terminal/restart-button.jpg').default} style={{ width: '4%', verticalAlign: 'middle' }} alt="Knop herstarten" /> te klikken om het programma opnieuw te starten. Anders <img src={require('@site/static/img/elioblocs/terminal/stop-button.jpg').default} style={{ width: '4%', verticalAlign: 'middle' }} alt="Knop stoppen" /> is uw programma mogelijk nog steeds actief. Als er niets gebeurt, koppelt u Eliobot los van uw computer, schakelt u deze uit en sluit u hem opnieuw aan.