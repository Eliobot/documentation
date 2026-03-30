---
sidebar_position: 3
title: "Obstakelsensor"
description: "ObstacleSensor-klasse: infrarood obstakeldetectie"
---

# Obstakelsensor

De klasse `ObstacleSensor` beheert de 4 infrarood obstakelsensoren van Eliobot.

## Sensorposities

| Position | Index | Direction   | Pin  |
|----------|-------|-------------|------|
| Gauche   | 0     | Côté gauche | IO4  |
| Avant    | 1     | Devant      | IO5  |
| Droite   | 2     | Côté droit  | IO6  |
| Arrière  | 3     | Derrière    | IO7  |

## Initialisatie

```python
import board
import analogio
from elio import ObstacleSensor

obstacle_pins = [
    analogio.AnalogIn(board.IO4),  # Gauche
    analogio.AnalogIn(board.IO5),  # Avant
    analogio.AnalogIn(board.IO6),  # Droite
    analogio.AnalogIn(board.IO7),  # Arrière
]

obstacle_sensor = ObstacleSensor(obstacle_pins)
```

## Methoden

### `get_obstacle(obstacle_pos)`

Retourneert `True` als een obstakel door de sensor op de opgegeven positie wordt gedetecteerd, anders `False`.

| Paramètre      | Type | Description                      |
|----------------|------|----------------------------------|
| `obstacle_pos` | int  | Index du capteur (0, 1, 2 ou 3)  |

Detectie wordt geactiveerd wanneer de analoge waarde lager is dan `10000`.

```python
if obstacle_sensor.get_obstacle(1):  # Capteur avant
    print("Obstacle devant !")
```

## Volledig voorbeeld: het vermijden van obstakels

```python
import board
import pwmio
import analogio
import time
from elio import Motors, ObstacleSensor

AIN1 = pwmio.PWMOut(board.IO36)
AIN2 = pwmio.PWMOut(board.IO38)
BIN1 = pwmio.PWMOut(board.IO35)
BIN2 = pwmio.PWMOut(board.IO37)
vBatt_pin = analogio.AnalogIn(board.BATTERY)

obstacle_pins = [
    analogio.AnalogIn(board.IO4),
    analogio.AnalogIn(board.IO5),
    analogio.AnalogIn(board.IO6),
    analogio.AnalogIn(board.IO7),
]

motors = Motors(AIN1, AIN2, BIN1, BIN2, vBatt_pin)
obstacle_sensor = ObstacleSensor(obstacle_pins)

while True:
    if obstacle_sensor.get_obstacle(1):  # Obstacle devant
        motors.turn_right(speed=60)
        time.sleep(0.3)
    else:
        motors.move_forward(speed=80)
```
