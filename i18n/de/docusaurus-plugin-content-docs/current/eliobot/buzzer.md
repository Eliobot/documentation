---
last_modified_on: "2024-02-26"
title: "Summer"
description: "Eliobot-Komponente – Summer"
---


<img src={require("@site/static/img/eliobot/buzzer/Eliobot - Buzzer.png").default} alt="Eliobot buzzer" width="49%" />

<br/>Le buzzer d'Eliobot est un buzzer passif, il peut donc émettre des sons sur une grande plage de fréquence un peu comme les vieux téléphones.

## Zur Verwendung mit Elioblocs

Um den Summer von Eliobot auf Elioblocs zu verwenden, verwenden wir Blöcke aus der Kategorie <img src={require("@site/static/img/eliobot/buzzer/category-sound.jpg").default} style={{ width: "14%", verticalAlign: "middle" }} alt="catégorie son" />, um einen Ton abzuspielen.

## Verwendung mit Python

Um Noten in Python abzuspielen, verwenden wir den `IO17` Pin als PWM-Ausgang, um die gewünschte Frequenz reproduzieren zu können.

Um Musik abzuspielen, wiederholen Sie einfach die gewünschten Frequenzen wie in einer Partitur.

## Verwandte Beispiele

### Elioblocs-Beispiel

>
> <img src={require("@site/static/img/eliobot/buzzer/example-buzzer-elioblocs.jpg").default} alt="exemple buzzer elioblocs" width="49%" />
>   

Hier spielen wir 1 Sekunde lang die Note `Do` und beginnen dann endlos von vorne.

---

### Python-Beispiel

#### Mit der Bibliothek `elio.py`

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

Hier spielen wir 1 Sekunde lang die Note `Do` und beginnen dann endlos von vorne.

---

#### Ohne die Bibliothek `elio.py`

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

Gleiches Prinzip, aber direkte Steuerung der Frequenz und des Tastverhältnisses der PWM.
