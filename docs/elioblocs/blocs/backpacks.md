---
last_modified_on: "2024-02-26"
title: "Backpacks"
description: "Elioblocs - Backpacks"
---

Les blocs de Sac à dos permettent de contrôler les accessoires d'Eliobot.

## Récupérer la valeur de température

![Get temperature value](../../../static/img/elioblocs/blocs/backpacks/get-temp.jpg)

**Type** : Valeur

**Définition** :

Ce bloc permet de récupérer la valeur de température mesurée par le capteur de température DHT11.

:::warning
Attention pour être utilisé, Eliobot doit être équipé du sac à dos capteur de température et de la librairie Adafruit DHT.
:::

**Utilisation** :

Si tu veux récupérer la température mesurée par le capteur de température pour l'utiliser dans ton programme. Par exemple, pour afficher la température dans le terminal.

## Récupérer la valeur d'humidité

![Get humidity value](../../../static/img/elioblocs/blocs/backpacks/get-humidity.jpg)

**Type** : Valeur

**Définition** :

Ce bloc permet de récupérer la valeur d'humidité mesurée par le capteur de température DHT11.

:::warning
Attention pour être utilisé, Eliobot doit être équipé du sac à dos capteur d'humidité et de la librairie Adafruit DHT.
:::

**Utilisation** :

Si tu veux récupérer l'humidité mesurée par le capteur d'humidité pour l'utiliser dans ton programme. Par exemple, pour afficher l'humidité dans le terminal.

## Choisir les couleurs d'une matrice de LED

![Choose LED matrix colors](../../../static/img/elioblocs/blocs/backpacks/choose-color-matrix.jpg)

**Type** : Commande

**Définition** :

Ce bloc permet de choisir les couleurs d'une matrice de LED. Il te permet de dessiner ce que tu veux sur une matrice 5x5 de LED avec les couleurs RGB. Remarque : le noir correspond à une LED éteinte.

:::warning
Attention pour être utilisé, Eliobot doit être équipé du sac à dos matrice de LED.
:::

**Utilisation** :

Si tu veux dessiner un logo ou un message sur une matrice de LED. Par exemple, pour afficher une information en fonction des résultats de tes capteurs.

## Effacer les couleurs d'une matrice de LED

![Clear LED matrix colors](../../../static/img/elioblocs/blocs/backpacks/clear-matrix.jpg)

**Type** : Commande

**Définition** :

Ce bloc permet d'effacer les couleurs d'une matrice de LED. Il te permet de réinitialiser une matrice 5x5 de LED avec toutes les LED éteintes.

:::warning
Attention pour être utilisé, Eliobot doit être équipé du sac à dos matrice de LED.
:::

**Utilisation** :

Si tu veux effacer ce qui est affiché sur une matrice de LED. Par exemple, pour effacer un message ou un logo.

## Choisir un logo à afficher sur une matrice de LED

![Choose LED matrix logo](../../../static/img/elioblocs/blocs/backpacks/choose-logo-matrix.jpg)

**Type** : Commande

**Définition** :

Ce bloc permet de choisir un logo à afficher sur une matrice de LED :
- cœur
- smiley heureux
- smiley triste
- flèche haut
- flèche bas
- flèche gauche
- flèche droite
- croix
- check

:::warning
Attention pour être utilisé, Eliobot doit être équipé du sac à dos matrice de LED.
:::

**Utilisation** :

Si tu veux afficher un logo sur une matrice de LED. Par exemple, pour indiquer la direction que prend Eliobot ou si un obstacle est détecté.

## Faire défiler un texte sur une matrice de LED

![Scroll text on LED matrix](../../../static/img/elioblocs/blocs/backpacks/scroll-text-matrix.jpg)

**Type** : Commande

**Définition** :

Ce bloc permet de faire défiler un texte sur la matrice de led, tu peux aussi choisir la couleur du texte.

:::warning
Attention pour être utilisé, Eliobot doit être équipé du sac à dos matrice de LED.
:::

**Utilisation** :

Si tu veux afficher un message sur la matrice de LED. Par exemple, pour afficher un message d'accueil ou un message si un obstacle est détecté.