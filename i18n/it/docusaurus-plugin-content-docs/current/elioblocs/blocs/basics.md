---
last_modified_on: "2024-02-26"
title: "Nozioni di base"
description: "Eliobloc - Nozioni di base"
---

import Jump from '@site/src/components/Jump';

I blocchi base sono i primi blocchi che utilizzerai per programmare Eliobot.

## All'avvio

![Iniziamo](/img/elioblocs/blocs/basics/boucle-start.jpg)

**Tipo**: Ordine

**Definizione**:

Questo blocco è un loop che viene eseguito una sola volta all'inizio del programma vengono eseguiti solo i blocchi in questo loop o in un loop Repeat Indefinitely, gli altri vengono disattivati.

**Utilizzo** :

Se vogliamo che Eliobot avanzi di uno spazio all'avvio.


## Ripeti all'infinito

![Loop infinito](/img/elioblocs/blocs/basics/boucle-infinie.png)

**Tipo**: Ordine

**Definizione**:

Questo ciclo ripete i blocchi che contiene indefinitamente. Per interrompere il ciclo, è necessario utilizzare <img src={require('@site/static/img/elioblocs/blocs/loops/quitter-boucle.png').default} style={{ width: '14%', verticalAlign: 'middle' }} alt="Quitter boucle" />.

:::warning
Fai attenzione, dopo aver utilizzato questo ciclo, **solo** i blocchi all'interno verranno eseguiti all'infinito.
:::

**Utilizzo** :

Se vogliamo che Eliobot avanzi indefinitamente.

## Attendi X secondi

![Attendere X secondi](/img/elioblocs/blocs/basics/attendre.png)

**Tipo**: Ordine

**Definizione**:

Questo blocco permette di mettere in pausa il programma per un certo numero di secondi/millisecondi.

**Utilizzo** :

Se vuoi fare una pausa nel tuo programma tra due azioni.

## Mostra un valore nel terminale

![Stampa valore nel terminale](/img/elioblocs/blocs/basics/print-valeur.png)

**Tipo**: Ordine

**Definizione**:

Questo blocco consente di visualizzare un valore nel terminale. Il valore può essere un numero, un testo o un valore booleano.

**Utilizzo** :

Se vuoi visualizzare un valore per eseguire il debug del tuo programma.