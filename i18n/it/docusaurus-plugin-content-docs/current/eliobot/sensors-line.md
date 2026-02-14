---
last_modified_on: "2024-02-26"
title: "Sensori di linea"
description: "Componente Eliobot - Sensori di linea"
---


<img src={require('@site/static/img/eliobot/senors-line/Eliobot - Line.png').default} alt="Eliobot line sensor" width="49%" />

<br/>I sensori di linea di Eliobot sono sensori a infrarossi che rilevano le linee.

## Utilizzare con Eliobloc

Per utilizzare i sensori di linea Eliobot sugli Eliobloc utilizziamo i blocchi della categoria <img src={require("@site/static/img/eliobot/senors-line/category-follow-line.jpg").default} style={{ width: "14%", verticalAlign: "middle" }} alt="categoria linea" />.

## Da utilizzare con Python

Con Python, devi definire ciascun sensore di linea come un oggetto.
Abbiamo 5 sensori sul sensore di linea, sono collegati ai seguenti pin:

|     | Sensore 1 | Sensore 2 | Sensore 3 | Sensore 4 | Sensore 5 |
|-----|-----------|-----------|-----------|-----------|-----------|
| Pino | IO10 | IO11 | IO12 | IO13 | IO14 |

Usiamo la luce riflessa per rilevare la linea, misuriamo la luce ambientale e la luce riflessa per calcolare il valore.

I sensori restituiscono valori analogici.

## Esempi correlati

### Esempio di Eliobloc

>
> <img src={require("@site/static/img/eliobot/senors-line/example-follow-line-elioblocs.jpg").default} alt="exemple suivi de ligne elioblocs" width="49%" />
>   

Qui se rileviamo una linea sotto il sensore 3 (il sensore centrale), andiamo avanti.

---

### Esempio Python

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

Qui se rileviamo una linea sotto il sensore 3 (il sensore centrale), andiamo avanti.
La soglia di rilevamento è 30000, è un valore approssimativo, deve essere calibrato per un funzionamento ottimale.