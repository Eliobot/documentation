---
last_modified_on: "2024-02-26"
title: "Senzori de obstacole"
description: "Componenta Eliobot - Senzori de obstacole"
---


<img src={require('@site/static/img/eliobot/sensors-proximity/Eliobot - Obstacles.png').default} alt="proximity sensors" width="49%" />

<br/>Senzorii de obstacole de la Eliobot sunt senzori cu infraroșu care detectează obstacole la o anumită distanță.

## Utilizați cu Elioblocs

Pentru a folosi senzorii de obstacole Eliobot pe Elioblocs, folosim blocuri din categoria <img src={require("@site/static/img/eliobot/sensors-proximity/category-proximity.jpg").default} style={{ width: "14%", verticalAlign: "middle" }} alt="categorie proximitate" />.

## Utilizați cu Python

Cu python, trebuie să definiți fiecare senzor de obstacol ca un obiect.

Avem 4 senzori pe senzorul de obstacol, aceștia sunt conectați la următorii pini:

|     | Senzor stânga | Senzor în față | Senzor dreapta | Senzor din spate |
|-----|----------------|----------------|---------------|------------------|
| Pin | IO4 | IO5 | IO6 | IO7 |

Senzorii returnează valori analogice.

## Exemple înrudite

### Exemplu Elioblocs

>
> <img src={require("@site/static/img/eliobot/sensors-proximity/example-proximity-elioblocs.jpg").default} alt="exemple proximité elioblocs" width="49%" />
> 

Aici, dacă în fața lui Eliobot este detectat un obstacol, acesta se întoarce la dreapta, altfel se deplasează înainte.

---

### Exemplu Python

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

În acest exemplu, Eliobot înaintează dacă nu detectează un obstacol în fața lui, altfel face dreapta.

Pentru a detecta un obstacol, ne uităm la valoarea senzorului din fața lui Eliobot. Dacă valoarea este mai mare de 1000, atunci există un obstacol în fața lui Eliobot.
1000 este o valoare aproximativă și aleasă pentru a detecta un obstacol la o anumită distanță. Puteți modifica această valoare pentru a o adapta nevoilor dumneavoastră.