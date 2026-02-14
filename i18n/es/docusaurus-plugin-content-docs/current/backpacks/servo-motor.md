---
last_modified_on: "2024-10-31"
title: "Módulo de servomotor"
description: "Documentación de la mochila servomotor"
---

## Documentación de la mochila de servomotor

---

### 1. **Introducción**

La mochila Servo Motor es un módulo de expansión que le permite controlar hasta tres servomotores en tres pines de salida separados.
Los servomotores son actuadores giratorios que se pueden utilizar para controlar la posición angular de un eje.
Se utilizan habitualmente en proyectos de robótica, modelismo y automatización.

---

### 2. **Características Técnicas**

- **Número de Servomotores**: 3
- **Voltaje de funcionamiento**: 3,3 V a 5 V
- **Interfaz**: PWM (modulación de ancho de pulso)
- **Rango de rotación**: 0 a 180 grados

---

### 3. **Configuración de PIN**

![Configuración de pines del servomotor](/img/backpacks/servo_pinout.jpg)

---

### 4. **Usando Servomotor con CircuitPython**

**Instalación de biblioteca**:

1. No se requiere instalación de biblioteca para utilizar la mochila Servomotor en Elioblocs.

**Ejemplo de código**:

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
