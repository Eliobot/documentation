---
sidebar_position: 1
title: "motores"
description: "Class Motors: control de los motores de Eliobot"
---

# motores

La clase `Motors` controla los dos motores de Eliobot y proporciona métodos para moverse a velocidad variable o en una distancia precisa.

## Inicialización

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

## Movimientos continuos

Estos métodos inician el movimiento hasta que se llama a una parada.

### `move_forward(speed=100)`

Siga recto.

```python
motors.move_forward(speed=80)
```

### `move_backward(speed=100)`

Vuelve directamente.

```python
motors.move_backward(speed=80)
```

### `turn_left(speed=100)`

Gire a la izquierda (rueda izquierda hacia atrás, rueda derecha hacia adelante).

```python
motors.turn_left(speed=60)
```

### `turn_right(speed=100)`

Gire a la derecha (rueda derecha hacia atrás, rueda izquierda hacia adelante).

```python
motors.turn_right(speed=60)
```

### `turn_in_place(speed=30, direction="left")`

Gire en su lugar (las dos ruedas una frente a la otra).

```python
motors.turn_in_place(speed=30, direction="left")
motors.turn_in_place(speed=30, direction="right")
```

### `spin_left_wheel_forward(speed=100)` / `spin_left_wheel_backward(speed=100)`

Gira sólo la rueda izquierda hacia adelante o hacia atrás.

```python
motors.spin_left_wheel_forward(speed=50)
motors.spin_left_wheel_backward(speed=50)
```

### `spin_right_wheel_forward(speed=100)` / `spin_right_wheel_backward(speed=100)`

Gira sólo la rueda derecha hacia adelante o hacia atrás.

```python
motors.spin_right_wheel_forward(speed=50)
motors.spin_right_wheel_backward(speed=50)
```

## Paradas

### `motor_stop()`

Parada inmediata (freno activo).

```python
motors.motor_stop()
```

### `slow_stop()`

Parada progresiva (ruedas libres).

```python
motors.slow_stop()
```

## Movimientos de distancia/ángulo

Estos métodos tienen en cuenta el voltaje de la batería para estimar la duración requerida.

### `move_one_step(direction, distance=20)`

Avanzar o retroceder una distancia determinada en centímetros.

```python
motors.move_one_step("forward", distance=20)
motors.move_one_step("backward", distance=10)
```

### `turn_one_step(direction, angle=90)`

Gira un ángulo determinado en grados.

```python
motors.turn_one_step("left", angle=90)
motors.turn_one_step("right", angle=45)
```

## Batería

### `get_battery_voltage()`

Devuelve el voltaje actual de la batería en voltios.

```python
voltage = motors.get_battery_voltage()
print(f"Batterie : {voltage:.2f} V")
```

## Colores (utilidad)

### `rgb_color_wheel(wheel_pos)` *(método estático)*

Genera un color RGB desde una posición (0–255) en la rueda de colores.

```python
r, g, b = Motors.rgb_color_wheel(128)
```

## Parámetros físicos

| Constante                   | Valeur       | Description                   |
|-----------------------------|--------------|-------------------------------|
| `SPACE_BETWEEN_WHEELS`      | 77.5 mm      | Écart entre les deux roues    |
| `WHEEL_DIAMETER`            | 33.5 mm      | Diamètre d'une roue           |
| `DISTANCE_PER_REVOLUTION`   | ~10.52 cm    | Distance par tour de roue     |

## Notas de velocidad

- La velocidad se expresa en porcentaje: `0` a `100`.
- Debajo de `15`, la biblioteca agrega automáticamente 15 para garantizar que los motores arranquen.
- El valor se convierte a PWM (0–65535) internamente.
