---
last_modified_on: "2024-02-26"
title: "Hindernissensoren"
description: "Eliobot-Komponente – Hindernissensoren"
---


<img src={require('@site/static/img/eliobot/sensors-proximity/Eliobot - Obstacles.png').default} alt="proximity sensors" width="49%" />

Die Hindernissensoren von <br/>Eliobot sind Infrarotsensoren, die Hindernisse in einer bestimmten Entfernung erkennen.

## Verwendung mit Elioblocs

Um Eliobot-Hindernissensoren auf Elioblocs zu verwenden, nutzen wir Blöcke aus der Kategorie <img src={require("@site/static/img/eliobot/sensors-proximity/category-proximity.jpg").default} style={{ width: "14%", verticalAlign: "middle" }} alt="Kategorie Hindernisse" />.

## Verwendung mit Python

Mit Python müssen Sie jeden Hindernissensor als Objekt definieren.

Wir haben 4 Sensoren am Hindernissensor, sie sind an folgende Pins angeschlossen:

|     | Linker Sensor | Sensor vorne | Rechter Sensor | Sensor dahinter |
|-----|----------------|----------------|---------------|------------------|
| Kiefer | IO4 | IO5 | IO6 | IO7 |

Die Sensoren liefern analoge Werte.

## Verwandte Beispiele

### Elioblocs-Beispiel

>
> <img src={require("@site/static/img/eliobot/sensors-proximity/example-proximity-elioblocs.jpg").default} alt="exemple proximité elioblocs" width="49%" />
>

Wenn hier ein Hindernis vor Eliobot erkannt wird, dreht er sich nach rechts, andernfalls bewegt er sich vorwärts.

---

### Python-Beispiel

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
    AnalogIn(board.IO4), # Linker Sensor
    AnalogIn(board.IO5), # Vorderer Sensor
    AnalogIn(board.IO6), # Rechter Sensor
    AnalogIn(board.IO7)  # Hinterer Sensor
]

# Funktion zum Auslesen des Werts eines Hindernissensors
def getProximity(proximity_pos):
    value = 0

    # Messung des reflektierten Lichts
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

In diesem Beispiel bewegt sich Eliobot vorwärts, wenn er kein Hindernis vor sich erkennt, andernfalls dreht er sich nach rechts.

Um ein Hindernis zu erkennen, schauen wir uns den Wert des Sensors vor Eliobot an. Wenn der Wert größer als 1000 ist, befindet sich vor Eliobot ein Hindernis.
1000 ist ein ungefährer Wert und wird gewählt, um ein Hindernis in einer bestimmten Entfernung zu erkennen. Sie können diesen Wert ändern, um ihn an Ihre Bedürfnisse anzupassen.
