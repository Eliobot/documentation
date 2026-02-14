---
last_modified_on: "2024-10-31"
title: "LED-matrix"
description: "RGB LED-matrixdocumentatie"
---

## NeoPixel 5x5 LED Matrix-documentatie

---

### 1. **Introductie**

De NeoPixel 5x5 LED Array is een veelzijdig, kleurrijk display dat kan worden bediend met één enkele datapin.
Elke LED in de array is een RGB-LED, waardoor miljoenen kleurencombinaties mogelijk zijn.
Deze matrix wordt veel gebruikt in creatieve verlichtingsprojecten, displays en interactieve installaties.

---

### 2. **Technische kenmerken**

- **Aantal LED's**: 25 (5x5-matrix)
- **Bedrijfsspanning**: 3,3 V DC
- **Dataprotocol**: Enkeldraadscommunicatie (WS2812 of WS2812B)
- **Stroomverbruik**: tot 60 mA per LED bij maximale helderheid (alle LED's in wit)
- **Afmetingen**: ongeveer 50 mm x 50 mm (varieert afhankelijk van de fabrikant)
- **Volgorde van pixelkleuren**: GRB (groen-rood-blauw) of RGB, afhankelijk van het model

---

### 3. **Pinconfiguratie**

![NeoPixel Matrix Pinout](/img/backpacks/matrix-led_pinout.jpg)

---

### 4. **De NeoPixel-matrix gebruiken met CircuitPython**

**Bibliotheekinstallatie**:

1. De bibliotheek wordt automatisch geïnstalleerd als u een codeblok gebruikt dat de Led Matrix-rugzak in Elioblocs gebruikt.

2. Installeer anders de `matrix.py`-bibliotheek op onze [GitHub-repository](https://github.com/Eliobot/elio-backpacks/tree/main/matrix-led/Python/library).

**Codevoorbeeld**:

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