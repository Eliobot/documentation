---
sidebar_position: 2
---

# Mouvements de base

Maintenant que tu sais utiliser l’interface, nous pouvons aller plus loin dans la programmation. L’objectif de ce tutoriel est de te faire découvrir les 3 mouvements de base du robot : le faire avancer, reculer et tourner.

Pour mettre en application tes apprentissages, nous te défions à la fin de ce tutoriel. Ton défi si tu l’acceptes, sera de réaliser un carré avec Eliobot 🙂

Pour débuter ce tutoriel, rends-toi sur notre interface de programmation https://app.eliobot.com/.
Étape 1 : Faire avancer Eliobot

L’objectif de cette première étape est de faire avancer Eliobot.
A) Création du programme

    Pour faire avancer Eliobot, toi dois sélectionner un mouvement vers l’avant. Clique dans le bloc « Mouvements » et glisse « Déplacer le robot vers l’avant » dans ton espace de travail.

Option 1 : Mouvement sur une durée définie

    Si tu souhaites qu’Eliobot avance sur une durée définie (dans notre exemple 30 secondes), tu dois ajouter une temporisation au mouvement. Clique sur « Utilitaires » et insère le bloc « attendre 1 seconde ».

    Modifie le chiffre 1 par 30 pour indiquer à Eliobot de se déplacer vers l’avant sur 30 secondes.

Option 2 : Mouvement sur une durée indéfinie

    Si tu souhaites qu’Eliobot avance sur une durée indéfinie, tu dois ajouter une boucle au mouvement afin qu’il soit répété. Clique sur « Boucles » dans la boîte à outils et glisse le bloc « répéter tant que » autour du bloc précédent.

    Rappelle-toi, pour que la boucle soit complète, tu dois lui ajouter une condition. Eliobot se déplace vers l’avant tant que la condition est vraie. Clique dans le bloc « Conditions » et glisse « vrai » dans la boucle.

B) Transfert du programme

    Pour tester le programme sur Eliobot, branche-le à l’ordinateur avec le câble USB et clique sur le bouton « Programmer ».

    Tu verras alors la LED clignoter et une fois fini tu peux débrancher Eliobot pour voir le résultat !

Étape 2 : Faire reculer Eliobot

L’objectif de cette deuxième étape est de faire reculer Eliobot.

La démarche est identique à la première étape car le mouvement reste le même, c’est simplement le sens qui change.

    Nous souhaitons que Eliobot se déplace vers l’arrière. Pour le faire reculer, il te suffit de cliquer sur le menu déroulant marqué par un petit triangle orange sur la droite du bloc « Déplacer le robot vers ». Sélectionne ensuite l’option « arrière ».

    Pour tester le programme sur Eliobot, branche-le à l’ordinateur avec le câble USB et clique sur le bouton « Programmer ».

    Tu verras alors la LED clignoter et une fois fini tu peux débrancher Eliobot pour voir le résultat !

Étape 3 : Faire tourner Eliobot vers la droite

L’objectif de cette troisième étape est de faire tourner Eliobot à droite.
A) Création du programme

    Pour faire tourner Eliobot, tu dois sélectionner un mouvement de rotation. Clique dans le bloc « Mouvements » et glisse « Tourner le robot vers la droite » dans votre espace de travail.

Option 1 : Mouvement sur une durée définie

    Si tu souhaites que Eliobot tourne sur une durée définie (dans notre exemple 2 secondes), tu dois ajouter une temporisation au mouvement. Clique sur « Utilitaires » et insère le bloc « attendre 1 seconde ».

    Modifie le chiffre 1 par le chiffre 2 pour indiquer à Eliobot de tourner vers la droite sur 2 secondes.

