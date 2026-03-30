---
last_modified_on: "2024-02-26"
title: "Capteurs de ligne"
description: "Eliobot component - Capteurs de ligne"
---


<img src={require('@site/static/img/eliobot/senors-line/Eliobot - Line.png').default} alt="Eliobot line sensor" width="49%" />

<br/>Les capteurs de ligne d'Eliobot sont des capteurs infrarouges qui permettent de détecter les lignes.

## Utilisation avec Elioblocs

Pour utiliser les capteurs de ligne d'Eliobot sur Elioblocs, on utilise les blocs de la catégorie <img src={require("@site/static/img/eliobot/senors-line/category-follow-line.jpg").default} style={{ width: "14%", verticalAlign: "middle" }} alt="catégorie ligne" />.

## Utilisation avec Python

Avec python, il faut définir chaque capteur de ligne comme un objet.
On a 5 capteurs sur le capteur de ligne, ils sont branché sur les pins suivants :

|     | Capteur 1 | Capteur 2 | Capteur 3 | Capteur 4 | Capteur 5 |
|-----|-----------|-----------|-----------|-----------|-----------|
| Pin | IO10      | IO11      | IO12      | IO13      | IO14      |

On utilise la lumière réfléchie pour détecter la ligne, on mesure la lumière ambiante et la lumière réfléchie pour calculer la valeur.

Les capteurs renvoient des valeurs analogiques.

## Exemples associés

### Exemple Elioblocs

>
> <img src={require("@site/static/img/eliobot/senors-line/example-follow-line-elioblocs.jpg").default} alt="exemple suivi de ligne elioblocs" width="49%" />
>   

Ici si on détecte une ligne sous le capteur 3 (le capteur du milieu), on avance.

---

### Exemple Python

#### Avec la librairie `elio.py`

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

Ici si on détecte une ligne sous le capteur central (index 2), on avance.
Le seuil est approximatif — utilise `line_sensor.calibrate_line_sensors()` pour le calculer automatiquement.

---

#### Sans la librairie `elio.py`

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

La valeur retournée est la différence entre la lumière ambiante et la lumière réfléchie : plus elle est élevée, plus la ligne est contrastée.