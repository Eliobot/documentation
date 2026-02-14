---
last_modified_on: "2024-02-26"
title: "Czujniki liniowe"
description: "Komponent Eliobota - Czujniki liniowe"
---


<img src={require('@site/static/img/eliobot/senors-line/Eliobot - Line.png').default} alt="Eliobot line sensor" width="49%" />

<br/>Czujniki linii Eliobota to czujniki podczerwieni wykrywające linie.

## Używaj z Elioblocami

Do wykorzystania czujników liniowych Eliobot na Elioblocach wykorzystujemy bloczki z kategorii <img src={require("@site/static/img/eliobot/senors-line/category-follow-line.jpg").default} style={{ width: "14%", verticalAlign: "middle" }} alt="kategoria linii" />.

## Używaj z Pythonem

W Pythonie każdy czujnik linii należy zdefiniować jako obiekt.
Na czujniku liniowym mamy 5 czujników, są one podłączone do następujących pinów:

|     | Czujnik 1 | Czujnik 2 | Czujnik 3 | Czujnik 4 | Czujnik 5 |
|-----|-----------|-----------|-----------|-----------|-----------|
| Sosna | IO10 | IO11 | IO12 | IO13 | IO14 |

Do wykrycia linii wykorzystujemy światło odbite, mierzymy światło otoczenia, a światło odbite – do obliczenia wartości.

Czujniki zwracają wartości analogowe.

## Powiązane przykłady

### Przykład Elioblocs

>
> <img src={require("@site/static/img/eliobot/senors-line/example-follow-line-elioblocs.jpg").default} alt="exemple suivi de ligne elioblocs" width="49%" />
>   

Tutaj, jeśli wykryjemy linię pod czujnikiem 3 (środkowy czujnik), ruszamy do przodu.

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

obstacleInput = [analogio.AnalogIn(pin) for pin in
                 (board.IO4, board.IO5, board.IO6, board.IO7)]

lineCmd = digitalio.DigitalInOut(board.IO33)
lineCmd.direction = digitalio.Direction.OUTPUT

lineInput = None

AIN1 = pwmio.PWMOut(board.IO36)
AIN2 = pwmio.PWMOut(board.IO38)
BIN1 = pwmio.PWMOut(board.IO35)
BIN2 = pwmio.PWMOut(board.IO37)

buzzer = pwmio.PWMOut(board.IO17, variable_frequency=True)

elio = Eliobot(AIN1, AIN2, BIN1, BIN2, vBatt_pin, obstacleInput, buzzer, lineInput, lineCmd)

line_sensor = [
    analogio.AnalogIn(board.IO10), # Capteur 1
    analogio.AnalogIn(board.IO11), # Capteur 2
    analogio.AnalogIn(board.IO12), # Capteur 3
    analogio.AnalogIn(board.IO13), # Capteur 4
    analogio.AnalogIn(board.IO14)  # Capteur 5
]

# Fonction pour récupérer la valeur d'un capteur de ligne
def getLine(line_pos):
    ambient = 0
    lit = 0
    value = 0

    # Mesure de la lumière réfléchie
    obstacleCmd.value = True
    time.sleep(0.02)
    lit = lineInput[line_pos].value

    # Mesure de la lumière ambiante
    obstacleCmd.value = False
    time.sleep(0.02)
    ambient = lineInput[line_pos].value

    # Calcul de la valeur
    value = ambient - lit

    return value
    
while True:
    if getLine(2) > 30000: # Si le capteur 3 détecte une ligne
        elio.move_forward(100) # On avance
```

Tutaj, jeśli wykryjemy linię pod czujnikiem 3 (środkowy czujnik), ruszamy do przodu.
Próg detekcji wynosi 30000, jest to wartość przybliżona, należy ją skalibrować dla optymalnej pracy.