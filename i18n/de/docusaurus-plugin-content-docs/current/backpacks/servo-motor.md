---
last_modified_on: "2024-10-31"
title: "Servomotormodul"
description: "Dokumentation zum Servomotor-Rucksack"
---

## Dokumentation des Servomotor-Rucksacks

---

### 1. **Einführung**

Der Servomotor-Rucksack ist ein Erweiterungsmodul, mit dem Sie bis zu drei Servomotoren über drei separate Ausgangspins steuern können.
Servomotoren sind Drehantriebe, mit denen die Winkelposition einer Achse gesteuert werden kann.
Sie werden häufig in Robotik-, Modellbau- und Automatisierungsprojekten eingesetzt.

---

### 2. **Technische Eigenschaften**

- **Anzahl der Servomotoren**: 3
- **Betriebsspannung**: 3,3 V bis 5 V
- **Schnittstelle**: PWM (Pulsweitenmodulation)
- **Drehbereich**: 0 bis 180 Grad

---

### 3. **Pin-Konfiguration**

![Servomotor-Pinbelegung](/img/backpacks/servo_pinout.jpg)

---

### 4. **Servomotor mit CircuitPython verwenden**

**Bibliotheksinstallation**:

1. Für die Verwendung des Servomotor-Rucksacks in Elioblocs ist keine Bibliotheksinstallation erforderlich.

**Codebeispiel**:

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
