---
last_modified_on: "2024-10-31"
title: "Temperatur- und Feuchtigkeitssensor"
description: "Dokumentation zu Temperatur- und Feuchtigkeitssensoren"
---

## Dokumentation des DHT11-Sensors

---

### 1. **Einführung**

Der DHT11 ist ein digitaler Temperatur- und Feuchtigkeitssensor, der häufig in Umweltüberwachungsprojekten eingesetzt wird.
Es liefert Temperatur- und Luftfeuchtigkeitswerte mit mäßiger Genauigkeit und ist einfach zu bedienen.

---

### 2. **Technische Eigenschaften**

- **Temperaturbereich**: 0 bis 50 °C (Genauigkeit ±2 °C)
- **Luftfeuchtigkeitsbereich**: 20 % bis 90 % RH (Genauigkeit ±5 % RH)
- **Betriebsspannung**: 3V bis 5,5V
- **Schnittstelle**: Digital (eindrahtig)
- **Reaktionszeit**: 1 Sekunde
- **Abmessungen**: 15,5 mm x 12 mm x 5,5 mm
- **Lebensdauer**: Mehr als 20.000 Messzyklen

---

### 3. **Pin-Konfiguration**

![DHT11 Pinbelegung](/img/backpacks/dht11_pinout.jpg)

---

### 4. **Verwendung von DHT11 mit CircuitPython**

**Bibliotheksinstallation**:

1. Die Bibliothek wird automatisch installiert, wenn Sie einen Codeblock verwenden, der den DHT11-Rucksack in Elioblocs verwendet.

2. Andernfalls installieren Sie die Bibliothek `Adafruit CircuitPython DHT` mit dem Bibliothekspaket [CircuitPython von Adafruit](https://circuitpython.org/libraries).

**Codebeispiel**:

```python
import time
import board
import adafruit_dht

# Initialisierung des DHT11-Sensors
dht11 = adafruit_dht.DHT11(board.IO15)

while True:
    temperature = dht11.temperature
    humidity = dht11.humidity
    
    print(f"Temp: {temperature} °C    Luftfeuchtigkeit: {humidity} %")
    time.sleep(2.0)
```

- `time.sleep(2.0)` stellt sicher, dass der Sensor alle 2 Sekunden abgelesen wird, was für zuverlässige Messwerte empfohlen wird.

---

### 5. **Allgemeine Anwendungen**

- Inländische Wetterstationen
- Feuchtigkeitskontrollsysteme
- Hausautomationsprojekte
- IoT-Geräte zur Umweltüberwachung
