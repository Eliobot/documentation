---
last_modified_on: "2024-02-26"
title: "LED"
description: "Eliobot component - LED"
---


<img src={require("@site/static/img/eliobot/led/Eliobot - LED.png").default} alt="Eliobot LED" width="49%" />

Les LEDs d'Eliobot sont des LEDs RGB, elles peuvent afficher n'importe quelle couleur en mélangeant les trois couleurs de base : rouge, vert et bleu.

## Utilisation avec Elioblocs

Pour utiliser les LEDs d'Eliobot sur Elioblocs, on utilise les blocs de la catégorie <img src={require("@site/static/img/eliobot/led/category-color.jpg").default} style={{ width: "14%", verticalAlign: "middle" }} alt="test bouton" /> .

## Utilisation avec Python

Pour utiliser la led en python il suffit de créer un objet à l'aide de la librairie `neopixel`.

La led est sur le pin spécifique `NEOPIXEL`.

## Exemples associés

### Exemple Elioblocs

>
> <img src={require("@site/static/img/eliobot/led/example-led-elioblocs.jpg").default} alt="exemple led elioblocs" width="49%" />
> 

On allume puis on éteint la led en continu en attendant 1 seconde entre chaque action pour que l'on puisse voir le changement de couleur.

---

### Exemple Python

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

Même principe qu'avec Elioblocs, on allume puis on éteint la led en continu en attendant 1 seconde entre chaque action pour que l'on puisse voir le changement de couleur.