Option 2 : Activer le mode toupie 🙂

    Nous souhaitons que Eliobot tourne vers la droite sur une durée infinie (qu’il fasse la toupie). Tu peux créer une boucle afin qu’elle soit répétée. Clique sur « Boucles » dans la boîte à outils et glisse le bloc « répéter tant que » autour du bloc précédent.

    Pour que la boucle soit complète, ajoute-lui une condition. Le robot tourne sur la droite tant que la condition est vraie. Clique dans le bloc « Conditions » et glisse « vrai » dans la boucle.

B) Transfert du programme

    Pour tester le programme sur Eliobot, branche-le à l’ordinateur avec le câble USB et clique sur le bouton « Programmer ».

    Tu verras alors la LED clignoter et une fois fini tu peux débrancher Eliobot pour voir le résultat !

Étape 4 : Faire tourner Eliobot vers la gauche

L’objectif de cette quatrième étape est de faire tourner Eliobot vers la gauche.

La démarche est identique à l’étape précédente, car le mouvement de rotation reste le même, c’est le sens qui change.

    Nous souhaitons que Eliobot réalise un virage vers la gauche. Pour faire tourner le robot vers la gauche, il te suffit de cliquer sur le menu déroulant marqué par un petit triangle orange sur la droite du bloc « Tourner le robot vers ». Sélectionne ensuite la modalité « gauche ».

    Pour tester le programme sur Eliobot, branche-le à l’ordinateur avec le câble USB et clique sur le bouton « Programmer ».

    Tu verras alors la LED clignoter et une fois fini tu peux débrancher Eliobot pour voir le résultat !

Challenge : réaliser un carré

C’est le moment de te challenger ! Arriveras-tu à réaliser ce carré ?

Un carré est composé de sous-mouvements : une ligne droite et un virage répété quatre fois.
A) La ligne droite

    Le premier sous mouvement est de faire avancer Eliobot pour tracer le premier coté du carré. Comme nous l’avons vu dans l’étape 1, tu dois sélectionner le mouvement vers l’avant. Insère le bloc « Déplacer le robot vers l’avant » dans l’espace de travail.

    Tu dois ensuite ajouter une temporisation pour que Eliobot se déplace en ligne droite sur la durée de 1 seconde. Insère le bloc « attendre 1 seconde » dans utilitaire.

Il est possible de modifier le temps pour changer la taille du carré.
B) Le virage

    Le deuxième sous mouvement est de faire tourner Eliobot vers la droite pour tracer un angle droit. Comme nous l’avons vu dans l’étape 3, insère le bloc « tourner le robot vers la droite » sous les blocs précédents.

Aide : 270 millisecondes = un quart de tour

    Tu dois ensuite ajouter une temporisation pour que Eliobot effectue une rotation sur un quart de tour soit sur 270 millisecondes. Insère le bloc « attendre 1 seconde » dans l’espace de travail puis modifie la durée et l’unité du bloc.

C) La boucle magique

    Pour rappel, un carré est composé d’une ligne droite et d’un virage répété quatre fois. Maintenant que tu as réalisé un côté du carré, il te reste à répéter cette opération plusieurs fois pour obtenir les côtés restants.

    Pour te faciliter la tâche, il existe un bloc qui permet de faire cette répétition : la boucle.

    Clique sur « Boucles » dans la boîte à outils et insère le bloc « Répéter… fois, faire » dans l’espace de travail. Glisse ce bloc autour des précédents.

    Comme le carré est composé de 4 côtés, on demande à la boucle de se répéter 4 fois.

D) Transfert du programme

    Pour tester le programme sur Eliobot, branche-le à l’ordinateur avec le câble USB et clique sur le bouton « Programmer ».

    Tu verras alors la LED clignoter et une fois fini tu peux débrancher Eliobot pour voir le résultat !

Mot de fin

Félicitation pour ce nouveau défi de relevé jeune créateur ! Prochaine étape, challenger Eliobot en lui demandant de contourner un obstacle ! Es-tu prêt à relever ce nouveau défi ?

Pense à partager votre expérience sur le serveur Discord. Nous nous ferons un plaisir de partager tes créations et d’échanger avec toi.

À très vite 🙂
