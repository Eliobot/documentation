---
sidebar_position: 2
---

# Faire clignoter une LED



En électronique il existe une version un peu plus lumineuse du “Hello world!” que l’on appelle “Blink” (clignoter en anglais) qui, son nom l’indique, a pour but de faire clignoter une LED sur la carte que l’on a entre les mains.
Et ça tombe bien puisque Eliobot est justement équipé d’une LED, qui plus est multicolore, ce qui va te permettre d’afficher la couleur de ton choix !

![alt text](../../../static/img/tutorial/python/python-blink-led/led-turned-on.bmp)

Nous allons commencer notre code en intégrant quelques bibliothèques. Ce sont des ensembles de codes déjà écrits nous permettant de rajouter des fonctions facilement.

## Déclaration des entrées / sorties

La première s’appelle “board” et est spécifique à CircuitPython. C’est grâce à elle que nous allons pouvoir expliquer à notre programme comment sont connectés les éléments au microcontrôleur (le cerveau de Eliobot)

Pour l’intégrer dans notre programme on utilise la ligne suivante :

```python
import board
```

Cela nous permet d'appeler les entrée / sorties de la cartes en utilisant le numéro de la broche.

```python
board.IO3
```

Ou alors comme dans notre cas d'utiliser le nom qui est assigné à la broche 

```python
board.NEOPIXEL
```

## Déclaration de la LED Neopixel

La LED de Eliobot a un fonctionnement un peu spécifique vu qu’elle peut afficher plusieurs couleurs, on va utiliser une autre bibliothèque pour nous simplifier la tâche :

```python
import neopixel
```

Maintenant que nous bibliothèques sont dans notre projet, nous allons pouvoir utiliser les fonctions qu’elles contiennent.
On commence par déclarer notre LED avec la fonction suivante :

```python
pixel = neopixel.NeoPixel(board.NEOPIXEL, 1, brightness=0.3)
```

``pixel`` c’est le nom que l’on donne à notre LED

```python
board.NEOPIXEL nous permet de définir où est branchée la LED sur la carte de Eliobot
```

Il n’y a qu’une LED de connectée à cet endroit d’où le 1

Enfin on peut régler la luminosité avec brightness allant de 0 à 1

La LED est prête à utiliser, on va donc pouvoir lui attribuer une couleur avec la commande :

```python
pixel.fill(( R , G , B))
```

On utilise un code couleur RGB (Red, Green, Blue) qui consiste à définir la quantité de Rouge, de Vert et de Bleu que l’on veut afficher avec une valeur allant de 0 (pas de couleur) à 255 (couleur au maximum)

Par exemple si l’on veut afficher du rouge pur, on écrit :

```python
pixel.fill((255, 0, 0))
```

A ce stade la couleur ne s’affiche pas encore, il manque une dernière commande :

```python
pixel.show()
```

Si l’on exécute le script ▶️on peut alors voir Eliobot qui s’illumine de la couleur demandée, dans notre cas du rouge

L’étape suivante pour faire clignoter Eliobot est d’éteindre la LED, pour ça on met toutes les valeurs de couleur à 0 et bien-sûr on pense à afficher le résultat :

```python
pixel.fill((0, 0, 0))
pixel.show()
```

## Ajout d'une temporisation 

Ensuite on définit le temps entre chaque action à l’aide d’une nouvelle librairie “time”

```python
import time
```

La fonction “sleep” nous permet de mettre le programme en pause pendant une durée exprimée en secondes, par exemple pour une seconde on écrit :

```python
time.sleep(1)
```

On rajoute cette pause après chaque changement de couleurs

```python
pixel.fill((255, 0, 0))
pixel.show()

time.sleep(1)

pixel.fill((0, 0, 0))
pixel.show()

time.sleep(1)
```

Si l’on exécute ▶️ ce programme on peut voir que la LED s’allume en rouge pendant 1 seconde puis s’éteint, ce qui nous rapproche quasiment de notre objectif de la faire clignoter.

## Ajout d'une boucle

La dernière étape consiste à faire durer le clignotement plus longtemps. Pour ça une méthode pourrait consister à copier/coller les 6 lignes juste au dessus un grand nombre de fois, mais notre code deviendrait extrêmement long et compliqué pour pas grande chose.

La méthode plus élégante consiste à utiliser une boucle pour répéter un morceau de programme. Celle qui nous intéresse ici est la boucle “while” qui va répéter notre programme tant que la condition de celle-ci est vraie, l’astuce consiste donc à lui donner la valeur “True” (toujours vrai) en condition ce qui va créer une boucle qui se répète à l’infini.

```python
while True:
	pixel.fill((255, 0, 0))
	pixel.show()

	time.sleep(1)

	pixel.fill((0, 0, 0))
	pixel.show()

	time.sleep(1)
```

On note que le code en dessous de “while True : ” est indenté (décalé vers la droite), montrant ainsi qu’il va être répété dans la boucle.

## Programme final 

Voici le programme final que l’on va pouvoir exécuter ▶️ :

```python
import board
import neopixel
import time

pixel = neopixel.NeoPixel(board.NEOPIXEL, 1, brightness=0.3)

while True:
	pixel.fill((255, 0, 0))
	pixel.show()

	time.sleep(1)

	pixel.fill((0, 0, 0))
	pixel.show()

	time.sleep(1)
```

