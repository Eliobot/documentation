---
sidebar_position: 1
title: "Silniki"
description: "Class Motors — sterowanie silnikami Eliobota"
---

# Silniki

Klasa `Motors` steruje dwoma silnikami Eliobota i zapewnia metody poruszania się ze zmienną prędkością lub na określoną odległość.

## Inicjalizacja

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

## Ciągłe ruchy

Metody te rozpoczynają ruch aż do wywołania zatrzymania.

### `move_forward(speed=100)`

Idź prosto.

```python
motors.move_forward(speed=80)
```

### `move_backward(speed=100)`

Idź prosto z powrotem.

```python
motors.move_backward(speed=80)
```

### `turn_left(speed=100)`

Skręć w lewo (lewe koło do tyłu, prawe koło do przodu).

```python
motors.turn_left(speed=60)
```

### `turn_right(speed=100)`

Skręć w prawo (prawe koło do tyłu, lewe koło do przodu).

```python
motors.turn_right(speed=60)
```

### `turn_in_place(speed=30, direction="left")`

Skręć w miejscu (dwa koła naprzeciwko siebie).

```python
motors.turn_in_place(speed=30, direction="left")
motors.turn_in_place(speed=30, direction="right")
```

### `spin_left_wheel_forward(speed=100)` / `spin_left_wheel_backward(speed=100)`

Kręci tylko lewym kołem do przodu lub do tyłu.

```python
motors.spin_left_wheel_forward(speed=50)
motors.spin_left_wheel_backward(speed=50)
```

### `spin_right_wheel_forward(speed=100)` / `spin_right_wheel_backward(speed=100)`

Kręci tylko prawym kołem do przodu lub do tyłu.

```python
motors.spin_right_wheel_forward(speed=50)
motors.spin_right_wheel_backward(speed=50)
```

## Zatrzymuje się

### `motor_stop()`

Natychmiastowe zatrzymanie (aktywny hamulec).

```python
motors.motor_stop()
```

### `slow_stop()`

Zatrzymanie progresywne (wolnobiegi).

```python
motors.slow_stop()
```

## Ruchy na odległość/kąt

Metody te uwzględniają napięcie akumulatora w celu oszacowania wymaganego czasu trwania.

### `move_one_step(direction, distance=20)`

Przejdź do przodu lub do tyłu o określoną odległość w centymetrach.

```python
motors.move_one_step("forward", distance=20)
motors.move_one_step("backward", distance=10)
```

### `turn_one_step(direction, angle=90)`

Obraca dany kąt w stopniach.

```python
motors.turn_one_step("left", angle=90)
motors.turn_one_step("right", angle=45)
```

## Bateria

### `get_battery_voltage()`

Zwraca aktualne napięcie akumulatora w woltach.

```python
voltage = motors.get_battery_voltage()
print(f"Batterie : {voltage:.2f} V")
```

## Kolory (użytkowe)

### `rgb_color_wheel(wheel_pos)` *(metoda statyczna)*

Generuje kolor RGB na podstawie pozycji (0–255) na kole kolorów.

```python
r, g, b = Motors.rgb_color_wheel(128)
```

## Parametry fizyczne

| Constante                   | Valeur       | Description                   |
|-----------------------------|--------------|-------------------------------|
| `SPACE_BETWEEN_WHEELS`      | 77.5 mm      | Écart entre les deux roues    |
| `WHEEL_DIAMETER`            | 33.5 mm      | Diamètre d'une roue           |
| `DISTANCE_PER_REVOLUTION`   | ~10.52 cm    | Distance par tour de roue     |

## Uwagi dotyczące prędkości

- Prędkość wyrażana jest w procentach: `0` do `100`.
- Poniżej `15` biblioteka automatycznie dodaje 15, aby zapewnić uruchomienie silników.
- Wartość jest wewnętrznie konwertowana na PWM (0–65535).
