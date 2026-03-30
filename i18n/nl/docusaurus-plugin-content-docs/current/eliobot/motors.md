---
last_modified_on: "2024-02-26"
title: "Motoren"
description: "Eliobot-component - Motoren"
---


<p align="middle">
    <img src={require('@site/static/img/eliobot/motors/Eliobot - Motors Top.png').default} alt="Eliobot motors top" width="49%" />
    <img src={require('@site/static/img/blank.png').default} width="2%"/>
    <img src={require('@site/static/img/eliobot/motors/Eliobot - Motors Bottom.png').default} alt="Eliobot motors bottom" width="49%" />
</p>

:::note
De motoren van Eliobot worden rechtstreeks door de batterij gevoed en werken dus alleen als de ontstekingsknop in de `ON`-positie staat.
:::

## Gebruik met Elioblocs

Om de motoren van Eliobot op Elioblocs te gebruiken, gebruiken we blokken uit de categorie `Mouvement` omdat dit de motoren zijn waarmee Eliobot kan bewegen.


## Gebruik met Python

Om Eliobot-engines in Python te gebruiken, kunt u de functies gebruiken die beschikbaar zijn in de `elio.py` bibliotheek.

De motoren zijn aangesloten op de volgende pinnen:

|     | Moteur gauche | Moteur droit |
|-----|---------------|--------------|
| IN1 | IO35          | IO36         |
| IN2 | IO37          | IO38         |

Motoren kunnen op twee manieren worden aangestuurd: digitaal of PWM

Bij digitaal bedrijf hebben we alleen de mogelijkheid om de motor in de ene of de andere richting te draaien en te stoppen.

In PWM is het ook mogelijk om de snelheid van de motor te wijzigen en deze van 0% naar 100% van de maximale snelheid te laten gaan.

Voor meer informatie over pwm: [Wikipedia PWM](https://fr.wikipedia.org/wiki/Modulation_de_largeur_d%27impulsion)

## Gerelateerde voorbeelden

### Elioblocs voorbeeld

>
><img src={require('@site/static/img/eliobot/motors/example-movements-elioblocs.jpg').default} alt="exemple mouvement elioblocs" width="49%" />
>

Hier gebruiken we de <img src={require('@site/static/img/eliobot/motors/movement-category.jpg').default} style={{ width: '14%', verticalAlign: 'middle' }} alt="Catégorie mouvement" />-blokken om Eliobot vooruit te laten gaan als hij geen obstakel voor hem detecteert, anders draait hij naar rechts.

---

### Python-voorbeeld

#### Met de bibliotheek `elio.py`

```python
import board
import pwmio
import analogio
from elio import Motors, ObstacleSensor

AIN1 = pwmio.PWMOut(board.IO36)
AIN2 = pwmio.PWMOut(board.IO38)
BIN1 = pwmio.PWMOut(board.IO35)
BIN2 = pwmio.PWMOut(board.IO37)
vBatt_pin = analogio.AnalogIn(board.BATTERY)

obstacle_pins = [
    analogio.AnalogIn(board.IO4),  # Gauche
    analogio.AnalogIn(board.IO5),  # Avant
    analogio.AnalogIn(board.IO6),  # Droite
    analogio.AnalogIn(board.IO7),  # Arrière
]

motors = Motors(AIN1, AIN2, BIN1, BIN2, vBatt_pin)
obstacle_sensor = ObstacleSensor(obstacle_pins)

speed = 100

while True:
    if obstacle_sensor.get_obstacle(1):  # Obstacle devant
        motors.turn_right(speed)
    else:
        motors.move_forward(speed)
```

In dit voorbeeld gaat Eliobot vooruit als hij geen obstakel voor hem detecteert, anders draait hij naar rechts.

---

#### Zonder de bibliotheek `elio.py`

```python
import board
import pwmio
import analogio

AIN1 = pwmio.PWMOut(board.IO36)
AIN2 = pwmio.PWMOut(board.IO38)
BIN1 = pwmio.PWMOut(board.IO35)
BIN2 = pwmio.PWMOut(board.IO37)

obstacle_avant = analogio.AnalogIn(board.IO5)

vitesse = 65535  # valeur PWM max (0–65535)

while True:
    if obstacle_avant.value < 10000:  # Obstacle devant
        # Tourner à droite
        AIN1.duty_cycle = vitesse
        AIN2.duty_cycle = 0
        BIN1.duty_cycle = 0
        BIN2.duty_cycle = vitesse
    else:
        # Avancer
        AIN1.duty_cycle = 0
        AIN2.duty_cycle = vitesse
        BIN1.duty_cycle = 0
        BIN2.duty_cycle = vitesse
```

Hetzelfde voorbeeld als voorheen, maar zonder gebruik van de `elio.py` bibliotheek.