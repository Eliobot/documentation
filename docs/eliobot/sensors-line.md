---
last_modified_on: "2024-02-26"
title: "Capteurs de ligne"
description: "Eliobot component - Capteurs de ligne"
---


<img src={require('@site/static/img/eliobot/senors-line/Eliobot - Line.png').default} alt="Eliobot line sensor" width="49%" />

Les capteurs de ligne d'Eliobot sont des capteurs infrarouges qui permettent de détecter les lignes.

## Utilisation avec Elioblocs

Pour utiliser les capteurs de ligne d'Eliobot sur Elioblocs, on utilise les blocs de la catégorie <img src={require("@site/static/img/eliobot/senors-line/category-follow-line.jpg").default} style={{ width: "14%", verticalAlign: "middle" }} alt="catégorie ligne" />.

## Utilisation avec Python

Avec python, il faut définir chaque capteur de ligne comme un objet.
On a 5 capteurs sur le capteur de ligne, ils sont branché sur les pins suivants :

|     | Capteur 1 | Capteur 2 | Capteur 3 | Capteur 4 | Capteur 5 |
|-----|-----------|-----------|-----------|-----------|-----------|
| Pin | IO10      | IO11      | IO12      | IO13      | IO14      |

## Exemples associés

### Exemple Elioblocs

>
> <img src={require("@site/static/img/eliobot/senors-line/example-follow-line-elioblocs.jpg").default} alt="exemple suivi de ligne elioblocs" width="49%" />
>   

Ici si on détecte une ligne sous le capteur 3 (le capteur du milieu), on avance.

---

### Exemple Python

```python
import time
import elio
import board
from analogio import AnalogIn

line_sensor = [
    AnalogIn(board.IO10), # Capteur 1
    AnalogIn(board.IO11), # Capteur 2
    AnalogIn(board.IO12), # Capteur 3
    AnalogIn(board.IO13), # Capteur 4
    AnalogIn(board.IO14)  # Capteur 5
]

# Fonction pour récupérer la valeur d'un capteur de ligne
def getLine(line_pos):
    ambient = 0
    lit = 0
    value = 0

    # Mesure de la lumière réfléchie
    obstacleCmd.value = True
    time.sleep(0.02)
    lit = lineInput[line_pos].value

    # Mesure de la lumière ambiante
    obstacleCmd.value = False
    time.sleep(0.02)
    ambient = lineInput[line_pos].value

    # Calcul de la valeur
    value = ambient - lit

    return value
    
while True:
    if getLine(2) > 30000: # Si le capteur 3 détecte une ligne
        elio.moveForward(100) # On avance
```

Ici si on détecte une ligne sous le capteur 3 (le capteur du milieu), on avance.