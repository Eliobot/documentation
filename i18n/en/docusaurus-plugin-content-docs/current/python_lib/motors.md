---
sidebar_position: 1
title: "Motors"
description: "Class Motors — control of Eliobot's motors"
---

# Motors

The `Motors` class controls Eliobot's two motors and provides methods of moving at variable speed or over a precise distance.

## Initialization

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

## Continuous movements

These methods start the movement until a stop is called.

### `move_forward(speed=100)`

Go straight ahead.

```python
motors.move_forward(speed=80)
```

### `move_backward(speed=100)`

Go straight back.

```python
motors.move_backward(speed=80)
```

### `turn_left(speed=100)`

Turn left (left wheel back, right wheel forward).

```python
motors.turn_left(speed=60)
```

### `turn_right(speed=100)`

Turn right (right wheel back, left wheel forward).

```python
motors.turn_right(speed=60)
```

### `turn_in_place(speed=30, direction="left")`

Turn in place (the two wheels opposite each other).

```python
motors.turn_in_place(speed=30, direction="left")
motors.turn_in_place(speed=30, direction="right")
```

### `spin_left_wheel_forward(speed=100)` / `spin_left_wheel_backward(speed=100)`

Turns only the left wheel forward or backward.

```python
motors.spin_left_wheel_forward(speed=50)
motors.spin_left_wheel_backward(speed=50)
```

### `spin_right_wheel_forward(speed=100)` / `spin_right_wheel_backward(speed=100)`

Turns only the right wheel forward or backward.

```python
motors.spin_right_wheel_forward(speed=50)
motors.spin_right_wheel_backward(speed=50)
```

## Stops

### `motor_stop()`

Immediate stop (active brake).

```python
motors.motor_stop()
```

### `slow_stop()`

Progressive stop (freewheels).

```python
motors.slow_stop()
```

## Distance/angle movements

These methods take the battery voltage into account to estimate the duration required.

### `move_one_step(direction, distance=20)`

Move forward or backward a given distance in centimeters.

```python
motors.move_one_step("forward", distance=20)
motors.move_one_step("backward", distance=10)
```

### `turn_one_step(direction, angle=90)`

Rotates a given angle in degrees.

```python
motors.turn_one_step("left", angle=90)
motors.turn_one_step("right", angle=45)
```

## Battery

### `get_battery_voltage()`

Returns the current battery voltage in volts.

```python
voltage = motors.get_battery_voltage()
print(f"Batterie : {voltage:.2f} V")
```

## Colors (utility)

### `rgb_color_wheel(wheel_pos)` *(static method)*

Generates an RGB color from a position (0–255) on the color wheel.

```python
r, g, b = Motors.rgb_color_wheel(128)
```

## Physical parameters

| Constante                   | Valeur       | Description                   |
|-----------------------------|--------------|-------------------------------|
| `SPACE_BETWEEN_WHEELS`      | 77.5 mm      | Écart entre les deux roues    |
| `WHEEL_DIAMETER`            | 33.5 mm      | Diamètre d'une roue           |
| `DISTANCE_PER_REVOLUTION`   | ~10.52 cm    | Distance par tour de roue     |

## Speed ​​Notes

- Speed ​​is expressed as a percentage: `0` to `100`.
- Below `15`, the library automatically adds 15 to ensure that the motors start.
- The value is converted to PWM (0–65535) internally.
