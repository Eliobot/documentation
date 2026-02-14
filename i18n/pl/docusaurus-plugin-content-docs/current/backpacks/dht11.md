---
last_modified_on: "2024-10-31"
title: "Czujnik temperatury i wilgotności"
description: "Dokumentacja czujnika temperatury i wilgotności"
---

## Dokumentacja czujnika DHT11

---

### 1. **Wprowadzenie**

DHT11 to cyfrowy czujnik temperatury i wilgotności szeroko stosowany w projektach monitorowania środowiska.
Zapewnia odczyty temperatury i wilgotności z umiarkowaną dokładnością i jest łatwy w użyciu.

---

### 2. **Charakterystyka techniczna**

- **Zakres temperatur**: 0 do 50°C (dokładność ±2°C)
- **Zakres wilgotności**: 20% do 90% RH (dokładność ±5% RH)
- **Napięcie robocze**: 3 V do 5,5 V
- **Interfejs**: Cyfrowy (pojedynczy przewód)
- **Czas reakcji**: 1 sekunda
- **Wymiary**: 15,5 mm x 12 mm x 5,5 mm
- **Żywotność**: Ponad 20 000 cykli pomiarowych

---

### 3. **Konfiguracja PIN**

![Rozkład styków DHT11](/img/backpacks/dht11_pinout.jpg)

---

### 4. **Używanie DHT11 z CircuitPython**

**Instalacja biblioteki**:

1. Biblioteka instaluje się automatycznie w przypadku użycia bloku kodu korzystającego z plecaka DHT11 w Elioblocs.

2. W przeciwnym razie zainstaluj bibliotekę `Adafruit CircuitPython DHT`, korzystając z pakietu bibliotek [CircuitPython z Adafruit](https://circuitpython.org/libraries).

**Przykład kodu**:

```python
import time
import board
import adafruit_dht

# Inicjalizacja czujnika DHT11
dht11 = adafruit_dht.DHT11(board.IO15)

while True:
    temperature = dht11.temperature
    humidity = dht11.humidity
    
    print(f"Temp: {temperature} °C    Wilgotność: {humidity} %")
    time.sleep(2.0)
```

- `time.sleep(2.0)` zapewnia odczyt czujnika co 2 sekundy, co jest zalecane w celu uzyskania wiarygodnych odczytów.

---

### 5. **Typowe zastosowania**

- Krajowe stacje pogodowe
- Systemy kontroli wilgotności
- Projekty automatyki domowej
- Urządzenia IoT do monitorowania środowiska