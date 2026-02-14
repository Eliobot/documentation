---
last_modified_on: "2024-10-31"
title: "Grove Module"
description: "Module Grove backpack documentation"
---

## Grove Module Backpack Documentation

---

### 1. **Introduction**

The Grove backpack Module is an expansion module that allows you to connect Grove sensors and actuators to Elioblocs.


---

### 2. **Technical Characteristics**

- **Number of Ports**: 4
- **Type of Ports**: Grove
- **Operating Voltage**: 3.3V to 5V
- **Interface**: I2C, UART, Analog, Digital

---

### 3. **Pin Configuration**

![Grove Module Pinout](/img/backpacks/grove_pinout.jpg)

---

### 4. **Using Module Grove with CircuitPython**

**Library Installation**:

1. No library installation is required to use the Grove Module backpack in Elioblocs.

**Code Example With a Grove Button**:

```python
import board
import digitalio
import neopixel
import time

button = digitalio.DigitalInOut(board.IO2)
button.direction = digitalio.Direction.INPUT

# Built in Neopixel declaration
pixels = neopixel.NeoPixel(board.NEOPIXEL, 1, brightness=0.2, auto_write=False, pixel_order=neopixel.GRB)


while True:
    if button.value:
        pixels.fill((255, 0, 0))
        pixels.show()
        time.sleep(1)

    else:
        pixels.fill((0, 0, 0))
        pixels.show()

```

---
