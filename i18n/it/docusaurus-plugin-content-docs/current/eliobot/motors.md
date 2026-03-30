---
last_modified_on: "2024-02-26"
title: "Motori"
description: "Componente Eliobot - Motori"
---


<p align="middle">
    <img src={require('@site/static/img/eliobot/motors/Eliobot - Motors Top.png').default} alt="Eliobot motors top" width="49%" />
    <img src={require('@site/static/img/blank.png').default} width="2%"/>
    <img src={require('@site/static/img/eliobot/motors/Eliobot - Motors Bottom.png').default} alt="Eliobot motors bottom" width="49%" />
</p>

:::note
I motori di Eliobot sono alimentati direttamente dalla batteria, quindi funzionano solo quando il pulsante di accensione è in posizione `ON`.
:::

## Utilizzare con Eliobloc

Per utilizzare i motori di Eliobot sugli Eliobloc, utilizziamo i blocchi della categoria `Mouvement` perché sono i motori che permettono a Eliobot di muoversi.


## Utilizzo con Python

Per utilizzare i motori Eliobot in Python è possibile utilizzare le funzioni disponibili nella libreria `elio.py`.

I motori sono collegati ai seguenti pin:

|     | Moteur gauche | Moteur droit |
|-----|---------------|--------------|
| IN1 | IO35          | IO36         |
| IN2 | IO37          | IO38         |

I motori possono essere controllati in due modi: digitale o PWM

Nel funzionamento digitale avremo solo la possibilità di far girare il motore in un senso o nell'altro, e fermarlo.

In PWM sarà anche possibile modificare la velocità del motore e farla passare dallo 0% al 100% della sua velocità massima.

Per saperne di più su pwm: [Wikipedia PWM](https://fr.wikipedia.org/wiki/Modulation_de_largeur_d%27impulsion)

## Esempi correlati

### Esempio di Eliobloc

>
><img src={require('@site/static/img/eliobot/motors/example-movements-elioblocs.jpg').default} alt="exemple mouvement elioblocs" width="49%" />
>

Qui utilizziamo i blocchi <img src={require('@site/static/img/eliobot/motors/movement-category.jpg').default} style={{ width: '14%', verticalAlign: 'middle' }} alt="Catégorie mouvement" /> per far avanzare Eliobot se non rileva un ostacolo davanti a sé, altrimenti gira a destra.

---

### Esempio di Python

#### Con la libreria `elio.py`

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

In questo esempio Eliobot avanza se non rileva un ostacolo davanti a sé, altrimenti gira a destra.

---

#### Senza la libreria `elio.py`

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

Stesso esempio di prima, ma senza utilizzare la libreria `elio.py`.