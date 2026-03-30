---
last_modified_on: "2024-02-26"
title: "Hindernissensoren"
description: "Eliobot-Komponente – Hindernissensoren"
---


<img src={require('@site/static/img/eliobot/sensors-proximity/Eliobot - Obstacles.png').default} alt="proximity sensors" width="49%" />

<br/>Les capteurs d'obstacles d'Eliobot sont des capteurs infrarouges qui permettent de détecter les obstacles à une certaine distance.

## Zur Verwendung mit Elioblocs

Um Eliobot-Hindernissensoren auf Elioblocs zu verwenden, verwenden wir Blöcke aus der Kategorie <img src={require("@site/static/img/eliobot/sensors-proximity/category-proximity.jpg").default} style={{ width: "14%", verticalAlign: "middle" }} alt="catégorie proximité" />.

## Verwendung mit Python

Mit Python müssen Sie jeden Hindernissensor als Objekt definieren.

Wir haben 4 Sensoren am Hindernissensor, sie sind an folgende Pins angeschlossen:

|     | Capteur gauche | Capteur devant | Capteur droit | Capteur derrière |
|-----|----------------|----------------|---------------|------------------|
| Pin | IO4            | IO5            | IO6           | IO7              |

Die Sensoren liefern analoge Werte.

## Verwandte Beispiele

### Elioblocs-Beispiel

>
> <img src={require("@site/static/img/eliobot/sensors-proximity/example-proximity-elioblocs.jpg").default} alt="exemple proximité elioblocs" width="49%" />
> 

Wenn hier ein Hindernis vor Eliobot erkannt wird, dreht er sich nach rechts, andernfalls bewegt er sich vorwärts.

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
import analogio

obstacle_avant = analogio.AnalogIn(board.IO5)  # Capteur avant

while True:
    valeur = obstacle_avant.value
    if valeur < 10000:  # Obstacle détecté
        print("Obstacle détecté, valeur :", valeur)
    else:
        print("Aucun obstacle, valeur :", valeur)
```

Die Erkennung wird ausgelöst, wenn der Sensorwert unter `10000` fällt. Dieser Wert kann entsprechend der gewünschten Erkennungsentfernung angepasst werden.