---
last_modified_on: "2024-02-26"
title: "Batterij"
description: "Eliobot-onderdeel - Batterij"
---


<img src={require("@site/static/img/eliobot/battery/Eliobot - Battery.png").default} alt="Eliobot battery" width="49%" />


## Gebruik met Elioblocs

De batterij kan niet worden behandeld met Elioblocs.

## Gebruik met Python

Om de batterij in Python te beheren, maakt u eenvoudigweg een object met behulp van de `analogio` bibliotheek.

De batterij bevindt zich op de specifieke pin `BATTERY`.

De informatie die de `BATTERY`-pin retourneert, zijn analoge waarden, dus deze moeten worden omgezet in spanning om de accuspanning te verkrijgen.

## Gerelateerde voorbeelden

### Python-voorbeeld

```python
import board
from analogio import AnalogIn

battery = AnalogIn(board.BATTERY) # Création de l'objet batterie

def getBatteryVoltage():
    return (battery.value / 5371)
    
print(getBatteryVoltage())
```

Hier halen we de accuspanning in volt op en geven deze weer in de terminal.
