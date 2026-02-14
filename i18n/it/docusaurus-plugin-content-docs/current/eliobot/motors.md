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

Per utilizzare i motori di Eliobot sugli Eliobloc, utilizziamo i blocchi della categoria `Movimento` perché sono i motori che permettono a Eliobot di muoversi.


## Da utilizzare con Python

Per utilizzare i motori Eliobot in Python è possibile utilizzare le funzioni disponibili nella libreria `elio.py`.

I motori sono collegati ai seguenti pin:

|     | Motore sinistro | Motore destro |
|-----|---------------|--------------|
| IN1 | IO35 | IO36 |
| IN2 | IO37 | IO38 |

I motori possono essere controllati in due modi: digitale o PWM

Nel funzionamento digitale avremo solo la possibilità di far girare il motore in un senso o nell'altro, e fermarlo.

In PWM sarà anche possibile modificare la velocità del motore e farla passare dallo 0% al 100% della sua velocità massima.

Per saperne di più su pwm: [Wikipedia PWM](https://fr.wikipedia.org/wiki/Modulation_de_largeur_d%27impulsion)

## Esempi correlati

### Esempio di Eliobloc

>
><img src={require('@site/static/img/eliobot/motors/example-movements-elioblocs.jpg').default} alt="esempio movimento elioblocs" width="49%" />
>

Qui utilizziamo i blocchi <img src={require('@site/static/img/eliobot/motors/movement-category.jpg').default} style={{ width: '14%', verticalAlign: 'middle' }} alt="Categoria movimento" /> per far avanzare Eliobot se non rileva un ostacolo davanti a sé, altrimenti gira a destra.

---

### Esempio Python

#### Con la libreria `elio.py`

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

In questo esempio Eliobot avanza se non rileva un ostacolo davanti a sé, altrimenti gira a destra.

#### Senza la libreria `elio.py`

```python
import elio
import time
import board
import pwmio

# Configurazione dei pin
moteurDroit1 = pwmio.PWMOut(board.IO36)
moteurDroit2 = pwmio.PWMOut(board.IO38)
moteurGauche1 = pwmio.PWMOut(board.IO35)
moteurGauche2 = pwmio.PWMOut(board.IO37)

# Velocità dei motori
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
Stesso esempio di prima, ma senza utilizzare la libreria `elio.py`.