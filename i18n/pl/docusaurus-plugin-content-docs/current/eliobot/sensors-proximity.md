---
last_modified_on: "2024-02-26"
title: "Czujniki przeszkód"
description: "Komponent Eliobota - Czujniki przeszkód"
---


<img src={require('@site/static/img/eliobot/sensors-proximity/Eliobot - Obstacles.png').default} alt="proximity sensors" width="49%" />

<br/>Czujniki przeszkód Eliobota to czujniki podczerwieni, które wykrywają przeszkody w określonej odległości.

## Używaj z Elioblocami

Do wykorzystania czujników przeszkód Eliobot na Elioblocach wykorzystujemy klocki z kategorii <img src={require("@site/static/img/eliobot/sensors-proximity/category-proximity.jpg").default} style={{ width: "14%", verticalAlign: "middle" }} alt="kategoria zbliżeniowa" />.

## Używaj z Pythonem

W Pythonie każdy czujnik przeszkód należy zdefiniować jako obiekt.

Na czujniku przeszkód mamy 4 czujniki, podłączamy je do pinów:

|     | Lewy czujnik | Czujnik z przodu | Prawy czujnik | Czujnik z tyłu |
|-----|----------------|----------------|---------------|------------------|
| Sosna | IO4 | IO5 | IO6 | IO7 |

Czujniki zwracają wartości analogowe.

## Powiązane przykłady

### Przykład Elioblocs

>
> <img src={require("@site/static/img/eliobot/sensors-proximity/example-proximity-elioblocs.jpg").default} alt="exemple proximité elioblocs" width="49%" />
> 

Tutaj, jeśli przed Eliobotem zostanie wykryta przeszkoda, skręca on w prawo, w przeciwnym razie porusza się do przodu.

---

### Przykład Pythona

```python
from elio import Eliobot
import board
import time
import digitalio
import analogio
import pwmio

vBatt_pin = analogio.AnalogIn(board.BATTERY)

obstacleInput = None 

lineCmd = digitalio.DigitalInOut(board.IO33)
lineCmd.direction = digitalio.Direction.OUTPUT

lineInput = [analogio.AnalogIn(pin) for pin in
               (board.IO10, board.IO11, board.IO12, board.IO13, board.IO14)]

AIN1 = pwmio.PWMOut(board.IO36)
AIN2 = pwmio.PWMOut(board.IO38)
BIN1 = pwmio.PWMOut(board.IO35)
BIN2 = pwmio.PWMOut(board.IO37)

buzzer = pwmio.PWMOut(board.IO17, variable_frequency=True)

elio = Eliobot(AIN1, AIN2, BIN1, BIN2, vBatt_pin, obstacleInput, buzzer, lineInput, lineCmd)

proximity_sensor = [
    AnalogIn(board.IO4), # Capteur gauche
    AnalogIn(board.IO5), # Capteur devant
    AnalogIn(board.IO6), # Capteur droit
    AnalogIn(board.IO7)  # Capteur derrière
]

# Fonction pour récupérer la valeur d'un capteur d'obstacle
def getProximity(proximity_pos):
    value = 0

    # Mesure de la lumière réfléchie
    value = proximity_sensor[proximity_pos].value

    if value > 1000:
        return True
    else:
        return False

speed = 100

while True:
    if getProximity(1):
        elio.turn_right(speed)

    else:
        elio.move_forward(speed)
```

W tym przykładzie Eliobot porusza się do przodu, jeśli nie wykryje przed sobą przeszkody, w przeciwnym razie skręca w prawo.

Aby wykryć przeszkodę, patrzymy na wartość czujnika przed Eliobotem. Jeśli wartość jest większa niż 1000, oznacza to, że przed Eliobotem znajduje się przeszkoda.
1000 to wartość przybliżona, wybrana do wykrycia przeszkody w określonej odległości. Możesz zmienić tę wartość, aby dostosować ją do swoich potrzeb.