---
last_modified_on: "2024-02-26"
title: "Terminal"
description: "Elioblocs terminal"
---

#### Voici comment se compose le terminal. Cette partie d’explication te servira pour la suite.

![Elioblocs Terminal](../../static/img/elioblocs/terminal/terminal.jpg)

> 1. C'est le bouton "tiroir" qui te permet d'ouvrir ou de fermer le terminal.
> 
> 2. C'est la zone de texte, c'est ici que tu vas pouvoir communiquer avec Eliobot et voir les messages d'erreur ou de réussite de ton programme et ce qu'il a pu te répondre.
> 
> 3. C'est la zone de bouton du terminal :
> 
>    - Redémarrer le programme : pour relancer le programme que tu as téléversé à Eliobot.
>    - Arrêter le programme : pour arrêter le programme en cours d'exécution.
> 
> 4. C'est deux boutons sont ceux qui vont te permettre de faire fonctionner le terminal :
> 
>    - Téléverser : Ce bouton envoie le code à Eliobot, comme vu précédemment, mais si tu te rends dans le terminal après avoir téléversé le code, tu pourras voir le code qui a été envoyé (le code est envoyé dans un langage appelé le binaire; c'est normal si tu n'arrives pas à le lire).
>   
>      ![Elioblocs Terminal Code](../../static/img/elioblocs/terminal/terminal-televerser.jpg)
>   
>    - Connecter : Ce bouton permet d'établir la connexion entre Eliobot et ton ordinateur, c'est ce qui va permettre de communiquer entre les deux. Le terminal va servir de messagerie pour cela. 
>    
>      ![Elioblocs Terminal Connecter](../../static/img/elioblocs/terminal/terminal-connecter.jpg)

Eliobot est un robot qui parle avec le langage de programmation Python. C'est pour cela que tu vas voir des messages en anglais dans le terminal. Mais ne t'inquiète pas, on va t'aider à comprendre ce qu'il te dit.

---

### Les fonctionnalités du terminal

#### Écouter Eliobot

Quand dans un de tes programmes avec Elioblocs, tu utilises le bloc <img src={require('@site/static/img/elioblocs/terminal/ecrire.jpg').default} style={{ width: '9%', verticalAlign: 'middle' }} alt="Bloc écrire" /> ou <img src={require('@site/static/img/elioblocs/terminal/afficher-la-valeur.jpg').default} style={{ width: '14%', verticalAlign: 'middle' }} alt="Bloc afficher la valeur" />, Eliobot va écrire dans le terminal. Tu pourras voir ce qu'il te dit et comprendre ce qu'il se passe. 
Si un de tes programmes ne fonctionne pas et que la LED clignote en rouge, tu pourras voir dans le terminal ce qui ne va pas.

#### Envoyer des commandes à Eliobot

Quand dans le terminal tu vois `>>>`, c'est Eliobot qui te demande de lui envoyer une commande. Tu peux lui envoyer des commandes en Python pour qu'il les exécute.
Si tu veux en savoir plus, tu peux aller voir la <a href="https://learn.adafruit.com/welcome-to-circuitpython/the-repl" target="_blank" rel="noopener noreferrer" style={{color : 'blue'}}>Documentation CircuitPython</a>.


#### Problèmes avec le terminal ?

Si, après avoir cliqué sur le bouton <img src={require('@site/static/img/elioblocs/terminal/connect-button.jpg').default} style={{ width: '12%', verticalAlign: 'middle' }} alt="Bouton connecter" />, le message `Eliobot est connecté` s'affiche, mais que rien ne se passe, tu peux essayer de cliquer sur le bouton <img src={require('@site/static/img/elioblocs/terminal/restart-button.jpg').default} style={{ width: '4%', verticalAlign: 'middle' }} alt="Bouton redémarrer" /> pour relancer le programme, ou sur <img src={require('@site/static/img/elioblocs/terminal/stop-button.jpg').default} style={{ width: '4%', verticalAlign: 'middle' }} alt="Bouton arrêter" /> ton programme est peut-être toujours en cours d'exécution. Si rien ne se passe, débranche Eliobot de ton ordinateur, éteins-le et reconnecte-le.