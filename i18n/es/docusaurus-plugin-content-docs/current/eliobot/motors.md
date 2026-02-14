---
last_modified_on: "2024-02-26"
title: "Motores"
description: "Componente Eliobot - Motores"
---


<p align="middle">
    <img src={require('@site/static/img/eliobot/motors/Eliobot - Motors Top.png').default} alt="Eliobot motors top" width="49%" />
    <img src={require('@site/static/img/blank.png').default} width="2%"/>
    <img src={require('@site/static/img/eliobot/motors/Eliobot - Motors Bottom.png').default} alt="Eliobot motors bottom" width="49%" />
</p>

:::note
Los motores de Eliobot funcionan directamente con la batería, por lo que solo funcionan cuando el botón de encendido está en la posición `ON`.
:::

## Uso con Elioblocs

Para usar los motores de Eliobot en Elioblocs, usamos bloques de la categoría `Movimientos`, ya que son los que permiten que Eliobot se desplace.


## Usar con Python

Para utilizar motores Eliobot en Python, puede utilizar las funciones disponibles en la biblioteca `elio.py`.

Los motores están conectados a los siguientes pines:

|     | Motor izquierdo | Motor derecho |
|-----|---------------|---------|
| EN1 | IO35 | IO36 |
| IN2 | IO37 | IO38 |

Los motores se pueden controlar de dos formas: digital o PWM.

En funcionamiento digital sólo tendremos la posibilidad de girar el motor en un sentido u otro, y detenerlo.

En PWM también será posible modificar la velocidad del motor y hacer que pase del 0% al 100% de su velocidad máxima.

Para obtener más información sobre pwm: [Wikipedia PWM](https://fr.wikipedia.org/wiki/Modulation_de_largeur_d%27impulsion)

## Ejemplos relacionados

### Ejemplo de Elioblocs

>
><img src={require('@site/static/img/eliobot/motors/example-movements-elioblocs.jpg').default} alt="ejemplo movimiento elioblocs" width="49%" />
>

Aquí usamos los bloques <img src={require('@site/static/img/eliobot/motors/movement-category.jpg').default} style={{ width: '14%', verticalAlign: 'middle' }} alt="categoría movimiento" /> para hacer que Eliobot avance si no detecta un obstáculo frente a él; de lo contrario gira a la derecha.

---

### Ejemplo de Python

#### Con la librería `elio.py`

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

lineInput = [analogio.AnalogIn(pin) for pin in
               (board.IO10, board.IO11, board.IO12, board.IO13, board.IO14)]

AIN1 = pwmio.PWMOut(board.IO36)
AIN2 = pwmio.PWMOut(board.IO38)
BIN1 = pwmio.PWMOut(board.IO35)
BIN2 = pwmio.PWMOut(board.IO37)

buzzer = pwmio.PWMOut(board.IO17, variable_frequency=True)

elio = Eliobot(AIN1, AIN2, BIN1, BIN2, vBatt_pin, obstacleInput, buzzer, lineInput, lineCmd)

speed = 100


while True:
    if elio.get_obstacle(1):
        elio.turn_right(speed)

    else:
        elio.move_forward(speed)
```

En este ejemplo, Eliobot avanza si no detecta ningún obstáculo delante de él, en caso contrario gira a la derecha.

#### Sin la librería `elio.py`

```python
import elio
import time
import board
import pwmio

# Configuración de pines
moteurDroit1 = pwmio.PWMOut(board.IO36)
moteurDroit2 = pwmio.PWMOut(board.IO38)
moteurGauche1 = pwmio.PWMOut(board.IO35)
moteurGauche2 = pwmio.PWMOut(board.IO37)

# Velocidad de los motores
vitesse = 65535 # velocidades entre 0 y 65535

while True:
    if elio.getObstacle(1):
        moteurDroit1.duty_cycle = 0
        moteurDroit2.duty_cycle = vitesse
        moteurGauche1.duty_cycle = vitesse
        moteurGauche2.duty_cycle = 0

    else:
        moteurDroit1.duty_cycle = vitesse
        moteurDroit2.duty_cycle = 0
        moteurGauche1.duty_cycle = 0
        moteurGauche2.duty_cycle = vitesse
```
El mismo ejemplo que antes, pero sin usar la biblioteca `elio.py`.
