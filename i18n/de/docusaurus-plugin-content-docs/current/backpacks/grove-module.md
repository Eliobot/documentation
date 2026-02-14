---
last_modified_on: "2024-10-31"
title: "Grove-Modul"
description: "Dokumentation zum Modul Grove-Rucksack"
---

## Dokumentation des Grove-Modul-Rucksacks

---

### 1. **Einführung**

Das Grove-Rucksackmodul ist ein Erweiterungsmodul, mit dem Sie Grove-Sensoren und -Aktoren an Elioblocs anschließen können.


---

### 2. **Technische Eigenschaften**

- **Anzahl der Ports**: 4
- **Typ der Häfen**: Grove
- **Betriebsspannung**: 3,3 V bis 5 V
- **Schnittstelle**: I2C, UART, Analog, Digital

---

### 3. **Pin-Konfiguration**

![Pinbelegung des Grove-Moduls](/img/backpacks/grove_pinout.jpg)

---

### 4. **Modul Grove mit CircuitPython verwenden**

**Bibliotheksinstallation**:

1. Für die Verwendung des Grove-Modul-Rucksacks in Elioblocs ist keine Bibliotheksinstallation erforderlich.

**Codebeispiel mit einem Grove-Button**:

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
