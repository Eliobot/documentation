---
sidebar_position: 3
title: "Czujnik przeszkód"
description: "Klasa ObstacleSensor — wykrywanie przeszkód w podczerwieni"
---

# Czujnik przeszkód

Klasa `ObstacleSensor` zarządza 4 czujnikami przeszkód na podczerwień Eliobota.

## Pozycje czujników

| Position | Index | Direction   | Pin  |
|----------|-------|-------------|------|
| Gauche   | 0     | Côté gauche | IO4  |
| Avant    | 1     | Devant      | IO5  |
| Droite   | 2     | Côté droit  | IO6  |
| Arrière  | 3     | Derrière    | IO7  |

## Inicjalizacja

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

## Metody

### `get_obstacle(obstacle_pos)`

Zwraca `True`, jeśli czujnik wykryje przeszkodę w danej pozycji, `False` w przeciwnym razie.

| Paramètre      | Type | Description                      |
|----------------|------|----------------------------------|
| `obstacle_pos` | int  | Index du capteur (0, 1, 2 ou 3)  |

Detekcja jest wyzwalana, gdy wartość analogowa jest niższa niż `10000`.

```python
if obstacle_sensor.get_obstacle(1):  # Capteur avant
    print("Obstacle devant !")
```

## Pełny przykład — unikanie przeszkód

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
