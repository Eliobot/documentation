---
last_modified_on: "2024-10-31"
title: "Temperature and Humidity Sensor"
description: "Temperature and Humidity Sensor Documentation"
---

## DHT11 Sensor Documentation

---

### 1. **Introduction**

The DHT11 is a digital temperature and humidity sensor widely used in environmental monitoring projects.
It provides temperature and humidity readings with moderate accuracy and is easy to use.

---

### 2. **Technical Characteristics**

- **Temperature Range**: 0 to 50°C (accuracy of ±2°C)
- **Humidity Range**: 20% to 90% RH (accuracy of ±5% RH)
- **Operating Voltage**: 3V to 5.5V
- **Interface**: Digital (single wire)
- **Response Time**: 1 second
- **Dimensions**: 15.5 mm x 12 mm x 5.5 mm
- **Lifespan**: More than 20,000 measurement cycles

---

### 3. **Pin Configuration**

![DHT11 Pinout](/img/backpacks/dht11_pinout.jpg)

---

### 4. **Using DHT11 with CircuitPython**

**Library Installation**:

1. The library installs automatically if you use a code block that uses the DHT11 backpack in Elioblocs.

2. Otherwise Install the library `Adafruit CircuitPython DHT` using the Library Bundle [CircuitPython from Adafruit](https://circuitpython.org/libraries).

**Code Example**:

```python
import time
import board
import adafruit_dht

# Initialize DHT11 sensor
dht11 = adafruit_dht.DHT11(board.IO15)

while True:
    temperature = dht11.temperature
    humidity = dht11.humidity
    
    print(f"Temp: {temperature} °C    Humidity: {humidity} %")
    time.sleep(2.0)
```

- `time.sleep(2.0)` ensures the sensor is read every 2 seconds, which is recommended for reliable readings.

---

### 5. **Common Applications**

- Domestic weather stations
- Humidity control systems
- Home automation projects
- IoT devices for environmental monitoring
