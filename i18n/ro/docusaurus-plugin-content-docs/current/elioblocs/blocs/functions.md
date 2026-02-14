---
last_modified_on: "2024-02-26"
title: "Funcții"
description: "Elioblocs - Funcții"
---

Funcțiile vă permit să grupați blocuri împreună pentru a le reutiliza mai târziu în program.
Sunt foarte utile pentru a evita repetarea acelorași blocuri de mai multe ori.
De asemenea, le putem da valori de intrare și de a prelua o valoare de ieșire.
Ele pot fi apelate oriunde în program și de mai multe ori dacă este necesar, atâta timp cât au fost declarate anterior.


## Creați o funcție

![Creează o funcție](/img/elioblocs/blocs/functions/fonctionA.png)

**Tip**: Comandă

**Definiție**:

O funcție este ca o buclă, conține blocuri de executat. Aceste blocuri vor fi executate atunci când funcția este apelată.
Puteți folosi semnul întrebării pentru a adăuga un comentariu la funcția dvs. (spuneți ce face, de exemplu).

**Utilizați**:

Dacă vrem să grupăm blocuri pentru a le reutiliza mai târziu în program. Încercăm să punem acțiuni redundante într-o funcție pentru a evita repetarea lor de mai multe ori.

## Apelați o funcție

![Apelați o funcție](/img/elioblocs/blocs/functions/fonctionA-appel.png)

**Tip**: Comandă

**Definiție**:

Acest bloc vă permite să apelați o funcție. Blocurile din interiorul funcției vor fi executate.

**Utilizați**:

Dacă vrem să executăm blocurile unei funcții fără a fi nevoie să le rescriem.

## Obține o valoare la ieșirea funcției

![Funcție cu valoare return](/img/elioblocs/blocs/functions/fonctionB.png)

**Tip**: Comandă

![Citiți valoarea returnată](/img/elioblocs/blocs/functions/fonctionB-retour.png)

**Tip**: valoare

**Definiție**:

Există funcții care returnează o valoare. Ca o funcție normală, blocurile din interior vor fi executate, dar în plus, va returna o valoare la sfârșit. Această valoare poate fi folosită în restul programului.

**Utilizați**:

Dacă vrem să extragem o valoare dintr-o funcție pentru a o folosi în restul programului. De exemplu, dacă efectuăm un calcul într-o funcție, putem prelua rezultatul pentru a-l folosi în restul programului.

## Adăugați valori la intrarea funcției

![Adăugați intrare la o funcție](/img/elioblocs/blocs/functions/add-input-functions.png)

![Declarați intrările funcției](/img/elioblocs/blocs/functions/fonctionA-input.png)

**Tip**: Comandă

**Definiție**:

Este posibil să dați valori unei funcții astfel încât să le folosească. Aceste valori se numesc parametri.
Pentru a adăuga parametri la o funcție, pur și simplu adăugați-i la blocul funcțional folosind roata.
Când apelăm funcția, trebuie să dăm valori pentru acești parametri.

**Utilizați**:

Să ne imaginăm că având o funcție care îl calculează pe Pitagora, îi putem da cele două laturi ale triunghiului astfel încât să returneze ipotenuza.

## Ieșiți dintr-o funcție

![Valoarea returnată la eveniment](/img/elioblocs/blocs/functions/return-function.png)

**Tip**: Comandă

**Definiție**:

Acest bloc vă permite să părăsiți o funcție și să returnați o valoare dacă o condiție este îndeplinită.

**Utilizați**:

Dacă vrem să ieșim dintr-o funcție înainte de sfârșit, putem folosi acest bloc pentru a returna o valoare.
