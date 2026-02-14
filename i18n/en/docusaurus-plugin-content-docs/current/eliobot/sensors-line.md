---
last_modified_on: "2024-02-26"
title: "Line sensors"
description: "Eliobot component - Line sensors"
---


<img src={require('@site/static/img/eliobot/senors-line/Eliobot - Line.png').default} alt="Eliobot line sensor" width="49%" />

<br/>Eliobot's line sensors are infrared sensors that detect lines.

## Use with Elioblocs

To use Eliobot line sensors on Elioblocs, we use blocks from the <img src={require("@site/static/img/eliobot/senors-line/category-follow-line.jpg").default} style={{ width: "14%", verticalAlign: "middle" }} alt="line category" /> category.

## Use with Python

With python, you must define each line sensor as an object.
We have 5 sensors on the line sensor, they are connected to the following pins:

|     | Sensor 1 | Sensor 2 | Sensor 3 | Sensor 4 | Sensor 5 |
|-----|-----------|-----------|-----------|-----------|-----------|
| Pin | IO10 | IO11 | IO12 | IO13 | IO14 |

We use the reflected light to detect the line, we measure the ambient light and the reflected light to calculate the value.

The sensors return analog values.

## Related examples

### Elioblocs example

>
> <img src={require("@site/static/img/eliobot/senors-line/example-follow-line-elioblocs.jpg").default} alt="Elioblocs line-following example" width="49%" />
>

Here if we detect a line under sensor 3 (the middle sensor), we move forward.

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

# Function to get a line sensor value
def getLine(line_pos):
    ambient = 0
    lit = 0
    value = 0

    # Measure reflected light
    obstacleCmd.value = True
    time.sleep(0.02)
    lit = lineInput[line_pos].value

    # Measure ambient light
    obstacleCmd.value = False
    time.sleep(0.02)
    ambient = lineInput[line_pos].value

    # Compute value
    value = ambient - lit

    return value
    
while True:
    if getLine(2) > 30000: # If sensor 3 detects a line
        elio.move_forward(100) # Move forward
```

Here if we detect a line under sensor 3 (the middle sensor), we move forward.
The detection threshold is 30000, it is an approximate value, it must be calibrated for optimal operation.
