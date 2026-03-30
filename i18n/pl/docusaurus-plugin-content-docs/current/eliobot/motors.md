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

Do wykorzystania silników Eliobota na Elioblocach używamy bloków z kategorii `Mouvement`, ponieważ są to silniki, które umożliwiają Eliobotowi poruszanie się.


## Używanie z Pythonem

Aby wykorzystać silniki Eliobota w Pythonie, możesz skorzystać z funkcji dostępnych w bibliotece `elio.py`.

Silniki są podłączone do następujących pinów:

|     | Moteur gauche | Moteur droit |
|-----|---------------|--------------|
| IN1 | IO35          | IO36         |
| IN2 | IO37          | IO38         |

Silniki można sterować na dwa sposoby: cyfrowy lub PWM

W trybie cyfrowym będziemy mieli jedynie możliwość obrócenia silnika w jedną lub drugą stronę i zatrzymania go.

W PWM możliwa będzie również modyfikacja prędkości silnika i ustawienie jej od 0% do 100% maksymalnej prędkości.

Aby dowiedzieć się więcej o pwm: [Wikipedia PWM](https://fr.wikipedia.org/wiki/Modulation_de_largeur_d%27impulsion)

## Powiązane przykłady

### Przykład eliobbloków

>
><img src={require('@site/static/img/eliobot/motors/example-movements-elioblocs.jpg').default} alt="exemple mouvement elioblocs" width="49%" />
>

Tutaj używamy bloczków <img src={require('@site/static/img/eliobot/motors/movement-category.jpg').default} style={{ width: '14%', verticalAlign: 'middle' }} alt="Catégorie mouvement" />, aby Eliobot ruszył do przodu, jeśli nie wykryje przed sobą przeszkody, w przeciwnym razie skręci w prawo.

---

### Przykład Pythona

#### Z biblioteką `elio.py`

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

W tym przykładzie Eliobot porusza się do przodu, jeśli nie wykryje przed sobą przeszkody, w przeciwnym razie skręca w prawo.

---

#### Bez biblioteki `elio.py`

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

Ten sam przykład co poprzednio, ale bez użycia biblioteki `elio.py`.