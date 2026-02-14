---
last_modified_on: "2024-02-26"
title: "Silniki"
description: "Komponent Eliobota - Silniki"
---


<p align="middle">
<img src={require('@site/static/img/eliobot/motors/Eliobot - Motors Top.png').default} alt="Eliobot motors top" width="49%" />
<img src={require('@site/static/img/blank.png').default} width="2%"/>
<img src={require('@site/static/img/eliobot/motors/Eliobot - Motors Bottom.png').default} alt="Eliobot motors bottom" width="49%" />
</p>

:::note
Silniki Eliobota zasilane są bezpośrednio z akumulatora, dlatego działają tylko wtedy, gdy wyłącznik zapłonu znajduje się w pozycji `ON`.
:::

## Używaj z Elioblocami

Do wykorzystania silników Eliobota na Elioblocach używamy bloków z kategorii `Ruch`, ponieważ są to silniki, które umożliwiają Eliobotowi poruszanie się.


## Używaj z Pythonem

Aby wykorzystać silniki Eliobota w Pythonie, możesz skorzystać z funkcji dostępnych w bibliotece `elio.py`.

Silniki są podłączone do następujących pinów:

|     | Lewy silnik | Prawy silnik |
|-----|---------------|--------------|
| W1 | IO35 | IO36 |
| IN2 | IO37 | IO38 |

Silniki można sterować na dwa sposoby: cyfrowy lub PWM

W trybie cyfrowym będziemy mieli jedynie możliwość obrócenia silnika w jedną lub drugą stronę i zatrzymania go.

W PWM możliwa będzie również modyfikacja prędkości silnika i ustawienie jej od 0% do 100% maksymalnej prędkości.

Aby dowiedzieć się więcej o pwm: [Wikipedia PWM](https://fr.wikipedia.org/wiki/Modulation_de_largeur_d%27impulsion)

## Powiązane przykłady

### Przykład Elioblocs

>
><img src={require('@site/static/img/eliobot/motors/example-movements-elioblocs.jpg').default} alt="przykład ruchu elioblocs" width="49%" />
>

Tutaj używamy bloczków <img src={require('@site/static/img/eliobot/motors/movement-category.jpg').default} style={{ width: '14%', verticalAlign: 'middle' }} alt="Kategoria ruchu" />, aby Eliobot ruszył do przodu, jeśli nie wykryje przed sobą przeszkody, w przeciwnym razie skręci w prawo.

---

### Przykład Pythona

#### Z księgarnią `elio.py`

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

W tym przykładzie Eliobot porusza się do przodu, jeśli nie wykryje przed sobą przeszkody, w przeciwnym razie skręca w prawo.

#### Bez księgarni `elio.py`

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
Ten sam przykład co poprzednio, ale bez użycia biblioteki `elio.py`.