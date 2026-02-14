---
last_modified_on: "2024-10-31"
title: "Matrice LED"
description: "Documentazione sulla matrice LED RGB"
---

## Documentazione sulla matrice LED NeoPixel 5x5

---

### 1. **Introduzione**

L'array LED NeoPixel 5x5 è un display versatile e colorato che può essere controllato da un singolo pin dati.
Ciascun LED dell'array è un LED RGB e consente milioni di combinazioni di colori.
Questa matrice è comunemente utilizzata in progetti di illuminazione creativa, display e installazioni interattive.

---

### 2. **Caratteristiche tecniche**

- **Numero di LED**: 25 (matrice 5x5)
- **Tensione operativa**: 3,3 V CC
- **Protocollo dati**: comunicazione a filo singolo (WS2812 o WS2812B)
- **Consumo di corrente**: Fino a 60 mA per LED alla massima luminosità (tutti i LED in bianco)
- **Dimensioni**: circa 50 mm x 50 mm (varia a seconda del produttore)
- **Ordine dei colori dei pixel**: GRB (Verde-Rosso-Blu) o RGB a seconda del modello

---

### 3. **Configurazione pin**

![Disposizione matrice NeoPixel](/img/backpacks/matrix-led_pinout.jpg)

---

### 4. **Utilizzo di NeoPixel Matrix con CircuitPython**

**Installazione della libreria**:

1. La libreria si installa automaticamente se si utilizza un blocco di codice che utilizza lo zaino Led Matrix in Elioblocs.

2. Altrimenti, installa la libreria `matrix.py` sul nostro [repository GitHub](https://github.com/Eliobot/elio-backpacks/tree/main/matrix-led/Python/library).

**Esempio di codice**:

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