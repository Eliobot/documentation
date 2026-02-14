---
last_modified_on: "2024-02-26"
title: "Zaini"
description: "Eliobloc - Zaini"
---

I blocchi dello zaino ti consentono di controllare gli accessori di Eliobot.

## PULSANTE TARTARUGA

:::warning
Attenzione, per essere utilizzato, Eliobot deve essere dotato dello zaino tartaruga con bottoni.
:::

### Programma con pulsanti

![Programma con pulsanti](/img/elioblocs/blocs/backpacks/turtle-buttons.jpg)

**Tipo**: Ordine

**Definizione**:

Questo blocco ti consente di utilizzare lo zaino con i pulsanti della tartaruga per controllare Eliobot.
Registriamo le azioni da eseguire (avanti, indietro, gira a sinistra, gira a destra) per ciascun pulsante.
Poi, una volta registrata la sequenza, potrai riprodurla premendo il pulsante centrale.

**Utilizzo** :

Far programmare Eliobot al bambino più piccolo, utilizzando i pulsanti per dargli istruzioni.

## SENSORE DHT11

:::warning
Attenzione, per essere utilizzato, Eliobot deve essere dotato dello zaino con sensore di umidità e della libreria Adafruit DHT.
:::

### Recupera il valore di temperatura o umidità

![Ottieni valore di temperatura o umidità](/img/elioblocs/blocs/backpacks/dht11.jpg)

**Tipo**: valore

**Definizione**:

Questo blocco permette di recuperare il valore di temperatura o umidità misurato dal sensore DHT11.

**Utilizzo** :

Se desideri recuperare la temperatura o l'umidità misurata dal sensore per utilizzarla nel tuo programma. Ad esempio, per visualizzare la temperatura nel terminale.

## MATRICE LED

:::warning
Attenzione, per essere utilizzato, Eliobot deve essere dotato dello zaino LED Matrix.
:::

### Scelta dei colori di una matrice LED

![Scegli i colori della matrice LED](/img/elioblocs/blocs/backpacks/matrix-choose-colors.jpg)

**Tipo**: Ordine

**Definizione**:

Questo blocco permette di scegliere i colori di una matrice LED. Ti permette di disegnare quello che vuoi su una matrice LED 5x5 con colori RGB. Nota: il nero corrisponde a un LED spento.

**Utilizzo** :

Se vuoi disegnare un logo o un messaggio su una matrice LED. Ad esempio, per visualizzare informazioni in base ai risultati dei tuoi sensori.

### Colori chiari da una matrice LED

![Colori chiari della matrice LED](/img/elioblocs/blocs/backpacks/matrix-clear.jpg)

**Tipo**: Ordine

**Definizione**:

Questo blocco permette di cancellare i colori da una matrice LED. Permette di resettare una matrice LED 5x5 con tutti i LED spenti.

**Utilizzo** :

Se vuoi cancellare ciò che viene visualizzato su una matrice LED. Ad esempio, per cancellare un messaggio o un logo.

### Scegli un logo da visualizzare su una matrice LED

![Scegliere il logo della matrice LED](/img/elioblocs/blocs/backpacks/matrix-choose-logo.jpg)

**Tipo**: Ordine

**Definizione**:

Questo blocco permette di scegliere un logo da visualizzare su una matrice LED:
- Cuore
- Faccina felice
- Faccina triste
- Freccia su
- Freccia giù
- Freccia sinistra
- Freccia destra
- Attraverso
-Controllo

**Utilizzo** :

Se vuoi visualizzare un logo su una matrice LED. Ad esempio per indicare la direzione che sta prendendo Eliobot o se viene rilevato un ostacolo.

### Testo scorrevole su una matrice LED

![Scorri il testo sulla matrice LED](/img/elioblocs/blocs/backpacks/matrix-scroll-text.jpg)

**Tipo**: Ordine

**Definizione**:

Questo blocco ti permette di scorrere il testo sulla matrice LED, puoi anche scegliere il colore del testo.

**Utilizzo** :

Se si desidera visualizzare un messaggio sulla matrice LED. Ad esempio per visualizzare un messaggio di benvenuto oppure un messaggio nel caso venga rilevato un ostacolo.

## SENSORE BME280

