---
last_modified_on: "2024-02-26"
title: "Zeilensensoren"
description: "Eliobot-Komponente – Zeilensensoren"
---


<img src={require('@site/static/img/eliobot/senors-line/Eliobot - Line.png').default} alt="Eliobot line sensor" width="49%" />

<br/>Les capteurs de ligne d'Eliobot sont des capteurs infrarouges qui permettent de détecter les lignes.

## Zur Verwendung mit Elioblocs

Um Eliobot-Zeilensensoren auf Elioblocs zu verwenden, verwenden wir Blöcke aus der Kategorie <img src={require("@site/static/img/eliobot/senors-line/category-follow-line.jpg").default} style={{ width: "14%", verticalAlign: "middle" }} alt="catégorie ligne" />.

## Verwendung mit Python

Mit Python müssen Sie jeden Zeilensensor als Objekt definieren.
Wir haben 5 Sensoren am Zeilensensor, sie sind an folgende Pins angeschlossen:

|     | Capteur 1 | Capteur 2 | Capteur 3 | Capteur 4 | Capteur 5 |
|-----|-----------|-----------|-----------|-----------|-----------|
| Pin | IO10      | IO11      | IO12      | IO13      | IO14      |

Wir verwenden das reflektierte Licht, um die Linie zu erkennen, wir messen das Umgebungslicht und das reflektierte Licht, um den Wert zu berechnen.

Die Sensoren liefern analoge Werte.

## Verwandte Beispiele

### Elioblocs-Beispiel

>
> <img src={require("@site/static/img/eliobot/senors-line/example-follow-line-elioblocs.jpg").default} alt="exemple suivi de ligne elioblocs" width="49%" />
>   

Wenn wir hier eine Linie unter Sensor 3 (dem mittleren Sensor) erkennen, bewegen wir uns vorwärts.

---

### Python-Beispiel

#### Mit der Bibliothek `elio.py`

```python
import board
import pwmio
import analogio
import digitalio
from elio import Motors, LineSensor

AIN1 = pwmio.PWMOut(board.IO36)
AIN2 = pwmio.PWMOut(board.IO38)
BIN1 = pwmio.PWMOut(board.IO35)
BIN2 = pwmio.PWMOut(board.IO37)
vBatt_pin = analogio.AnalogIn(board.BATTERY)
motors = Motors(AIN1, AIN2, BIN1, BIN2, vBatt_pin)

lineCmd = digitalio.DigitalInOut(board.IO33)
lineCmd.direction = digitalio.Direction.OUTPUT

lineInput = [
    analogio.AnalogIn(board.IO10),  # Capteur 0
    analogio.AnalogIn(board.IO11),  # Capteur 1
    analogio.AnalogIn(board.IO12),  # Capteur 2 (centre)
    analogio.AnalogIn(board.IO13),  # Capteur 3
    analogio.AnalogIn(board.IO14),  # Capteur 4
]

line_sensor = LineSensor(lineInput, lineCmd, motors)

threshold = 5000  # Seuil de détection (à calibrer)

while True:
    if line_sensor.get_line(2) > threshold:  # Capteur central détecte une ligne
        motors.move_forward(100)
```

Wenn wir hier eine Linie unter dem zentralen Sensor (Index 2) erkennen, bewegen wir uns vorwärts.
Der Schwellenwert ist ein Näherungswert – verwenden Sie `line_sensor.calibrate_line_sensors()`, um ihn automatisch zu berechnen.

---

#### Ohne die Bibliothek `elio.py`

```python
import board
import analogio
import digitalio
import time

lineCmd = digitalio.DigitalInOut(board.IO33)
lineCmd.direction = digitalio.Direction.OUTPUT

capteur_centre = analogio.AnalogIn(board.IO12)  # Capteur 2 (centre)

def get_line_value():
    lineCmd.value = True
    time.sleep(0.02)
    lit = capteur_centre.value

    lineCmd.value = False
    time.sleep(0.02)
    ambient = capteur_centre.value

    return ambient - lit

threshold = 5000

while True:
    if get_line_value() > threshold:
        print("Ligne détectée !")
```

Der zurückgegebene Wert ist die Differenz zwischen Umgebungslicht und reflektiertem Licht: Je höher dieser ist, desto kontrastreicher ist die Linie.