---
last_modified_on: "2024-10-31"
title: "Ultrasone sensor"
description: "Documentatie over ultrasone sensoren"
---

## Ultrasone sensordocumentatie

---

### 1. **Introductie**

Een ultrasone sensor is een apparaat dat geluidsgolven gebruikt om de afstand van een object te meten.
Het zendt een geluidsgolf uit op een specifieke frequentie (meestal 40 kHz) en luistert vervolgens naar de terugkeer van die golf.
Door te berekenen hoe lang het duurt voordat de echo terugkeert, kan de sensor de afstand tot het object bepalen.
Ultrasone sensoren worden veel gebruikt in de robotica, automatisering en voor obstakeldetectie.

---

### 2. **Technische kenmerken**

- **Bedrijfsspanning**: 5V DC
- **Bedrijfsstroom**: 15mA
- **Frequentie**: 40 kHz
- **Maximaal bereik**: doorgaans 4 meter
- **Minimaal bereik**: normaal gesproken 2 cm
- **Afmetingen**: varieert afhankelijk van het model (bijvoorbeeld HC-SR04: 45 mm x 20 mm x 15 mm)

---

#### 3. **Pinconfiguratie**

![Pinout ultrasone sensor](/img/backpacks/ultrasonic-sensor_pinout.jpg)

---

### 3. **De ultrasone sensor gebruiken met CircuitPython**

**Codevoorbeeld**:

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
    duration = echo[0] / 1000000  # Convertir à des secondes
    distance = (duration * 34300) / 2
    return distance


while True:
    time.sleep(1)

    print(measure_distance())
```

**Opmerkingen**:

- De `measure_distance()`-functie verzendt een puls en meet de tijd die nodig is voordat de echo terugkeert.
- De geluidssnelheid wordt gebruikt om de afstand in centimeters te berekenen.

---

#### 4. **Gemeenschappelijke toepassingen**

- Obstakelvermijding voor robots
- Afstandsmeting voor automatiseringssystemen
- Parkeerhulpsystemen
- Vloeistofniveaumeting
- Nabijheidssensoren in beveiligingssystemen