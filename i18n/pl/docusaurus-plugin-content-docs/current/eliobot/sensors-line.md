---
last_modified_on: "2024-02-26"
title: "Czujniki liniowe"
description: "Komponent Eliobota - Czujniki liniowe"
---


<img src={require('@site/static/img/eliobot/senors-line/Eliobot - Line.png').default} alt="Eliobot line sensor" width="49%" />

<br/>Les capteurs de ligne d'Eliobot sont des capteurs infrarouges qui permettent de détecter les lignes.

## Używaj z Elioblocami

Do wykorzystania czujników liniowych Eliobot na Elioblocach wykorzystujemy bloczki z kategorii <img src={require("@site/static/img/eliobot/senors-line/category-follow-line.jpg").default} style={{ width: "14%", verticalAlign: "middle" }} alt="catégorie ligne" />.

## Używanie z Pythonem

W Pythonie każdy czujnik linii należy zdefiniować jako obiekt.
Na czujniku liniowym mamy 5 czujników, są one podłączone do następujących pinów:

|     | Capteur 1 | Capteur 2 | Capteur 3 | Capteur 4 | Capteur 5 |
|-----|-----------|-----------|-----------|-----------|-----------|
| Pin | IO10      | IO11      | IO12      | IO13      | IO14      |

Do wykrycia linii wykorzystujemy światło odbite, mierzymy światło otoczenia, a światło odbite – do obliczenia wartości.

Czujniki zwracają wartości analogowe.

## Powiązane przykłady

### Przykład eliobbloków

>
> <img src={require("@site/static/img/eliobot/senors-line/example-follow-line-elioblocs.jpg").default} alt="exemple suivi de ligne elioblocs" width="49%" />
>   

Tutaj, jeśli wykryjemy linię pod czujnikiem 3 (środkowy czujnik), ruszamy do przodu.

---

### Przykład Pythona

#### Z biblioteką `elio.py`

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

Tutaj, jeśli wykryjemy linię pod czujnikiem centralnym (indeks 2), idziemy do przodu.
Próg jest przybliżony — użyj `line_sensor.calibrate_line_sensors()`, aby obliczyć go automatycznie.

---

#### Bez biblioteki `elio.py`

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

Zwracana wartość to różnica między światłem otoczenia a światłem odbitym: im wyższa, tym bardziej kontrastowa linia.