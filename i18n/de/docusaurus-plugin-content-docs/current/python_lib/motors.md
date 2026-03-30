---
sidebar_position: 1
title: "Motoren"
description: "Klassenmotoren – Steuerung der Motoren von Eliobot"
---

# Motoren

Die `Motors`-Klasse steuert die beiden Motoren von Eliobot und bietet Methoden zur Bewegung mit variabler Geschwindigkeit oder über eine präzise Distanz.

## Initialisierung

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

## Kontinuierliche Bewegungen

Diese Methoden starten die Bewegung, bis ein Stopp aufgerufen wird.

### `move_forward(speed=100)`

Gehen Sie geradeaus.

```python
motors.move_forward(speed=80)
```

### `move_backward(speed=100)`

Geh direkt zurück.

```python
motors.move_backward(speed=80)
```

### `turn_left(speed=100)`

Nach links abbiegen (linkes Rad nach hinten, rechtes Rad nach vorne).

```python
motors.turn_left(speed=60)
```

### `turn_right(speed=100)`

Rechts abbiegen (rechtes Rad nach hinten, linkes Rad nach vorne).

```python
motors.turn_right(speed=60)
```

### `turn_in_place(speed=30, direction="left")`

Auf der Stelle drehen (die beiden Räder stehen sich gegenüber).

```python
motors.turn_in_place(speed=30, direction="left")
motors.turn_in_place(speed=30, direction="right")
```

### `spin_left_wheel_forward(speed=100)` / `spin_left_wheel_backward(speed=100)`

Dreht nur das linke Rad vorwärts oder rückwärts.

```python
motors.spin_left_wheel_forward(speed=50)
motors.spin_left_wheel_backward(speed=50)
```

### `spin_right_wheel_forward(speed=100)` / `spin_right_wheel_backward(speed=100)`

Dreht nur das rechte Rad vorwärts oder rückwärts.

```python
motors.spin_right_wheel_forward(speed=50)
motors.spin_right_wheel_backward(speed=50)
```

## Stoppt

### `motor_stop()`

Sofortiger Stopp (aktive Bremse).

```python
motors.motor_stop()
```

### `slow_stop()`

Progressiver Anschlag (Freiläufe).

```python
motors.slow_stop()
```

## Distanz-/Winkelbewegungen

Diese Methoden berücksichtigen die Batteriespannung, um die erforderliche Dauer abzuschätzen.

### `move_one_step(direction, distance=20)`

Bewegen Sie sich um eine bestimmte Distanz in Zentimetern vorwärts oder rückwärts.

```python
motors.move_one_step("forward", distance=20)
motors.move_one_step("backward", distance=10)
```

### `turn_one_step(direction, angle=90)`

Dreht einen bestimmten Winkel in Grad.

```python
motors.turn_one_step("left", angle=90)
motors.turn_one_step("right", angle=45)
```

## Batterie

### `get_battery_voltage()`

Gibt die aktuelle Batteriespannung in Volt zurück.

```python
voltage = motors.get_battery_voltage()
print(f"Batterie : {voltage:.2f} V")
```

## Farben (Dienstprogramm)

### `rgb_color_wheel(wheel_pos)` *(statische Methode)*

Erzeugt eine RGB-Farbe aus einer Position (0–255) im Farbkreis.

```python
r, g, b = Motors.rgb_color_wheel(128)
```

## Physikalische Parameter

| Constante                   | Valeur       | Description                   |
|-----------------------------|--------------|-------------------------------|
| `SPACE_BETWEEN_WHEELS`      | 77.5 mm      | Écart entre les deux roues    |
| `WHEEL_DIAMETER`            | 33.5 mm      | Diamètre d'une roue           |
| `DISTANCE_PER_REVOLUTION`   | ~10.52 cm    | Distance par tour de roue     |

## Geschwindigkeitshinweise

- Die Geschwindigkeit wird als Prozentsatz ausgedrückt: `0` bis `100`.
- Unterhalb von `15` fügt die Bibliothek automatisch 15 hinzu, um sicherzustellen, dass die Motoren starten.
- Der Wert wird intern in PWM (0–65535) umgewandelt.
