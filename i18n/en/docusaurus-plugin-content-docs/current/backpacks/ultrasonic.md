---
last_modified_on: "2024-10-31"
title: "Ultrasonic Sensor"
description: "Ultrasonic sensor documentation"
---

## Ultrasonic Sensor Documentation

---

### 1. **Introduction**

An ultrasonic sensor is a device that uses sound waves to measure the distance of an object.
It emits a sound wave at a specific frequency (usually 40 kHz), then listens for the return of that wave.
By calculating the time it takes for the echo to return, the sensor can determine the distance of the object.
Ultrasonic sensors are commonly used in robotics, automation and for obstacle detection.

---

### 2. **Technical Characteristics**

- **Operating Voltage**: 5V DC
- **Operating Current**: 15mA
- **Frequency**: 40 kHz
- **Maximum Range**: Typically 4 meters
- **Minimum Range**: Typically 2 cm
- **Dimensions**: Varies depending on the model (e.g., HC-SR04: 45mm x 20mm x 15mm)

---

#### 3. **Pin Configuration**

![Ultrasonic Sensor Pinout](/img/backpacks/ultrasonic-sensor_pinout.jpg)

---

### 3. **Using the Ultrasonic Sensor with CircuitPython**

**Code Example**:

```python
import time
import board
from digitalio import DigitalInOut, Direction
import pulseio

trigger = DigitalInOut(board.IO15)
trigger.direction = Direction.OUTPUT
trigger.value = False

echo = pulseio.PulseIn(board.IO16)
echo.pause()
echo.clear()

def measure_distance():
    trigger.value = True
    time.sleep(0.00001)
    trigger.value = False

    echo.clear()
    echo.resume()

    start = time.monotonic()
    while len(echo) == 0:
        if time.monotonic() - start > 0.2:
            echo.pause()
            return None

    echo.pause()
    duration = echo[0] / 1000000  # Convert to seconds
    distance = (duration * 34300) / 2
    return distance


while True:
    time.sleep(1)

    print(measure_distance())
```

**Notes**:

- The `measure_distance()` function sends a pulse and measures the time taken for the echo to return.
- The speed of sound is used to calculate distance in centimeters.

---

#### 4. **Common Applications**

- Obstacle avoidance for robots
- Distance measurement for automation systems
- Parking assistance systems
- Liquid level measurement
- Proximity sensors in security systems
