---
last_modified_on: "2024-02-26"
title: "Boucles"
description: "Elioblocs - Boucles"
---

Les boucles permettent de répéter des actions un certain nombre de fois où jusqu'à ce qu'une condition soit remplie (ou pas). Elles sont très utiles pour automatiser des tâches répétitives.

## Répéter X fois

![For loop](../../../static/img/elioblocs/blocs/loops/boucle-repeter.png)

**Type** : Commande

**Définition** :

Cette boucle répète un certain nombre de fois les blocs qu'elle contient. Pour définir le nombre de répétitions, on peut directement écrire le nombre de fois souhaité dans la case ou utiliser un bloc contenant une valeur.

**Utilisation** :

Si on veut que Eliobot avance 5 fois d'une case.

## Répéter tant que

![While loop](../../../static/img/elioblocs/blocs/loops/boucle-while.png)

**Type** : Commande

**Définition** :

Cette boucle est composée de deux parties :

- **Condition** : tant/jusqu'à ce que cette condition est/soit vraie.
- **Condition à vérifier** : la condition à vérifier à chaque tour de boucle.

> #### Tant que
>
> Cette boucle répète les blocs qu'elle contient tant que la condition est vraie.
>
> #### Jusqu'à ce que
>
> Cette boucle répète les blocs qu'elle contient jusqu'à ce que la condition soit vraie.

**Utilisation** :

Si on veut que Eliobot avance tant qu'un capteur ne détecte pas un obstacle.


## Compter avec ```i```

![For i loop](../../../static/img/elioblocs/blocs/loops/boucle-for.png)

**Type** : Commande

**Définition** :

Cette boucle permet de répéter un certain nombre de fois les blocs qu'elle contient en utilisant une variable ```i``` qui va de 0 à la valeur définie. Cette variable ```i``` est incrémentée à chaque tour de boucle par la dernière valeur.

> #### Détail
> 
> <img src={require('@site/static/img/elioblocs/blocs/loops/example-boucle-for.jpg').default} style={{ width: '50%', verticalAlign: 'middle' }} alt="Example for" />
> 
> 1. Valeur de début des itérations.
> 2. Valeur de fin des itérations.
> 3. Incrémentation de la variable ```i``` à chaque tour de boucle.

**Utilisation** :

Si on veut que Eliobot avance 5 fois d'une case en affichant le numéro de la case.

## Pour ```i``` dans la liste

![For j in list loop](../../../static/img/elioblocs/blocs/loops/boucle-for-liste.png)

**Type** : Commande

**Définition** :

Cette boucle permet de répéter les blocs qu'elle contient le nombre de fois qu'il y a d'éléments dans une liste.

**Utilisation** :

Si on veux parcourir une liste de valeurs et les afficher une par une.

## Quitter la boucle ou Passer à l'itération de boucle suivante

![Exit loop](../../../static/img/elioblocs/blocs/loops/quitter-boucle.png)

**Type** : Commande

**Définition** :

Ce bloc à deux utilisations :

- **Quitter la boucle** : permet de quitter la boucle actuelle.
- **Passer à l'itération suivante** : permet de passer à l'itération suivante de la boucle actuelle.

**Utilisation** :

Si on veut sortir d'une boucle infinie sous certaine condition ou sauter une iteration de boucle dans une boucle ```Répéter X fois```.


