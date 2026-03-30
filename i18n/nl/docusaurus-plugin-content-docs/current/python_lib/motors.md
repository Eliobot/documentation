---
sidebar_position: 1
title: "Motoren"
description: "Class Motors - controle van de motoren van Eliobot"
---

# Motoren

De `Motors`-klasse bestuurt de twee motoren van Eliobot en biedt methoden om met variabele snelheid of over een precieze afstand te bewegen.

## Initialisatie

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
```

| Paramètre   | Pin   | Description                    |
|-------------|-------|--------------------------------|
| `AIN1`      | IO36  | Moteur droit, sens 1           |
| `AIN2`      | IO38  | Moteur droit, sens 2           |
| `BIN1`      | IO35  | Moteur gauche, sens 1          |
| `BIN2`      | IO37  | Moteur gauche, sens 2          |
| `vBatt_pin` | BATTERY | Lecture de la tension batterie |

## Continue bewegingen

Deze methoden starten de beweging totdat er een stop wordt gemaakt.

### `move_forward(speed=100)`

Ga rechtdoor.

```python
motors.move_forward(speed=80)
```

### `move_backward(speed=100)`

Ga direct terug.

```python
motors.move_backward(speed=80)
```

### `turn_left(speed=100)`

Draai links (linkerwiel naar achteren, rechterwiel naar voren).

```python
motors.turn_left(speed=60)
```

### `turn_right(speed=100)`

Draai rechts (rechterwiel achteruit, linkerwiel vooruit).

```python
motors.turn_right(speed=60)
```

### `turn_in_place(speed=30, direction="left")`

Draai op zijn plaats (de twee wielen tegenover elkaar).

```python
motors.turn_in_place(speed=30, direction="left")
motors.turn_in_place(speed=30, direction="right")
```

### `spin_left_wheel_forward(speed=100)` / `spin_left_wheel_backward(speed=100)`

Draait alleen het linkerwiel naar voren of naar achteren.

```python
motors.spin_left_wheel_forward(speed=50)
motors.spin_left_wheel_backward(speed=50)
```

### `spin_right_wheel_forward(speed=100)` / `spin_right_wheel_backward(speed=100)`

Draait alleen het rechterwiel naar voren of naar achteren.

```python
motors.spin_right_wheel_forward(speed=50)
motors.spin_right_wheel_backward(speed=50)
```

## Stopt

### `motor_stop()`

Onmiddellijke stop (actieve rem).

```python
motors.motor_stop()
```

### `slow_stop()`

Progressieve stop (freewheels).

```python
motors.slow_stop()
```

## Afstand-/hoekbewegingen

Deze methoden houden rekening met de accuspanning om de benodigde duur te schatten.

### `move_one_step(direction, distance=20)`

Ga een bepaalde afstand in centimeters vooruit of achteruit.

```python
motors.move_one_step("forward", distance=20)
motors.move_one_step("backward", distance=10)
```

### `turn_one_step(direction, angle=90)`

Roteert een bepaalde hoek in graden.

```python
motors.turn_one_step("left", angle=90)
motors.turn_one_step("right", angle=45)
```

## Batterij

### `get_battery_voltage()`

Retourneert de huidige accuspanning in volt.

```python
voltage = motors.get_battery_voltage()
print(f"Batterie : {voltage:.2f} V")
```

## Kleuren (utiliteit)

### `rgb_color_wheel(wheel_pos)` *(statische methode)*

Genereert een RGB-kleur vanuit een positie (0–255) op het kleurenwiel.

```python
r, g, b = Motors.rgb_color_wheel(128)
```

## Fysieke parameters

| Constante                   | Valeur       | Description                   |
|-----------------------------|--------------|-------------------------------|
| `SPACE_BETWEEN_WHEELS`      | 77.5 mm      | Écart entre les deux roues    |
| `WHEEL_DIAMETER`            | 33.5 mm      | Diamètre d'une roue           |
| `DISTANCE_PER_REVOLUTION`   | ~10.52 cm    | Distance par tour de roue     |

## Snelheidsnotities

- Snelheid wordt uitgedrukt als een percentage: `0` tot `100`.
- Onder `15` voegt de bibliotheek automatisch 15 toe om ervoor te zorgen dat de motoren starten.
- De waarde wordt intern omgezet naar PWM (0–65535).
