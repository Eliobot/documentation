---
sidebar_position: 7
title: "EyesMatrix"
description: "EyesMatrix class — control of the LED matrix (Eliobot's eyes)"
---

# EyesMatrix

The `EyesMatrix` class controls the NeoPixel LED matrix (Eliobot's eyes): 2 8×8 matrices for a total of 128 LEDs.

## Physical layout

```
        Œil droit (indices 0–63)          Œil gauche (indices 64–127)
[  0][  1][  2][  3][  4][  5][  6][  7]  [ 64][ 65][ 66][ 67][ 68][ 69][ 70][ 71]
[  8][  9][ 10][ 11][ 12][ 13][ 14][ 15]  [ 72][ 73][ 74][ 75][ 76][ 77][ 78][ 79]
[ 16][ 17][ 18][ 19][ 20][ 21][ 22][ 23]  [ 80][ 81][ 82][ 83][ 84][ 85][ 86][ 87]
[ 24][ 25][ 26][ 27][ 28][ 29][ 30][ 31]  [ 88][ 89][ 90][ 91][ 92][ 93][ 94][ 95]
[ 32][ 33][ 34][ 35][ 36][ 37][ 38][ 39]  [ 96][ 97][ 98][ 99][100][101][102][103]
[ 40][ 41][ 42][ 43][ 44][ 45][ 46][ 47]  [104][105][106][107][108][109][110][111]
[ 48][ 49][ 50][ 51][ 52][ 53][ 54][ 55]  [112][113][114][115][116][117][118][119]
[ 56][ 57][ 58][ 59][ 60][ 61][ 62][ 63]  [120][121][122][123][124][125][126][127]
```

## Initialization

```python
import board
from elio import EyesMatrix

eyes = EyesMatrix(board.IO2, brightness=0.05)
```

| Paramètre    | Type  | Défaut | Description                   |
|--------------|-------|--------|-------------------------------|
| `pin`        | Pin   | —      | Pin de la matrice NeoPixel    |
| `brightness` | float | `0.05` | Luminosité (0.0 à 1.0)        |

## Display methods

### `set_matrix_colors(led_colors)`

Defines the color of each LED from a list of 128 RGB tuples.

```python
colors = [(255, 0, 0)] * 64 + [(0, 0, 255)] * 64  # Œil droit rouge, gauche bleu
eyes.set_matrix_colors(colors)
```

### `clear_matrix()`

Turns off all LEDs.

```python
eyes.clear_matrix()
```

### `set_matrix_logo(logo, color)`

Displays a logo (list of 128 booleans) with a given color.

```python
eyes.set_matrix_logo(eyes.emotionHappy, (255, 200, 0))
```

## Predefined emotions

The class includes ready-made logos depicting emotions:

| Attribut           | Description     |
|--------------------|-----------------|
| `emotionHappy`     | Content         |
| `emotionSad`       | Triste          |
| `emotionAngry`     | En colère       |
| `emotionNeutral`   | Neutre          |
| `emotionThrilled`  | Enthousiaste    |
| `emotionTired`     | Fatigué         |
| `emotionAmazed`    | Étonné          |
| `emotionDizzy`     | Étourdi         |
| `emotionConfused`  | Confus          |
| `emotionLove`      | Amour           |
| `emotionKO`        | KO              |
| `emotionMusic`     | Musique         |

```python
eyes.set_matrix_logo(eyes.emotionHappy, (255, 200, 0))   # Yeux jaunes contents
eyes.set_matrix_logo(eyes.emotionSad, (0, 100, 255))     # Yeux bleus tristes
```

## Predefined arrows

| Attribut      | Description    |
|---------------|----------------|
| `arrowRight`  | Flèche droite  |
| `arrowLeft`   | Flèche gauche  |
| `arrowUp`     | Flèche haut    |
| `arrowDown`   | Flèche bas     |

```python
eyes.set_matrix_logo(eyes.arrowRight, (0, 255, 0))
```

## Text scrolling

### `scroll_matrix_text_both_eyes(text, color, speed=0.1)`

Scrolls text over **both eyes** from right to left.

| Paramètre | Type  | Défaut | Description                        |
|-----------|-------|--------|------------------------------------|
| `text`    | str   | —      | Texte à afficher                   |
| `color`   | tuple | —      | Couleur RGB                        |
| `speed`   | float | `0.1`  | Délai entre chaque frame (secondes)|

```python
eyes.scroll_matrix_text_both_eyes("Eliobot!", (255, 255, 0), speed=0.08)
```

### `scroll_matrix_text_eye(text, color, eye=0, speed=0.1)`

Scrolls text on **one eye**.

| Paramètre | Type       | Défaut | Description                                        |
|-----------|------------|--------|----------------------------------------------------|
| `text`    | str        | —      | Texte à afficher                                   |
| `color`   | tuple      | —      | Couleur RGB                                        |
| `eye`     | int ou str | `0`    | `0` ou `"right"` = œil droit, `1` ou `"left"` = œil gauche |
| `speed`   | float      | `0.1`  | Délai entre chaque frame (secondes)                |

```python
eyes.scroll_matrix_text_eye("Hello", (0, 255, 0), eye="left", speed=0.1)
eyes.scroll_matrix_text_eye("42", (255, 0, 0), eye=0)
```

## Supported characters

Scrolling supports letters (upper and lower case), numbers and common symbols: `? ! , . - _ / \ ( ) [ ] @ # $ = + * ^ & % | : ; ' < >`

## Complete example

```python
import board
import time
from elio import EyesMatrix

eyes = EyesMatrix(board.IO2, brightness=0.05)

# Afficher une émotion
eyes.set_matrix_logo(eyes.emotionHappy, (255, 200, 0))
time.sleep(2)

# Faire défiler du texte
eyes.scroll_matrix_text_both_eyes("Bonjour!", (0, 200, 255), speed=0.08)

# Éteindre
eyes.clear_matrix()
```
