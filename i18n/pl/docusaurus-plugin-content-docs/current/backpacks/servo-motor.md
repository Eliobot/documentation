---
last_modified_on: "2024-10-31"
title: "Moduł silnika serwo"
description: "Dokumentacja plecaka serwomotoru"
---

## Dokumentacja serwomotoru plecakowego

---

### 1. **Wprowadzenie**

Plecak Servo Motor to moduł rozszerzeń umożliwiający sterowanie maksymalnie trzema serwomotorami na trzech oddzielnych pinach wyjściowych.
Serwosilniki to siłowniki obrotowe, które można wykorzystać do sterowania położeniem kątowym osi.
Są powszechnie stosowane w robotyce, modelarstwie i projektach automatyzacji.

---

### 2. **Charakterystyka techniczna**

- **Liczba serwomotorów**: 3
- **Napięcie robocze**: 3,3 V do 5 V
- **Interfejs**: PWM (modulacja szerokości impulsu)
- **Zakres obrotu**: 0 do 180 stopni

---

### 3. **Konfiguracja PIN**

![Styki serwomotoru](/img/backpacks/servo_pinout.jpg)

---

### 4. **Używanie serwomotoru z CircuitPython**

**Instalacja biblioteki**:

1. Aby używać plecaka serwomotoru w Elioblocs, nie jest wymagana instalacja biblioteki.

**Przykład kodu**:

```python
import board
import pwmio
import time

pwm = pwmio.PWMOut(board.IO15, frequency=50)


while True:
    pwm.duty_cycle = int(((90 / 180.0) * (2750 - 750) + 750) * pwm.frequency * 65535 / 1000000)
    time.sleep(1)

    pwm.duty_cycle = int(((0 / 180.0) * (2750 - 750) + 750) * pwm.frequency * 65535 / 1000000)
    time.sleep(1)
```

---