---
last_modified_on: "2024-02-26"
title: "Battery"
description: "Eliobot component - Battery"
---


<img src={require("@site/static/img/eliobot/battery/Eliobot - Battery.png").default} alt="Eliobot battery" width="49%" />


## Use with Elioblocs

The battery cannot be handled with Elioblocs.

## Use with Python

To manage the battery in Python, simply create an object using the `analogio` library.

The battery is on the specific pin `BATTERY`.

The information that the `BATTERY` pin returns are analog values, so they must be converted into voltage to obtain the battery voltage.

## Related examples

### Python example

```python
import board
from analogio import AnalogIn

battery = AnalogIn(board.BATTERY) # Create battery object

def getBatteryVoltage():
    return (battery.value / 5371)
    
print(getBatteryVoltage())
```

Here, we retrieve the battery voltage in volts and display it in the terminal.
