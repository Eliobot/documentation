---
sidebar_position: 1
title: "Motors"
description: "Classe Motors — contrôle des moteurs d'Eliobot"
---

# Motors

La classe `Motors` contrôle les deux moteurs d'Eliobot et fournit des méthodes de déplacement à vitesse variable ou sur une distance précise.

## Initialisation

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

## Déplacements continus

Ces méthodes démarrent le mouvement jusqu'à l'appel d'un arrêt.

### `move_forward(speed=100)`

Avance tout droit.

```python
motors.move_forward(speed=80)
```

### `move_backward(speed=100)`

Recule tout droit.

```python
motors.move_backward(speed=80)
```

### `turn_left(speed=100)`

Tourne à gauche (roue gauche en arrière, roue droite en avant).

```python
motors.turn_left(speed=60)
```

### `turn_right(speed=100)`

Tourne à droite (roue droite en arrière, roue gauche en avant).

```python
motors.turn_right(speed=60)
```

### `turn_in_place(speed=30, direction="left")`

Tourne sur place (les deux roues opposées).

```python
motors.turn_in_place(speed=30, direction="left")
motors.turn_in_place(speed=30, direction="right")
```

### `spin_left_wheel_forward(speed=100)` / `spin_left_wheel_backward(speed=100)`

Fait tourner uniquement la roue gauche vers l'avant ou l'arrière.

```python
motors.spin_left_wheel_forward(speed=50)
motors.spin_left_wheel_backward(speed=50)
```

### `spin_right_wheel_forward(speed=100)` / `spin_right_wheel_backward(speed=100)`

Fait tourner uniquement la roue droite vers l'avant ou l'arrière.

```python
motors.spin_right_wheel_forward(speed=50)
motors.spin_right_wheel_backward(speed=50)
```

## Arrêts

### `motor_stop()`

Arrêt immédiat (frein actif).

```python
motors.motor_stop()
```

### `slow_stop()`

Arrêt progressif (roues libres).

```python
motors.slow_stop()
```

## Déplacements sur distance / angle

Ces méthodes tiennent compte de la tension batterie pour estimer la durée nécessaire.

### `move_one_step(direction, distance=20)`

Avance ou recule d'une distance donnée en centimètres.

```python
motors.move_one_step("forward", distance=20)
motors.move_one_step("backward", distance=10)
```

### `turn_one_step(direction, angle=90)`

Tourne d'un angle donné en degrés.

```python
motors.turn_one_step("left", angle=90)
motors.turn_one_step("right", angle=45)
```

## Batterie

### `get_battery_voltage()`

Retourne la tension actuelle de la batterie en volts.

```python
voltage = motors.get_battery_voltage()
print(f"Batterie : {voltage:.2f} V")
```

## Couleurs (utilitaire)

### `rgb_color_wheel(wheel_pos)` *(méthode statique)*

Génère une couleur RGB à partir d'une position (0–255) sur la roue des couleurs.

```python
r, g, b = Motors.rgb_color_wheel(128)
```

## Paramètres physiques

| Constante                   | Valeur       | Description                   |
|-----------------------------|--------------|-------------------------------|
| `SPACE_BETWEEN_WHEELS`      | 77.5 mm      | Écart entre les deux roues    |
| `WHEEL_DIAMETER`            | 33.5 mm      | Diamètre d'une roue           |
| `DISTANCE_PER_REVOLUTION`   | ~10.52 cm    | Distance par tour de roue     |

## Remarques sur la vitesse

- La vitesse est exprimée en pourcentage : `0` à `100`.
- En dessous de `15`, la librairie ajoute automatiquement 15 pour garantir que les moteurs démarrent.
- La valeur est convertie en PWM (0–65535) en interne.
