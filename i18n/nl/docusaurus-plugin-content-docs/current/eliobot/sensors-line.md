---
last_modified_on: "2024-02-26"
title: "Lijnsensoren"
description: "Eliobot-component - Lijnsensoren"
---


<img src={require('@site/static/img/eliobot/senors-line/Eliobot - Line.png').default} alt="Eliobot line sensor" width="49%" />

<br/>Eliobot's lijnsensoren zijn infraroodsensoren die lijnen detecteren.

## Gebruik met Elioblocs

Om Eliobot-lijnsensoren op Elioblocs te gebruiken, gebruiken we blokken uit de categorie <img src={require("@site/static/img/eliobot/senors-line/category-follow-line.jpg").default} style={{ width: "14%", verticalAlign: "middle" }} alt="categorie lijn" />.

## Gebruik met Python

Met Python moet u elke lijnsensor als een object definiëren.
Op de lijnsensor hebben we 5 sensoren, deze zijn aangesloten op de volgende pinnen:

|     | Sensor 1 | Sensor 2 | Sensor 3 | Sensor 4 | Sensor 5 |
|-----|-----------|-----------|-----------|-----------|-----------|
| Pijnboom | IO10 | IO11 | IO12 | IO13 | IO14 |

We gebruiken het gereflecteerde licht om de lijn te detecteren, we meten het omgevingslicht en het gereflecteerde licht om de waarde te berekenen.

De sensoren retourneren analoge waarden.

## Gerelateerde voorbeelden

### Elioblocs-voorbeeld

>
> <img src={require("@site/static/img/eliobot/senors-line/example-follow-line-elioblocs.jpg").default} alt="exemple suivi de ligne elioblocs" width="49%" />
>   

Als we hier een lijn onder sensor 3 (de middelste sensor) detecteren, gaan we vooruit.

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

obstacleInput = [analogio.AnalogIn(pin) for pin in
                 (board.IO4, board.IO5, board.IO6, board.IO7)]

lineCmd = digitalio.DigitalInOut(board.IO33)
lineCmd.direction = digitalio.Direction.OUTPUT

lineInput = None

AIN1 = pwmio.PWMOut(board.IO36)
AIN2 = pwmio.PWMOut(board.IO38)
BIN1 = pwmio.PWMOut(board.IO35)
BIN2 = pwmio.PWMOut(board.IO37)

buzzer = pwmio.PWMOut(board.IO17, variable_frequency=True)

elio = Eliobot(AIN1, AIN2, BIN1, BIN2, vBatt_pin, obstacleInput, buzzer, lineInput, lineCmd)

line_sensor = [
    analogio.AnalogIn(board.IO10), # Capteur 1
    analogio.AnalogIn(board.IO11), # Capteur 2
    analogio.AnalogIn(board.IO12), # Capteur 3
    analogio.AnalogIn(board.IO13), # Capteur 4
    analogio.AnalogIn(board.IO14)  # Capteur 5
]

# Fonction pour récupérer la valeur d'un capteur de ligne
def getLine(line_pos):
    ambient = 0
    lit = 0
    value = 0

    # Mesure de la lumière réfléchie
    obstacleCmd.value = True
    time.sleep(0.02)
    lit = lineInput[line_pos].value

    # Mesure de la lumière ambiante
    obstacleCmd.value = False
    time.sleep(0.02)
    ambient = lineInput[line_pos].value

    # Calcul de la valeur
    value = ambient - lit

    return value
    
while True:
    if getLine(2) > 30000: # Si le capteur 3 détecte une ligne
        elio.move_forward(100) # On avance
```

Als we hier een lijn onder sensor 3 (de middelste sensor) detecteren, gaan we vooruit.
De detectiedrempel is 30.000, dit is een geschatte waarde en moet worden gekalibreerd voor een optimale werking.