---
last_modified_on: "2024-10-31"
title: "Módulo Grove"
description: "Documentación de la mochila Module Grove"
---

## Documentación de la mochila del módulo Grove

---

### 1. **Introducción**

El Módulo de mochila Grove es un módulo de expansión que permite conectar sensores y actuadores Grove a Elioblocs.


---

### 2. **Características Técnicas**

- **Número de puertos**: 4
- **Tipo de Puertos**: Grove
- **Voltaje de funcionamiento**: 3,3 V a 5 V
- **Interfaz**: I2C, UART, Analógica, Digital

---

### 3. **Configuración de PIN**

![Configuración de pines del módulo Grove](/img/backpacks/grove_pinout.jpg)

---

### 4. **Usando el módulo Grove con CircuitPython**

**Instalación de biblioteca**:

1. No se requiere instalación de biblioteca para utilizar la mochila Grove Module en Elioblocs.

**Ejemplo de código con un botón Grove**:

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
