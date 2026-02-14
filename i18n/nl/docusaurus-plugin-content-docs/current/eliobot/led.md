---
last_modified_on: "2024-02-26"
title: "LED"
description: "Eliobot-component - LED"
---


<img src={require("@site/static/img/eliobot/led/Eliobot - LED.png").default} alt="Eliobot LED" width="49%" />

Eliobot LED's zijn RGB-LED's, ze kunnen elke kleur weergeven door de drie basiskleuren te mengen: rood, groen en blauw.

## Gebruik met Elioblocs

Om Eliobot-LED's op Elioblocs te gebruiken, gebruiken we blokken uit de categorie <img src={require("@site/static/img/eliobot/led/category-color.jpg").default} style={{ width: "14%", verticalAlign: "middle" }} alt="test knop" />.

## Gebruik met Python

Om de led in Python te gebruiken, maakt u eenvoudigweg een object met behulp van de `neopixel` bibliotheek.

De LED bevindt zich op de specifieke pin `NEOPIXEL`, of gebruikt rechtstreeks `IO1`.

## Gerelateerde voorbeelden

### Elioblocs-voorbeeld

>
> <img src={require("@site/static/img/eliobot/led/example-led-elioblocs.jpg").default} alt="exemple led elioblocs" width="49%" />
> 

We zetten de LED continu aan en weer uit, waarbij we tussen elke actie 1 seconde wachten, zodat we de kleurverandering kunnen zien.

---

### Python-voorbeeld

```python
import board
import neopixel
import time

led = neopixel.NeoPixel(
                    board.NEOPIXEL, # Pin de la led
                    1, # Nombre de leds
                    brightness=0.2, # Luminosité de la led
                    auto_write=False, # On ne veut pas que la led s'allume automatiquement
                    pixel_order=neopixel.GRB # Ordre des couleurs
                    ) # Création de l'objet led

while True:
    led.fill((255, 0, 0)) # Allume la led en rouge
    led.show() # Affiche la couleur
    time.sleep(1) # Attend 1 seconde
    led.fill((0, 0, 0)) # Éteint la led
    led.show() # Affiche la couleur
    time.sleep(1) # Attend 1 seconde
```

Hetzelfde principe als bij Elioblocs, we schakelen de LED continu aan en vervolgens uit, waarbij we tussen elke actie 1 seconde wachten, zodat we de kleurverandering kunnen zien.