:::warning
Attenzione, per essere utilizzato, Eliobot deve essere dotato dello zaino per sensori ambientali e della libreria Adafruit BME280.
:::

### Recupera diversi valori misurati dal sensore BME280

![Ottieni valori diversi misurati](/img/elioblocs/blocs/backpacks/bme280.jpg)

**Tipo**: valore

**Definizione**:

Questo blocco permette di recuperare diversi valori misurati dal sensore BME280:
- Temperatura
- Umidità
- Pressione
- Altitudine

**Utilizzo** :

Se desideri recuperare la temperatura, l'umidità, la pressione o l'altitudine misurata dal sensore per utilizzarla nel tuo programma. Ad esempio per far avanzare Eliobot se la temperatura è troppo alta.

### Imposta la pressione a livello del mare

![Imposta pressione al livello del mare](/img/elioblocs/blocs/backpacks/bme-sea-level.jpg)

**Tipo**: Ordine

**Definizione**:

Questo blocco consente di definire la pressione a livello del mare per il sensore BME280.

**Utilizzo** :

Se si desidera impostare la pressione a livello del mare per il sensore di pressione. Ad esempio, per ottenere una misurazione accurata dell'altitudine. Lo trovi su questo [sito](https://zoom.earth/maps/pressure/) posiziona il cursore sul mare più vicino a te.

##Schermo OLED

:::warning
Attenzione, per essere utilizzato, Eliobot deve essere dotato dello zaino con schermo OLED.
:::

### Visualizza il testo su uno schermo OLED

![Visualizza testo sullo schermo OLED](/img/elioblocs/blocs/backpacks/oled-text.jpg)

**Tipo**: Ordine

**Definizione**:

Questo blocco consente di visualizzare il testo su uno schermo OLED.
Puoi scegliere su quale riga visualizzare il testo, lo schermo ha 6 righe.

**Utilizzo** :

Se desideri visualizzare un messaggio su uno schermo OLED.
Ad esempio per visualizzare un messaggio di benvenuto oppure un messaggio nel caso venga rilevato un ostacolo.

### Schermo OLED trasparente

![Cancella schermo OLED](/img/elioblocs/blocs/backpacks/oled-clear.jpg)

**Tipo**: Ordine

**Definizione**:

Questo blocco ti consente di cancellare lo schermo OLED.

**Utilizzo** :

Se desideri cancellare ciò che viene visualizzato sullo schermo OLED. Ad esempio, per cancellare un messaggio o un logo.

## Servomotore

:::warning
Attenzione, per essere utilizzato, Eliobot deve essere dotato dello zaino servomotore.
:::

### Imposta la posizione del servomotore

![Imposta posizione servomotore](/img/elioblocs/blocs/backpacks/servo-motor.jpg)

**Tipo**: Ordine

**Definizione**:

Questo blocco permette di definire la posizione del servomotore, si può anche scegliere la posizione a cui è collegato.

**Utilizzo** :

Se si desidera impostare la posizione del servomotore in modo che ruoti con un angolo preciso.
Ad esempio, per far girare la testa a Eliobot.

## Servomotore continuo

:::warning
Attenzione, per essere utilizzato, Eliobot deve essere dotato dello zaino servomotore continuo.
:::

### Ruotare il servomotore continuo

![Ruota servomotore continuo](/img/elioblocs/blocs/backpacks/continuous-servo-motor.jpg)

**Tipo**: Ordine

**Definizione**:

Questo blocco permette di far ruotare il servomotore continuo in un senso o nell'altro con una certa velocità, inoltre è possibile scegliere la posizione a cui è collegato.

**Utilizzo** :

Se si desidera ruotare il servomotore continuo in modo che si muova avanti o indietro.

## Sensore a ultrasuoni

:::warning
Attenzione, per essere utilizzato, Eliobot deve essere dotato dello zaino con sensore ad ultrasuoni.
:::

### Recupera la distanza misurata dal sensore a ultrasuoni

![Misura la distanza](/img/elioblocs/blocs/backpacks/hcsr04.jpg)

**Tipo**: valore

**Definizione**:

Questo blocco permette di recuperare la distanza misurata dal sensore ad ultrasuoni.

**Utilizzo** :

Se desideri recuperare la distanza misurata dal sensore ad ultrasuoni per utilizzarla nel tuo programma. Ad esempio, per evitare ostacoli.









