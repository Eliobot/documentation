---
last_modified_on: "2024-02-26"
title: "Sensori di ostacoli"
description: "Componente Eliobot - Sensori di ostacoli"
---


<img src={require('@site/static/img/eliobot/sensors-proximity/Eliobot - Obstacles.png').default} alt="proximity sensors" width="49%" />

<br/>Les capteurs d'obstacles d'Eliobot sont des capteurs infrarouges qui permettent de détecter les obstacles à une certaine distance.

## Utilizzare con Eliobloc

Per utilizzare i sensori di ostacolo Eliobot sugli Eliobloc utilizziamo i blocchi della categoria <img src={require("@site/static/img/eliobot/sensors-proximity/category-proximity.jpg").default} style={{ width: "14%", verticalAlign: "middle" }} alt="catégorie proximité" />.

## Utilizzo con Python

Con Python, devi definire ciascun sensore di ostacolo come un oggetto.

Abbiamo 4 sensori sul sensore ostacoli, sono collegati ai seguenti pin:

|     | Capteur gauche | Capteur devant | Capteur droit | Capteur derrière |
|-----|----------------|----------------|---------------|------------------|
| Pin | IO4            | IO5            | IO6           | IO7              |

I sensori restituiscono valori analogici.

## Esempi correlati

### Esempio di Eliobloc

>
> <img src={require("@site/static/img/eliobot/sensors-proximity/example-proximity-elioblocs.jpg").default} alt="exemple proximité elioblocs" width="49%" />
> 

Qui, se viene rilevato un ostacolo davanti a Eliobot, gira a destra, altrimenti avanza.

---

### Esempio di Python

#### Con la libreria `elio.py`

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

In questo esempio Eliobot avanza se non rileva un ostacolo davanti a sé, altrimenti gira a destra.

---

#### Senza la libreria `elio.py`

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

Il rilevamento viene attivato quando il valore del sensore scende al di sotto di `10000`. Questo valore può essere regolato in base alla distanza di rilevamento desiderata.