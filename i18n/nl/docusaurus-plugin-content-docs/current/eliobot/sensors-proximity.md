---
last_modified_on: "2024-02-26"
title: "Obstakelsensoren"
description: "Eliobot-component - Obstakelsensoren"
---


<img src={require('@site/static/img/eliobot/sensors-proximity/Eliobot - Obstacles.png').default} alt="proximity sensors" width="49%" />

<br/>Eliobot's obstakelsensoren zijn infraroodsensoren die obstakels op een bepaalde afstand detecteren.

## Gebruik met Elioblocs

Om Eliobot obstakelsensoren op Elioblocs te gebruiken, gebruiken we blokken uit de categorie <img src={require("@site/static/img/eliobot/sensors-proximity/category-proximity.jpg").default} style={{ width: "14%", verticalAlign: "middle" }} alt="categorie nabijheid" />.

## Gebruik met Python

Met Python moet u elke obstakelsensor als een object definiëren.

Op de obstakelsensor hebben we 4 sensoren, deze zijn aangesloten op de volgende pinnen:

|     | Linkersensor | Sensor vooraan | Rechtersensor | Sensor achter |
|-----|----------------|----------------|---------------|------------------|
| Pijnboom | IO4 | IO5 | IO6 | IO7 |

De sensoren retourneren analoge waarden.

## Gerelateerde voorbeelden

### Elioblocs-voorbeeld

>
> <img src={require("@site/static/img/eliobot/sensors-proximity/example-proximity-elioblocs.jpg").default} alt="exemple proximité elioblocs" width="49%" />
> 

Als hier een obstakel voor Eliobot wordt gedetecteerd, draait hij naar rechts, anders beweegt hij vooruit.

---

### Python-voorbeeld

```python
from elio import Eliobot
import board
import time
import digitalio
import analogio
import pwmio

vBatt_pin = analogio.AnalogIn(board.BATTERY)

obstacleInput = None 

lineCmd = digitalio.DigitalInOut(board.IO33)
lineCmd.direction = digitalio.Direction.OUTPUT

lineInput = [analogio.AnalogIn(pin) for pin in
               (board.IO10, board.IO11, board.IO12, board.IO13, board.IO14)]

AIN1 = pwmio.PWMOut(board.IO36)
AIN2 = pwmio.PWMOut(board.IO38)
BIN1 = pwmio.PWMOut(board.IO35)
BIN2 = pwmio.PWMOut(board.IO37)

buzzer = pwmio.PWMOut(board.IO17, variable_frequency=True)

elio = Eliobot(AIN1, AIN2, BIN1, BIN2, vBatt_pin, obstacleInput, buzzer, lineInput, lineCmd)

proximity_sensor = [
    AnalogIn(board.IO4), # Capteur gauche
    AnalogIn(board.IO5), # Capteur devant
    AnalogIn(board.IO6), # Capteur droit
    AnalogIn(board.IO7)  # Capteur derrière
]

# Fonction pour récupérer la valeur d'un capteur d'obstacle
def getProximity(proximity_pos):
    value = 0

    # Mesure de la lumière réfléchie
    value = proximity_sensor[proximity_pos].value

    if value > 1000:
        return True
    else:
        return False

speed = 100

while True:
    if getProximity(1):
        elio.turn_right(speed)

    else:
        elio.move_forward(speed)
```

In dit voorbeeld gaat Eliobot vooruit als hij geen obstakel voor hem detecteert, anders draait hij naar rechts.

Om een ​​obstakel te detecteren, kijken we naar de waarde van de sensor voor Eliobot. Als de waarde groter is dan 1000, staat er een obstakel voor Eliobot.
1000 is een geschatte waarde en gekozen om een ​​obstakel op een bepaalde afstand te detecteren. U kunt deze waarde wijzigen om deze aan uw behoeften aan te passen.