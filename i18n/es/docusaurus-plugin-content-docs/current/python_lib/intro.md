---
sidebar_position: 0
---

# Introducción

La biblioteca Eliobot Python (`elio.py`) es una biblioteca CircuitPython diseñada para simplificar la programación del robot Eliobot.

## Versión actual

| Librairie | Version | CircuitPython |
|-----------|---------|---------------|
| `elio.py` | 4.0     | 9.x.x         |

## Arquitectura

La biblioteca está organizada en **7 clases independientes**, cada una responsable de un componente o funcionalidad del robot:

| Classe             | Description                                      |
|--------------------|--------------------------------------------------|
| `Motors`           | Contrôle des moteurs et déplacements             |
| `Buzzer`           | Sons et mélodies                                 |
| `ObstacleSensor`   | Détection d'obstacles par capteurs infrarouges   |
| `LineSensor`       | Suivi de ligne et calibration                    |
| `WiFiConnectivity` | Connexion WiFi et point d'accès                  |
| `IRRemote`         | Réception de signaux infrarouge                  |
| `EyesMatrix`       | Contrôle de la matrice de LEDs (yeux d'Eliobot)  |

## Instalación rápida

El archivo `elio.py` debe copiarse en la raíz de la tarjeta Eliobot (en la carpeta `CIRCUITPY`).

## Ejemplo mínimo

```python
import board
import pwmio
import analogio
from elio import Motors

AIN1 = pwmio.PWMOut(board.IO36)
AIN2 = pwmio.PWMOut(board.IO38)
BIN1 = pwmio.PWMOut(board.IO35)
BIN2 = pwmio.PWMOut(board.IO37)
vBatt_pin = analogio.AnalogIn(board.BATTERY)

motors = Motors(AIN1, AIN2, BIN1, BIN2, vBatt_pin)

motors.move_forward(speed=80)
```

## Pines de referencia

| Composant             | Pin(s)                              |
|-----------------------|-------------------------------------|
| Moteur droit (AIN1)   | IO36                                |
| Moteur droit (AIN2)   | IO38                                |
| Moteur gauche (BIN1)  | IO35                                |
| Moteur gauche (BIN2)  | IO37                                |
| Batterie              | BATTERY                             |
| Capteurs d'obstacles  | IO4, IO5, IO6, IO7                  |
| Capteurs de ligne     | IO10, IO11, IO12, IO13, IO14        |
| Commande ligne (cmd)  | IO33                                |
| Buzzer                | IO17                                |
| Bouton                | IO0                                 |
| LED NeoPixel          | NEOPIXEL                            |
