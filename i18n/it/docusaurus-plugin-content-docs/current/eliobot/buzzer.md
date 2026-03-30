---
last_modified_on: "2024-02-26"
title: "Cicalino"
description: "Componente Eliobot - Cicalino"
---


<img src={require("@site/static/img/eliobot/buzzer/Eliobot - Buzzer.png").default} alt="Eliobot buzzer" width="49%" />

<br/>Le buzzer d'Eliobot est un buzzer passif, il peut donc émettre des sons sur une grande plage de fréquence un peu comme les vieux téléphones.

## Utilizzare con Eliobloc

Per utilizzare il cicalino di Eliobot su Eliobloc, utilizziamo i blocchi della categoria <img src={require("@site/static/img/eliobot/buzzer/category-sound.jpg").default} style={{ width: "14%", verticalAlign: "middle" }} alt="catégorie son" /> per riprodurre un suono.

## Utilizzo con Python

Per suonare le note in Python, utilizziamo il pin `IO17` come uscita PWM per poter riprodurre la frequenza desiderata.

Per riprodurre la musica è sufficiente ripetere le frequenze desiderate come in una partitura.

## Esempi correlati

### Esempio di Eliobloc

>
> <img src={require("@site/static/img/eliobot/buzzer/example-buzzer-elioblocs.jpg").default} alt="exemple buzzer elioblocs" width="49%" />
>   

Qui suoniamo la nota `Do` per 1 secondo e ricominciamo all'infinito.

---

### Esempio di Python

#### Con la libreria `elio.py`

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

Qui suoniamo la nota `Do` per 1 secondo e ricominciamo all'infinito.

---

#### Senza la libreria `elio.py`

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

Stesso principio, ma controllando direttamente la frequenza e il ciclo di lavoro del PWM.
