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

## Zur Verwendung mit Elioblocs

Um die Motoren von Eliobot auf Elioblocs zu verwenden, verwenden wir Blöcke aus der Kategorie `Mouvement`, da es sich dabei um die Motoren handelt, die es Eliobot ermöglichen, sich zu bewegen.


## Verwendung mit Python

Um Eliobot-Engines in Python zu verwenden, können Sie die in der `elio.py`-Bibliothek verfügbaren Funktionen verwenden.

Die Motoren werden an folgende Pins angeschlossen:

|     | Moteur gauche | Moteur droit |
|-----|---------------|--------------|
| IN1 | IO35          | IO36         |
| IN2 | IO37          | IO38         |

Motoren können auf zwei Arten gesteuert werden: Digital oder PWM

Im digitalen Betrieb haben wir nur die Möglichkeit, den Motor in die eine oder andere Richtung zu drehen und anzuhalten.

Bei der PWM wird es auch möglich sein, die Geschwindigkeit des Motors zu ändern und ihn von 0 % auf 100 % seiner maximalen Geschwindigkeit zu bringen.

Um mehr über pwm zu erfahren: [Wikipedia PWM](https://fr.wikipedia.org/wiki/Modulation_de_largeur_d%27impulsion)

## Verwandte Beispiele

### Elioblocs-Beispiel

>
><img src={require('@site/static/img/eliobot/motors/example-movements-elioblocs.jpg').default} alt="exemple mouvement elioblocs" width="49%" />
>

Hier verwenden wir die <img src={require('@site/static/img/eliobot/motors/movement-category.jpg').default} style={{ width: '14%', verticalAlign: 'middle' }} alt="Catégorie mouvement" />-Blöcke, um Eliobot dazu zu bringen, sich vorwärts zu bewegen, wenn er kein Hindernis vor sich erkennt, andernfalls wendet er sich nach rechts.

---

### Python-Beispiel

#### Mit der Bibliothek `elio.py`

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

In diesem Beispiel bewegt sich Eliobot vorwärts, wenn er kein Hindernis vor sich erkennt, andernfalls dreht er sich nach rechts.

---

#### Ohne die Bibliothek `elio.py`

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

Gleiches Beispiel wie zuvor, jedoch ohne Verwendung der `elio.py`-Bibliothek.