---
last_modified_on: "2024-02-26"
title: "Senzori de linie"
description: "Componenta Eliobot - Senzori de linie"
---


<img src={require('@site/static/img/eliobot/senors-line/Eliobot - Line.png').default} alt="Eliobot line sensor" width="49%" />

<br/>Les capteurs de ligne d'Eliobot sont des capteurs infrarouges qui permettent de détecter les lignes.

## Utilizați cu Elioblocs

Pentru a folosi senzorii de linie Eliobot pe Elioblocs, folosim blocuri din categoria <img src={require("@site/static/img/eliobot/senors-line/category-follow-line.jpg").default} style={{ width: "14%", verticalAlign: "middle" }} alt="catégorie ligne" />.

## Folosind cu Python

Cu python, trebuie să definiți fiecare senzor de linie ca obiect.
Avem 5 senzori pe senzorul de linie, aceștia sunt conectați la următorii pini:

|     | Capteur 1 | Capteur 2 | Capteur 3 | Capteur 4 | Capteur 5 |
|-----|-----------|-----------|-----------|-----------|-----------|
| Pin | IO10      | IO11      | IO12      | IO13      | IO14      |

Folosim lumina reflectată pentru a detecta linia, măsurăm lumina ambientală și lumina reflectată pentru a calcula valoarea.

Senzorii returnează valori analogice.

## Exemple înrudite

### Exemplu Elioblocs

>
> <img src={require("@site/static/img/eliobot/senors-line/example-follow-line-elioblocs.jpg").default} alt="exemple suivi de ligne elioblocs" width="49%" />
>   

Aici, dacă detectăm o linie sub senzorul 3 (senzorul din mijloc), mergem înainte.

---

### Exemplu Python

#### Cu biblioteca `elio.py`

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

Aici, dacă detectăm o linie sub senzorul central (index 2), mergem înainte.
Pragul este aproximativ - utilizați `line_sensor.calibrate_line_sensors()` pentru a-l calcula automat.

---

#### Fără bibliotecă `elio.py`

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

Valoarea returnată este diferența dintre lumina ambientală și lumina reflectată: cu cât este mai mare, cu atât linia este mai contrastată.