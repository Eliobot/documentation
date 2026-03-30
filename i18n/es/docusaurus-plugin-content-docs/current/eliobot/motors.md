---
last_modified_on: "2024-02-26"
title: "motores"
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

## Usar con Elioblocs

Para usar los motores de Eliobot en Elioblocs, usamos bloques de la categoría `Mouvement` porque estos son los motores que permiten que Eliobot se mueva.


## Usando con Python

Para utilizar motores Eliobot en Python, puede utilizar las funciones disponibles en la biblioteca `elio.py`.

Los motores están conectados a los siguientes pines:

|     | Moteur gauche | Moteur droit |
|-----|---------------|--------------|
| IN1 | IO35          | IO36         |
| IN2 | IO37          | IO38         |

Los motores se pueden controlar de dos formas: digital o PWM.

En funcionamiento digital sólo tendremos la posibilidad de girar el motor en un sentido u otro, y detenerlo.

En PWM también será posible modificar la velocidad del motor y hacer que pase del 0% al 100% de su velocidad máxima.

Para obtener más información sobre pwm: [Wikipedia PWM](https://fr.wikipedia.org/wiki/Modulation_de_largeur_d%27impulsion)

## Ejemplos relacionados

### Ejemplo de elioblocs

>
><img src={require('@site/static/img/eliobot/motors/example-movements-elioblocs.jpg').default} alt="exemple mouvement elioblocs" width="49%" />
>

Aquí usamos los bloques <img src={require('@site/static/img/eliobot/motors/movement-category.jpg').default} style={{ width: '14%', verticalAlign: 'middle' }} alt="Catégorie mouvement" /> para hacer que Eliobot avance si no detecta un obstáculo frente a él, de lo contrario gira a la derecha.

---

### Ejemplo de Python

#### Con la biblioteca `elio.py`

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

En este ejemplo, Eliobot avanza si no detecta ningún obstáculo delante de él, en caso contrario gira a la derecha.

---

#### Sin la biblioteca `elio.py`

```python
import board
import pwmio
import analogio

AIN1 = pwmio.PWMOut(board.IO36)
AIN2 = pwmio.PWMOut(board.IO38)
BIN1 = pwmio.PWMOut(board.IO35)
BIN2 = pwmio.PWMOut(board.IO37)

obstacle_avant = analogio.AnalogIn(board.IO5)

vitesse = 65535  # valeur PWM max (0–65535)

while True:
    if obstacle_avant.value < 10000:  # Obstacle devant
        # Tourner à droite
        AIN1.duty_cycle = vitesse
        AIN2.duty_cycle = 0
        BIN1.duty_cycle = 0
        BIN2.duty_cycle = vitesse
    else:
        # Avancer
        AIN1.duty_cycle = 0
        AIN2.duty_cycle = vitesse
        BIN1.duty_cycle = 0
        BIN2.duty_cycle = vitesse
```

El mismo ejemplo que antes, pero sin utilizar la biblioteca `elio.py`.