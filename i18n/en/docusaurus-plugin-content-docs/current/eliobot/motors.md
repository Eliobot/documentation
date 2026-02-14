---
last_modified_on: "2024-02-26"
title: "Motors"
description: "Eliobot component - Motors"
---


<p align="middle">
    <img src={require('@site/static/img/eliobot/motors/Eliobot - Motors Top.png').default} alt="Eliobot motors top" width="49%" />
    <img src={require('@site/static/img/blank.png').default} width="2%"/>
    <img src={require('@site/static/img/eliobot/motors/Eliobot - Motors Bottom.png').default} alt="Eliobot motors bottom" width="49%" />
</p>

:::note
Eliobot's motors are powered directly by the battery, so they only work when the ignition button is in the `ON` position.
:::

## Use with Elioblocs

To use Eliobot's motors on Elioblocs, we use blocks from the `Movements` category because these motors are what make Eliobot move.


## Use with Python

To use Eliobot motors in Python, you can use the functions available in the `elio.py` library.

The motors are connected to the following pins:

|     | Left motor | Right motor |
|-----|---------------|---------|
| IN1 | IO35 | IO36 |
| IN2 | IO37 | IO38 |

Motors can be controlled in two ways: Digital or PWM

In digital operation we will only have the possibility of turning the motor in one direction or the other, and stopping it.

In PWM it will also be possible to modify the speed of the motor and make it go from 0% to 100% of its maximum speed.

To learn more about pwm: [Wikipedia PWM](https://fr.wikipedia.org/wiki/Modulation_de_largeur_d%27impulsion)

## Related examples

### Elioblocs example

>
><img src={require('@site/static/img/eliobot/motors/example-movements-elioblocs.jpg').default} alt="Elioblocs movement example" width="49%" />
>

Here, we use the <img src={require('@site/static/img/eliobot/motors/movement-category.jpg').default} style={{ width: '14%', verticalAlign: 'middle' }} alt="movement category" /> blocks to make Eliobot move forward if it does not detect an obstacle in front of it; otherwise, it turns right.

---

### Python example

#### With the `elio.py` library

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

lineInput = [analogio.AnalogIn(pin) for pin in
               (board.IO10, board.IO11, board.IO12, board.IO13, board.IO14)]

AIN1 = pwmio.PWMOut(board.IO36)
AIN2 = pwmio.PWMOut(board.IO38)
BIN1 = pwmio.PWMOut(board.IO35)
BIN2 = pwmio.PWMOut(board.IO37)

buzzer = pwmio.PWMOut(board.IO17, variable_frequency=True)

elio = Eliobot(AIN1, AIN2, BIN1, BIN2, vBatt_pin, obstacleInput, buzzer, lineInput, lineCmd)

speed = 100


while True:
    if elio.get_obstacle(1):
        elio.turn_right(speed)

    else:
        elio.move_forward(speed)
```

In this example, Eliobot moves forward if he does not detect an obstacle in front of him, otherwise he turns right.

#### Without the bookstore `elio.py`

```python
import elio
import time
import board
import pwmio

# Configuration des pins
moteurDroit1 = pwmio.PWMOut(board.IO36)
moteurDroit2 = pwmio.PWMOut(board.IO38)
moteurGauche1 = pwmio.PWMOut(board.IO35)
moteurGauche2 = pwmio.PWMOut(board.IO37)

# Vitesse des moteurs
vitesse = 65535 # vitesses entre 0 et 65535

while True:
    if elio.getObstacle(1):
        moteurDroit1.duty_cycle = 0
        moteurDroit2.duty_cycle = vitesse
        moteurGauche1.duty_cycle = vitesse
        moteurGauche2.duty_cycle = 0

    else:
        moteurDroit1.duty_cycle = vitesse
        moteurDroit2.duty_cycle = 0
        moteurGauche1.duty_cycle = 0
        moteurGauche2.duty_cycle = vitesse
```
Same example as before, but without using the `elio.py` library.
