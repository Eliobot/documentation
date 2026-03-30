---
last_modified_on: "2024-02-26"
title: "Capteurs d'obstacles"
description: "Eliobot component - Capteurs d'obstacles"
---


<img src={require('@site/static/img/eliobot/sensors-proximity/Eliobot - Obstacles.png').default} alt="proximity sensors" width="49%" />

<br/>Les capteurs d'obstacles d'Eliobot sont des capteurs infrarouges qui permettent de détecter les obstacles à une certaine distance.

## Utilisation avec Elioblocs

Pour utiliser les capteurs d'obstacles d'Eliobot sur Elioblocs, on utilise les blocs de la catégorie <img src={require("@site/static/img/eliobot/sensors-proximity/category-proximity.jpg").default} style={{ width: "14%", verticalAlign: "middle" }} alt="catégorie proximité" />.

## Utilisation avec Python

Avec python, il faut définir chaque capteur d'obstacle comme un objet.

On a 4 capteurs sur le capteur d'obstacle, ils sont branché sur les pins suivants :

|     | Capteur gauche | Capteur devant | Capteur droit | Capteur derrière |
|-----|----------------|----------------|---------------|------------------|
| Pin | IO4            | IO5            | IO6           | IO7              |

Les capteurs renvoient des valeurs analogiques.

## Exemples associés

### Exemple Elioblocs

>
> <img src={require("@site/static/img/eliobot/sensors-proximity/example-proximity-elioblocs.jpg").default} alt="exemple proximité elioblocs" width="49%" />
> 

Ici, si un obstacle est détecté devant Eliobot, il tourne vers la droite sinon il avance.

---

### Exemple Python

#### Avec la librairie `elio.py`

```python
import board
import pwmio
import analogio
from elio import Motors, ObstacleSensor

AIN1 = pwmio.PWMOut(board.IO36)
AIN2 = pwmio.PWMOut(board.IO38)
BIN1 = pwmio.PWMOut(board.IO35)
BIN2 = pwmio.PWMOut(board.IO37)
vBatt_pin = analogio.AnalogIn(board.BATTERY)

obstacle_pins = [
    analogio.AnalogIn(board.IO4),  # Gauche
    analogio.AnalogIn(board.IO5),  # Avant
    analogio.AnalogIn(board.IO6),  # Droite
    analogio.AnalogIn(board.IO7),  # Arrière
]

motors = Motors(AIN1, AIN2, BIN1, BIN2, vBatt_pin)
obstacle_sensor = ObstacleSensor(obstacle_pins)

speed = 100

while True:
    if obstacle_sensor.get_obstacle(1):  # Obstacle devant
        motors.turn_right(speed)
    else:
        motors.move_forward(speed)
```

Dans cet exemple, Eliobot avance s'il ne détecte pas d'obstacle devant lui, sinon il tourne à droite.

---

#### Sans la librairie `elio.py`

```python
import board
import analogio

obstacle_avant = analogio.AnalogIn(board.IO5)  # Capteur avant

while True:
    valeur = obstacle_avant.value
    if valeur < 10000:  # Obstacle détecté
        print("Obstacle détecté, valeur :", valeur)
    else:
        print("Aucun obstacle, valeur :", valeur)
```

La détection se déclenche lorsque la valeur du capteur passe en dessous de `10000`. Cette valeur peut être ajustée selon la distance de détection souhaitée.