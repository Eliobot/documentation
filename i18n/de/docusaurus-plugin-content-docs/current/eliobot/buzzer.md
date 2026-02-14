---
last_modified_on: "2024-02-26"
title: "Summer"
description: "Eliobot-Komponente – Summer"
---


<img src={require("@site/static/img/eliobot/buzzer/Eliobot - Buzzer.png").default} alt="Eliobot buzzer" width="49%" />

<br/>Der Summer von Eliobot ist ein passiver Summer und kann daher Töne über einen weiten Frequenzbereich abgeben, ähnlich wie bei alten Telefonen.

## Verwendung mit Elioblocs

Um den Summer von Eliobot auf Elioblocs zu verwenden, nutzen wir Blöcke aus der Kategorie <img src={require("@site/static/img/eliobot/buzzer/category-sound.jpg").default} style={{ width: "14%", verticalAlign: "middle" }} alt="Kategorie Ton" />, um einen Ton abzuspielen.

## Verwendung mit Python

Um Noten in Python abzuspielen, verwenden wir den `IO17` Pin als PWM-Ausgang, um die gewünschte Frequenz reproduzieren zu können.

Um Musik abzuspielen, wiederholen Sie einfach die gewünschten Frequenzen wie in einer Partitur.

## Verwandte Beispiele

### Elioblocs-Beispiel

>
> <img src={require("@site/static/img/eliobot/buzzer/example-buzzer-elioblocs.jpg").default} alt="exemple buzzer elioblocs" width="49%" />
>

Hier spielen wir die Note `Do` 1 Sekunde lang und beginnen dann endlos von vorne.

---

### Python-Beispiel

```python
import board
import pwmio
import time

buzzer = pwmio.PWMOut(
                board.IO17, # Summer-Pin
                variable_frequency=True, # Frequenz soll veränderbar sein
                ) # Summerobjekt erstellen

while True:
    buzzer.frequency = 262 # Frequenz der Note C
    time.sleep(1) # 1 Sekunde warten
    buzzer.frequency = 0 # Ton stoppen
    time.sleep(1) # 1 Sekunde warten
```

Hier spielen wir die Note `Do` 1 Sekunde lang und beginnen dann endlos von vorne.
