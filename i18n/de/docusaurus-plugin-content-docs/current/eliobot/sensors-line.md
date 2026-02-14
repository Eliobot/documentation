---
last_modified_on: "2024-02-26"
title: "Liniensensoren"
description: "Eliobot-Komponente – Zeilensensoren"
---


<img src={require('@site/static/img/eliobot/senors-line/Eliobot - Line.png').default} alt="Eliobot line sensor" width="49%" />

<br/>Eliobots Liniensensoren sind Infrarotsensoren, die Linien erkennen.

## Verwendung mit Elioblocs

Um Eliobot-Zeilensensoren auf Elioblocs zu verwenden, nutzen wir Blöcke aus der Kategorie <img src={require("@site/static/img/eliobot/senors-line/category-follow-line.jpg").default} style={{ width: "14%", verticalAlign: "middle" }} alt="Kategorie Linie" />.

## Verwendung mit Python

Mit Python müssen Sie jeden Zeilensensor als Objekt definieren.
Wir haben 5 Sensoren am Zeilensensor, sie sind an folgende Pins angeschlossen:

|     | Sensor 1 | Sensor 2 | Sensor 3 | Sensor 4 | Sensor 5 |
|-----|-----------|-----------|-----------|-----------|-----------|
| Kiefer | IO10 | IO11 | IO12 | IO13 | IO14 |

Wir verwenden das reflektierte Licht, um die Linie zu erkennen, wir messen das Umgebungslicht und das reflektierte Licht, um den Wert zu berechnen.

Die Sensoren liefern analoge Werte.

## Verwandte Beispiele

### Elioblocs-Beispiel

>
> <img src={require("@site/static/img/eliobot/senors-line/example-follow-line-elioblocs.jpg").default} alt="Beispiel Linienverfolgung Elioblocs" width="49%" />
>

Wenn wir hier eine Linie unter Sensor 3 (dem mittleren Sensor) erkennen, bewegen wir uns vorwärts.

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
    analogio.AnalogIn(board.IO10), # Sensor 1
    analogio.AnalogIn(board.IO11), # Sensor 2
    analogio.AnalogIn(board.IO12), # Sensor 3
    analogio.AnalogIn(board.IO13), # Sensor 4
    analogio.AnalogIn(board.IO14)  # Sensor 5
]

# Funktion zum Auslesen des Werts eines Liniensensors
def getLine(line_pos):
    ambient = 0
    lit = 0
    value = 0

    # Messung des reflektierten Lichts
    obstacleCmd.value = True
    time.sleep(0.02)
    lit = lineInput[line_pos].value

    # Messung des Umgebungslichts
    obstacleCmd.value = False
    time.sleep(0.02)
    ambient = lineInput[line_pos].value

    # Wert berechnen
    value = ambient - lit

    return value
    
while True:
    if getLine(2) > 30000: # Wenn Sensor 3 eine Linie erkennt
        elio.move_forward(100) # Vorwärts fahren
```

Wenn wir hier eine Linie unter Sensor 3 (dem mittleren Sensor) erkennen, bewegen wir uns vorwärts.
Die Erkennungsschwelle beträgt 30000, es handelt sich um einen ungefähren Wert, der für einen optimalen Betrieb kalibriert werden muss.
