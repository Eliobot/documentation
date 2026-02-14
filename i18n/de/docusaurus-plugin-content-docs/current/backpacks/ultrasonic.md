---
last_modified_on: "2024-10-31"
title: "Ultraschallsensor"
description: "Dokumentation von Ultraschallsensoren"
---

## Dokumentation des Ultraschallsensors

---

### 1. **Einführung**

Ein Ultraschallsensor ist ein Gerät, das Schallwellen verwendet, um die Entfernung eines Objekts zu messen.
Es sendet eine Schallwelle mit einer bestimmten Frequenz (normalerweise 40 kHz) aus und wartet dann auf die Rückkehr dieser Welle.
Durch die Berechnung der Zeit, die das Echo benötigt, um zurückzukehren, kann der Sensor die Entfernung des Objekts bestimmen.
Ultraschallsensoren werden häufig in der Robotik, Automatisierung und zur Hinderniserkennung eingesetzt.

---

### 2. **Technische Eigenschaften**

- **Betriebsspannung**: 5V DC
- **Betriebsstrom**: 15mA
- **Frequenz**: 40 kHz
- **Maximale Reichweite**: Typischerweise 4 Meter
- **Mindestreichweite**: Typischerweise 2 cm
- **Abmessungen**: Variiert je nach Modell (z. B. HC-SR04: 45 mm x 20 mm x 15 mm)

---

#### 3. **Pin-Konfiguration**

![Pinbelegung des Ultraschallsensors](/img/backpacks/ultrasonic-sensor_pinout.jpg)

---

### 3. **Verwendung des Ultraschallsensors mit CircuitPython**

**Codebeispiel**:

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
    duration = echo[0] / 1000000  # In Sekunden umrechnen
    distance = (duration * 34300) / 2
    return distance


while True:
    time.sleep(1)

    print(measure_distance())
```

**Hinweise**:

- Die Funktion `measure_distance()` sendet einen Impuls und misst die Zeit, die das Echo benötigt, um zurückzukehren.
- Zur Berechnung der Entfernung in Zentimetern wird die Schallgeschwindigkeit herangezogen.

---

#### 4. **Allgemeine Anwendungen**

- Hindernisvermeidung für Roboter
- Distanzmessung für Automatisierungssysteme
- Parkassistenzsysteme
- Messung des Flüssigkeitsstandes
- Näherungssensoren in Sicherheitssystemen
