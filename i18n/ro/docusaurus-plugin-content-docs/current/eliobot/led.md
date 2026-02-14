---
last_modified_on: "2024-02-26"
title: "LED"
description: "Componenta Eliobot - LED"
---


<img src={require("@site/static/img/eliobot/led/Eliobot - LED.png").default} alt="Eliobot LED" width="49%" />

LED-urile Eliobot sunt LED-uri RGB, pot afișa orice culoare amestecând cele trei culori de bază: roșu, verde și albastru.

## Utilizați cu Elioblocs

Pentru a folosi LED-urile Eliobot pe Elioblocs, folosim blocuri din categoria <img src={require("@site/static/img/eliobot/led/category-color.jpg").default} style={{ width: "14%", verticalAlign: "middle" }} alt="test buton" />.

## Utilizați cu Python

Pentru a utiliza led-ul în python, pur și simplu creați un obiect folosind biblioteca `neopixel`.

LED-ul este pe pinul specific `NEOPIXEL` sau folosind `IO1` direct.

## Exemple înrudite

### Exemplu Elioblocs

>
> <img src={require("@site/static/img/eliobot/led/example-led-elioblocs.jpg").default} alt="exemple led elioblocs" width="49%" />
> 

Aprindem LED-ul apoi oprim continuu, asteptand 1 secunda intre fiecare actiune pentru a putea vedea schimbarea culorii.

---

### Exemplu Python

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

Același principiu ca și la Elioblocs, aprindem LED-ul apoi stingem continuu, așteptând 1 secundă între fiecare acțiune pentru a putea vedea schimbarea culorii.


