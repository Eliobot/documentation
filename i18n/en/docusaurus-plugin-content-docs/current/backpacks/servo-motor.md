---
last_modified_on: "2024-10-31"
title: "Servo Motor Module"
description: "Servomotor backpack documentation"
---

## Servo Motor Backpack Documentation

---

### 1. **Introduction**

The Servo Motor backpack is an expansion module that allows you to control up to three servo motors on three separate output pins.
Servo motors are rotary actuators that can be used to control the angular position of an axis.
They are commonly used in robotics, model making and automation projects.

---

### 2. **Technical Characteristics**

- **Number of Servomotors**: 3
- **Operating Voltage**: 3.3V to 5V
- **Interface**: PWM (Pulse Width Modulation)
- **Rotation Range**: 0 to 180 degrees

---

### 3. **Pin Configuration**

![Servomotor pinout](/img/backpacks/servo_pinout.jpg)

---

### 4. **Using Servomotor with CircuitPython**

**Library Installation**:

1. No library installation is required to use the Servomotor backpack in Elioblocs.

**Code Example**:

```python
import board
import pwmio
import time

pwm = pwmio.PWMOut(board.IO15, frequency=50)


while True:
    pwm.duty_cycle = int(((90 / 180.0) * (2750 - 750) + 750) * pwm.frequency * 65535 / 1000000)
    time.sleep(1)

    pwm.duty_cycle = int(((0 / 180.0) * (2750 - 750) + 750) * pwm.frequency * 65535 / 1000000)
    time.sleep(1)
```

---
