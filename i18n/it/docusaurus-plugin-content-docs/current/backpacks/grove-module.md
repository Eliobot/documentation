---
last_modified_on: "2024-10-31"
title: "Modulo Grove"
description: "Documentazione dello zaino Module Grove"
---

## Documentazione del modulo zaino Grove

---

### 1. **Introduzione**

Il Modulo zaino Grove è un modulo di espansione che consente di collegare sensori e attuatori Grove agli Eliobloc.


---

### 2. **Caratteristiche tecniche**

- **Numero di porte**: 4
- **Tipo di porte**: Grove
- **Tensione operativa**: da 3,3 V a 5 V
- **Interfaccia**: I2C, UART, analogico, digitale

---

### 3. **Configurazione pin**

![Disposizione dei moduli Grove](/img/backpacks/grove_pinout.jpg)

---

### 4. **Utilizzo di Module Grove con CircuitPython**

**Installazione della libreria**:

1. Per utilizzare lo zaino Grove Module in Elioblocs non è necessaria l'installazione della libreria.

**Esempio di codice con un pulsante Grove**:

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