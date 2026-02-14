---
last_modified_on: "2024-02-26"
title: "Bucle"
description: "Elioblocs - Bucle"
---

Buclele permit acțiunile să fie repetate de un anumit număr de ori până când o condiție este îndeplinită (sau nu). Sunt foarte utile pentru automatizarea sarcinilor repetitive.

## Repetați de X ori

![Pentru bucla](/img/elioblocs/blocs/loops/boucle-repeter.png)

**Tip**: Comandă

**Definiție**:

Această buclă repetă blocurile pe care le conține de un anumit număr de ori. Pentru a defini numărul de repetări, puteți scrie direct numărul dorit de ori în casetă sau puteți utiliza un bloc care conține o valoare.

**Utilizați**:

Dacă vrem ca Eliobot să avanseze un spațiu de 5 ori.

## Repetați în timp ce

![While loop](/img/elioblocs/blocs/loops/boucle-while.png)

**Tip**: Comandă

**Definiție**:

Această buclă este alcătuită din două părți:

- **Condiție**: în timp ce/până când această condiție este/este adevărată.
- **Condiție de verificat**: condiția de verificat la fiecare viraj de buclă.

> #### Atâta timp cât
>
> Această buclă repetă blocurile pe care le conține atâta timp cât condiția este adevărată.
>
> #### Până la
>
> Această buclă repetă blocurile pe care le conține până când condiția este adevărată.

**Utilizați**:

Dacă vrem ca Eliobot să avanseze atâta timp cât un senzor nu detectează un obstacol.


## Numărați cu ```i```

![For i loop](/img/elioblocs/blocs/loops/boucle-for.png)

**Tip**: Comandă

**Definiție**:

Această buclă permite ca blocurile pe care le conține să fie repetate de un anumit număr de ori folosind o variabilă ```i``` care merge de la 0 la valoarea definită. Această variabilă ```i``` este incrementată în fiecare buclă cu ultima valoare.

> #### Detaliu
> 
> <img src={require('@site/static/img/elioblocs/blocs/loops/example-boucle-for.jpg').default} style={{ width: '50%', verticalAlign: 'middle' }} alt="Example for" />
> 
> 1. Valoarea de pornire a iterațiilor.
> 2. Valoarea finală a iterațiilor.
> 3. Creșterea variabilei ```i``` la fiecare viraj de buclă.

**Utilizați**:

Dacă dorim ca Eliobot să avanseze de 5 ori cu un pătrat, afișând numărul pătratului.

## Pentru ```i``` din listă

![Pentru j în bucla de listă](/img/elioblocs/blocs/loops/boucle-for-liste.png)

**Tip**: Comandă

**Definiție**:

Această buclă vă permite să repetați blocurile pe care le conține de câte ori există elemente într-o listă.

**Utilizați**:

Dacă vrem să răsfoim o listă de valori și să le afișăm una câte una.

## Ieșire din buclă sau Mutare la următoarea iterație a buclei

![Ieșire din buclă](/img/elioblocs/blocs/loops/quitter-boucle.png)

**Tip**: Comandă

**Definiție**:

Acest bloc are două utilizări:

- **Exit loop**: vă permite să părăsiți bucla curentă.
- **Sriți la următoarea iterație**: vă permite să treceți la următoarea iterație a buclei curente.

**Utilizați**:

Dacă vrem să ieșim dintr-o buclă infinită în anumite condiții sau să omitem o iterație a buclei într-o buclă ```Répéter X fois```.


