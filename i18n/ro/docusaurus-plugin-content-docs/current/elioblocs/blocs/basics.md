---
last_modified_on: "2024-02-26"
title: "Bazele"
description: "Elioblocs - Bazele"
---

import Jump from '@site/src/components/Jump';

Blocurile de bază sunt primele blocuri pe care le veți folosi pentru a programa Eliobot.

## La pornire

![Începem](/img/elioblocs/blocs/basics/boucle-start.jpg)

**Tip**: Comandă

**Definiție**:

Acest bloc este o buclă care se execută o singură dată la începutul programului numai blocurile din această buclă sau într-o buclă Repeat Nelimitat sunt executate, celelalte sunt dezactivate.

**Utilizați**:

Dacă dorim ca Eliobot să avanseze cu un spațiu la pornire.


## Repetați la infinit

![Buclă infinită](/img/elioblocs/blocs/basics/boucle-infinie.png)

**Tip**: Comandă

**Definiție**:

Această buclă repetă blocurile pe care le conține la nesfârșit. Pentru a opri bucla, trebuie să utilizați <img src={require('@site/static/img/elioblocs/blocs/loops/quitter-boucle.png').default} style={{ width: '14%', verticalAlign: 'middle' }} alt="Quitter boucle" />.

:::warning
Atenție, după folosirea acestei bucle, **doar** blocurile din interior vor fi executate la infinit.
:::

**Utilizați**:

Dacă vrem ca Eliobot să avanseze la infinit.

## Așteptați X secunde

![Așteptați X secunde](/img/elioblocs/blocs/basics/attendre.png)

**Tip**: Comandă

**Definiție**:

Acest bloc vă permite să întrerupeți programul pentru un anumit număr de secunde/milisecunde.

**Utilizați**:

Dacă vrei să faci o pauză în programul tău între două acțiuni.

## Afișează o valoare în terminal

![Tipărește valoarea în terminal](/img/elioblocs/blocs/basics/print-valeur.png)

**Tip**: Comandă

**Definiție**:

Acest bloc vă permite să afișați o valoare în terminal. Valoarea poate fi un număr, text sau boolean.

**Utilizați**:

Dacă doriți să afișați o valoare pentru a vă depana programul.