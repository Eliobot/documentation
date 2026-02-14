---
last_modified_on: "2024-10-31"
title: "Grove-module"
description: "Module Grove-rugzakdocumentatie"
---

## Backpack Module Grove-documentatie

---

### 1. **Introductie**

De Grove-rugzakmodule is een uitbreidingsmodule waarmee u Grove-sensoren en actuatoren op Elioblocs kunt aansluiten.


---

### 2. **Technische kenmerken**

- **Aantal poorten**: 4
- **Type poorten**: Grove
- **Bedrijfsspanning**: 3,3 V tot 5 V
- **Interface**: I2C, UART, analoog, digitaal

---

### 3. **Pinconfiguratie**

![Grove Module Pinout](/img/backpacks/grove_pinout.jpg)

---

### 4. **Module Grove gebruiken met CircuitPython**

**Bibliotheekinstallatie**:

1. Er is geen bibliotheekinstallatie vereist om de Grove Module-rugzak in Elioblocs te gebruiken.

**Codevoorbeeld met een Grove-knop**:

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