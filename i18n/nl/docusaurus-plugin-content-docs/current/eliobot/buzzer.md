---
last_modified_on: "2024-02-26"
title: "Zoemer"
description: "Eliobot-component - Zoemer"
---


<img src={require("@site/static/img/eliobot/buzzer/Eliobot - Buzzer.png").default} alt="Eliobot buzzer" width="49%" />

<br/>Le buzzer d'Eliobot est un buzzer passif, il peut donc émettre des sons sur une grande plage de fréquence un peu comme les vieux téléphones.

## Gebruik met Elioblocs

Om de zoemer van Eliobot op Elioblocs te gebruiken, gebruiken we blokken uit de categorie <img src={require("@site/static/img/eliobot/buzzer/category-sound.jpg").default} style={{ width: "14%", verticalAlign: "middle" }} alt="catégorie son" /> om een ​​geluid af te spelen.

## Gebruik met Python

Om noten in Python te spelen, gebruiken we de `IO17` pin als PWM-uitgang om de gewenste frequentie te kunnen reproduceren.

Om muziek af te spelen herhaalt u eenvoudigweg de gewenste frequenties, zoals in een partituur.

## Gerelateerde voorbeelden

### Elioblocs voorbeeld

>
> <img src={require("@site/static/img/eliobot/buzzer/example-buzzer-elioblocs.jpg").default} alt="exemple buzzer elioblocs" width="49%" />
>   

Hier spelen we de noot `Do` gedurende 1 seconde en beginnen we oneindig opnieuw.

---

### Python-voorbeeld

#### Met de bibliotheek `elio.py`

```python
import board
import pwmio
from elio import Buzzer

buzzer_pin = pwmio.PWMOut(board.IO17, variable_frequency=True)
buzzer = Buzzer(buzzer_pin)

NOTES = {
    "Do": 262,
    "silence": 0.1,
}

while True:
    buzzer.play_note("Do", 1, NOTES, 80)  # Joue Do pendant 1 seconde
    buzzer.play_note("silence", 1, NOTES, 0)  # Pause d'1 seconde
```

Hier spelen we de noot `Do` gedurende 1 seconde en beginnen we oneindig opnieuw.

---

#### Zonder de bibliotheek `elio.py`

```python
import board
import pwmio
import time

buzzer = pwmio.PWMOut(board.IO17, variable_frequency=True)

while True:
    buzzer.frequency = 262       # Fréquence de la note Do
    buzzer.duty_cycle = 32768    # 50% duty cycle pour émettre le son
    time.sleep(1)
    buzzer.duty_cycle = 0        # Arrête le son
    time.sleep(1)
```

Hetzelfde principe, maar rechtstreeks de frequentie en werkcyclus van de PWM regelen.
