---
last_modified_on: "2024-02-26"
title: "LED"
description: "Eliobot-Komponente - LED"
---


<img src={require("@site/static/img/eliobot/led/Eliobot - LED.png").default} alt="Eliobot LED" width="49%" />

Eliobot-LEDs sind RGB-LEDs. Sie können jede Farbe anzeigen, indem sie die drei Grundfarben Rot, Grün und Blau mischen.

## Verwendung mit Elioblocs

Um Eliobot-LEDs auf Elioblocs zu verwenden, verwenden wir Blöcke aus der Kategorie <img src={require("@site/static/img/eliobot/led/category-color.jpg").default} style={{ width: "14%", verticalAlign: "middle" }} alt="test bouton" />.

## Verwendung mit Python

Um die LED in Python zu verwenden, erstellen Sie einfach ein Objekt mit der `neopixel`-Bibliothek.

Die LED befindet sich am spezifischen Pin `NEOPIXEL` oder direkt über `IO1`.

## Verwandte Beispiele

### Elioblocs-Beispiel

>
> <img src={require("@site/static/img/eliobot/led/example-led-elioblocs.jpg").default} alt="exemple led elioblocs" width="49%" />
>

Wir schalten die LED kontinuierlich ein und wieder aus und warten zwischen jeder Aktion eine Sekunde, damit wir den Farbwechsel sehen können.

---

### Python-Beispiel

```python
import board
import neopixel
import time

led = neopixel.NeoPixel(
                    board.NEOPIXEL, # LED-Pin
                    1, # Anzahl der LEDs
                    brightness=0.2, # Helligkeit der LED
                    auto_write=False, # LED nicht automatisch aktualisieren
                    pixel_order=neopixel.GRB # Farbreihenfolge
                    ) # LED-Objekt erstellen

while True:
    led.fill((255, 0, 0)) # LED rot einschalten
    led.show() # Farbe anzeigen
    time.sleep(1) # 1 Sekunde warten
    led.fill((0, 0, 0)) # LED ausschalten
    led.show() # Farbe anzeigen
    time.sleep(1) # 1 Sekunde warten
```

Dasselbe Prinzip wie bei Elioblocs: Wir schalten die LED kontinuierlich ein und dann aus und warten zwischen jeder Aktion eine Sekunde, damit wir den Farbwechsel sehen können.

