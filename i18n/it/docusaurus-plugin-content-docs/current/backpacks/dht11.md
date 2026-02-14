---
last_modified_on: "2024-10-31"
title: "Sensore di temperatura e umidità"
description: "Documentazione sui sensori di temperatura e umidità"
---

## Documentazione sul sensore DHT11

---

### 1. **Introduzione**

Il DHT11 è un sensore digitale di temperatura e umidità ampiamente utilizzato nei progetti di monitoraggio ambientale.
Fornisce letture di temperatura e umidità con moderata precisione ed è facile da usare.

---

### 2. **Caratteristiche tecniche**

- **Intervallo di temperatura**: da 0 a 50°C (precisione di ±2°C)
- **Intervallo di umidità**: dal 20% al 90% di umidità relativa (precisione di ±5% di umidità relativa)
- **Tensione operativa**: da 3 V a 5,5 V
- **Interfaccia**: digitale (cavo singolo)
- **Tempo di risposta**: 1 secondo
- **Dimensioni**: 15,5 mm x 12 mm x 5,5 mm
- **Durata**: oltre 20.000 cicli di misurazione

---

### 3. **Configurazione pin**

![Disposizione DHT11](/img/backpacks/dht11_pinout.jpg)

---

### 4. **Utilizzo di DHT11 con CircuitPython**

**Installazione della libreria**:

1. La libreria si installa automaticamente se si utilizza un blocco di codice che utilizza lo zaino DHT11 in Elioblocs.

2. Altrimenti installa la libreria `Adafruit CircuitPython DHT` utilizzando il pacchetto libreria [CircuitPython di Adafruit](https://circuitpython.org/libraries).

**Esempio di codice**:

```python
import time
import board
import adafruit_dht

# Inizializzazione del sensore DHT11
dht11 = adafruit_dht.DHT11(board.IO15)

while True:
    temperature = dht11.temperature
    humidity = dht11.humidity
    
    print(f"Temp: {temperature} °C    Umidità: {humidity} %")
    time.sleep(2.0)
```

- `time.sleep(2.0)` garantisce che il sensore venga letto ogni 2 secondi, operazione consigliata per letture affidabili.

---

### 5. **Applicazioni comuni**

- Stazioni meteorologiche nazionali
- Sistemi di controllo dell'umidità
- Progetti di domotica
- Dispositivi IoT per il monitoraggio ambientale