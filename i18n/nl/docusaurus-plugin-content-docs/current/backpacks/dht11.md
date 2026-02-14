---
last_modified_on: "2024-10-31"
title: "Temperatuur- en vochtigheidssensor"
description: "Documentatie over temperatuur- en vochtigheidssensoren"
---

## DHT11-sensordocumentatie

---

### 1. **Introductie**

De DHT11 is een digitale temperatuur- en vochtigheidssensor die veel wordt gebruikt in projecten voor milieumonitoring.
Het biedt temperatuur- en vochtigheidsmetingen met een gemiddelde nauwkeurigheid en is gemakkelijk te gebruiken.

---

### 2. **Technische kenmerken**

- **Temperatuurbereik**: 0 tot 50°C (nauwkeurigheid van ±2°C)
- **Vochtigheidsbereik**: 20% tot 90% RH (nauwkeurigheid van ±5% RH)
- **Bedrijfsspanning**: 3V tot 5,5V
- **Interface**: Digitaal (enkele draad)
- **Responstijd**: 1 seconde
- **Afmetingen**: 15,5 mm x 12 mm x 5,5 mm
- **Levensduur**: meer dan 20.000 meetcycli

---

### 3. **Pinconfiguratie**

![DHT11 Pinout](/img/backpacks/dht11_pinout.jpg)

---

### 4. **DHT11 gebruiken met CircuitPython**

**Bibliotheekinstallatie**:

1. De bibliotheek wordt automatisch geïnstalleerd als u een codeblok gebruikt dat de DHT11-rugzak in Elioblocs gebruikt.

2. Installeer anders de bibliotheek `Adafruit CircuitPython DHT` met behulp van de bibliotheekbundel [CircuitPython van Adafruit](https://circuitpython.org/libraries).

**Codevoorbeeld**:

```python
import time
import board
import adafruit_dht

# Initialisatie van de sensor DHT11
dht11 = adafruit_dht.DHT11(board.IO15)

while True:
    temperature = dht11.temperature
    humidity = dht11.humidity
    
    print(f"Temp: {temperature} °C    Humidité: {humidity} %")
    time.sleep(2.0)
```

- `time.sleep(2.0)` zorgt ervoor dat de sensor elke 2 seconden wordt gelezen, wat wordt aanbevolen voor betrouwbare metingen.

---

### 5. **Gemeenschappelijke toepassingen**

- Binnenlandse weerstations
- Vochtigheidscontrolesystemen
- Domotica projecten
- IoT-apparaten voor milieumonitoring