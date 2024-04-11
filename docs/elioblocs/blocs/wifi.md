---
last_modified_on: "2024-02-26"
title: "Réseau"
description: "Elioblocs - Réseaux"
---

Les blocs de réseau permettent de réaliser des actions liées à la connexion d'Eliobot à un réseau sans fil.

# Connexion Sans Fil

---

## Se connecter à un réseau sans fil

![Connect to a Wi-Fi network](../../../static/img/elioblocs/blocs/wifi/connect-wifi.jpg)

**Définition** :

Ce bloc permet de connecter Eliobot à un réseau sans fil. Il faut renseigner le nom du réseau et le mot de passe.
Le mot de passe web est un mot de passe personnel qui sert à l'authentification, tu peux choisir le mot de passe que tu veux.
Les informations de connexion sont stockées dans un fichier nommé `settings.toml` sur Eliobot, ce qui permet de ne pas avoir à les renseigner à chaque fois.
Une fois utilisé même si tu changes de programme, Eliobot se connectera automatiquement au réseau sans fil que tu as renseigner précédemment.

**Utilisation** :

Si tu veux que Eliobot se connecte à un réseau sans fil pour pouvoir accéder à internet ou à un serveur local.

## Se déconnecter d'un réseau sans fil

![Disconnect from a Wi-Fi network](../../../static/img/elioblocs/blocs/wifi/disconnect-wifi.jpg)

**Définition** :

Ce bloc permet de déconnecter Eliobot d'un réseau sans fil.

**Utilisation** :

Si tu veux que Eliobot se déconnecte d'un réseau sans fil pour se connecter à un autre réseau ou pour économiser de l'énergie.

## Ouvrir un point d'accès depuis Eliobot

![Open a Wi-Fi access point](../../../static/img/elioblocs/blocs/wifi/open-hotspot.jpg)

**Définition** :

Ce bloc permet d'ouvrir un point d'accès Wi-Fi depuis Eliobot. Cela permet à d'autres appareils de se connecter à Eliobot comme ton téléphone ou ton ordinateur.

**Utilisation** :

Si tu veux servir un fichier html depuis Eliobot pour faire de ton telephone une télécommande par exemple.

## Est connecté à un réseau sans fil ?

![Is connected to a Wi-Fi network](../../../static/img/elioblocs/blocs/wifi/is-connected.jpg)

**Définition** :

Ce bloc permet de tester si Eliobot est connecté à un réseau sans fil. Il renvoie `vrai` si Eliobot est connecté à un réseau sans fil et `faux` sinon.

**Utilisation** :

Si tu veux réaliser une action seulement si Eliobot est connecté à un réseau sans fil.

## Scanner les réseaux sans fil disponibles

![Scan available Wi-Fi networks](../../../static/img/elioblocs/blocs/wifi/scan-wifi.jpg)

**Définition** :

Ce bloc permet de scanner les réseaux sans fil disponibles. Il renvoie une liste des réseaux sans fil disponibles avec leur nom et leur force de signal, il les affiche dans le terminal.

**Utilisation** :

Si tu veux afficher les réseaux sans fil disponibles pour choisir à quel réseau se connecter.

## Obtenir l'adresse IP du réseau sans fil

![Get Wi-Fi network IP address](../../../static/img/elioblocs/blocs/wifi/get-ip.jpg)

**Définition** :

Ce bloc permet d'obtenir l'adresse IP du réseau sans fil auquel Eliobot est connecté.

**Utilisation** :

Si tu veux connaître l'adresse IP du réseau sans fil pour communiquer avec Eliobot, tu en auras besoin pour te connecter à Eliobot depuis un autre appareil.

# Serveur Http

---

## Créer une route API 

![Create an API route](../../../static/img/elioblocs/blocs/wifi/api-endpoint.jpg)

**Définition** :

Ce bloc permet de créer une route API. Une route API est une adresse web qui permet de réaliser des actions sur Eliobot quand on y accède depuis un navigateur web ou une application.

**Utilisation** :

Si tu veux créer une route API pour réaliser des actions sur Eliobot depuis un navigateur web ou une application.

## Créer une route API avec retour

![Create an API route with return](../../../static/img/elioblocs/blocs/wifi/api-endpoint-return.jpg)

**Définition** :

Ce bloc permet de créer une route API avec retour. Une route API avec retour est une adresse web qui permet de réaliser des actions sur Eliobot quand on y accède depuis un navigateur web ou une application et qui renvoie une valeur.

**Utilisation** :

Si tu veux créer une route API avec retour pour réaliser des actions sur Eliobot depuis un navigateur web ou une application et récupérer une valeur de retour pour l'afficher ou pour servir un fichier.

