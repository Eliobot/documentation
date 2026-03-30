---
sidebar_position: 6
title: "IRRemote"
description: "Classe IRRemote: ricezione di segnali infrarossi"
---

# IRRemote

La classe `IRRemote` gestisce la ricezione dei segnali infrarossi emessi dal telecomando di Eliobot.

## Inizializzazione

```python
import board
import pulseio
import adafruit_irremote
from elio import IRRemote

ir_pin = pulseio.PulseIn(board.IO9, maxlen=120, idle_state=True)
ir_receiver_hw = adafruit_irremote.GenericRemote()
ir = IRRemote(ir_pin)
```

## Segnali disponibili

La classe espone un dizionario di classe `signals` con tutti i pulsanti del telecomando:

| Clé            | Bouton      |
|----------------|-------------|
| `signal_0`     | `0`         |
| `signal_1`     | `1`         |
| `signal_2`     | `2`         |
| `signal_3`     | `3`         |
| `signal_4`     | `4`         |
| `signal_5`     | `5`         |
| `signal_6`     | `6`         |
| `signal_7`     | `7`         |
| `signal_8`     | `8`         |
| `signal_9`     | `9`         |
| `signal_st`    | `*`         |
| `signal_ht`    | `#`         |
| `signal_up`    | Flèche haut  |
| `signal_down`  | Flèche bas   |
| `signal_left`  | Flèche gauche|
| `signal_right` | Flèche droite|
| `signal_ok`    | `OK`        |

Accesso al dizionario:

```python
print(IRRemote.signals["signal_ok"])
# (0, 255, 56, 199)
```

## Metodi

### `decode_signal()`

Decodifica il segnale infrarosso ricevuto e restituisce il codice come una tupla, o `None` se nessun segnale valido.

```python
code = ir.decode_signal()
if code:
    print("Signal reçu :", code)
```

## Esempio completo: telecomando per controllare i motori

```python
import board
import pwmio
import analogio
import pulseio
import adafruit_irremote
from elio import Motors, IRRemote

# Moteurs
AIN1 = pwmio.PWMOut(board.IO36)
AIN2 = pwmio.PWMOut(board.IO38)
BIN1 = pwmio.PWMOut(board.IO35)
BIN2 = pwmio.PWMOut(board.IO37)
vBatt_pin = analogio.AnalogIn(board.BATTERY)
motors = Motors(AIN1, AIN2, BIN1, BIN2, vBatt_pin)

# Télécommande IR
ir_pin = pulseio.PulseIn(board.IO9, maxlen=120, idle_state=True)
ir = IRRemote(ir_pin)

signals = IRRemote.signals

while True:
    code = ir.decode_signal()

    if code == list(signals["signal_up"]):
        motors.move_forward(80)
    elif code == list(signals["signal_down"]):
        motors.move_backward(80)
    elif code == list(signals["signal_left"]):
        motors.turn_left(60)
    elif code == list(signals["signal_right"]):
        motors.turn_right(60)
    elif code == list(signals["signal_ok"]):
        motors.motor_stop()
```
