---
last_modified_on: "2024-10-31"
title: "Matriz LED"
description: "Documentación de la matriz de LED RGB"
---

## Documentation de la Matrice de LED NeoPixel 5x5

---

### 1. **Introducción**

El conjunto de LED NeoPixel 5x5 es una pantalla colorida y versátil que se puede controlar mediante un solo pin de datos.
Cada LED de la matriz es un LED RGB, lo que permite millones de combinaciones de colores.
Esta matriz se utiliza habitualmente en proyectos de iluminación creativa, exhibiciones e instalaciones interactivas.

---

### 2. **Características Técnicas**

- **Número de LED**: 25 (matriz de 5x5)
- **Voltaje de funcionamiento**: 3,3 V CC
- **Protocolo de datos**: comunicación de un solo cable (WS2812 o WS2812B)
- **Consumo actual**: Hasta 60 mA por LED con brillo máximo (todos los LED en blanco)
- **Dimensiones**: Aproximadamente 50 mm x 50 mm (varía según el fabricante)
- **Orden de colores de píxeles**: GRB (Verde-Rojo-Azul) o RGB según el modelo

---

### 3. **Configuración de PIN**

![Pinout de matriz NeoPixel](/img/backpacks/matrix-led_pinout.jpg)

---

### 4. **Usando NeoPixel Matrix con CircuitPython**

**Instalación de biblioteca**:

1. La biblioteca se instala automáticamente si usas un bloque de código que usa la mochila Led Matrix en Elioblocs.

2. De lo contrario, instale la biblioteca `matrix.py` en nuestro [repositorio GitHub](https://github.com/Eliobot/elio-backpacks/tree/main/matrix-led/Python/library).

**Ejemplo de código**:

```python
import board
from matrix import MatrixLED
import time

matrix = MatrixLED(board.IO2)

while True:
    # Fait défiler le texte "SUPER" en vert
    matrix.scroll_matrix_text('SUPER', (153, 153, 0))

```

---
