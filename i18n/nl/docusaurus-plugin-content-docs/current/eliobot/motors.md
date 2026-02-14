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

Om de motoren van Eliobot op Elioblocs te gebruiken, gebruiken we blokken uit de categorie `Beweging` omdat dit de motoren zijn waarmee Eliobot kan bewegen.


## Gebruik met Python

Om Eliobot-engines in Python te gebruiken, kunt u de functies gebruiken die beschikbaar zijn in de `elio.py` bibliotheek.

De motoren zijn aangesloten op de volgende pinnen:

|     | Linkermotor | Rechter motor |
|-----|---------------|--------------|
| IN1 | IO35 | IO36 |
| IN2 | IO37 | IO38 |

Motoren kunnen op twee manieren worden aangestuurd: digitaal of PWM

Bij digitaal bedrijf hebben we alleen de mogelijkheid om de motor in de ene of de andere richting te draaien en te stoppen.

In PWM is het ook mogelijk om de snelheid van de motor te wijzigen en deze van 0% naar 100% van de maximale snelheid te laten gaan.

Voor meer informatie over pwm: [Wikipedia PWM](https://fr.wikipedia.org/wiki/Modulation_de_largeur_d%27impulsion)

## Gerelateerde voorbeelden

### Elioblocs-voorbeeld

>
><img src={require('@site/static/img/eliobot/motors/example-movements-elioblocs.jpg').default} alt="voorbeeld beweging elioblocs" width="49%" />
>

Hier gebruiken we de <img src={require('@site/static/img/eliobot/motors/movement-category.jpg').default} style={{ width: '14%', verticalAlign: 'middle' }} alt="Categorie beweging" />-blokken om Eliobot vooruit te laten gaan als hij geen obstakel voor hem detecteert, anders draait hij naar rechts.

---

### Python-voorbeeld

#### Bij de boekwinkel `elio.py`

```python
from elio import Eliobot
import board
import time
import digitalio
import analogio
import pwmio

vBatt_pin = analogio.AnalogIn(board.BATTERY)

obstacleInput = [analogio.AnalogIn(pin) for pin in
                 (board.IO4, board.IO5, board.IO6, board.IO7)]

lineCmd = digitalio.DigitalInOut(board.IO33)
lineCmd.direction = digitalio.Direction.OUTPUT

lineInput = [analogio.AnalogIn(pin) for pin in
               (board.IO10, board.IO11, board.IO12, board.IO13, board.IO14)]

AIN1 = pwmio.PWMOut(board.IO36)
AIN2 = pwmio.PWMOut(board.IO38)
BIN1 = pwmio.PWMOut(board.IO35)
BIN2 = pwmio.PWMOut(board.IO37)

buzzer = pwmio.PWMOut(board.IO17, variable_frequency=True)

elio = Eliobot(AIN1, AIN2, BIN1, BIN2, vBatt_pin, obstacleInput, buzzer, lineInput, lineCmd)

speed = 100


while True:
    if elio.get_obstacle(1):
        elio.turn_right(speed)

    else:
        elio.move_forward(speed)
```

In dit voorbeeld gaat Eliobot vooruit als hij geen obstakel voor hem detecteert, anders draait hij naar rechts.

#### Zonder de boekwinkel `elio.py`

```python
import elio
import time
import board
import pwmio

# Configuration des pins
moteurDroit1 = pwmio.PWMOut(board.IO36)
moteurDroit2 = pwmio.PWMOut(board.IO38)
moteurGauche1 = pwmio.PWMOut(board.IO35)
moteurGauche2 = pwmio.PWMOut(board.IO37)

# Vitesse des moteurs
vitesse = 65535 # vitesses entre 0 et 65535

while True:
    if elio.getObstacle(1):
        moteurDroit1.duty_cycle = 0
        moteurDroit2.duty_cycle = vitesse
        moteurGauche1.duty_cycle = vitesse
        moteurGauche2.duty_cycle = 0

    else:
        moteurDroit1.duty_cycle = vitesse
        moteurDroit2.duty_cycle = 0
        moteurGauche1.duty_cycle = 0
        moteurGauche2.duty_cycle = vitesse
```
Hetzelfde voorbeeld als voorheen, maar zonder gebruik van de `elio.py` bibliotheek.