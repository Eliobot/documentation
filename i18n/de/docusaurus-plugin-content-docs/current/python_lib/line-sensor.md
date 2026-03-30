---
sidebar_position: 4
title: "Liniensensor"
description: "LineSensor-Klasse – Linienverfolgung und -kalibrierung"
---

# Liniensensor

Die `LineSensor`-Klasse verwaltet die 5 Infrarot-Liniensensoren von Eliobot und bietet Linienverfolgungs- und Kalibrierungsfunktionen.

## Sensorpositionen

| Position | Index | Pin  |
|----------|-------|------|
| Extrême gauche | 0 | IO10 |
| Milieu gauche  | 1 | IO11 |
| Centre         | 2 | IO12 |
| Milieu droite  | 3 | IO13 |
| Extrême droite | 4 | IO14 |

## Initialisierung

Die Klasse `LineSensor` erfordert außerdem eine Instanz von `Motors` für Verfolgungs- und Kalibrierungsmethoden.

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

## Methoden

### `get_line(line_pos)`

Gibt den Wert des Zeilensensors an der angegebenen Position zurück.

Der Messwert wird als **Differenz zwischen Umgebungslicht und reflektiertem Licht** berechnet – ein hoher Wert weist auf das Vorhandensein einer Linie hin.

| Paramètre  | Type | Description                      |
|------------|------|----------------------------------|
| `line_pos` | int  | Index du capteur (0 à 4)         |

```python
valeur = line_sensor.get_line(2)  # Lecture du capteur central
print(valeur)
```

### `follow_line(threshold)`

Lassen Sie Eliobot mithilfe der 5 Sensoren der Linie folgen. Der Roboter rückt vor, wenn sich die Linie unter dem zentralen Sensor befindet, und korrigiert seine Flugbahn mit den anderen Sensoren.

| Paramètre   | Type | Description                              |
|-------------|------|------------------------------------------|
| `threshold` | int  | Valeur seuil de détection de ligne       |

```python
while True:
    line_sensor.follow_line(threshold=5000)
```

:::tip Kalibrierung
Verwenden Sie `calibrate_line_sensors()`, um automatisch den für Ihre Umgebung geeigneten Schwellenwert zu berechnen.
:::

### `calibrate_line_sensors()`

Führt eine automatische Kalibrierung von Zeilensensoren durch:

1. Der Eliobot wird an Ort und Stelle gedreht und sammelt 30 Proben pro Sensor.
2. Berechnet einen optimalen Schwellenwert aus den Maximal- und Minimalwerten.
3. Speichern Sie den Schwellenwert in der Datei `config.json`.
4. Richtet Eliobot auf der Linie neu aus (zentraler Sensor).

```python
line_sensor.calibrate_line_sensors()
```

Der berechnete Schwellenwert wird in `config.json` gespeichert:

```json
{ "line_threshold": 4823.5 }
```

### `update_sensor_values(all_values)`

Aktualisiert die Werteliste aller Sensoren. Intern verwendet von `calibrate_line_sensors()`.

### `save_calibration_data(threshold)` *(statische Methode)*

Speichert den Kalibrierungsschwellenwert in `config.json`.

```python
LineSensor.save_calibration_data(5000)
```

### `calculate_median(data)` *(statische Methode)*

Berechnet den Median einer Werteliste.

```python
median = LineSensor.calculate_median([100, 200, 150, 300, 250])
```

## Vollständiges Beispiel – Linienverfolgung mit Kalibrierung

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
