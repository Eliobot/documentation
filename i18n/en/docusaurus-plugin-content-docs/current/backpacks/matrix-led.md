---
last_modified_on: "2024-10-31"
title: "LED Matrix"
description: "RGB LED Matrix Documentation"
---

## Documentation de la Matrice de LED NeoPixel 5x5

---

### 1. **Introduction**

The NeoPixel 5x5 LED Array is a versatile, colorful display that can be controlled by a single data pin.
Each LED in the array is an RGB LED, allowing for millions of color combinations.
This matrix is ​​commonly used in creative lighting projects, displays and interactive installations.

---

### 2. **Technical Characteristics**

- **Number of LEDs**: 25 (5x5 matrix)
- **Operating Voltage**: 3.3V DC
- **Data Protocol**: Single-wire communication (WS2812 or WS2812B)
- **Current Consumption**: Up to 60mA per LED at maximum brightness (all LEDs in white)
- **Dimensions**: Approximately 50mm x 50mm (varies depending on manufacturer)
- **Order of Pixel Colors**: GRB (Green-Red-Blue) or RGB depending on the model

---

### 3. **Pin Configuration**

![NeoPixel Matrix Pinout](/img/backpacks/matrix-led_pinout.jpg)

---

### 4. **Using the NeoPixel Matrix with CircuitPython**

**Library Installation**:

1. The library installs automatically if you use a code block that uses the Led Matrix backpack in Elioblocs.

2. Otherwise, install the `matrix.py` library on our [GitHub repository](https://github.com/Eliobot/elio-backpacks/tree/main/matrix-led/Python/library).

**Code Example**:

```python
import board
from matrix import MatrixLED
import time

matrix = MatrixLED(board.IO2)

while True:
    # Scroll the text "SUPER" in green
    matrix.scroll_matrix_text('SUPER', (153, 153, 0))

```

---
