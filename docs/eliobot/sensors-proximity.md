---
last_modified_on: "2024-02-26"
title: "Capteurs d'obstacles"
description: "Eliobot component - Capteurs d'obstacles"
---


<img src={require('@site/static/img/eliobot/sensors-proximity/Eliobot - Obstacles.png').default} alt="proximity sensors" width="49%" />

<br/>Les capteurs d'obstacles d'Eliobot sont des capteurs infrarouges qui permettent de détecter les obstacles à une certaine distance.

## Utilisation avec Elioblocs

Pour utiliser les capteurs d'obstacles d'Eliobot sur Elioblocs, on utilise les blocs de la catégorie <img src={require("@site/static/img/eliobot/sensors-proximity/category-proximity.jpg").default} style={{ width: "14%", verticalAlign: "middle" }} alt="catégorie proximité" />.

## Utilisation avec Python

Avec python, il faut définir chaque capteur d'obstacle comme un objet.

On a 4 capteurs sur le capteur d'obstacle, ils sont branché sur les pins suivants :

|     | Capteur gauche | Capteur devant | Capteur droit | Capteur derrière |
|-----|----------------|----------------|---------------|------------------|
| Pin | IO4            | IO5            | IO6           | IO7              |

Les capteurs renvoient des valeurs analogiques.

## Exemples associés

### Exemple Elioblocs

>
> <img src={require("@site/static/img/eliobot/sensors-proximity/example-proximity-elioblocs.jpg").default} alt="exemple proximité elioblocs" width="49%" />
> 

Ici, si un obstacle est détecté devant Eliobot, il tourne vers la droite sinon il avance.

---

### Exemple Python

```python
import time
import elio
import board
from analogio import AnalogIn

proximity_sensor = [
    AnalogIn(board.IO4), # Capteur gauche
    AnalogIn(board.IO5), # Capteur devant
    AnalogIn(board.IO6), # Capteur droit
    AnalogIn(board.IO7)  # Capteur derrière
]

# Fonction pour récupérer la valeur d'un capteur d'obstacle
def getProximity(proximity_pos):
    value = 0

    # Mesure de la lumière réfléchie
    value = proximity_sensor[proximity_pos].value

    if value > 1000:
        return True
    else:
        return False

speed = 100

while True:
    if getProximity(1):
        elio.turnRight(speed)

    else:
        elio.moveForward(speed)
```

Dans cet exemple, Eliobot avance s'il ne détecte pas d'obstacle devant lui sinon il tourne à droite.

Pour détecter un obstacle, on regarde la valeur du capteur devant Eliobot. Si la valeur est supérieure à 1000, alors il y a un obstacle devant Eliobot.
1000 est une valeur que nous avons testée et choisie pour détecter un obstacle à une certaine distance. Vous pouvez changer cette valeur pour l'adapter à votre besoin.