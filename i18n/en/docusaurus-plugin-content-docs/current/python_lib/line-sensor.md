---
sidebar_position: 4
title: "LineSensor"
description: "LineSensor class — line tracking and calibration"
---

# LineSensor

The `LineSensor` class manages Eliobot's 5 infrared line sensors and provides line tracking and calibration functions.

## Sensor positions

| Position | Index | Pin  |
|----------|-------|------|
| Extrême gauche | 0 | IO10 |
| Milieu gauche  | 1 | IO11 |
| Centre         | 2 | IO12 |
| Milieu droite  | 3 | IO13 |
| Extrême droite | 4 | IO14 |

## Initialization

The `LineSensor` class also requires an instance of `Motors` for tracking and calibration methods.

```python
import board
import pwmio
import analogio
import digitalio
from elio import Motors, LineSensor

# Moteurs
AIN1 = pwmio.PWMOut(board.IO36)
AIN2 = pwmio.PWMOut(board.IO38)
BIN1 = pwmio.PWMOut(board.IO35)
BIN2 = pwmio.PWMOut(board.IO37)
vBatt_pin = analogio.AnalogIn(board.BATTERY)
motors = Motors(AIN1, AIN2, BIN1, BIN2, vBatt_pin)

# Capteurs de ligne
lineCmd = digitalio.DigitalInOut(board.IO33)
lineCmd.direction = digitalio.Direction.OUTPUT

lineInput = [
    analogio.AnalogIn(board.IO10),  # Capteur 0 — extrême gauche
    analogio.AnalogIn(board.IO11),  # Capteur 1 — milieu gauche
    analogio.AnalogIn(board.IO12),  # Capteur 2 — centre
    analogio.AnalogIn(board.IO13),  # Capteur 3 — milieu droite
    analogio.AnalogIn(board.IO14),  # Capteur 4 — extrême droite
]

line_sensor = LineSensor(lineInput, lineCmd, motors)
```

## Methods

### `get_line(line_pos)`

Returns the value of the line sensor at the given position.

The measurement is calculated as the **difference between ambient light and reflected light** — a high value indicates the presence of a line.

| Paramètre  | Type | Description                      |
|------------|------|----------------------------------|
| `line_pos` | int  | Index du capteur (0 à 4)         |

```python
valeur = line_sensor.get_line(2)  # Lecture du capteur central
print(valeur)
```

### `follow_line(threshold)`

Make Eliobot follow the line using the 5 sensors. The robot advances if the line is under the central sensor, and corrects its trajectory with the other sensors.

| Paramètre   | Type | Description                              |
|-------------|------|------------------------------------------|
| `threshold` | int  | Valeur seuil de détection de ligne       |

```python
while True:
    line_sensor.follow_line(threshold=5000)
```

:::tip Calibration
Use `calibrate_line_sensors()` to automatically calculate the threshold appropriate for your environment.
:::

### `calibrate_line_sensors()`

Performs automatic calibration of line sensors:

1. Rotates Eliobot in place collecting 30 samples per sensor.
2. Calculates an optimal threshold from the maximum and minimum values.
3. Save the threshold in the `config.json` file.
4. Realigns Eliobot on the line (central sensor).

```python
line_sensor.calibrate_line_sensors()
```

The calculated threshold is saved in `config.json`:

```json
{ "line_threshold": 4823.5 }
```

### `update_sensor_values(all_values)`

Updates the list of values ​​of all sensors. Used internally by `calibrate_line_sensors()`.

### `save_calibration_data(threshold)` *(static method)*

Saves the calibration threshold in `config.json`.

```python
LineSensor.save_calibration_data(5000)
```

### `calculate_median(data)` *(static method)*

Calculates the median of a list of values.

```python
median = LineSensor.calculate_median([100, 200, 150, 300, 250])
```

## Complete example — line tracking with calibration

```python
import board
import pwmio
import analogio
import digitalio
import json
from elio import Motors, LineSensor

AIN1 = pwmio.PWMOut(board.IO36)
AIN2 = pwmio.PWMOut(board.IO38)
BIN1 = pwmio.PWMOut(board.IO35)
BIN2 = pwmio.PWMOut(board.IO37)
vBatt_pin = analogio.AnalogIn(board.BATTERY)
motors = Motors(AIN1, AIN2, BIN1, BIN2, vBatt_pin)

lineCmd = digitalio.DigitalInOut(board.IO33)
lineCmd.direction = digitalio.Direction.OUTPUT

lineInput = [
    analogio.AnalogIn(board.IO10),
    analogio.AnalogIn(board.IO11),
    analogio.AnalogIn(board.IO12),
    analogio.AnalogIn(board.IO13),
    analogio.AnalogIn(board.IO14),
]

line_sensor = LineSensor(lineInput, lineCmd, motors)

# Calibration (à faire une seule fois, pose Eliobot sur la ligne)
line_sensor.calibrate_line_sensors()

# Lecture du seuil sauvegardé
with open("config.json") as f:
    config = json.load(f)
threshold = config["line_threshold"]

# Suivi de ligne
while True:
    line_sensor.follow_line(threshold)
```
