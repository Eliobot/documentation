---
last_modified_on: "2024-02-26"
title: "Buzzer"
description: "Componenta Eliobot - Buzzer"
---


<img src={require("@site/static/img/eliobot/buzzer/Eliobot - Buzzer.png").default} alt="Eliobot buzzer" width="49%" />

<br/>Le buzzer d'Eliobot est un buzzer passif, il peut donc émettre des sons sur une grande plage de fréquence un peu comme les vieux téléphones.

## Utilizați cu Elioblocs

Pentru a folosi soneria lui Eliobot pe Elioblocs, folosim blocuri din categoria <img src={require("@site/static/img/eliobot/buzzer/category-sound.jpg").default} style={{ width: "14%", verticalAlign: "middle" }} alt="catégorie son" /> pentru a reda un sunet.

## Folosind cu Python

Pentru a reda note în Python, folosim pinul `IO17` ca ieșire PWM pentru a putea reproduce frecvența dorită.

Pentru a reda muzică, repetați pur și simplu frecvențele dorite ca într-o partitură.

## Exemple înrudite

### Exemplu Elioblocs

>
> <img src={require("@site/static/img/eliobot/buzzer/example-buzzer-elioblocs.jpg").default} alt="exemple buzzer elioblocs" width="49%" />
>   

Aici, cântăm nota `Do` timp de 1 secundă și începem din nou la infinit.

---

### Exemplu Python

#### Cu biblioteca `elio.py`

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

Aici, cântăm nota `Do` timp de 1 secundă și începem din nou la infinit.

---

#### Fără bibliotecă `elio.py`

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

Același principiu, dar controlând direct frecvența și ciclul de lucru al PWM.
