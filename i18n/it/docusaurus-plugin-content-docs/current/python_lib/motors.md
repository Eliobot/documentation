---
sidebar_position: 1
title: "Motori"
description: "Class Motors: controllo dei motori di Eliobot"
---

# Motori

La classe `Motors` controlla i due motori di Eliobot e fornisce metodi per spostarsi a velocità variabile o su una distanza precisa.

## Inizializzazione

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

## Movimenti continui

Questi metodi avviano il movimento finché non viene chiamato uno stop.

### `move_forward(speed=100)`

Vai dritto.

```python
motors.move_forward(speed=80)
```

### `move_backward(speed=100)`

Torna subito indietro.

```python
motors.move_backward(speed=80)
```

### `turn_left(speed=100)`

Girare a sinistra (ruota sinistra indietro, ruota destra avanti).

```python
motors.turn_left(speed=60)
```

### `turn_right(speed=100)`

Girare a destra (ruota destra indietro, ruota sinistra avanti).

```python
motors.turn_right(speed=60)
```

### `turn_in_place(speed=30, direction="left")`

Girare sul posto (le due ruote una di fronte all'altra).

```python
motors.turn_in_place(speed=30, direction="left")
motors.turn_in_place(speed=30, direction="right")
```

### `spin_left_wheel_forward(speed=100)` / `spin_left_wheel_backward(speed=100)`

Gira solo la ruota sinistra in avanti o all'indietro.

```python
motors.spin_left_wheel_forward(speed=50)
motors.spin_left_wheel_backward(speed=50)
```

### `spin_right_wheel_forward(speed=100)` / `spin_right_wheel_backward(speed=100)`

Gira solo la ruota destra in avanti o all'indietro.

```python
motors.spin_right_wheel_forward(speed=50)
motors.spin_right_wheel_backward(speed=50)
```

## Si ferma

### `motor_stop()`

Arresto immediato (freno attivo).

```python
motors.motor_stop()
```

### `slow_stop()`

Arresto progressivo (ruote libere).

```python
motors.slow_stop()
```

## Movimenti di distanza/angolo

Questi metodi tengono conto della tensione della batteria per stimare la durata necessaria.

### `move_one_step(direction, distance=20)`

Spostarsi avanti o indietro di una determinata distanza in centimetri.

```python
motors.move_one_step("forward", distance=20)
motors.move_one_step("backward", distance=10)
```

### `turn_one_step(direction, angle=90)`

Ruota un dato angolo in gradi.

```python
motors.turn_one_step("left", angle=90)
motors.turn_one_step("right", angle=45)
```

## Batteria

### `get_battery_voltage()`

Restituisce la tensione attuale della batteria in volt.

```python
voltage = motors.get_battery_voltage()
print(f"Batterie : {voltage:.2f} V")
```

## Colori (utilità)

### `rgb_color_wheel(wheel_pos)` *(metodo statico)*

Genera un colore RGB da una posizione (0–255) sulla ruota dei colori.

```python
r, g, b = Motors.rgb_color_wheel(128)
```

## Parametri fisici

| Constante                   | Valeur       | Description                   |
|-----------------------------|--------------|-------------------------------|
| `SPACE_BETWEEN_WHEELS`      | 77.5 mm      | Écart entre les deux roues    |
| `WHEEL_DIAMETER`            | 33.5 mm      | Diamètre d'une roue           |
| `DISTANCE_PER_REVOLUTION`   | ~10.52 cm    | Distance par tour de roue     |

## Note sulla velocità

- La velocità è espressa in percentuale: da `0` a `100`.
- Sotto `15`, la libreria aggiunge automaticamente 15 per garantire l'avvio dei motori.
- Il valore viene convertito internamente in PWM (0–65535).
