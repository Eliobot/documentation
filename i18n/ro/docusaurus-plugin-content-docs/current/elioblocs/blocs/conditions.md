---
last_modified_on: "2024-02-26"
title: "Termeni"
description: "Elioblocs – Condiții"
---

import Jump from '@site/src/components/Jump';


Condițiile vă permit să efectuați acțiuni pe baza anumitor condiții. Acesta este ceea ce face ca un program să fie „inteligent” și îl face să ia decizii.


În programare, folosim

## Dacă - Do - Altfel

![Blochează dacă - Do - Altceva](/img/elioblocs/blocs/conditions/if-else.png)

**Tip**: Comandă

**Definiție**:

Acest bloc vă permite să efectuați o acțiune dacă o condiție este adevărată și o altă acțiune dacă condiția este falsă.
Este compus din trei părți:

- **Dacă**: condiția de verificat (dacă este adevărată, executăm blocul `Faire`, numim asta boolean).
- **Do**: blocul de instrucțiuni de executat dacă condiția este adevărată.
- **Else**: blocul de instrucțiuni de executat dacă condiția este falsă.

**Utilizați**:

Dacă dorim ca Eliobot să avanseze dacă un senzor detectează un obstacol și să se deplaseze înapoi dacă nu este detectat niciun obstacol.


## Dacă - Faceți

![Dacă blocați - Do](/img/elioblocs/blocs/conditions/if.png)

Acest bloc folosește aceeași logică ca și blocul `Si - Faire - Sinon`, dar cu o anumită specificitate, putem modifica blocul pentru a adăuga condiții suplimentare folosind angrenajul.

### Editarea blocului

![Mutatorul blocului Si](/img/elioblocs/blocs/conditions/if-mutator.png)

**Tip**: Comandă

**Definiție**:

Aici puteți stivui câte condiții doriți. Dacă toate condițiile sunt adevărate, atunci partea blocului `Faire` va fi executată.
Toate condițiile sunt verificate una câte una în ordinea în care sunt stivuite. Dacă o condiție este falsă, atunci blocul `Faire` al acesteia nu va fi executat.

**Utilizați**:

Dacă dorim ca Eliobot să se deplaseze înainte dacă un senzor detectează un obstacol și să se deplaseze înapoi dacă nu este detectat niciun obstacol, dar și ca robotul să se oprească dacă un alt senzor detectează un obstacol.

> #### Exemplu
>
> <img src={require('@site/static/img/elioblocs/blocs/conditions/example-if.jpg').default} style={{ width: '30%', verticalAlign: 'middle' }} alt="Example Si" />
>
> În acest exemplu, doar prima condiție va fi executată deoarece este prima din listă care este adevărată. Dacă prima condiție ar fi fost falsă, atunci a doua condiție ar fi fost adevărată, iar dacă și aceasta ar fi fost falsă, blocul „else” ar fi intervenit, acționând atunci când niciuna dintre condițiile anterioare nu este adevărată.

## Comparație

![Bloc comparație](/img/elioblocs/blocs/conditions/est-egal.png)

**Tip**: bloc boolean

**Definiție**:

Acest bloc vă permite să comparați două valori. Este compus din două părți:

- **Prima valoare și a doua valoare**: valorile de comparat.
- **Operator de comparație**: tipul de comparație de efectuat (egal, diferit, mai mare, mai mic, mai mare sau egal, mai mic sau egal).

**Utilizați**:

Dacă vrem să știm dacă două valori sunt egale, dacă o valoare este mai mare decât alta etc.

## Operație logică

![Bloc de operare logic](/img/elioblocs/blocs/conditions/et.png)

**Tip**: bloc boolean

**Definiție**:

Acest bloc vă permite să efectuați o operație logică între două condiții. Este compus din două părți:

- **Prima condiție și a doua condiție**: condițiile de comparat.
- **Operator logic**: tipul de operație logică de efectuat (ȘI, SAU).

**Utilizați**:

Dacă vrem să știm dacă două condiții sunt adevărate sau dacă o condiție este adevărată.

## Nu

![Nr. bloc](/img/elioblocs/blocs/conditions/no.png)

**Tip**: bloc boolean

**Definiție**:

Acest bloc vă permite să anulați o condiție. Aceasta înseamnă că indiferent de condiție, dacă este adevărată, va deveni falsă și invers.

**Utilizați**:

Dacă vrem să schimbăm o condiție din adevărată în falsă sau invers.

## Adevărat / Fals

![Adevărat / Fals Blocare](/img/elioblocs/blocs/conditions/vrai.png)

**Tip**: bloc boolean

**Definiție**:

Acest bloc vă permite să definiți o valoare booleană. Aceasta înseamnă că valoarea este fie adevărată, fie falsă.

**Utilizați**:

Dacă vrem să definim o condiţie de pornire.

## Nul

![Null Block](/img/elioblocs/blocs/conditions/bloc-nul.png)

**Tip**: valoare

**Definiție**:

Acest bloc vă permite să definiți o valoare zero. Aceasta înseamnă că valoarea nu este definită.
Null este adesea folosit pentru a însemna că o variabilă nu are valoare sau nu este definită.

:::warning
Atenție, valoarea zero nu este aceeași cu valoarea zero.
:::

**Utilizați**:

Dacă vrem să definim o variabilă fără a-i da o valoare.

## Test

![Test Block](/img/elioblocs/blocs/conditions/test.png)

**Tip**: valoare

**Definiție**:

Acest bloc vă permite să testați o condiție. Este compus din două părți:

- **Stare**: starea de testat.
- **Valoarea de utilizat**: În funcție de rezultatul condiției, valoarea de utilizat.

**Utilizați**:

Dacă vrem să testăm o condiție și să folosim o valoare diferită în funcție de rezultat.

## Exemplu

Aflați cum să utilizați condițiile în exemplul următor:

<Jump to="/docs/tutorial/elioblocs/avoid-obstacles-elioblocs">Evitarea obstacolelor - Elioblocs</Jump>