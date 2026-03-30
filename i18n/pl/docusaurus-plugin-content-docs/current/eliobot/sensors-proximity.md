---
last_modified_on: "2024-02-26"
title: "Czujniki przeszkód"
description: "Komponent Eliobota - Czujniki przeszkód"
---


<img src={require('@site/static/img/eliobot/sensors-proximity/Eliobot - Obstacles.png').default} alt="proximity sensors" width="49%" />

<br/>Les capteurs d'obstacles d'Eliobot sont des capteurs infrarouges qui permettent de détecter les obstacles à une certaine distance.

## Używaj z Elioblocami

Do wykorzystania czujników przeszkód Eliobot na Elioblocach wykorzystujemy klocki z kategorii <img src={require("@site/static/img/eliobot/sensors-proximity/category-proximity.jpg").default} style={{ width: "14%", verticalAlign: "middle" }} alt="catégorie proximité" />.

## Używanie z Pythonem

W Pythonie każdy czujnik przeszkód należy zdefiniować jako obiekt.

Na czujniku przeszkód mamy 4 czujniki, podłączamy je do pinów:

|     | Capteur gauche | Capteur devant | Capteur droit | Capteur derrière |
|-----|----------------|----------------|---------------|------------------|
| Pin | IO4            | IO5            | IO6           | IO7              |

Czujniki zwracają wartości analogowe.

## Powiązane przykłady

### Przykład eliobbloków

>
> <img src={require("@site/static/img/eliobot/sensors-proximity/example-proximity-elioblocs.jpg").default} alt="exemple proximité elioblocs" width="49%" />
> 

Tutaj, jeśli przed Eliobotem zostanie wykryta przeszkoda, skręca on w prawo, w przeciwnym razie porusza się do przodu.

---

### Przykład Pythona

#### Z biblioteką `elio.py`

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

W tym przykładzie Eliobot porusza się do przodu, jeśli nie wykryje przed sobą przeszkody, w przeciwnym razie skręca w prawo.

---

#### Bez biblioteki `elio.py`

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

Detekcja jest wyzwalana, gdy wartość czujnika spadnie poniżej `10000`. Wartość tę można dostosować w zależności od żądanej odległości wykrywania.