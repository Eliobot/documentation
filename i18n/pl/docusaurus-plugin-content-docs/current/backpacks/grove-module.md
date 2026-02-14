---
last_modified_on: "2024-10-31"
title: "Moduł Grove'a"
description: "Dokumentacja plecaka modułu Grove"
---

## Dokumentacja modułu plecaka Grove

---

### 1. **Wprowadzenie**

Moduł plecaka Grove to moduł rozszerzeń umożliwiający podłączenie czujników i elementów wykonawczych Grove do Eliobloców.


---

### 2. **Charakterystyka techniczna**

- **Liczba portów**: 4
- **Typ portów**: Grove
- **Napięcie robocze**: 3,3 V do 5 V
- **Interfejs**: I2C, UART, analogowy, cyfrowy

---

### 3. **Konfiguracja PIN**

![Rozkład pinów modułu Grove](/img/backpacks/grove_pinout.jpg)

---

### 4. **Korzystanie z modułu Grove w programie CircuitPython**

**Instalacja biblioteki**:

1. Do korzystania z plecaka modułu Grove w Elioblocs nie jest wymagana instalacja biblioteki.

**Przykład kodu z przyciskiem Grove**:

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