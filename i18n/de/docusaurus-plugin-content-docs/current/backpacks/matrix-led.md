---
last_modified_on: "2024-10-31"
title: "LED-Matrix"
description: "RGB-LED-Matrix-Dokumentation"
---

## Documentation de la Matrice de LED NeoPixel 5x5

---

### 1. **Einführung**

Das NeoPixel 5x5 LED Array ist ein vielseitiges, farbenfrohes Display, das über einen einzigen Datenpin gesteuert werden kann.
Jede LED im Array ist eine RGB-LED und ermöglicht Millionen von Farbkombinationen.
Diese Matrix wird häufig in kreativen Beleuchtungsprojekten, Displays und interaktiven Installationen verwendet.

---

### 2. **Technische Eigenschaften**

- **Anzahl der LEDs**: 25 (5x5-Matrix)
- **Betriebsspannung**: 3,3 V DC
- **Datenprotokoll**: Single-Wire-Kommunikation (WS2812 oder WS2812B)
- **Stromverbrauch**: Bis zu 60 mA pro LED bei maximaler Helligkeit (alle LEDs in Weiß)
- **Abmessungen**: Ungefähr 50 mm x 50 mm (variiert je nach Hersteller)
- **Reihenfolge der Pixelfarben**: GRB (Grün-Rot-Blau) oder RGB, je nach Modell

---

### 3. **Pin-Konfiguration**

![NeoPixel Matrix Pinbelegung](/img/backpacks/matrix-led_pinout.jpg)

---

### 4. **Verwendung der NeoPixel-Matrix mit CircuitPython**

**Bibliotheksinstallation**:

1. Die Bibliothek wird automatisch installiert, wenn Sie einen Codeblock verwenden, der den Led Matrix-Rucksack in Elioblocs verwendet.

2. Andernfalls installieren Sie die Bibliothek `matrix.py` in unserem [GitHub-Repository](https://github.com/Eliobot/elio-backpacks/tree/main/matrix-led/Python/library).

**Codebeispiel**:

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