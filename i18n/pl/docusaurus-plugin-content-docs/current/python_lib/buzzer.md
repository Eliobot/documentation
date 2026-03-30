---
sidebar_position: 2
title: "Brzęczyk"
description: "Klasa Buzzera — dźwięki i melodie na Eliobocie"
---

# Brzęczyk

Klasa `Buzzer` steruje pasywnym brzęczykiem Eliobota. Umożliwia odtwarzanie dźwięków, nut i predefiniowanych dźwięków.

## Inicjalizacja

```python
import board
import pwmio
from elio import Buzzer

buzzer_pin = pwmio.PWMOut(board.IO17, variable_frequency=True)
buzzer = Buzzer(buzzer_pin)
```

## Podstawowe metody

### `play_tone(frequency, duration, volume)`

Odtwarza dźwięk o określonej częstotliwości.

| Paramètre   | Type  | Description                          |
|-------------|-------|--------------------------------------|
| `frequency` | float | Fréquence en Hz                      |
| `duration`  | float | Durée en secondes                    |
| `volume`    | int   | Volume (0–100)                       |

```python
buzzer.play_tone(440, 0.5, 80)  # La4 pendant 0.5 seconde
```

### `play_note(note, duration, NOTES_FREQUENCIES, volume)`

Odtwarza nutę ze słownika częstotliwości.

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
Użyj wartości `0.1`, aby reprezentować pauzę w słowniku nut.
:::

### `sweep(start, end, dur, steps=10, pause=0.01)`

Skanuje zakres częstotliwości od `start` do `end` w krokach `steps` w ciągu `dur` sekund.

```python
buzzer.sweep(500, 1500, 0.3, steps=12)
```

## Zaprogramowane dźwięki

Zajęcia zawierają zbiór gotowych dźwięków:

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

## Kompletny przykład — granie melodii

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
