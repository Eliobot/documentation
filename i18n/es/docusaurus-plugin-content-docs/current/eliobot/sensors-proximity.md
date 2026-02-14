---
last_modified_on: "2024-02-26"
title: "Sensores de obstáculos"
description: "Componente Eliobot - Sensores de obstáculos"
---


<img src={require('@site/static/img/eliobot/sensors-proximity/Eliobot - Obstacles.png').default} alt="proximity sensors" width="49%" />

Los sensores de obstáculos de <br/>Eliobot son sensores infrarrojos que detectan obstáculos a una determinada distancia.

## Uso con Elioblocs

Para utilizar los sensores de obstáculos de Eliobot en Elioblocs, utiliza bloques de la categoría <img src={require("@site/static/img/eliobot/sensors-proximity/category-proximity.jpg").default} style={{ width: "14%", verticalAlign: "middle" }} alt="categoría proximidad" />.

## Usar con Python

Con Python, debes definir cada sensor de obstáculos como un objeto.

Disponemos de 4 sensores en el sensor de obstáculos, están conectados a los siguientes pines:

|     | Sensor izquierdo | Sensor delante | Sensor derecho | Sensor detrás |
|-----|----------------|----------------|--------------|------------------|
| Pino | IO4 | IO5 | IO6 | IO7 |

Los sensores devuelven valores analógicos.

## Ejemplos relacionados

### Ejemplo de Elioblocs

>
> <img src={require("@site/static/img/eliobot/sensors-proximity/example-proximity-elioblocs.jpg").default} alt="ejemplo proximidad elioblocs" width="49%" />
>

Aquí, si se detecta un obstáculo delante de Eliobot, gira hacia la derecha, en caso contrario avanza.

---

### Ejemplo de Python

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
    AnalogIn(board.IO4), # Sensor izquierdo
    AnalogIn(board.IO5), # Sensor delantero
    AnalogIn(board.IO6), # Sensor derecho
    AnalogIn(board.IO7)  # Sensor trasero
]

# Función para obtener el valor de un sensor de obstáculos
def getProximity(proximity_pos):
    value = 0

    # Medición de la luz reflejada
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

En este ejemplo, Eliobot avanza si no detecta ningún obstáculo delante de él, en caso contrario gira a la derecha.

Para detectar un obstáculo, nos fijamos en el valor del sensor que tiene delante Eliobot. Si el valor es mayor que 1000, entonces hay un obstáculo frente a Eliobot.
1000 es un valor aproximado y se elige para detectar un obstáculo a cierta distancia. Puedes cambiar este valor para adaptarlo a tus necesidades.
