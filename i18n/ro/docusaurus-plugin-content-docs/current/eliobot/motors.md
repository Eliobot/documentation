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

Pentru a folosi motoarele Eliobot pe Elioblocs, folosim blocuri din categoria `Mouvement` deoarece acestea sunt motoarele care permit lui Eliobot să se miște.


## Folosind cu Python

Pentru a utiliza motoarele Eliobot în Python, puteți utiliza funcțiile disponibile în biblioteca `elio.py`.

Motoarele sunt conectate la următorii pini:

|     | Moteur gauche | Moteur droit |
|-----|---------------|--------------|
| IN1 | IO35          | IO36         |
| IN2 | IO37          | IO38         |

Motoarele pot fi controlate în două moduri: digital sau PWM

În funcționarea digitală vom avea doar posibilitatea de a roti motorul într-o direcție sau alta și de a-l opri.

În PWM va fi posibil să modificați viteza motorului și să îl faceți să treacă de la 0% la 100% din viteza maximă.

Pentru a afla mai multe despre pwm: [Wikipedia PWM](https://fr.wikipedia.org/wiki/Modulation_de_largeur_d%27impulsion)

## Exemple înrudite

### Exemplu Elioblocs

>
><img src={require('@site/static/img/eliobot/motors/example-movements-elioblocs.jpg').default} alt="exemple mouvement elioblocs" width="49%" />
>

Aici, folosim blocurile <img src={require('@site/static/img/eliobot/motors/movement-category.jpg').default} style={{ width: '14%', verticalAlign: 'middle' }} alt="Catégorie mouvement" /> pentru a-l face pe Eliobot să avanseze dacă nu detectează un obstacol în fața lui, în caz contrar el face dreapta.

---

### Exemplu Python

#### Cu biblioteca `elio.py`

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

În acest exemplu, Eliobot înaintează dacă nu detectează un obstacol în fața lui, altfel face dreapta.

---

#### Fără bibliotecă `elio.py`

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

Același exemplu ca înainte, dar fără a utiliza biblioteca `elio.py`.