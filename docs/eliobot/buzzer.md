---
last_modified_on: "2024-02-26"
title: "Buzzer"
description: "Eliobot component - Buzzer"
---


<img src={require("@site/static/img/eliobot/buzzer/Eliobot - Buzzer.png").default} alt="Eliobot buzzer" width="49%" />

<br/>Le buzzer d'Eliobot est un buzzer passif, il peut donc émettre des sons sur une grande plage de fréquence un peu comme les vieux téléphones.

## Utilisation avec Elioblocs

Pour utiliser le buzzer d'Eliobot sur Elioblocs, on utilise les blocs de la catégorie <img src={require("@site/static/img/eliobot/buzzer/category-sound.jpg").default} style={{ width: "14%", verticalAlign: "middle" }} alt="catégorie son" /> pour jouer un son.

## Utilisation avec Python

Pour jouer des notes en Python, on utilise la broche `IO17` comme une sortie PWM pour être capable de reproduire la fréquence désirée.

Pour jouer une musique il suffit alors de répéter les fréquences désirée comme dans une partition.

## Exemples associés

### Exemple Elioblocs

>
> <img src={require("@site/static/img/eliobot/buzzer/example-buzzer-elioblocs.jpg").default} alt="exemple buzzer elioblocs" width="49%" />
>   

Ici, on joue la note `Do` pendant 1 seconde et on recommence à l'infini.

---

### Exemple Python

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

Ici, on joue la note `Do` pendant 1 seconde et on recommence à l'infini.
