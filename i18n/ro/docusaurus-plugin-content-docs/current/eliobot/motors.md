---
last_modified_on: "2024-02-26"
title: "Motoare"
description: "Componenta Eliobot - Motoare"
---


<p align="middle">
<img src={require('@site/static/img/eliobot/motors/Eliobot - Motors Top.png').default} alt="Eliobot motors top" width="49%" />
<img src={require('@site/static/img/blank.png').default} width="2%"/>
<img src={require('@site/static/img/eliobot/motors/Eliobot - Motors Bottom.png').default} alt="Eliobot motors bottom" width="49%" />
</p>

:::note
Motoarele lui Eliobot sunt alimentate direct de la baterie, deci funcționează doar când butonul de aprindere este în poziția `ON`.
:::

## Utilizați cu Elioblocs

Pentru a folosi motoarele Eliobot pe Elioblocs, folosim blocuri din categoria `Mișcare` deoarece acestea sunt motoarele care permit lui Eliobot să se miște.


## Utilizați cu Python

Pentru a utiliza motoarele Eliobot în Python, puteți utiliza funcțiile disponibile în biblioteca `elio.py`.

Motoarele sunt conectate la următorii pini:

|     | Motor stânga | Motor dreapta |
|-----|---------------|--------------|
| IN1 | IO35 | IO36 |
| IN2 | IO37 | IO38 |

Motoarele pot fi controlate în două moduri: digital sau PWM

În funcționarea digitală vom avea doar posibilitatea de a roti motorul într-o direcție sau alta și de a-l opri.

În PWM va fi posibil să modificați viteza motorului și să îl faceți să treacă de la 0% la 100% din viteza maximă.

Pentru a afla mai multe despre pwm: [Wikipedia PWM](https://fr.wikipedia.org/wiki/Modulation_de_largeur_d%27impulsion)

## Exemple înrudite

### Exemplu Elioblocs

>
><img src={require('@site/static/img/eliobot/motors/example-movements-elioblocs.jpg').default} alt="exemplu mișcare elioblocs" width="49%" />
>

Aici, folosim blocurile <img src={require('@site/static/img/eliobot/motors/movement-category.jpg').default} style={{ width: '14%', verticalAlign: 'middle' }} alt="Categorie mișcare" /> pentru a-l face pe Eliobot să avanseze dacă nu detectează un obstacol în fața lui, în caz contrar el face dreapta.

---

### Exemplu Python

#### Cu librăria `elio.py`

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

În acest exemplu, Eliobot înaintează dacă nu detectează un obstacol în fața lui, altfel face dreapta.

#### Fără librărie `elio.py`

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
Același exemplu ca înainte, dar fără a utiliza biblioteca `elio.py`.