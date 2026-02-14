---
last_modified_on: "2024-02-26"
title: "Sensori di ostacoli"
description: "Componente Eliobot - Sensori di ostacoli"
---


<img src={require('@site/static/img/eliobot/sensors-proximity/Eliobot - Obstacles.png').default} alt="proximity sensors" width="49%" />

<br/>I sensori di ostacoli di Eliobot sono sensori a infrarossi che rilevano gli ostacoli ad una certa distanza.

## Utilizzare con Eliobloc

Per utilizzare i sensori di ostacolo Eliobot sugli Eliobloc utilizziamo i blocchi della categoria <img src={require("@site/static/img/eliobot/sensors-proximity/category-proximity.jpg").default} style={{ width: "14%", verticalAlign: "middle" }} alt="categoria prossimità" />.

## Da utilizzare con Python

Con Python, devi definire ciascun sensore di ostacolo come un oggetto.

Abbiamo 4 sensori sul sensore ostacoli, sono collegati ai seguenti pin:

|     | Sensore sinistro | Sensore davanti | Sensore destro | Sensore dietro |
|-----|----------------|----------------|---------------|------------------|
| Pino | IO4 | IO5 | IO6 | IO7 |

I sensori restituiscono valori analogici.

## Esempi correlati

### Esempio di Eliobloc

>
> <img src={require("@site/static/img/eliobot/sensors-proximity/example-proximity-elioblocs.jpg").default} alt="exemple proximité elioblocs" width="49%" />
> 

Qui, se viene rilevato un ostacolo davanti a Eliobot, gira a destra, altrimenti avanza.

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

In questo esempio Eliobot avanza se non rileva un ostacolo davanti a sé, altrimenti gira a destra.

Per rilevare un ostacolo guardiamo il valore del sensore davanti a Eliobot. Se il valore è maggiore di 1000 allora c'è un ostacolo davanti a Eliobot.
1000 è un valore approssimativo e scelto per rilevare un ostacolo ad una certa distanza. Puoi modificare questo valore per adattarlo alle tue esigenze.