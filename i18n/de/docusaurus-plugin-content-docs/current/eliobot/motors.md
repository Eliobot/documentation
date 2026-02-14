---
last_modified_on: "2024-02-26"
title: "Motoren"
description: "Eliobot-Komponente – Motoren"
---


<p align="middle">
    <img src={require('@site/static/img/eliobot/motors/Eliobot - Motors Top.png').default} alt="Eliobot motors top" width="49%" />
    <img src={require('@site/static/img/blank.png').default} width="2%"/>
    <img src={require('@site/static/img/eliobot/motors/Eliobot - Motors Bottom.png').default} alt="Eliobot motors bottom" width="49%" />
</p>

:::note
Die Motoren von Eliobot werden direkt von der Batterie angetrieben und funktionieren daher nur, wenn sich der Zündknopf in der Position `ON` befindet.
:::

## Verwendung mit Elioblocs

Um die Motoren von Eliobot in Elioblocs zu verwenden, nutzen wir Blöcke aus der Kategorie `Bewegungen`, denn diese Motoren bewegen Eliobot.


## Verwendung mit Python

Um Eliobot-Motoren in Python zu verwenden, können Sie die in der `elio.py`-Bibliothek verfügbaren Funktionen nutzen.

Die Motoren werden an folgende Pins angeschlossen:

|     | Linker Motor | Rechter Motor |
|-----|---------------|---------|
| IN1 | IO35 | IO36 |
| IN2 | IO37 | IO38 |

Motoren können auf zwei Arten gesteuert werden: Digital oder PWM

Im digitalen Betrieb haben wir nur die Möglichkeit, den Motor in die eine oder andere Richtung zu drehen und anzuhalten.

Bei der PWM wird es auch möglich sein, die Geschwindigkeit des Motors zu ändern und ihn von 0 % auf 100 % seiner maximalen Geschwindigkeit zu bringen.

Um mehr über pwm zu erfahren: [Wikipedia PWM](https://fr.wikipedia.org/wiki/Modulation_de_largeur_d%27impulsion)

## Verwandte Beispiele

### Elioblocs-Beispiel

>
><img src={require('@site/static/img/eliobot/motors/example-movements-elioblocs.jpg').default} alt="exemple mouvement elioblocs" width="49%" />
>

Hier verwenden wir die <img src={require('@site/static/img/eliobot/motors/movement-category.jpg').default} style={{ width: '14%', verticalAlign: 'middle' }} alt="Kategorie Bewegung" />-Blöcke, um Eliobot vorwärts zu bewegen, wenn er kein Hindernis vor sich erkennt; andernfalls dreht er nach rechts.

---

### Python-Beispiel

#### Mit der Bibliothek `elio.py`

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

In diesem Beispiel bewegt sich Eliobot vorwärts, wenn er kein Hindernis vor sich erkennt, andernfalls dreht er sich nach rechts.

#### Ohne die Bibliothek `elio.py`

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
Gleiches Beispiel wie zuvor, jedoch ohne Verwendung der `elio.py`-Bibliothek.
