---
sidebar_position: 4
title: "Sensor de línea"
description: "Clase LineSensor: seguimiento y calibración de líneas"
---

# Sensor de línea

La clase `LineSensor` gestiona los 5 sensores de línea infrarrojos de Eliobot y proporciona funciones de calibración y seguimiento de línea.

## Posiciones de los sensores

| Position | Index | Pin  |
|----------|-------|------|
| Extrême gauche | 0 | IO10 |
| Milieu gauche  | 1 | IO11 |
| Centre         | 2 | IO12 |
| Milieu droite  | 3 | IO13 |
| Extrême droite | 4 | IO14 |

## Inicialización

La clase `LineSensor` también requiere una instancia de `Motors` para los métodos de seguimiento y calibración.

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

## Métodos

### `get_line(line_pos)`

Devuelve el valor del sensor de línea en la posición dada.

La medición se calcula como la **diferencia entre la luz ambiental y la luz reflejada**; un valor alto indica la presencia de una línea.

| Paramètre  | Type | Description                      |
|------------|------|----------------------------------|
| `line_pos` | int  | Index du capteur (0 à 4)         |

```python
valeur = line_sensor.get_line(2)  # Lecture du capteur central
print(valeur)
```

### `follow_line(threshold)`

Haz que Eliobot siga la línea usando los 5 sensores. El robot avanza si la línea está debajo del sensor central, y corrige su trayectoria con los demás sensores.

| Paramètre   | Type | Description                              |
|-------------|------|------------------------------------------|
| `threshold` | int  | Valeur seuil de détection de ligne       |

```python
while True:
    line_sensor.follow_line(threshold=5000)
```

:::tip Calibración
Utilice `calibrate_line_sensors()` para calcular automáticamente el umbral apropiado para su entorno.
:::

### `calibrate_line_sensors()`

Realiza la calibración automática de sensores de línea:

1. Gira Eliobot en su lugar y recolecta 30 muestras por sensor.
2. Calcula un umbral óptimo a partir de los valores máximo y mínimo.
3. Guarde el umbral en el archivo `config.json`.
4. Realinea Eliobot en la línea (sensor central).

```python
line_sensor.calibrate_line_sensors()
```

El umbral calculado se guarda en `config.json`:

```json
{ "line_threshold": 4823.5 }
```

### `update_sensor_values(all_values)`

Actualiza la lista de valores de todos los sensores. Usado internamente por `calibrate_line_sensors()`.

### `save_calibration_data(threshold)` *(método estático)*

Guarda el umbral de calibración en `config.json`.

```python
LineSensor.save_calibration_data(5000)
```

### `calculate_median(data)` *(método estático)*

Calcula la mediana de una lista de valores.

```python
median = LineSensor.calculate_median([100, 200, 150, 300, 250])
```

## Ejemplo completo: seguimiento de líneas con calibración

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
