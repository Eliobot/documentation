---
last_modified_on: "2024-02-26"
title: "Sensores de línea"
description: "Componente Eliobot - Sensores de línea"
---


<img src={require('@site/static/img/eliobot/senors-line/Eliobot - Line.png').default} alt="Eliobot line sensor" width="49%" />

Los sensores de línea de <br/>Eliobot son sensores infrarrojos que detectan líneas.

## Uso con Elioblocs

Para usar sensores de línea Eliobot en Elioblocs, use bloques de la categoría <img src={require("@site/static/img/eliobot/senors-line/category-follow-line.jpg").default} style={{ width: "14%", verticalAlign: "middle" }} alt="categoría de línea" />.

## Usar con Python

Con Python, debes definir cada sensor de línea como un objeto.
Disponemos de 5 sensores en el sensor de línea, están conectados a los siguientes pines:

|     | Sensor 1 | Sensor 2 | Sensor 3 | Sensor 4 | Sensor 5 |
|-----|-----------|-----------|-----------|-----------|-----------|
| Pino | IO10 | IO11 | IO12 | IO13 | IO14 |

Usamos la luz reflejada para detectar la línea, medimos la luz ambiental y la luz reflejada para calcular el valor.

Los sensores devuelven valores analógicos.

## Ejemplos relacionados

### Ejemplo de Elioblocs

>
> <img src={require("@site/static/img/eliobot/senors-line/example-follow-line-elioblocs.jpg").default} alt="ejemplo seguimiento de línea elioblocs" width="49%" />
>

Aquí, si detectamos una línea debajo del sensor 3 (el sensor del medio), avanzamos.

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
    analogio.AnalogIn(board.IO10), # Sensor 1
    analogio.AnalogIn(board.IO11), # Sensor 2
    analogio.AnalogIn(board.IO12), # Sensor 3
    analogio.AnalogIn(board.IO13), # Sensor 4
    analogio.AnalogIn(board.IO14)  # Sensor 5
]

# Función para obtener el valor de un sensor de línea
def getLine(line_pos):
    ambient = 0
    lit = 0
    value = 0

    # Medición de la luz reflejada
    obstacleCmd.value = True
    time.sleep(0.02)
    lit = lineInput[line_pos].value

    # Medición de la luz ambiente
    obstacleCmd.value = False
    time.sleep(0.02)
    ambient = lineInput[line_pos].value

    # Cálculo del valor
    value = ambient - lit

    return value
    
while True:
    if getLine(2) > 30000: # Si el sensor 3 detecta una línea
        elio.move_forward(100) # Avanzamos
```

Aquí, si detectamos una línea debajo del sensor 3 (el sensor del medio), avanzamos.
El umbral de detección es 30000, es un valor aproximado, se debe calibrar para un funcionamiento óptimo.
