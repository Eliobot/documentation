---
last_modified_on: "2024-10-31"
title: "Servomotormodule"
description: "Documentatie voor servomotorrugzak"
---

## Documentatie voor rugzakservomotor

---

### 1. **Introductie**

De Servo Motor-rugzak is een uitbreidingsmodule waarmee u maximaal drie servomotoren op drie afzonderlijke uitgangspinnen kunt besturen.
Servomotoren zijn roterende actuatoren die kunnen worden gebruikt om de hoekpositie van een as te regelen.
Ze worden vaak gebruikt in robotica, modelbouw en automatiseringsprojecten.

---

### 2. **Technische kenmerken**

- **Aantal servomotoren**: 3
- **Bedrijfsspanning**: 3,3 V tot 5 V
- **Interface**: PWM (pulsbreedtemodulatie)
- **Rotatiebereik**: 0 tot 180 graden

---

### 3. **Pinconfiguratie**

![Pinout servomotor](/img/backpacks/servo_pinout.jpg)

---

### 4. **Servomotor gebruiken met CircuitPython**

**Bibliotheekinstallatie**:

1. Er is geen bibliotheekinstallatie vereist om de Servomotor-rugzak in Elioblocs te gebruiken.

**Codevoorbeeld**:

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