---
last_modified_on: "2024-10-31"
title: "Sensor de temperatura y humedad"
description: "Documentación del sensor de temperatura y humedad"
---

## Documentación del sensor DHT11

---

### 1. **Introducción**

El DHT11 es un sensor digital de temperatura y humedad ampliamente utilizado en proyectos de monitoreo ambiental.
Proporciona lecturas de temperatura y humedad con precisión moderada y es fácil de usar.

---

### 2. **Características Técnicas**

- **Rango de temperatura**: 0 a 50°C (precisión de ±2°C)
- **Rango de humedad**: 20% a 90% RH (precisión de ±5% RH)
- **Voltaje de funcionamiento**: 3V a 5,5V
- **Interfaz**: Digital (un solo cable)
- **Tiempo de respuesta**: 1 segundo
- **Dimensiones**: 15,5 mm x 12 mm x 5,5 mm
- **Vida útil**: Más de 20.000 ciclos de medición

---

### 3. **Configuración de PIN**

![DHT11 Pinout](/img/backpacks/dht11_pinout.jpg)

---

### 4. **Usando DHT11 con CircuitPython**

**Instalación de biblioteca**:

1. La biblioteca se instala automáticamente si usas un bloque de código que usa la mochila DHT11 en Elioblocs.

2. De lo contrario, instale la biblioteca `Adafruit CircuitPython DHT` utilizando el paquete de biblioteca [CircuitPython de Adafruit](https://circuitpython.org/libraries).

**Ejemplo de código**:

```python
import time
import board
import adafruit_dht

# Inicialización del sensor DHT11
dht11 = adafruit_dht.DHT11(board.IO15)

while True:
    temperature = dht11.temperature
    humidity = dht11.humidity
    
    print(f"Temp: {temperature} °C    Humedad: {humidity} %")
    time.sleep(2.0)
```

- `time.sleep(2.0)` garantiza que el sensor se lea cada 2 segundos, lo cual se recomienda para lecturas confiables.

---

### 5. **Aplicaciones comunes**

- Estaciones meteorológicas nacionales
- Sistemas de control de humedad.
- Proyectos de domótica.
- Dispositivos IoT para monitoreo ambiental.
