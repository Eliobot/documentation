---
sidebar_position: 4
title: "Sensore di linea"
description: "Classe LineSensor: tracciamento e calibrazione della linea"
---

# Sensore di linea

La classe `LineSensor` gestisce i 5 sensori di linea a infrarossi di Eliobot e fornisce funzioni di tracciamento e calibrazione della linea.

## Posizioni dei sensori

| Position | Index | Pin  |
|----------|-------|------|
| Extrême gauche | 0 | IO10 |
| Milieu gauche  | 1 | IO11 |
| Centre         | 2 | IO12 |
| Milieu droite  | 3 | IO13 |
| Extrême droite | 4 | IO14 |

## Inizializzazione

La classe `LineSensor` richiede anche un'istanza di `Motors` per i metodi di tracciamento e calibrazione.

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

## Metodi

### `get_line(line_pos)`

Restituisce il valore del sensore di linea nella posizione specificata.

La misurazione viene calcolata come **differenza tra luce ambientale e luce riflessa**: un valore elevato indica la presenza di una linea.

| Paramètre  | Type | Description                      |
|------------|------|----------------------------------|
| `line_pos` | int  | Index du capteur (0 à 4)         |

```python
valeur = line_sensor.get_line(2)  # Lecture du capteur central
print(valeur)
```

### `follow_line(threshold)`

Fai in modo che Eliobot segua la linea utilizzando i 5 sensori. Il robot avanza se la linea è sotto il sensore centrale, e corregge la sua traiettoria con gli altri sensori.

| Paramètre   | Type | Description                              |
|-------------|------|------------------------------------------|
| `threshold` | int  | Valeur seuil de détection de ligne       |

```python
while True:
    line_sensor.follow_line(threshold=5000)
```

:::tip Calibrazione
Utilizza `calibrate_line_sensors()` per calcolare automaticamente la soglia appropriata per il tuo ambiente.
:::

### `calibrate_line_sensors()`

Esegue la calibrazione automatica dei sensori di linea:

1. Ruota Eliobot sul posto raccogliendo 30 campioni per sensore.
2. Calcola una soglia ottimale dai valori massimo e minimo.
3. Salvare la soglia nel file `config.json`.
4. Riallinea Eliobot sulla linea (sensore centrale).

```python
line_sensor.calibrate_line_sensors()
```

La soglia calcolata viene salvata in `config.json`:

```json
{ "line_threshold": 4823.5 }
```

### `update_sensor_values(all_values)`

Aggiorna l'elenco dei valori di tutti i sensori. Utilizzato internamente da `calibrate_line_sensors()`.

### `save_calibration_data(threshold)` *(metodo statico)*

Salva la soglia di calibrazione in `config.json`.

```python
LineSensor.save_calibration_data(5000)
```

### `calculate_median(data)` *(metodo statico)*

Calcola la mediana di un elenco di valori.

```python
median = LineSensor.calculate_median([100, 200, 150, 300, 250])
```

## Esempio completo: tracciamento della linea con calibrazione

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
