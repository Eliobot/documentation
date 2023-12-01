---
sidebar_position: 3
---

# Eviter les obstacles

Si vous êtes arrivé jusqu’ici, c’est que vous avez déjà accompli de belles choses avec Eliobot. Vous avez appris à le faire clignoter, avancer, reculer et tourner. Alors soyez fier de vous pour ce beau chemin déjà parcouru 👏

Dans ce quatrième tutoriel, nous allons vous apprendre le dernier mouvement à maitriser pour utiliser Eliobot en toute autonomie : savoir contourner un obstacle 😉
Les essentiels : le fonctionnement des capteurs infrarouges

Eliobot est doté de 4 capteurs infrarouges (voir le schéma ci-dessous) qui lui permettent de détecter des obstacles.

Mais techniquement ça marche comment ? 🤔

Chaque capteur est composé d’un émetteur et d’un récepteur. Le rôle de l’émetteur est d’envoyer de la lumière pour éclairer les obstacles. Le rôle du récepteur est de mesurer la quantité de lumière réfléchie par l’obstacle pour déterminer sa distance.

Plus la quantité de lumière est importante, plus l’obstacle est proche.
Étape 1 : Détecter un obstacle
Se rendre sur l’application Eliobot

Pour débuter ce tutoriel, rendez-vous sur notre interface de programmation https://app.eliobot.com/.

    Nous souhaitons qu’Eliobot détecte les obstacles qu’il rencontre. Le programme que vous allez créer dans ce tutoriel vous permettra de savoir si Eliobot détecte un obstacle.

Si Eliobot détecte un obstacle devant lui, la LED rouge s’allume. Si Eliobot ne détecte aucun obstacle, la LED s’éteint 💡

    Nous souhaitons que le robot réalise plusieurs actions. La première est d’allumer une LED lorsqu’un obstacle est détecté, la deuxième d’éteindre la LED quand il n’y a aucun obstacle. Pour cela, sélectionnez dans « Conditions », le bloc « Si… faire » et placez-le dans votre espace de travail.

    Afin que le robot puisse détecter un obstacle, sélectionnez l’action de détection d’obstacle. Pour cela, cliquez dans « Obstacles » puis insérer le bloc « un obstacle est devant ». Placez-le en face de « si ».

    Pour que l’on puisse voir qu’un obstacle a été détecté, on peut afficher une couleur. Pour cela, sélectionnez la couleur qui va s’afficher quand un obstacle sera détecté. Cliquez dans « Couleurs » puis insérer le bloc « Afficher la couleur » en face de « faire ».

Sélectionnez la couleur de votre choix, c’est vous l’artiste 😉

    Cliquez sur le petit onglet de couleur bleue marqué par une roue grise situé à l’intérieur du bloc « Si… faire ». Un rectangle va s’afficher sur l’écran. Sélectionnez la modalité « sinon » présente dans la partie gauche du rectangle et glissez-là dans la partie de droite.

Pour fermer l’onglet, il vous suffit de cliquer sur l’onglet bleu en forme de roue.

    Nous souhaitons demander au robot d’éteindre la lumière quand aucun obstacle est détecté. Allez dans « Couleurs », sélectionnez le bloc « Éteindre la lumière » et glissez-le dans le « sinon ».

    Pour finir, pour que le programme se répète à l’infini, nous devons lui ajouter une boucle. Cliquez sur « Boucles » puis insérez le bloc « répéter tant que ». Nous souhaitons que la boucle se répète tant que la condition est vraie. Pour cela, ajoutez-lui la condition « vraie ».

Étape 2 : Donner l’action de contourner l’obstacle

Pour cette étape, nous allons donner une action à Eliobot pour qu’il contourne l’obstacle qu’il a détecté. Cette action sera de réaliser un virage d’un quart de tour sur la droite.

    Tout comme dans la première étape de ce tuto, sélectionnez dans « Conditions », le bloc « Si… faire » et placez-le dans votre espace de travail.

    Afin que le robot puisse détecter un obstacle, sélectionnez l’action de détection d’obstacle. Pour cela, cliquez dans « Obstacles » puis insérer le bloc « un obstacle est devant ». Placez-le en face de « si ».

    Le robot doit réaliser un mouvement pour contourner l’obstacle. Ce mouvement est une rotation d’un quart de tour vers la droite. Cliquez sur « Mouvements » puis insérez le bloc « Tourner le robot vers la droite ».

    Pour que le robot se déplace sur un quart de tour vers la droite, nous allons ajouter une temporisation au mouvement en glissant le bloc « attendre 1 seconde » présent dans « Utilitaire ». Modifiez la temporisation du mouvement en insérant 270 millisecondes dans le bloc.

Un quart de tour = 270 millisecondes.

    Cliquez sur le petit onglet de couleur bleue dans le bloc « Si… faire ». Faites la même manipulation que l’étape 1 : sélectionnez la modalité « sinon » présente dans la partie gauche et glissez-là dans la partie de droite.

Cliquez sur l’onglet une deuxième fois pour le fermer.

    Pour demander au robot de se déplacer vers l’avant lorsque aucun obstacle n’est détecté, cliquez dans « Mouvements » et insérez le bloc « Déplacer le robot vers l’avant ». Glissez-le dans la condition « sinon ».

    Pour que le programme se répète à l’infini, nous devons lui ajouter une boucle. Cliquez sur « Boucles » puis insérez le bloc « répéter tant que ». Nous souhaitons que la boucle se répète tant que la condition est vraie. Pour cela, ajoutez-lui la condition « vraie ».

Étape 3 : Transfert du programme

    Pensez à brancher Eliobot à votre ordinateur à l’aide du câble USB. Pour télécharger le programme que vous venez de créer, cliquez sur l’onglet en haut à droite « Programmer ».

    Vérifiez que le fichier « main.py » est présent dans vos téléchargements et transférez-le dans le périphérique ELIO.

    C’est le moment de débrancher Eliobot et de l’allumer pour le voir exécuter son programme 🙂

Mot de fin

Félicitation pour ce nouveau pas de franchi jeune créateur ! 🤩​ Vous êtes maintenant prêt à naviguer avec votre Eliobot en toute autonomie (mais il vous reste beaucoup de choses à découvrir).

Pensez à partager votre expérience sur nos réseaux sociaux. Nous vous ferons un plaisir de partager vos créations et d’échanger avec vous.

À très vite 🙂
