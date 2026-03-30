---
sidebar_position: 4
title: "LineSensor"
description: "Classe LineSensor — suivi de ligne et calibration"
---

# LineSensor

La classe `LineSensor` gère les 5 capteurs infrarouges de ligne d'Eliobot et fournit des fonctions de suivi de ligne et de calibration.

## Positions des capteurs

| Position | Index | Pin  |
|----------|-------|------|
| Extrême gauche | 0 | IO10 |
| Milieu gauche  | 1 | IO11 |
| Centre         | 2 | IO12 |
| Milieu droite  | 3 | IO13 |
| Extrême droite | 4 | IO14 |

## Initialisation

La classe `LineSensor` nécessite également une instance de `Motors` pour les méthodes de suivi et de calibration.

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

## Méthodes

### `get_line(line_pos)`

Retourne la valeur du capteur de ligne à la position donnée.

La mesure est calculée comme la **différence entre la lumière ambiante et la lumière réfléchie** — une valeur élevée indique la présence d'une ligne.

| Paramètre  | Type | Description                      |
|------------|------|----------------------------------|
| `line_pos` | int  | Index du capteur (0 à 4)         |

```python
valeur = line_sensor.get_line(2)  # Lecture du capteur central
print(valeur)
```

### `follow_line(threshold)`

Fait suivre la ligne à Eliobot en utilisant les 5 capteurs. Le robot avance si la ligne est sous le capteur central, et corrige sa trajectoire avec les autres capteurs.

| Paramètre   | Type | Description                              |
|-------------|------|------------------------------------------|
| `threshold` | int  | Valeur seuil de détection de ligne       |

```python
while True:
    line_sensor.follow_line(threshold=5000)
```

:::tip Calibration
Utilise `calibrate_line_sensors()` pour calculer automatiquement le seuil adapté à ton environnement.
:::

### `calibrate_line_sensors()`

Effectue une calibration automatique des capteurs de ligne :

1. Fait pivoter Eliobot sur place en collectant 30 échantillons par capteur.
2. Calcule un seuil optimal à partir des valeurs maximales et minimales.
3. Sauvegarde le seuil dans le fichier `config.json`.
4. Réaligne Eliobot sur la ligne (capteur central).

```python
line_sensor.calibrate_line_sensors()
```

Le seuil calculé est sauvegardé dans `config.json` :

```json
{ "line_threshold": 4823.5 }
```

### `update_sensor_values(all_values)`

Met à jour la liste des valeurs de tous les capteurs. Utilisé en interne par `calibrate_line_sensors()`.

### `save_calibration_data(threshold)` *(méthode statique)*

Sauvegarde le seuil de calibration dans `config.json`.

```python
LineSensor.save_calibration_data(5000)
```

### `calculate_median(data)` *(méthode statique)*

Calcule la médiane d'une liste de valeurs.

```python
median = LineSensor.calculate_median([100, 200, 150, 300, 250])
```

## Exemple complet — suivi de ligne avec calibration

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
