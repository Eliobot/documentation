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

Ici si on détecte une ligne sous le capteur 3 (le capteur du milieu), on avance.
Le seuil de détection est de 30000, c'est une valeur approximative, il faut la calibrer pour un fonctionnement optimal.