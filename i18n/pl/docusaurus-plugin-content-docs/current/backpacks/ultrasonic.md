---
last_modified_on: "2024-10-31"
title: "Czujnik ultradźwiękowy"
description: "Dokumentacja czujnika ultradźwiękowego"
---

## Dokumentacja czujnika ultradźwiękowego

---

### 1. **Wprowadzenie**

Czujnik ultradźwiękowy to urządzenie wykorzystujące fale dźwiękowe do pomiaru odległości obiektu.
Emituje falę dźwiękową o określonej częstotliwości (zwykle 40 kHz), a następnie nasłuchuje powrotu tej fali.
Obliczając czas potrzebny na powrót echa, czujnik może określić odległość obiektu.
Czujniki ultradźwiękowe są powszechnie stosowane w robotyce, automatyce i do wykrywania przeszkód.

---

### 2. **Charakterystyka techniczna**

- **Napięcie robocze**: 5 V DC
- **Prąd roboczy**: 15mA
- **Częstotliwość**: 40 kHz
- **Maksymalny zasięg**: Typowo 4 metry
- **Zasięg minimalny**: Typowo 2 cm
- **Wymiary**: Różnią się w zależności od modelu (np. HC-SR04: 45 mm x 20 mm x 15 mm)

---

#### 3. **Konfiguracja PIN**

![Układ pinów czujnika ultradźwiękowego](/img/backpacks/ultrasonic-sensor_pinout.jpg)

---

### 3. **Korzystanie z czujnika ultradźwiękowego w programie CircuitPython**

**Przykład kodu**:

```python
import time
import board
from digitalio import DigitalInOut, Direction
import pulseio

trigger = DigitalInOut(board.IO15)
trigger.direction = Direction.OUTPUT
trigger.value = False

echo = pulseio.PulseIn(board.IO16)
echo.pause()
echo.clear()

def measure_distance():
    trigger.value = True
    time.sleep(0.00001)
    trigger.value = False

    echo.clear()
    echo.resume()

    start = time.monotonic()
    while len(echo) == 0:
        if time.monotonic() - start > 0.2:
            echo.pause()
            return None

    echo.pause()
    duration = echo[0] / 1000000  # Convertir à des secondes
    distance = (duration * 34300) / 2
    return distance


while True:
    time.sleep(1)

    print(measure_distance())
```

**Uwagi**:

- Funkcja `measure_distance()` wysyła impuls i mierzy czas potrzebny do powrotu echa.
- Prędkość dźwięku służy do obliczania odległości w centymetrach.

---

#### 4. **Typowe zastosowania**

- Unikanie przeszkód dla robotów
- Pomiar odległości dla systemów automatyki
- Systemy wspomagania parkowania
- Pomiar poziomu cieczy
- Czujniki zbliżeniowe w systemach bezpieczeństwa