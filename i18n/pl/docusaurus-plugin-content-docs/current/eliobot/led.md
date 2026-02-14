---
last_modified_on: "2024-02-26"
title: "PROWADZONY"
description: "Element Eliobota - LED"
---


<img src={require("@site/static/img/eliobot/led/Eliobot - LED.png").default} alt="Eliobot LED" width="49%" />

Diody Eliobot to diody RGB, mogą wyświetlać dowolny kolor poprzez zmieszanie trzech podstawowych kolorów: czerwonego, zielonego i niebieskiego.

## Używaj z Elioblocami

Aby zastosować diody Eliobot na Elioblocach stosujemy bloczki z kategorii <img src={require("@site/static/img/eliobot/led/category-color.jpg").default} style={{ width: "14%", verticalAlign: "middle" }} alt="test przycisku" />.

## Używaj z Pythonem

Aby użyć diody LED w Pythonie, po prostu utwórz obiekt za pomocą biblioteki `neopixel`.

Dioda LED znajduje się na konkretnym pinie `NEOPIXEL` lub bezpośrednio przy użyciu `IO1`.

## Powiązane przykłady

### Przykład Elioblocs

>
> <img src={require("@site/static/img/eliobot/led/example-led-elioblocs.jpg").default} alt="exemple led elioblocs" width="49%" />
> 

Włączamy i wyłączamy diodę LED w sposób ciągły, odczekując 1 sekundę pomiędzy każdą akcją, abyśmy mogli zobaczyć zmianę koloru.

---

### Przykład Pythona

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

Na tej samej zasadzie co w przypadku Elioblocs, diodę LED włączamy i wyłączamy w sposób ciągły, odczekując 1 sekundę pomiędzy każdą akcją, abyśmy mogli zobaczyć zmianę koloru.


