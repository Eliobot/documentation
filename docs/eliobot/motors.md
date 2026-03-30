---
last_modified_on: "2024-02-26"
title: "Moteurs"
description: "Eliobot component - Moteurs"
---


<p align="middle">
    <img src={require('@site/static/img/eliobot/motors/Eliobot - Motors Top.png').default} alt="Eliobot motors top" width="49%" />
    <img src={require('@site/static/img/blank.png').default} width="2%"/>
    <img src={require('@site/static/img/eliobot/motors/Eliobot - Motors Bottom.png').default} alt="Eliobot motors bottom" width="49%" />
</p>

:::note
Les moteurs de Eliobot sont alimentés directement par la batterie, ils fonctionnent donc seulement lorsque le bouton d'allumage est en position `ON`.
:::

## Utilisation avec Elioblocs

Pour utiliser les moteurs de Eliobot sur Elioblocs, on utilise les blocs de la catégorie `Mouvement` car ce sont les moteurs qui permettent à Eliobot de se déplacer.


## Utilisation avec Python

Pour utiliser les moteurs de Eliobot en Python, tu peux utiliser les fonctions disponibles dans la librairie `elio.py`.

Les moteurs sont branchés sur les pins suivants :

|     | Moteur gauche | Moteur droit |
|-----|---------------|--------------|
| IN1 | IO35          | IO36         |
| IN2 | IO37          | IO38         |

Les moteurs peuvent être contrôlé de deux façons : Digital ou PWM

En fonctionnement digital on aura uniquement la possibiliter de faire tourner les moteur dans un sens ou l'autre, et l'arrêter.

En PWM il sera en plus possible de modifier la vitesse du moteur et de le faire aller de 0% à 100% de sa vitesse maximale.

Pour en savoir plus sur la pwm : [Wikipedia PWM](https://fr.wikipedia.org/wiki/Modulation_de_largeur_d%27impulsion)

## Exemples associés

### Exemple Elioblocs

>
><img src={require('@site/static/img/eliobot/motors/example-movements-elioblocs.jpg').default} alt="exemple mouvement elioblocs" width="49%" />
>

Ici, on utilise les blocs <img src={require('@site/static/img/eliobot/motors/movement-category.jpg').default} style={{ width: '14%', verticalAlign: 'middle' }} alt="Catégorie mouvement" /> pour faire avancer Eliobot s'il ne détecte pas d'obstacle devant lui sinon il tourne à droite.

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
import pwmio
import analogio

AIN1 = pwmio.PWMOut(board.IO36)
AIN2 = pwmio.PWMOut(board.IO38)
BIN1 = pwmio.PWMOut(board.IO35)
BIN2 = pwmio.PWMOut(board.IO37)

obstacle_avant = analogio.AnalogIn(board.IO5)

vitesse = 65535  # valeur PWM max (0–65535)

while True:
    if obstacle_avant.value < 10000:  # Obstacle devant
        # Tourner à droite
        AIN1.duty_cycle = vitesse
        AIN2.duty_cycle = 0
        BIN1.duty_cycle = 0
        BIN2.duty_cycle = vitesse
    else:
        # Avancer
        AIN1.duty_cycle = 0
        AIN2.duty_cycle = vitesse
        BIN1.duty_cycle = 0
        BIN2.duty_cycle = vitesse
```

Même exemple que précédemment, mais sans utiliser la librairie `elio.py`.