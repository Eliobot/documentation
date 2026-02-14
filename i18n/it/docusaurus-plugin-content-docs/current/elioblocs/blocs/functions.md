---
last_modified_on: "2024-02-26"
title: "Funzioni"
description: "Elioblocchi - Funzioni"
---

Le funzioni consentono di raggruppare i blocchi per riutilizzarli successivamente nel programma.
Sono molto utili per evitare di ripetere più volte gli stessi blocchi.
Possiamo anche fornire loro valori di input e recuperare un valore di output.
Possono essere richiamati in qualsiasi punto del programma e più volte se necessario, purché siano stati dichiarati in precedenza.


## Crea una funzione

![Crea una funzione](/img/elioblocs/blocs/functions/fonctionA.png)

**Tipo**: Ordine

**Definizione**:

Una funzione è come un ciclo, contiene blocchi da eseguire. Questi blocchi verranno eseguiti quando viene richiamata la funzione.
Puoi utilizzare il punto interrogativo per aggiungere un commento alla tua funzione (dire cosa fa, ad esempio).

**Utilizzo** :

Se vogliamo raggruppare i blocchi per riutilizzarli più avanti nel programma. Cerchiamo di inserire azioni ridondanti in una funzione per evitare di ripeterle più volte.

## Chiama una funzione

![Chiama una funzione](/img/elioblocs/blocs/functions/fonctionA-appel.png)

**Tipo**: Ordine

**Definizione**:

Questo blocco consente di chiamare una funzione. Verranno eseguiti i blocchi all'interno della funzione.

**Utilizzo** :

Se vogliamo eseguire i blocchi di una funzione senza doverli riscrivere.

## Ottieni un valore all'output della funzione

![Funzione con valore return](/img/elioblocs/blocs/functions/fonctionB.png)

**Tipo**: Ordine

![Leggi valore restituito](/img/elioblocs/blocs/functions/fonctionB-retour.png)

**Tipo**: valore

**Definizione**:

Ci sono funzioni che restituiscono un valore. Come una normale funzione verranno eseguiti i blocchi al suo interno, ma in più restituirà un valore alla fine. Questo valore può essere utilizzato nel resto del programma.

**Utilizzo** :

Se vogliamo recuperare un valore da una funzione per usarlo nel resto del programma. Ad esempio, se eseguiamo un calcolo in una funzione, possiamo recuperare il risultato per utilizzarlo nel resto del programma.

## Aggiungi valori all'input della funzione

![Aggiungi input a una funzione](/img/elioblocs/blocs/functions/add-input-functions.png)

![Dichiara ingressi funzione](/img/elioblocs/blocs/functions/fonctionA-input.png)

**Tipo**: Ordine

**Definizione**:

È possibile dare valori ad una funzione in modo che li utilizzi. Questi valori sono chiamati parametri.
Per aggiungere parametri a una funzione, aggiungili semplicemente al blocco funzione utilizzando l'ingranaggio.
Quando chiamiamo la funzione, dobbiamo fornire valori per questi parametri.

**Utilizzo** :

Immaginiamo di avere una funzione che calcoli Pitagora, possiamo darle i due lati del triangolo in modo che restituisca l'ipotenusa.

## Esce da una funzione

![Valore restituito su evento](/img/elioblocs/blocs/functions/return-function.png)

**Tipo**: Ordine

**Definizione**:

Questo blocco consente di uscire da una funzione e restituire un valore se una condizione è soddisfatta.

**Utilizzo** :

Se vogliamo uscire da una funzione prima della fine, possiamo usare questo blocco per restituire un valore.
