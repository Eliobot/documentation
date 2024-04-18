---
last_modified_on: "2024-02-26"
title: "Buzzer"
description: "Eliobot component - Buzzer"
---


<img src={require("@site/static/img/eliobot/buzzer/Eliobot - Buzzer.png").default} alt="Eliobot buzzer" width="49%" />

<br/>Le buzzer d'Eliobot est un buzzer passif, il ne peut émettre qu'un seul son à la fois.

## Utilisation avec Elioblocs

Pour utiliser le buzzer d'Eliobot sur Elioblocs, on utilise les blocs de la catégorie <img src={require("@site/static/img/eliobot/buzzer/category-sound.jpg").default} style={{ width: "14%", verticalAlign: "middle" }} alt="catégorie son" /> pour jouer un son.

## Utilisation avec Python

On utilise le buzzer en pwm, c'est-à-dire qu'on peut contrôler la fréquence du son émis.
Le buzzer est branché sur le pin `IO17`.

On lui envoie une fréquence avec l'utilisation de la pwm pour jouer un son.

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
