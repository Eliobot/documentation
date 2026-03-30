---
sidebar_position: 0
---

# Einführung

Die Eliobot-Python-Bibliothek (`elio.py`) ist eine CircuitPython-Bibliothek, die die Programmierung des Eliobot-Roboters vereinfachen soll.

## Aktuelle Version

| Librairie | Version | CircuitPython |
|-----------|---------|---------------|
| `elio.py` | 4.0     | 9.x.x         |

## Architektur

Die Bibliothek ist in **7 unabhängige Klassen** organisiert, von denen jede für eine Komponente oder Funktionalität des Roboters verantwortlich ist:

| Classe             | Description                                      |
|--------------------|--------------------------------------------------|
| `Motors`           | Contrôle des moteurs et déplacements             |
| `Buzzer`           | Sons et mélodies                                 |
| `ObstacleSensor`   | Détection d'obstacles par capteurs infrarouges   |
| `LineSensor`       | Suivi de ligne et calibration                    |
| `WiFiConnectivity` | Connexion WiFi et point d'accès                  |
| `IRRemote`         | Réception de signaux infrarouge                  |
| `EyesMatrix`       | Contrôle de la matrice de LEDs (yeux d'Eliobot)  |

## Schnelle Installation

Die Datei `elio.py` muss in das Stammverzeichnis der Eliobot-Karte kopiert werden (im Ordner `CIRCUITPY`).

## Minimales Beispiel

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

## Referenzstifte

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
