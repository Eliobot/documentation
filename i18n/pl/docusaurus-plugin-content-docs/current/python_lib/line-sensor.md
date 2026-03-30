---
sidebar_position: 4
title: "Czujnik Liniowy"
description: "Klasa LineSensor — śledzenie i kalibracja linii"
---

# Czujnik Liniowy

Klasa `LineSensor` zarządza 5 czujnikami liniowymi na podczerwień Eliobota i zapewnia funkcje śledzenia linii i kalibracji.

## Pozycje czujników

| Position | Index | Pin  |
|----------|-------|------|
| Extrême gauche | 0 | IO10 |
| Milieu gauche  | 1 | IO11 |
| Centre         | 2 | IO12 |
| Milieu droite  | 3 | IO13 |
| Extrême droite | 4 | IO14 |

## Inicjalizacja

Klasa `LineSensor` wymaga również instancji `Motors` do metod śledzenia i kalibracji.

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

## Metody

### `get_line(line_pos)`

Zwraca wartość czujnika liniowego w podanej pozycji.

Pomiar jest obliczany jako **różnica między światłem otoczenia a światłem odbitym** — wysoka wartość wskazuje na obecność linii.

| Paramètre  | Type | Description                      |
|------------|------|----------------------------------|
| `line_pos` | int  | Index du capteur (0 à 4)         |

```python
valeur = line_sensor.get_line(2)  # Lecture du capteur central
print(valeur)
```

### `follow_line(threshold)`

Spraw, aby Eliobot podążał za linią za pomocą 5 czujników. Robot postępuje, jeśli lina znajduje się pod czujnikiem centralnym, a pozostałymi czujnikami koryguje swoją trajektorię.

| Paramètre   | Type | Description                              |
|-------------|------|------------------------------------------|
| `threshold` | int  | Valeur seuil de détection de ligne       |

```python
while True:
    line_sensor.follow_line(threshold=5000)
```

:::tip Kalibracja
Użyj `calibrate_line_sensors()`, aby automatycznie obliczyć próg odpowiedni dla Twojego środowiska.
:::

### `calibrate_line_sensors()`

Wykonuje automatyczną kalibrację czujników liniowych:

1. Obraca Eliobota w miejscu, zbierając 30 próbek na czujnik.
2. Oblicza optymalny próg z wartości maksymalnej i minimalnej.
3. Zapisz próg w pliku `config.json`.
4. Ustawia Eliobota na linii (czujnik centralny).

```python
line_sensor.calibrate_line_sensors()
```

Obliczony próg jest zapisywany w `config.json`:

```json
{ "line_threshold": 4823.5 }
```

### `update_sensor_values(all_values)`

Aktualizuje listę wartości wszystkich czujników. Używany wewnętrznie przez `calibrate_line_sensors()`.

### `save_calibration_data(threshold)` *(metoda statyczna)*

Zapisuje próg kalibracji w `config.json`.

```python
LineSensor.save_calibration_data(5000)
```

### `calculate_median(data)` *(metoda statyczna)*

Oblicza medianę listy wartości.

```python
median = LineSensor.calculate_median([100, 200, 150, 300, 250])
```

## Kompletny przykład — śledzenie linii z kalibracją

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
