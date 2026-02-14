---
last_modified_on: "2024-02-26"
title: "Zoemer"
description: "Eliobot-component - Zoemer"
---


<img src={require("@site/static/img/eliobot/buzzer/Eliobot - Buzzer.png").default} alt="Eliobot buzzer" width="49%" />

<br/>Eliobots zoemer is een passieve zoemer, zodat hij geluiden over een breed frequentiebereik kan uitzenden, net als bij oude telefoons.

## Gebruik met Elioblocs

Om de zoemer van Eliobot op Elioblocs te gebruiken, gebruiken we blokken uit de categorie <img src={require("@site/static/img/eliobot/buzzer/category-sound.jpg").default} style={{ width: "14%", verticalAlign: "middle" }} alt="categorie geluid" /> om een ​​geluid af te spelen.

## Gebruik met Python

Om noten in Python te spelen, gebruiken we de `IO17` pin als PWM-uitgang om de gewenste frequentie te kunnen reproduceren.

Om muziek af te spelen herhaalt u eenvoudigweg de gewenste frequenties, zoals in een partituur.

## Gerelateerde voorbeelden

### Elioblocs-voorbeeld

>
> <img src={require("@site/static/img/eliobot/buzzer/example-buzzer-elioblocs.jpg").default} alt="exemple buzzer elioblocs" width="49%" />
>   

Hier spelen we de noot `Do` gedurende 1 seconde en beginnen we oneindig opnieuw.

---

### Python-voorbeeld

```python
import board
import pwmio
import time

buzzer = pwmio.PWMOut(
                board.IO17, # Pin du buzzer
                variable_frequency=True, # On veut pouvoir changer la fréquence
                ) # Création de l'objet buzzer

while True:
    buzzer.frequency = 262 # Fréquence de la note Do
    time.sleep(1) # Attend 1 seconde
    buzzer.frequency = 0 # Arrête le son
    time.sleep(1) # Attend 1 seconde
```

Hier spelen we de noot `Do` gedurende 1 seconde en beginnen we oneindig opnieuw.
