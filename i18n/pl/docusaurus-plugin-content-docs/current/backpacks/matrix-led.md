---
last_modified_on: "2024-10-31"
title: "Matryca LED"
description: "Dokumentacja matrycy LED RGB"
---

## Dokumentacja matrycy LED NeoPixel 5x5

---

### 1. **Wprowadzenie**

Matryca LED NeoPixel 5x5 to wszechstronny, kolorowy wyświetlacz, którym można sterować za pomocą jednego pinu danych.
Każda dioda LED w układzie jest diodą RGB, co pozwala na miliony kombinacji kolorów.
Matryca ta jest powszechnie stosowana w kreatywnych projektach oświetleniowych, ekspozytorach i instalacjach interaktywnych.

---

### 2. **Charakterystyka techniczna**

- **Ilość diod LED**: 25 (matryca 5x5)
- **Napięcie robocze**: 3,3 V prądu stałego
- **Protokół danych**: Komunikacja jednoprzewodowa (WS2812 lub WS2812B)
- **Pobór prądu**: Do 60mA na diodę LED przy maksymalnej jasności (wszystkie diody LED w kolorze białym)
- **Wymiary**: około 50 mm x 50 mm (różni się w zależności od producenta)
- **Kolejność kolorów pikseli**: GRB (zielony-czerwony-niebieski) lub RGB w zależności od modelu

---

### 3. **Konfiguracja PIN**

![Rozmieszczenie styków matrycy NeoPixel](/img/backpacks/matrix-led_pinout.jpg)

---

### 4. **Korzystanie z macierzy NeoPixel z CircuitPython**

**Instalacja biblioteki**:

1. Biblioteka instaluje się automatycznie, jeśli użyjesz bloku kodu wykorzystującego plecak Led Matrix w Elioblocs.

2. W przeciwnym razie zainstaluj bibliotekę `matrix.py` w naszym [repozytorium GitHub](https://github.com/Eliobot/elio-backpacks/tree/main/matrix-led/Python/library).

**Przykład kodu**:

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