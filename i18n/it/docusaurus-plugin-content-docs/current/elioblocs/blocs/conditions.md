---
last_modified_on: "2024-02-26"
title: "Termini"
description: "Eliobloc – Condizioni"
---

import Jump from '@site/src/components/Jump';


Le condizioni ti consentono di eseguire azioni in base a determinate condizioni. Questo è ciò che rende un programma “intelligente” e gli fa prendere decisioni.


Nella programmazione, usiamo

## Se - Fai - Altrimenti

![Blocca Se - Esegui - Altrimenti](/img/elioblocs/blocs/conditions/if-else.png)

**Tipo**: Ordine

**Definizione**:

Questo blocco consente di eseguire un'azione se una condizione è vera e un'altra azione se la condizione è falsa.
E' composto da tre parti:

- **If**: la condizione da verificare (se è vera, eseguiamo il blocco `Faire`, lo chiameremo booleano).
- **Do**: il blocco di istruzioni da eseguire se la condizione è vera.
- **Else**: il blocco di istruzioni da eseguire se la condizione è falsa.

**Utilizzo** :

Se vogliamo che Eliobot vada avanti se un sensore rileva un ostacolo e indietro se non viene rilevato alcun ostacolo.


## Se - Fai

![Se Blocca - Esegui](/img/elioblocs/blocs/conditions/if.png)

Questo blocco utilizza la stessa logica del blocco `Si - Faire - Sinon` ma con una specificità, possiamo modificare il blocco per aggiungere ulteriori condizioni utilizzando l'ingranaggio.

### Modifica del blocco

![Mutatore del blocco Si](/img/elioblocs/blocs/conditions/if-mutator.png)

**Tipo**: Ordine

**Definizione**:

Qui puoi impilare tutte le condizioni che desideri. Se tutte le condizioni sono vere, verrà eseguita la parte del blocco `Faire`.
Tutte le condizioni vengono controllate una per una nell'ordine in cui sono impilate. Se una condizione è falsa, il relativo blocco `Faire` non verrà eseguito.

**Utilizzo** :

Se vogliamo che Eliobot vada avanti se un sensore rileva un ostacolo, e indietro se non viene rilevato alcun ostacolo, ma anche che il robot si fermi se un altro sensore rileva un ostacolo.

> #### Esempio
>
> <img src={require('@site/static/img/elioblocs/blocs/conditions/example-if.jpg').default} style={{ width: '30%', verticalAlign: 'middle' }} alt="Example Si" />
>
> In questo esempio, verrà eseguita solo la prima condizione perché è la prima nell'elenco ad essere vera. Se la prima condizione fosse stata falsa, allora sarebbe stata vera la seconda condizione, e se anche questa fosse stata falsa, sarebbe intervenuto il blocco 'else', agendo quando nessuna delle condizioni precedenti è vera.

## Confronto

![Blocco di confronto](/img/elioblocs/blocs/conditions/est-egal.png)

**Tipo**: blocco booleano

**Definizione**:

Questo blocco consente di confrontare due valori. E' composto da due parti:

- **Primo valore e secondo valore**: i valori da confrontare.
- **Operatore di confronto**: il tipo di confronto da eseguire (uguale, diverso, maggiore, minore, maggiore o uguale, minore o uguale).

**Utilizzo** :

Se vogliamo sapere se due valori sono uguali, se un valore è maggiore di un altro, ecc.

## Operazione logica

![Blocco operazione logica](/img/elioblocs/blocs/conditions/et.png)

**Tipo**: blocco booleano

**Definizione**:

Questo blocco consente di eseguire un'operazione logica tra due condizioni. E' composto da due parti:

- **Prima condizione e seconda condizione**: le condizioni da confrontare.
- **Operatore logico**: il tipo di operazione logica da eseguire (AND, OR).

**Utilizzo** :

Se vogliamo sapere se due condizioni sono vere o se una condizione è vera.

## NO

![N. blocco](/img/elioblocs/blocs/conditions/no.png)

**Tipo**: blocco booleano

**Definizione**:

Questo blocco ti consente di negare una condizione. Ciò significa che qualunque sia la condizione, se è vera diventerà falsa e viceversa.

**Utilizzo** :

Se vogliamo cambiare una condizione da vera a falsa o viceversa.

## Vero / Falso

![Vero / Falso Blocca](/img/elioblocs/blocs/conditions/vrai.png)

**Tipo**: blocco booleano

**Definizione**:

Questo blocco consente di definire un valore booleano. Ciò significa che il valore è vero o falso.

**Utilizzo** :

Se vogliamo definire una condizione di partenza.

## Nullo

![Blocco null](/img/elioblocs/blocs/conditions/bloc-nul.png)

**Tipo**: valore

**Definizione**:

Questo blocco consente di definire un valore zero. Ciò significa che il valore non è definito.
Null viene spesso utilizzato per indicare che una variabile non ha valore o non è definita.

:::warning
Attenzione, il valore zero non è uguale al valore zero.
:::

**Utilizzo** :

Se vogliamo definire una variabile senza darle un valore.

## Test

![Test Blocco](/img/elioblocs/blocs/conditions/test.png)

**Tipo**: valore

**Definizione**:

Questo blocco consente di testare una condizione. E' composto da due parti:

- **Condizione**: la condizione da testare.
- **Valore da utilizzare**: a seconda del risultato della condizione, il valore da utilizzare.

**Utilizzo** :

Se vogliamo testare una condizione e utilizzare un valore diverso a seconda del risultato.

## Esempio

Scopri come utilizzare le condizioni nel seguente esempio:

<Jump to="/docs/tutorial/elioblocs/avoid-obstacles-elioblocs">Evitare gli ostacoli - Elioblocs</Jump>