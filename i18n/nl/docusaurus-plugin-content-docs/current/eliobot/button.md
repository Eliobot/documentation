---
last_modified_on: "2024-02-26"
title: "Knop"
description: "Eliobot-component - Knop"
---


<img src={require("@site/static/img/eliobot/button/Eliobot - Button.png").default} alt="Eliobot button" width="49%" />

De knop van <br/>Eliobot kan worden gebruikt om hem in de opstartmodus te zetten of om in een programma te gebruiken.

:::note
Om Eliobot in de opstartmodus te zetten, houdt u eenvoudigweg de knop ingedrukt terwijl u Eliobot inschakelt. Zorg ervoor dat u dit doet voordat u Eliobot op de computer aansluit.
:::

:::warning
Bootloading-modus is een modus waarmee u de Eliobot-microcontroller kunt flashen.
:::

## Gebruik met Elioblocs

Om de Eliobot-knop op Elioblocs te gebruiken, gebruiken we het <img src={require("@site/static/img/elioblocs/blocs/inputs/test-bouton.png").default} style={{ width: "14%", verticalAlign: "middle" }} alt="test knop" />-blok om te testen of de knop wordt ingedrukt of niet. Het retourneert `waar` als de knop wordt ingedrukt en anders `onwaar`.

## Gebruik met Python

De knop van Eliobot is verbonden met de pin `IO0` op de kaart, je hoeft alleen maar de status van de pin te lezen om te weten of de knop is ingedrukt of niet.

De informatie die de knop retourneert zijn numerieke waarden (0,1), dus deze moeten worden geconverteerd naar Boolean om te weten of de knop wordt ingedrukt of niet.

## Gerelateerde voorbeelden

### Elioblocs-voorbeeld

>
><img src={require("@site/static/img/eliobot/button/example-button-elioblocs.jpg").default} alt="exemple bouton elioblocs" width="49%" />
>

Hier gebruiken we het <img src={require("@site/static/img/elioblocs/blocs/inputs/test-bouton.png").default} style={{ width: "14%", verticalAlign: "middle" }} alt="test knop" />-blok om te schrijven dat de knop in de terminal wordt ingedrukt.

---

### Python-voorbeeld

```python
import board
from digitalio import DigitalInOut, Direction, Pull

button = DigitalInOut(board.IO0) # Création de l'objet bouton
button.direction = Direction.INPUT # Configuration du bouton en entrée

if button.value: # Si le bouton est pressé
    print("Knop ingedrukt")
```

Hier gebruiken we de `board` bibliotheek om de `IO0` pin op te halen en de `digitalio` bibliotheek om de invoerpin te configureren. Vervolgens testen we of de knop wordt ingedrukt en geven we een melding weer in de terminal.