---
last_modified_on: "2024-10-31"
title: "Senzor cu ultrasunete"
description: "Documentația senzorului cu ultrasunete"
---

## Documentația senzorului cu ultrasunete

---

### 1. **Introducere**

Un senzor ultrasonic este un dispozitiv care utilizează unde sonore pentru a măsura distanța unui obiect.
Emite o undă sonoră la o anumită frecvență (de obicei 40 kHz), apoi ascultă revenirea undei respective.
Calculând timpul necesar pentru ca ecoul să revină, senzorul poate determina distanța obiectului.
Senzorii cu ultrasunete sunt utilizați în mod obișnuit în robotică, automatizare și pentru detectarea obstacolelor.

---

### 2. **Caracteristici tehnice**

- **Tensiune de funcționare**: 5V DC
- **Curentul de funcționare**: 15mA
- **Frecventa**: 40 kHz
- **Raza maximă**: de obicei 4 metri
- **Raza minimă**: de obicei 2 cm
- **Dimensiuni**: variază în funcție de model (de exemplu, HC-SR04: 45 mm x 20 mm x 15 mm)

---

#### 3. **Configurare PIN**

![Puntarea senzorului cu ultrasunete](/img/backpacks/ultrasonic-sensor_pinout.jpg)

---

### 3. **Utilizarea senzorului cu ultrasunete cu CircuitPython**

**Exemplu de cod**:

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

- Funcția `measure_distance()` trimite un impuls și măsoară timpul necesar pentru revenirea ecoului.
- Viteza sunetului este folosită pentru a calcula distanța în centimetri.

---

#### 4. **Aplicații obișnuite**

- Evitarea obstacolelor pentru roboți
- Masurarea distantei pentru sisteme de automatizare
- Sisteme de asistență la parcare
- Măsurarea nivelului lichidului
- Senzori de proximitate în sistemele de securitate