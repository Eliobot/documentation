---
last_modified_on: "2024-02-26"
title: "terminale"
description: "Elioblocchi terminali"
---

#### Ecco come è composto il terminale. Questa parte della spiegazione ti sarà utile in seguito.

![Terminale Elioblocs](/img/elioblocs/terminal/terminal.jpg)

> 1. È il pulsante del "cassetto" che permette di aprire o chiudere il terminale.
> 
> 2. Questa è l'area di testo, qui potrai comunicare con Eliobot, vedere i messaggi di errore o di successo del tuo programma e cosa potrebbe averti risposto.
> 
> 3. Questa è l'area dei pulsanti del terminale:
> 
> - Riavvia il programma: per riavviare il programma caricato su Eliobot.
> - Interrompi programma: per interrompere il programma attualmente in esecuzione.
> 
> 4. Questi due pulsanti sono quelli che ti permetteranno di utilizzare il terminale:
> 
> - Carica: Questo pulsante invia il codice a Eliobot, come visto in precedenza, ma se dopo aver caricato il codice ti rechi al terminale, potrai vedere il codice che è stato inviato (il codice viene inviato in un linguaggio chiamato binario; è normale se non riesci a leggerlo).
>   
> ![Codice Terminale Elioblocks](/img/elioblocs/terminal/terminal-televerser.jpg)
>   
> - Connetti: questo pulsante ti permette di stabilire la connessione tra Eliobot e il tuo computer, questo è ciò che consentirà la comunicazione tra i due. Il terminale fungerà da messaggistica per questo.
>    
> ![Connettore terminale Elioblocs](/img/elioblocs/terminal/terminal-connecter.jpg)

Eliobot è un robot che parla con il linguaggio di programmazione Python. Questo è il motivo per cui vedrai messaggi in inglese nel terminale. Ma non preoccuparti, ti aiuteremo a capire cosa ti sta dicendo.

---

### Funzionalità del terminale

#### Ascolta Eliobot

Quando in uno dei vostri programmi con Eliobloc utilizzate il blocco <img src={require('@site/static/img/elioblocs/terminal/ecrire.jpg').default} style={{ width: '9%', verticalAlign: 'middle' }} alt="Bloc écrire" /> o <img src={require('@site/static/img/elioblocs/terminal/afficher-la-valeur.jpg').default} style={{ width: '14%', verticalAlign: 'middle' }} alt="Bloc afficher la valeur" />, Eliobot scriverà sul terminale. Sarai in grado di vedere cosa ti sta dicendo e capire cosa sta succedendo.
Se uno dei tuoi programmi non funziona e il LED lampeggia in rosso, potrai vedere nel terminale cosa c'è che non va.

#### Invia comandi a Eliobot

Quando nel terminale vedi `>>>`, è Eliobot che ti chiede di inviargli un comando. Puoi inviargli comandi in Python in modo che li esegua.
Se vuoi saperne di più, puoi consultare la documentazione <a href="https://learn.adafruit.com/welcome-to-circuitpython/the-repl" target="_blank" rel="noopener noreferrer" style={{color : 'blue'}}>CircuitPython</a>.


#### Problemi con il terminale?

Se, dopo aver fatto clic sul pulsante <img src={require('@site/static/img/elioblocs/terminal/connect-button.jpg').default} style={{ width: '12%', verticalAlign: 'middle' }} alt="Pulsante connetti" />, viene visualizzato il messaggio `Eliobot è connesso`, ma non succede nulla, puoi provare a fare clic sul pulsante <img src={require('@site/static/img/elioblocs/terminal/restart-button.jpg').default} style={{ width: '4%', verticalAlign: 'middle' }} alt="Pulsante riavvia" /> per riavviare il programma, oppure <img src={require('@site/static/img/elioblocs/terminal/stop-button.jpg').default} style={{ width: '4%', verticalAlign: 'middle' }} alt="Pulsante arresta" /> il tuo programma potrebbe essere ancora in esecuzione. Se non succede nulla, scollega Eliobot dal computer, spegnilo e ricollegalo.