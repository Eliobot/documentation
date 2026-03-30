---
sidebar_position: 2
title: "Cicalino"
description: "Lezione Buzzer: suoni e melodie su Eliobot"
---

# Cicalino

La classe `Buzzer` controlla il cicalino passivo di Eliobot. Ti permette di riprodurre toni, note musicali e suoni predefiniti.

## Inizializzazione

```python
import board
import pwmio
from elio import Buzzer

buzzer_pin = pwmio.PWMOut(board.IO17, variable_frequency=True)
buzzer = Buzzer(buzzer_pin)
```

## Metodi di base

### `play_tone(frequency, duration, volume)`

Riproduce un tono a una determinata frequenza.

| Paramètre   | Type  | Description                          |
|-------------|-------|--------------------------------------|
| `frequency` | float | Fréquence en Hz                      |
| `duration`  | float | Durée en secondes                    |
| `volume`    | int   | Volume (0–100)                       |

```python
buzzer.play_tone(440, 0.5, 80)  # La4 pendant 0.5 seconde
```

### `play_note(note, duration, NOTES_FREQUENCIES, volume)`

Riproduce una nota da un dizionario di frequenze.

```python
NOTES = {
    "Do": 262,
    "Re": 294,
    "Mi": 330,
    "Fa": 349,
    "Sol": 392,
    "La": 440,
    "Si": 494,
    "silence": 0.1,
}

buzzer.play_note("Do", 0.5, NOTES, 80)
buzzer.play_note("silence", 0.25, NOTES, 0)  # pause
```

:::tip
Utilizzare il valore `0.1` per rappresentare una pausa nel dizionario delle note.
:::

### `sweep(start, end, dur, steps=10, pause=0.01)`

Esegue la scansione di una gamma di frequenze da `start` a `end` in `steps` passi in `dur` secondi.

```python
buzzer.sweep(500, 1500, 0.3, steps=12)
```

## Suoni preimpostati

La classe include una raccolta di suoni pronti all'uso:

| Méthode             | Description                        |
|---------------------|------------------------------------|
| `sound_startup()`   | Son de démarrage                   |
| `sound_hello()`     | Salutation                         |
| `sound_happy()`     | Son joyeux                         |
| `sound_win()`       | Victoire                           |
| `sound_sad()` *(non disponible)* | — |
| `sound_jump()`      | Saut                               |
| `sound_land()`      | Atterrissage                       |
| `sound_laser()`     | Effet laser                        |
| `sound_explosion()` | Explosion                          |
| `sound_bump()`      | Collision                          |
| `sound_error()`     | Erreur                             |
| `sound_alert()`     | Alerte (bip répété)                |
| `sound_question()`  | Interrogation                      |
| `sound_blink()`     | Petit bip court                    |
| `sound_music()` *(non disponible)* | — |

```python
buzzer.sound_startup()
buzzer.sound_hello()
buzzer.sound_happy()
buzzer.sound_win()
buzzer.sound_jump()
buzzer.sound_land()
buzzer.sound_laser()
buzzer.sound_explosion()
buzzer.sound_bump()
buzzer.sound_error()
buzzer.sound_alert()
buzzer.sound_question()
buzzer.sound_blink()
```

## Esempio completo: suonare una melodia

```python
import board
import pwmio
from elio import Buzzer

buzzer_pin = pwmio.PWMOut(board.IO17, variable_frequency=True)
buzzer = Buzzer(buzzer_pin)

NOTES = {
    "Do": 262,
    "Re": 294,
    "Mi": 330,
    "Fa": 349,
    "Sol": 392,
    "La": 440,
    "Si": 494,
    "silence": 0.1,
}

melodie = [
    ("Do", 0.3),
    ("Re", 0.3),
    ("Mi", 0.3),
    ("Sol", 0.6),
    ("silence", 0.2),
    ("La", 0.5),
]

for note, duree in melodie:
    buzzer.play_note(note, duree, NOTES, 80)
```
