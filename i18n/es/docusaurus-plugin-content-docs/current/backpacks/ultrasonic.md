---
last_modified_on: "2024-10-31"
title: "Sensor ultrasónico"
description: "Documentación del sensor ultrasónico"
---

## Documentación del sensor ultrasónico

---

### 1. **Introducción**

Un sensor ultrasónico es un dispositivo que utiliza ondas sonoras para medir la distancia de un objeto.
Emite una onda de sonido a una frecuencia específica (generalmente 40 kHz) y luego escucha el retorno de esa onda.
Al calcular el tiempo que tarda el eco en regresar, el sensor puede determinar la distancia del objeto.
Los sensores ultrasónicos se utilizan habitualmente en robótica, automatización y detección de obstáculos.

---

### 2. **Características Técnicas**

- **Voltaje de funcionamiento**: 5 V CC
- **Corriente de funcionamiento**: 15 mA
- **Frecuencia**: 40 kHz
- **Alcance máximo**: normalmente 4 metros
- **Rango mínimo**: Normalmente 2 cm
- **Dimensiones**: Varía según el modelo (p. ej., HC-SR04: 45 mm x 20 mm x 15 mm)

---

#### 3. **Configuración de PIN**

![Configuración de pines del sensor ultrasónico](/img/backpacks/ultrasonic-sensor_pinout.jpg)

---

### 3. **Usando el sensor ultrasónico con CircuitPython**

**Ejemplo de código**:

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
    duration = echo[0] / 1000000  # Convertir a segundos
    distance = (duration * 34300) / 2
    return distance


while True:
    time.sleep(1)

    print(measure_distance())
```

**Notas**:

- La función `measure_distance()` envía un pulso y mide el tiempo que tarda el eco en regresar.
- La velocidad del sonido se utiliza para calcular la distancia en centímetros.

---

#### 4. **Aplicaciones comunes**

- Evitación de obstáculos para robots.
- Medición de distancias para sistemas de automatización.
- Sistemas de asistencia al aparcamiento.
- Medición de nivel de líquido
- Sensores de proximidad en sistemas de seguridad.
