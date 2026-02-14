---
last_modified_on: "2024-02-26"
title: "Buzzer"
description: "Componenta Eliobot - Buzzer"
---


<img src={require("@site/static/img/eliobot/buzzer/Eliobot - Buzzer.png").default} alt="Eliobot buzzer" width="49%" />

<br/>Avertizorul lui Eliobot este un sonerie pasivă, astfel încât poate emite sunete pe o gamă largă de frecvențe, la fel ca telefoanele vechi.

## Utilizați cu Elioblocs

Pentru a folosi soneria lui Eliobot pe Elioblocs, folosim blocuri din categoria <img src={require("@site/static/img/eliobot/buzzer/category-sound.jpg").default} style={{ width: "14%", verticalAlign: "middle" }} alt="categorie sunet" /> pentru a reda un sunet.

## Utilizați cu Python

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

Aici, cântăm nota `Do` timp de 1 secundă și începem din nou la infinit.
