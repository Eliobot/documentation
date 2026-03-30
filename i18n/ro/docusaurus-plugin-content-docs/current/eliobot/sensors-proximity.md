---
last_modified_on: "2024-02-26"
title: "Senzori de obstacole"
description: "Componenta Eliobot - Senzori de obstacole"
---


<img src={require('@site/static/img/eliobot/sensors-proximity/Eliobot - Obstacles.png').default} alt="proximity sensors" width="49%" />

<br/>Les capteurs d'obstacles d'Eliobot sont des capteurs infrarouges qui permettent de détecter les obstacles à une certaine distance.

## Utilizați cu Elioblocs

Pentru a folosi senzorii de obstacole Eliobot pe Elioblocs, folosim blocuri din categoria <img src={require("@site/static/img/eliobot/sensors-proximity/category-proximity.jpg").default} style={{ width: "14%", verticalAlign: "middle" }} alt="catégorie proximité" />.

## Folosind cu Python

Cu python, trebuie să definiți fiecare senzor de obstacol ca un obiect.

Avem 4 senzori pe senzorul de obstacol, aceștia sunt conectați la următorii pini:

|     | Capteur gauche | Capteur devant | Capteur droit | Capteur derrière |
|-----|----------------|----------------|---------------|------------------|
| Pin | IO4            | IO5            | IO6           | IO7              |

Senzorii returnează valori analogice.

## Exemple înrudite

### Exemplu Elioblocs

>
> <img src={require("@site/static/img/eliobot/sensors-proximity/example-proximity-elioblocs.jpg").default} alt="exemple proximité elioblocs" width="49%" />
> 

Aici, dacă în fața lui Eliobot este detectat un obstacol, acesta se întoarce la dreapta, altfel se deplasează înainte.

---

### Exemplu Python

#### Cu biblioteca `elio.py`

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

În acest exemplu, Eliobot înaintează dacă nu detectează un obstacol în fața lui, altfel face dreapta.

---

#### Fără bibliotecă `elio.py`

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

Detectarea este declanșată atunci când valoarea senzorului scade sub `10000`. Această valoare poate fi ajustată în funcție de distanța de detectare dorită.