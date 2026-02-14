---
last_modified_on: "2024-10-31"
title: "Modulul Grove"
description: "Documentație pentru rucsacul Module Grove"
---

## Rucsac Modulul Grove documentație

---

### 1. **Introducere**

Modulul pentru rucsac Grove este un modul de expansiune care vă permite să conectați senzorii și actuatoarele Grove la Elioblocs.


---

### 2. **Caracteristici tehnice**

- **Număr de porturi**: 4
- **Tip de porturi**: Grove
- **Tensiune de funcționare**: 3,3V până la 5V
- **Interfață**: I2C, UART, Analogic, Digital

---

### 3. **Configurare PIN**

![Grove Module Pinout](/img/backpacks/grove_pinout.jpg)

---

### 4. **Utilizarea Modulului Grove cu CircuitPython**

**Instalarea bibliotecii**:

1. Nu este necesară instalarea bibliotecii pentru a utiliza rucsacul Grove Module în Elioblocs.

**Exemplu de cod cu un buton Grove**:

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