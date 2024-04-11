---
last_modified_on: "2024-02-26"
title: "Listes"
description: "Elioblocs - Listes"
---

Les listes permettent de stocker plusieurs valeurs dans une seule variable. Elles sont très utiles pour stocker des données de même type.

## Créer une liste 

### Liste vide

![Create list](../../../static/img/elioblocs/blocs/lists/creer-liste-vide.png)

**Type** : Valeur

**Définition** :

Crée une liste vide.
L'engrenage permet d'ajouter des éléments à la liste.

**Utilisation** :

Si on veut créer une liste pour stocker des valeurs.

### Liste avec éléments définis 

![Create list with elements](../../../static/img/elioblocs/blocs/lists/creer-liste.png)

**Type** : Valeur

**Définition** :

Crée une liste avec les éléments définie.
L'engrenage permet d'ajouter plus d'éléments à la liste.

**Utilisation** :

Si on veut créer une liste avec des valeurs déjà définies.

### Liste avec élément répété

![Create repeated list](../../../static/img/elioblocs/blocs/lists/creer-liste-repete.png)

**Type** : Valeur

**Définition** :

Crée une liste avec un élément répété un certain nombre de fois.

**Utilisation** :

Si on veut créer une liste avec un élément répété plusieurs fois.

### Liste depuis un texte

![Create list from text](../../../static/img/elioblocs/blocs/lists/liste-texte.png)

**Type** : Valeur

**Définition** :

Permets de créer une liste à partir d'un texte. Le séparateur permet de définir comment les éléments de la liste sont séparés.

**Utilisation** :

Si on veut créer une liste à partir d'un texte ou d'un CSV.

> #### Exemple
> 
> Le texte : "Je suis un programmeur"
> 
> Avec le séparateur : " " (espace)
> 
> Donne la liste : ['Je', 'suis', 'un', 'programmeur']


## Connaitre la longueur d'une liste

![List length](../../../static/img/elioblocs/blocs/lists/long-liste.png)

**Type** : Valeur

**Définition** :

Donne la valeur de la longueur de la liste.

**Utilisation** :

Si on veut faire une action un certain nombre de fois en fonction de la longueur de la liste.

## Tester si une liste est vide

![Empty list](../../../static/img/elioblocs/blocs/lists/liste-vide.png)

**Type** : Bloc booléen

**Définition** :

Permet de tester si une liste est vide ou non (retourne un booléen).

**Utilisation** :

Si on veut réaliser une action si une liste est vide. Par exemple, la remplir.

## Trouver une occurence dans une liste

![Find occurence in list](../../../static/img/elioblocs/blocs/lists/occurence-liste.png)

**Type** : Valeur

**Définition** :

Donne la position de la première occurrence d'un élément dans une liste.

**Utilisation** :

Si on veut savoir si un élément est présent dans une liste et à quelle position.

## Modifier une liste

![Change list element](../../../static/img/elioblocs/blocs/lists/mettre-liste.png)

**Type** : Commande

**Définition** :

Permet de déplacer/insérer un élément à une position donnée dans la liste.

**Utilisation** :

Si on veut modifier une liste en déplaçant un élément ou en insérant un élément à une position donnée.

## Trier une liste

![Sort list](../../../static/img/elioblocs/blocs/lists/trier-liste.png)

**Type** : Valeur

**Définition** :

Permet de trier une liste dans l'ordre croissant ou décroissant.
Avec les options :
- **numérique** : trie les éléments en tant que nombres.
- **alphabétique** : trie les éléments en tant que texte.
- **alphabétique en ignorant la casse** : trie les éléments en tant que texte sans tenir compte des majuscules et minuscules. 

**Utilisation** :

Si on veut trier une liste pour la parcourir plus facilement.

