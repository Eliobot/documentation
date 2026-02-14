---
last_modified_on: "2024-02-26"
title: "Cicalino"
description: "Componente Eliobot - Cicalino"
---


<img src={require("@site/static/img/eliobot/buzzer/Eliobot - Buzzer.png").default} alt="Eliobot buzzer" width="49%" />

<br/>Il cicalino di Eliobot è un cicalino passivo, quindi può emettere suoni su un'ampia gamma di frequenze, proprio come i vecchi telefoni.

## Utilizzare con Eliobloc

Per utilizzare il cicalino di Eliobot su Eliobloc, utilizziamo i blocchi della categoria <img src={require("@site/static/img/eliobot/buzzer/category-sound.jpg").default} style={{ width: "14%", verticalAlign: "middle" }} alt="categoria suono" /> per riprodurre un suono.

## Da utilizzare con Python

Per suonare le note in Python, utilizziamo il pin `IO17` come uscita PWM per poter riprodurre la frequenza desiderata.

Per riprodurre la musica è sufficiente ripetere le frequenze desiderate come in una partitura.

## Esempi correlati

### Esempio di Eliobloc

>
> <img src={require("@site/static/img/eliobot/buzzer/example-buzzer-elioblocs.jpg").default} alt="exemple buzzer elioblocs" width="49%" />
>   

Qui suoniamo la nota `Do` per 1 secondo e ricominciamo all'infinito.

---

### Esempio Python

```python
import board
import pwmio
import time

buzzer = pwmio.PWMOut(
                board.IO17, # Pin du buzzer
                variable_frequency=True, # On veut pouvoir changer la fréquence
                ) # Création de l'objet buzzer

while True:
    buzzer.frequency = 262 # Fréquence de la note Do
    time.sleep(1) # Attend 1 seconde
    buzzer.frequency = 0 # Arrête le son
    time.sleep(1) # Attend 1 seconde
```

Qui suoniamo la nota `Do` per 1 secondo e ricominciamo all'infinito.