## Récupérer l'état d'un bouton

![Get button state](../../../static/img/elioblocs/blocs/wifi/get-button-state.jpg)

**Définition** :

Ce bloc permet de récupérer l'état d'un bouton. Il renvoie `vrai` si le bouton est activé et `faux` sinon.
Il prend en paramètre le numéro du bouton à tester, c'est ce qui l'identifie.

**Utilisation** :

Si tu veux réaliser une action seulement si le bouton html est activé.

## Récupérer l'état d'un variateur

![Get slider state](../../../static/img/elioblocs/blocs/wifi/get-slider-state.jpg)

**Définition** :

Ce bloc permet de récupérer la valeur d'un variateur. Il renvoie la valeur du variateur.
Il prend en paramètre le numéro du variateur à tester, c'est ce qui l'identifie.

**Utilisation** :

Si tu veux récupérer la valeur d'un variateur html pour réaliser une action en fonction de cette valeur.

## Servir le contenu d'un fichier

![Serve file content](../../../static/img/elioblocs/blocs/wifi/serve-file.jpg)

**Définition** :

Ce bloc permet de servir le contenu d'un fichier. Il prend en paramètre le nom du fichier à servir et son chemin sur Eliobot.

**Utilisation** :

Si tu veux servir un fichier html, css, javascript depuis Eliobot pour l'afficher dans un navigateur web.

## Démarrer le serveur web

![Start web server](../../../static/img/elioblocs/blocs/wifi/start-web-server.jpg)

**Définition** :

Ce bloc permet de démarrer le serveur web. Pour y accéder, il faut connaître l'adresse IP d'Eliobot.

**Utilisation** :

Si tu veux démarrer le serveur web pour servir des fichiers html, css, javascript depuis Eliobot.

# Page HTML

---

## Crée une page html

![Create an HTML page](../../../static/img/elioblocs/blocs/wifi/create-html-page.jpg)

**Définition** :

Ce bloc permet de créer une page html. Une page html est une page web qui peut être affichée dans un navigateur web.
Elle sera enregistrée dans un fichier html sur Eliobot appelé `index.html` et sera placé dans le dossier `www`.
Tu peux y choisir le titre de la page et placer son contenu à l'intérieur.

**Utilisation** :

Si tu veux créer une page web pour afficher des informations.

## Crée une balise html

![Create an HTML tag](../../../static/img/elioblocs/blocs/wifi/create-html-div.jpg)

**Définition** :

Ce bloc permet de créer une balise html. Une balise html est un élément d'une page web qui permet de structurer le contenu.
Tu peux y choisir le type de la balise et placer son contenu à l'intérieur.

Options disponibles :
- div
- center

**Utilisation** :

Si tu veux structurer le contenu de ta page html.


## Crée un titre html

![Create an HTML title](../../../static/img/elioblocs/blocs/wifi/create-html-title.jpg)

**Définition** :

Ce bloc permet de créer un titre html. Un titre html est un texte qui va être d'une certaine taille et en gras.
Tu peux y choisir le texte du titre et sa taille.

Options disponibles :
- h1
- h2
- h3
- h4
- h5
- h6

**Utilisation** :

Si tu veux afficher un titre dans ta page html.

## Crée un paragraphe html

![Create an HTML paragraph](../../../static/img/elioblocs/blocs/wifi/create-html-text.jpg)

**Définition** :

Ce bloc permet de créer un paragraphe html. Un paragraphe html est un texte qui va être affiché dans la page web.

**Utilisation** :

Si tu veux afficher un texte dans ta page html.

## Crée un bouton html

![Create an HTML button](../../../static/img/elioblocs/blocs/wifi/create-html-button.jpg)

**Définition** :

Ce bloc permet de créer un bouton html. Un bouton html est un élément interactif qui permet de réaliser une action quand on clique dessus.
Tu peux y choisir le texte du bouton, sa couleur, la route à laquelle il va envoyer son état et l'ID du bouton, c'est ce qui l'identifie.

**Utilisation** :

Si tu veux créer un bouton interactif dans ta page html.

## Crée un variateur html

![Create an HTML slider](../../../static/img/elioblocs/blocs/wifi/create-html-slider.jpg)

**Définition** :

Ce bloc permet de créer un variateur html. Un variateur html est un élément interactif qui permet de choisir une valeur entre un minimum et un maximum.
Tu peux y choisir son ID, c'est ce qui l'identifie, la route à laquelle il va envoyer sa valeur et si tu veux qu'il soit placé horizontalement ou verticalement.

**Utilisation** :

Si tu veux créer un variateur interactif dans ta page html.