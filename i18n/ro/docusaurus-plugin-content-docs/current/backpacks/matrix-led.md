---
last_modified_on: "2024-10-31"
title: "matrice LED"
description: "Documentația matricei LED RGB"
---

## Documentația matricei LED NeoPixel 5x5

---

### 1. **Introducere**

NeoPixel 5x5 LED Array este un afișaj versatil, colorat, care poate fi controlat de un singur pin de date.
Fiecare LED din matrice este un LED RGB, permițând milioane de combinații de culori.
Această matrice este utilizată în mod obișnuit în proiecte creative de iluminat, afișaje și instalații interactive.

---

### 2. **Caracteristici tehnice**

- **Număr de LED-uri**: 25 (matrice 5x5)
- **Tensiune de funcționare**: 3,3V DC
- **Protocol de date**: comunicare cu un singur fir (WS2812 sau WS2812B)
- **Consum de curent**: Până la 60mA per LED la luminozitate maximă (toate LED-urile în alb)
- **Dimensiuni**: Aproximativ 50mm x 50mm (difera in functie de producator)
- **Ordinea culorilor pixelilor**: GRB (Verde-Roșu-Albastru) sau RGB, în funcție de model

---

### 3. **Configurare PIN**

![NeoPixel Matrix Pinout](/img/backpacks/matrix-led_pinout.jpg)

---

### 4. **Utilizarea Matricei NeoPixel cu CircuitPython**

**Instalarea bibliotecii**:

1. Biblioteca se instalează automat dacă utilizați un bloc de cod care folosește rucsacul Led Matrix în Elioblocs.

2. În caz contrar, instalați biblioteca `matrix.py` pe [depozitul GitHub](https://github.com/Eliobot/elio-backpacks/tree/main/matrix-led/Python/library).

**Exemplu de cod**:

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