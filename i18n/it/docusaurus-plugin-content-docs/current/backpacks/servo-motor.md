---
last_modified_on: "2024-10-31"
title: "Modulo servomotore"
description: "Documentazione sullo zaino del servomotore"
---

## Zaino documentazione servomotore

---

### 1. **Introduzione**

Lo zaino Servo Motor è un modulo di espansione che consente di controllare fino a tre servomotori su tre pin di uscita separati.
I servomotori sono attuatori rotanti che possono essere utilizzati per controllare la posizione angolare di un asse.
Sono comunemente usati nei progetti di robotica, modellismo e automazione.

---

### 2. **Caratteristiche tecniche**

- **Numero di servomotori**: 3
- **Tensione operativa**: da 3,3 V a 5 V
- **Interfaccia**: PWM (modulazione di larghezza di impulso)
- **Intervallo di rotazione**: da 0 a 180 gradi

---

### 3. **Configurazione pin**

![Pianificazione servomotore](/img/backpacks/servo_pinout.jpg)

---

### 4. **Utilizzo del servomotore con CircuitPython**

**Installazione della libreria**:

1. Per utilizzare lo zaino Servomotore in Eliobloc non è necessaria l'installazione di librerie.

**Esempio di codice**:

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