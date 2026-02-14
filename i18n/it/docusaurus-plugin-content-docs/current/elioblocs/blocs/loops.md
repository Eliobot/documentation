---
last_modified_on: "2024-02-26"
title: "Loop"
description: "Eliobloc - Loop"
---

I cicli consentono di ripetere le azioni un certo numero di volte finché una condizione non viene soddisfatta (o meno). Sono molto utili per automatizzare le attività ripetitive.

## Ripeti X volte

![Per loop](/img/elioblocs/blocs/loops/boucle-repeter.png)

**Tipo**: Ordine

**Definizione**:

Questo ciclo ripete i blocchi che contiene un certo numero di volte. Per definire il numero di ripetizioni è possibile scrivere direttamente nella casella il numero di volte desiderato oppure utilizzare un blocco contenente un valore.

**Utilizzo** :

Se vogliamo che Eliobot avanzi di uno spazio 5 volte.

## Ripeti mentre

![Mentre il ciclo](/img/elioblocs/blocs/loops/boucle-while.png)

**Tipo**: Ordine

**Definizione**:

Questo ciclo è composto da due parti:

- **Condizione**: mentre/fino a quando questa condizione è/è vera.
- **Condizione da verificare**: la condizione da verificare ad ogni giro del loop.

> #### Finché
>
> Questo ciclo ripete i blocchi che contiene finché la condizione è vera.
>
> #### Fino al
>
> Questo ciclo ripete i blocchi che contiene finché la condizione non è vera.

**Utilizzo** :

Se vogliamo che Eliobot vada avanti basta che un sensore non rilevi un ostacolo.


## Conta con ```i```

![Per i loop](/img/elioblocs/blocs/loops/boucle-for.png)

**Tipo**: Ordine

**Definizione**:

Questo ciclo permette di ripetere i blocchi in esso contenuti un certo numero di volte utilizzando una variabile ```i``` che va da 0 al valore definito. Questa variabile ```i``` viene incrementata in ogni ciclo dell'ultimo valore.

> #### Dettaglio
> 
> <img src={require('@site/static/img/elioblocs/blocs/loops/example-boucle-for.jpg').default} style={{ width: '50%', verticalAlign: 'middle' }} alt="Example for" />
> 
> 1. Valore iniziale delle iterazioni.
> 2. Valore finale delle iterazioni.
> 3. Incremento della variabile ```i``` ad ogni giro del loop.

**Utilizzo** :

Se vogliamo che Eliobot avanzi 5 volte di un quadrato, visualizzando il numero del quadrato.

## Per ```i``` nell'elenco

![Per j nell'elenco loop](/img/elioblocs/blocs/loops/boucle-for-liste.png)

**Tipo**: Ordine

**Definizione**:

Questo ciclo ti consente di ripetere i blocchi che contiene il numero di volte in cui sono presenti elementi in un elenco.

**Utilizzo** :

Se vogliamo sfogliare un elenco di valori e visualizzarli uno per uno.

## Esci dal ciclo o passa all'iterazione del ciclo successivo

![Esci dal ciclo](/img/elioblocs/blocs/loops/quitter-boucle.png)

**Tipo**: Ordine

**Definizione**:

Questo blocco ha due usi:

- **Esci dal loop**: consente di uscire dal loop corrente.
- **Salta all'iterazione successiva**: consente di passare all'iterazione successiva del ciclo corrente.

**Utilizzo** :

Se vogliamo uscire da un ciclo infinito in determinate condizioni o saltare un'iterazione del ciclo in un ciclo ```Répéter X fois```.


