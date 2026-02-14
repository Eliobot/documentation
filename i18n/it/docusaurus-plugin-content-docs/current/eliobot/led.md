---
last_modified_on: "2024-02-26"
title: "GUIDATO"
description: "Componente Eliobot - LED"
---


<img src={require("@site/static/img/eliobot/led/Eliobot - LED.png").default} alt="Eliobot LED" width="49%" />

I LED Eliobot sono LED RGB, possono visualizzare qualsiasi colore mescolando i tre colori base: rosso, verde e blu.

## Utilizzare con Eliobloc

Per utilizzare i LED Eliobot su Eliobloc, utilizziamo i blocchi della categoria <img src={require("@site/static/img/eliobot/led/category-color.jpg").default} style={{ width: "14%", verticalAlign: "middle" }} alt="test pulsante" />.

## Da utilizzare con Python

Per utilizzare il led in Python è sufficiente creare un oggetto utilizzando la libreria `neopixel`.

Il LED si trova sul pin specifico `NEOPIXEL`, oppure utilizzando direttamente `IO1`.

## Esempi correlati

### Esempio di Eliobloc

>
> <img src={require("@site/static/img/eliobot/led/example-led-elioblocs.jpg").default} alt="exemple led elioblocs" width="49%" />
> 

Accendiamo e spegniamo continuamente il LED, aspettando 1 secondo tra ogni azione in modo da poter vedere il cambiamento di colore.

---

### Esempio Python

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

Stesso principio degli Eliobloc, accendiamo e spegniamo continuamente il LED, aspettando 1 secondo tra ogni azione in modo da poter vedere il cambiamento di colore.


