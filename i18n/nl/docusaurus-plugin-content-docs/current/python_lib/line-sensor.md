---
sidebar_position: 4
title: "LijnSensor"
description: "LineSensor-klasse — lijntracering en kalibratie"
---

# LijnSensor

De `LineSensor` klasse beheert de 5 infrarood lijnsensoren van Eliobot en biedt lijntracerings- en kalibratiefuncties.

## Sensorposities

| Position | Index | Pin  |
|----------|-------|------|
| Extrême gauche | 0 | IO10 |
| Milieu gauche  | 1 | IO11 |
| Centre         | 2 | IO12 |
| Milieu droite  | 3 | IO13 |
| Extrême droite | 4 | IO14 |

## Initialisatie

De klasse `LineSensor` vereist ook een exemplaar van `Motors` voor tracking- en kalibratiemethoden.

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

Retourneert de waarde van de lijnsensor op de opgegeven positie.

De meting wordt berekend als het **verschil tussen omgevingslicht en gereflecteerd licht**; een hoge waarde duidt op de aanwezigheid van een lijn.

| Paramètre  | Type | Description                      |
|------------|------|----------------------------------|
| `line_pos` | int  | Index du capteur (0 à 4)         |

```python
valeur = line_sensor.get_line(2)  # Lecture du capteur central
print(valeur)
```

### `follow_line(threshold)`

Laat Eliobot de lijn volgen met behulp van de 5 sensoren. De robot gaat vooruit als de lijn zich onder de centrale sensor bevindt, en corrigeert zijn traject met de andere sensoren.

| Paramètre   | Type | Description                              |
|-------------|------|------------------------------------------|
| `threshold` | int  | Valeur seuil de détection de ligne       |

```python
while True:
    line_sensor.follow_line(threshold=5000)
```

:::tip Kalibratie
Gebruik `calibrate_line_sensors()` om automatisch de drempel te berekenen die geschikt is voor uw omgeving.
:::

### `calibrate_line_sensors()`

Voert automatische kalibratie van lijnsensoren uit:

1. Draait Eliobot op zijn plaats en verzamelt 30 monsters per sensor.
2. Berekent een optimale drempelwaarde op basis van de maximale en minimale waarden.
3. Sla de drempel op in het bestand `config.json`.
4. Lijnt Eliobot opnieuw uit op de lijn (centrale sensor).

```python
line_sensor.calibrate_line_sensors()
```

De berekende drempel wordt opgeslagen in `config.json`:

```json
{ "line_threshold": 4823.5 }
```

### `update_sensor_values(all_values)`

Werkt de lijst met waarden van alle sensoren bij. Intern gebruikt door `calibrate_line_sensors()`.

### `save_calibration_data(threshold)` *(statische methode)*

Slaat de kalibratiedrempel op in `config.json`.

```python
LineSensor.save_calibration_data(5000)
```

### `calculate_median(data)` *(statische methode)*

Berekent de mediaan van een lijst met waarden.

```python
median = LineSensor.calculate_median([100, 200, 150, 300, 250])
```

## Compleet voorbeeld – lijntracering met kalibratie

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
