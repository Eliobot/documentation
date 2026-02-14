---
last_modified_on: "2024-10-31"
title: "Senzor de temperatură și umiditate"
description: "Documentația senzorului de temperatură și umiditate"
---

## Documentația senzorului DHT11

---

### 1. **Introducere**

DHT11 este un senzor digital de temperatură și umiditate utilizat pe scară largă în proiecte de monitorizare a mediului.
Oferă citiri de temperatură și umiditate cu precizie moderată și este ușor de utilizat.

---

### 2. **Caracteristici tehnice**

- **Interval de temperatură**: 0 până la 50°C (precizie de ±2°C)
- **Interval de umiditate**: 20% până la 90% RH (precizie de ±5% RH)
- **Tensiune de funcționare**: 3V până la 5,5V
- **Interfață**: digitală (un singur fir)
- **Timp de răspuns**: 1 secundă
- **Dimensiuni**: 15,5 mm x 12 mm x 5,5 mm
- **Durata de viață**: Peste 20.000 de cicluri de măsurare

---

### 3. **Configurare PIN**

![DHT11 Pinout](/img/backpacks/dht11_pinout.jpg)

---

### 4. **Utilizarea DHT11 cu CircuitPython**

**Instalarea bibliotecii**:

1. Biblioteca se instalează automat dacă utilizați un bloc de cod care folosește rucsacul DHT11 în Elioblocs.

2. În caz contrar, instalați biblioteca `Adafruit CircuitPython DHT` utilizând pachetul Library [CircuitPython de la Adafruit](https://circuitpython.org/libraries).

**Exemplu de cod**:

```python
import time
import board
import adafruit_dht

# Inițializarea senzorului DHT11
dht11 = adafruit_dht.DHT11(board.IO15)

while True:
    temperature = dht11.temperature
    humidity = dht11.humidity
    
    print(f"Temp: {temperature} °C    Humidité: {humidity} %")
    time.sleep(2.0)
```

- `time.sleep(2.0)` asigură citirea senzorului la fiecare 2 secunde, ceea ce este recomandat pentru citiri fiabile.

---

### 5. **Aplicații comune**

- Stații meteo interne
- Sisteme de control al umiditatii
- Proiecte de automatizare a locuintei
- Dispozitive IoT pentru monitorizarea mediului