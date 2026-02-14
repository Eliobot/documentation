---
last_modified_on: "2024-02-26"
title: "Obstacle sensors"
description: "Eliobot component - Obstacle sensors"
---


<img src={require('@site/static/img/eliobot/sensors-proximity/Eliobot - Obstacles.png').default} alt="proximity sensors" width="49%" />

<br/>Eliobot's obstacle sensors are infrared sensors that detect obstacles at a certain distance.

## Use with Elioblocs

To use Eliobot obstacle sensors on Elioblocs, we use blocks from the <img src={require("@site/static/img/eliobot/sensors-proximity/category-proximity.jpg").default} style={{ width: "14%", verticalAlign: "middle" }} alt="proximity category" /> category.

## Use with Python

With python, you must define each obstacle sensor as an object.

We have 4 sensors on the obstacle sensor, they are connected to the following pins:

|     | Left sensor | Sensor in front | Right sensor | Sensor behind |
|-----|----------------|----------------|---------------|------------------|
| Pin | IO4 | IO5 | IO6 | IO7 |

The sensors return analog values.

## Related examples

### Elioblocs example

>
> <img src={require("@site/static/img/eliobot/sensors-proximity/example-proximity-elioblocs.jpg").default} alt="Elioblocs proximity example" width="49%" />
>

Here, if an obstacle is detected in front of Eliobot, it turns to the right, otherwise it moves forward.

---

### Python example

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
    AnalogIn(board.IO4), # Left sensor
    AnalogIn(board.IO5), # Front sensor
    AnalogIn(board.IO6), # Right sensor
    AnalogIn(board.IO7)  # Rear sensor
]

# Function to get an obstacle sensor value
def getProximity(proximity_pos):
    value = 0

    # Measure reflected light
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

In this example, Eliobot moves forward if he does not detect an obstacle in front of him, otherwise he turns right.

To detect an obstacle, we look at the value of the sensor in front of Eliobot. If the value is greater than 1000, then there is an obstacle in front of Eliobot.
1000 is an approximate value and chosen to detect an obstacle at a certain distance. You can change this value to adapt it to your needs.
