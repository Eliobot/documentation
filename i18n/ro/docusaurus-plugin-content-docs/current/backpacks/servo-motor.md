---
last_modified_on: "2024-10-31"
title: "Modul servomotor"
description: "Documentație rucsac servomotor"
---

## Documentație pentru servomotor rucsac

---

### 1. **Introducere**

Rucsacul Servo Motor este un modul de expansiune care vă permite să controlați până la trei servomotoare pe trei pini de ieșire separați.
Servomotoarele sunt actuatoare rotative care pot fi utilizate pentru a controla poziția unghiulară a unei axe.
Sunt utilizate în mod obișnuit în proiecte de robotică, modelare și automatizare.

---

### 2. **Caracteristici tehnice**

- **Număr de servomotoare**: 3
- **Tensiune de funcționare**: 3,3V până la 5V
- **Interfață**: PWM (Pulse Width Modulation)
- **Interval de rotație**: 0 până la 180 de grade

---

### 3. **Configurare PIN**

![Pinout servomotor](/img/backpacks/servo_pinout.jpg)

---

### 4. **Folosind Servomotor cu CircuitPython**

**Instalarea bibliotecii**:

1. Nu este necesară instalarea bibliotecii pentru a utiliza rucsacul Servomotor în Elioblocs.

**Exemplu de cod**:

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