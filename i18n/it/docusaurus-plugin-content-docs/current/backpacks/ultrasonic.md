---
last_modified_on: "2024-10-31"
title: "Sensore ad ultrasuoni"
description: "Documentazione del sensore a ultrasuoni"
---

## Documentazione sul sensore a ultrasuoni

---

### 1. **Introduzione**

Un sensore a ultrasuoni è un dispositivo che utilizza le onde sonore per misurare la distanza di un oggetto.
Emette un'onda sonora a una frequenza specifica (solitamente 40 kHz), quindi ascolta il ritorno di quell'onda.
Calcolando il tempo necessario al ritorno dell'eco, il sensore può determinare la distanza dell'oggetto.
I sensori a ultrasuoni sono comunemente utilizzati nella robotica, nell'automazione e per il rilevamento degli ostacoli.

---

### 2. **Caratteristiche tecniche**

- **Tensione operativa**: 5 V CC
- **Corrente operativa**: 15 mA
- **Frequenza**: 40 kHz
- **Portata massima**: generalmente 4 metri
- **Portata minima**: Tipicamente 2 cm
- **Dimensioni**: Varia a seconda del modello (ad esempio, HC-SR04: 45 mm x 20 mm x 15 mm)

---

#### 3. **Configurazione pin**

![Disposizione sensore a ultrasuoni](/img/backpacks/ultrasonic-sensor_pinout.jpg)

---

### 3. **Utilizzo del sensore a ultrasuoni con CircuitPython**

**Esempio di codice**:

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

**Note**:

- La funzione `measure_distance()` invia un impulso e misura il tempo impiegato dal ritorno dell'eco.
- La velocità del suono viene utilizzata per calcolare la distanza in centimetri.

---

#### 4. **Applicazioni comuni**

- Evitamento degli ostacoli per i robot
- Misurazione della distanza per sistemi di automazione
- Sistemi di assistenza al parcheggio
- Misurazione del livello dei liquidi
- Sensori di prossimità nei sistemi di sicurezza