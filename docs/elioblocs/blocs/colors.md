---
last_modified_on: "2024-02-26"
title: "Couleurs"
description: "Elioblocs - Couleurs"
---

import Jump from '@site/src/components/Jump';


Eliobot est équipé d'une LED multicolore, permettant d'afficher plus de 16 millions de couleurs. 


## Séléctionner une couleur à afficher

La méthode la plus simple pour allumer la LED est d'utiliser le bloc ```Afficher la couleur``` qui propose la couleur rouge par défaut.

![Bloc light on](../../../static/img/elioblocs/blocs/colors/light-on.png)

Elle peut être ensuite changée en cliquant sur la bulle colorée, révélant ainsi un tableau avec plusieurs couleurs.
Il ne reste alors plus qu'a cliquer sur celle que l'on souhaite afficher.

![Color selector](../../../static/img/elioblocs/blocs/colors/color-choice.png)


## Eteindre la lumière

Deux possibilités pour éteindre la LED :

- La première est d'afficher la couleur noire avec le bloc ci-dessus, ce qui revient a mettre toutes les couleurs a 0
- La plus simple consiste à utiliser la bloc dédié ci-dessous ```Eteindre la lumière```

![Bloc light off](../../../static/img/elioblocs/blocs/colors/light-off.png)


## Exemple

Découvre comment utiliser la LED dans l'exemple suivant :

<Jump to="/docs/tutorial/elioblocs/blink-led-elioblocs">Faire clignoter la LED - Elioblocs</Jump>

