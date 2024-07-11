---
last_modified_on: "2024-02-26"
title: "Bouton"
description: "Eliobot component - Bouton"
---


<img src={require("@site/static/img/eliobot/button/Eliobot - Button.png").default} alt="Eliobot button" width="49%" />

<br/>Le bouton d'Eliobot est utilisable pour le mettre en mode Bootloading ou pour être utilisé dans un programme.

:::note
Pour passer Eliobot en mode bootloading, il suffit de maintenir le bouton appuyé pendant que l'on allume Eliobot attention à faire cette manipulation avant de brancher Eliobot à l'ordinateur.
:::

:::warning
Le mode Bootloading est un mode qui permet de flasher le microcontrôleur d'Eliobot.
:::

## Utilisation avec Elioblocs

Pour utiliser le bouton d'Eliobot sur Elioblocs, on utilise le bloc <img src={require("@site/static/img/elioblocs/blocs/entries/test-bouton.png").default} style={{ width: "14%", verticalAlign: "middle" }} alt="test bouton" /> pour tester si le bouton est pressé ou non, il renvoie `vrai` si le bouton est pressé et `faux` sinon.

## Utilisation avec Python

Le bouton d'Eliobot est relié au pin `IO0` de la carte, il suffit de lire l'état du pin pour savoir si le bouton est pressé ou non.

L'information que le bouton renvoie sont des valeurs numériques (0,1), il faut donc les convertir en booléen pour savoir si le bouton est pressé ou non.

## Exemples associés

### Exemple Elioblocs

>
><img src={require("@site/static/img/eliobot/button/example-button-elioblocs.jpg").default} alt="exemple bouton elioblocs" width="49%" />
>

Ici, on utilise le bloc <img src={require("@site/static/img/elioblocs/blocs/entries/test-bouton.png").default} style={{ width: "14%", verticalAlign: "middle" }} alt="test bouton" /> pour écrire que le bouton est pressé dans le terminal.

---

### Exemple Python

```python
import board
from digitalio import DigitalInOut, Direction, Pull

button = DigitalInOut(board.IO0) # Création de l'objet bouton
button.direction = Direction.INPUT # Configuration du bouton en entrée

if button.value: # Si le bouton est pressé
    print("Bouton pressé")
```

Ici, on utilise la librairie `board` pour récupérer le pin `IO0` et la librairie `digitalio` pour configurer le pin en entrée. Ensuite, on teste si le bouton est pressé et on affiche un message dans le terminal.