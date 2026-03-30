---
last_modified_on: "2024-02-26"
title: "Obstakelsensoren"
description: "Eliobot-component - Obstakelsensoren"
---


<img src={require('@site/static/img/eliobot/sensors-proximity/Eliobot - Obstacles.png').default} alt="proximity sensors" width="49%" />

<br/>Les capteurs d'obstacles d'Eliobot sont des capteurs infrarouges qui permettent de détecter les obstacles à une certaine distance.

## Gebruik met Elioblocs

Om Eliobot obstakelsensoren op Elioblocs te gebruiken, gebruiken we blokken uit de categorie <img src={require("@site/static/img/eliobot/sensors-proximity/category-proximity.jpg").default} style={{ width: "14%", verticalAlign: "middle" }} alt="catégorie proximité" />.

## Gebruik met Python

Met Python moet u elke obstakelsensor als een object definiëren.

Op de obstakelsensor hebben we 4 sensoren, deze zijn aangesloten op de volgende pinnen:

|     | Capteur gauche | Capteur devant | Capteur droit | Capteur derrière |
|-----|----------------|----------------|---------------|------------------|
| Pin | IO4            | IO5            | IO6           | IO7              |

De sensoren retourneren analoge waarden.

## Gerelateerde voorbeelden

### Elioblocs voorbeeld

>
> <img src={require("@site/static/img/eliobot/sensors-proximity/example-proximity-elioblocs.jpg").default} alt="exemple proximité elioblocs" width="49%" />
> 

Als hier een obstakel voor Eliobot wordt gedetecteerd, draait hij naar rechts, anders beweegt hij vooruit.

---

### Python-voorbeeld

#### Met de bibliotheek `elio.py`

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

In dit voorbeeld gaat Eliobot vooruit als hij geen obstakel voor hem detecteert, anders draait hij naar rechts.

---

#### Zonder de bibliotheek `elio.py`

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

Detectie wordt geactiveerd wanneer de sensorwaarde onder `10000` daalt. Deze waarde kan worden aangepast aan de gewenste detectieafstand.