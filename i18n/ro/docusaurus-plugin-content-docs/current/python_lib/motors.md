---
sidebar_position: 1
title: "Motoare"
description: "Motoare de clasă — controlul motoarelor lui Eliobot"
---

# Motoare

Clasa `Motors` controlează cele două motoare ale lui Eliobot și oferă metode de deplasare la viteză variabilă sau pe o distanță precisă.

## Inițializare

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

## Mișcări continue

Aceste metode încep mișcarea până când este apelată o oprire.

### `move_forward(speed=100)`

Mergeți drept înainte.

```python
motors.move_forward(speed=80)
```

### `move_backward(speed=100)`

Du-te direct înapoi.

```python
motors.move_backward(speed=80)
```

### `turn_left(speed=100)`

Virați la stânga (roata stânga înapoi, roata dreaptă înainte).

```python
motors.turn_left(speed=60)
```

### `turn_right(speed=100)`

Virați la dreapta (roata dreaptă înapoi, roata stângă înainte).

```python
motors.turn_right(speed=60)
```

### `turn_in_place(speed=30, direction="left")`

Întoarceți-vă pe loc (cele două roți opuse una de cealaltă).

```python
motors.turn_in_place(speed=30, direction="left")
motors.turn_in_place(speed=30, direction="right")
```

### `spin_left_wheel_forward(speed=100)` / `spin_left_wheel_backward(speed=100)`

Rotiți doar roata din stânga înainte sau înapoi.

```python
motors.spin_left_wheel_forward(speed=50)
motors.spin_left_wheel_backward(speed=50)
```

### `spin_right_wheel_forward(speed=100)` / `spin_right_wheel_backward(speed=100)`

Rotiți doar roata dreaptă înainte sau înapoi.

```python
motors.spin_right_wheel_forward(speed=50)
motors.spin_right_wheel_backward(speed=50)
```

## Se opreste

### `motor_stop()`

Oprire imediată (frână activă).

```python
motors.motor_stop()
```

### `slow_stop()`

Oprire progresivă (roți libere).

```python
motors.slow_stop()
```

## Mișcări de distanță/unghi

Aceste metode iau în considerare tensiunea bateriei pentru a estima durata necesară.

### `move_one_step(direction, distance=20)`

Deplasați înainte sau înapoi pe o anumită distanță în centimetri.

```python
motors.move_one_step("forward", distance=20)
motors.move_one_step("backward", distance=10)
```

### `turn_one_step(direction, angle=90)`

Rotește un unghi dat în grade.

```python
motors.turn_one_step("left", angle=90)
motors.turn_one_step("right", angle=45)
```

## Baterie

### `get_battery_voltage()`

Returnează tensiunea curentă a bateriei în volți.

```python
voltage = motors.get_battery_voltage()
print(f"Batterie : {voltage:.2f} V")
```

## Culori (utilitate)

### `rgb_color_wheel(wheel_pos)` *(metoda statică)*

Generează o culoare RGB dintr-o poziție (0–255) pe roata de culori.

```python
r, g, b = Motors.rgb_color_wheel(128)
```

## Parametrii fizici

| Constante                   | Valeur       | Description                   |
|-----------------------------|--------------|-------------------------------|
| `SPACE_BETWEEN_WHEELS`      | 77.5 mm      | Écart entre les deux roues    |
| `WHEEL_DIAMETER`            | 33.5 mm      | Diamètre d'une roue           |
| `DISTANCE_PER_REVOLUTION`   | ~10.52 cm    | Distance par tour de roue     |

## Note de viteză

- Viteza este exprimată ca procent: `0` până la `100`.
- Sub `15`, biblioteca adaugă automat 15 pentru a se asigura că motoarele pornesc.
- Valoarea este convertită în PWM (0–65535) intern.
