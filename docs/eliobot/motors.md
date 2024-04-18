---
last_modified_on: "2024-02-26"
title: "Moteurs"
description: "Eliobot component - Moteurs"
---


<p align="middle">
    <img src={require('@site/static/img/eliobot/motors/Eliobot - Motors Top.png').default} alt="Eliobot motors top" width="49%" />
    <img src={require('@site/static/img/blank.png').default} width="2%"/>
    <img src={require('@site/static/img/eliobot/motors/Eliobot - Motors Bottom.png').default} alt="Eliobot motors bottom" width="49%" />
</p>

:::note
Les moteurs de Eliobot sont directement reliés à la batterie il fonctionne donc seulement si le bouton d'allumage est en position `ON`.
:::

## Utilisation avec Elioblocs

Pour utiliser les moteurs de Eliobot sur Elioblocs, on utilise les blocs de la catégorie `Mouvement` car ce sont les moteurs qui permettent à Eliobot de se déplacer.


## Utilisation avec Python

Pour utiliser les moteurs de Eliobot en Python, tu peux utiliser les fonctions disponibles dans la librairie `elio.py`.

Les moteurs sont branchés sur les pins suivants :

|     | Moteur gauche | Moteur droit |
|-----|---------------|--------------|
| IN1 | IO35          | IO36         |
| IN2 | IO37          | IO38         |

On les utilise en pwm, c'est-à-dire qu'on peut contrôler la vitesse des moteurs en plus de leur sens de rotation.

Pour en savoir plus sur la pwm : [Wikipedia PWM](https://fr.wikipedia.org/wiki/Modulation_de_largeur_d%27impulsion)

## Exemples associés

### Exemple Elioblocs

>
><img src={require('@site/static/img/eliobot/motors/example-movements-elioblocs.jpg').default} alt="exemple mouvement elioblocs" width="49%" />
>

Ici, on utilise les blocs <img src={require('@site/static/img/eliobot/motors/movement-category.jpg').default} style={{ width: '14%', verticalAlign: 'middle' }} alt="Catégorie mouvement" /> pour faire avancer Eliobot s'il ne détecte pas d'obstacle devant lui sinon il tourne à droite.

---

### Exemple Python

#### Avec la librairie `elio.py`

```python
import elio
import time

speed = 100


while True:
    if elio.getObstacle(1):
        elio.turnRight(speed)

    else:
        elio.moveForward(speed)
```

Dans cet exemple, Eliobot avance s'il ne détecte pas d'obstacle devant lui sinon il tourne à droite.

#### Sans la librairie `elio.py`

```python
import elio
import time
import board
import pwmio

# Configuration des pins
moteurDroit1 = pwmio.PWMOut(board.IO36)
moteurDroit2 = pwmio.PWMOut(board.IO38)
moteurGauche1 = pwmio.PWMOut(board.IO35)
moteurGauche2 = pwmio.PWMOut(board.IO37)

# Vitesse des moteurs
vitesse = 65535 # vitesses entre 0 et 65535

while True:
    if elio.getObstacle(1):
        moteurDroit1.duty_cycle = 0
        moteurDroit2.duty_cycle = vitesse
        moteurGauche1.duty_cycle = vitesse
        moteurGauche2.duty_cycle = 0

    else:
        moteurDroit1.duty_cycle = vitesse
        moteurDroit2.duty_cycle = 0
        moteurGauche1.duty_cycle = 0
        moteurGauche2.duty_cycle = vitesse
```
Même exemple que précédemment, mais sans utiliser la librairie `elio.py`.