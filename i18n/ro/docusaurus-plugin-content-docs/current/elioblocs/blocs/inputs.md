---
last_modified_on: "2024-10-31"
title: "Începători"
description: "Elioblocs - Intrări"
---

Blocurile de intrare vă permit să preluați informații din mediul Eliobot.

Blocurile senzorilor de obstacole vă permit să testați prezența unui obstacol în apropierea lui Eliobot.

## Testează prezența unui obstacol

![Verificați obstacol](/img/elioblocs/blocs/inputs/test-obstacles.png)

**Tip**: bloc boolean

**Definiție**:

Acest bloc vă permite să testați prezența unui obstacol la o anumită distanță de Eliobot:
- in fata
- în spate
- stânga
- corect

**Utilizați**:

Dacă doriți să evitați obstacole precum pereții sau obiectele.

---

Blocurile de senzori de linie vă permit să urmăriți o linie sau să testați prezența unei linii.

## Urmați o linie

![alt text](/img/elioblocs/blocs/inputs/suivre-ligne.png)

**Tip**: Comandă

**Definiție**:

Acest bloc vă permite să urmați o linie neagră.

**Utilizați**:

Dacă dorim ca Eliobot să urmeze o linie neagră pe o rută, cea din spatele instrucțiunilor dvs. de exemplu.

## Testează prezența unei linii

![alt text](/img/elioblocs/blocs/inputs/ligne-presente.png)

**Tip**: bloc boolean

**Definiție**:

Acest bloc vă permite să testați prezența unei linii negre sub Eliobot:
- În mijloc
- stânga
- corect
- mijloc stânga
- mijloc dreapta

**Utilizați**:

Pentru a permite lui Eliobot să urmeze o linie neagră pe un curs și să testeze dacă să vireze la stânga sau la dreapta.

## Schimbați sensibilitatea senzorului de linie

![alt text](/img/elioblocs/blocs/inputs/sensi-ligne.png)

**Tip**: Comandă

**Definiție**:

Acest bloc vă permite să modificați sensibilitatea senzorului de linie. Modifică valoarea la care senzorul de linie detectează o linie.

**Utilizați**:

Dacă vă aflați într-un spațiu foarte luminos sau întunecat, puteți modifica sensibilitatea senzorului de linie, astfel încât acesta să detecteze mai bine linia.

## Citiți valoarea unui senzor de linie

![alt text](/img/elioblocs/blocs/inputs/valeur-ligne.png)

**Tip**: valoare

**Definiție**:

Acest bloc returnează valoarea senzorului de linie. Îl puteți afișa în terminal, de exemplu.
Poate fi folosit pentru a seta sensibilitatea senzorului de linie.

**Utilizați**:

Dacă doriți să preluați valoarea senzorului de linie pentru a calibra mai bine sensibilitatea senzorului de linie.

## Calibrare automată a liniei

![alt text](/img/elioblocs/blocs/inputs/calibration-ligne.jpg)

**Tip**: Comandă

**Definiție**:

Acest bloc vă permite să calibrați automat senzorul de linie. Vă permite să definiți valoarea la care senzorul de linie detectează o linie.

**Utilizați**:

Trebuie să plasați cei 5 senzori de linie deasupra unei linii negre și eliobot va calibra automat valoarea la care detectează linia prin
deplasându-se înainte și înapoi. Eliobot trebuie să fie perpendicular pe linie pentru ca calibrarea să fie corectă.

---

## Testează dacă butonul este activat

![Butonul este activat](/img/elioblocs/blocs/inputs/test-bouton.png)

**Tip**: bloc boolean

**Definiție**:

Acest bloc vă permite să testați dacă butonul lui Eliobot este activat, returnează `adevărat` dacă butonul este activat și `fals` în caz contrar.

**Utilizați**:

Dacă doriți să efectuați o acțiune numai dacă butonul Eliobot este activat. Porniți programul, de exemplu.


---

## Telecomanda cu infraroșu

Pentru a utiliza blocurile de telecomandă cu infraroșu, trebuie să aveți telecomanda cu infraroșu disponibilă în kitul Eliobot.

![Telecomandă cu infraroșu](/img/elioblocs/blocs/inputs/nice_ir_remote.jpg)


[Cumpără aici](https://eliobot.com/products/telecommande-infra-rouge)

## Alegeți senzorul pentru citire

![Alegeți senzor](/img/elioblocs/blocs/inputs/ir_remote_sensor_change.png)

**Tip**: Comandă

**Definiție**:

Acest bloc vă permite să alegeți senzorul infraroșu pentru citirea comenzilor telecomenzii cu infraroșu,
poți alege între senzorul din față și senzorul din spate.

**Utilizați**:

Dacă doriți ca comenzile telecomenzii cu infraroșu să fie citite de senzorul din față sau din spate.
De exemplu, să-l urmezi pe Eliobot și să-i trimiți comenzi în timp ce ești în spatele lui.

## Citiți comanda de la telecomanda cu infraroșu

![Citiți comanda](/img/elioblocs/blocs/inputs/ir_remote_do.png)

<p>
<img src={require('@site/static/img/elioblocs/blocs/inputs/ir_remote.png').default} alt="Read command" width="70%"/>
</p>

**Tip**: Comandă

**Definiție**:

Acest bloc vă permite să citiți comanda de la telecomanda cu infraroșu și să efectuați o acțiune bazată pe comanda primită.

**Utilizați**:

Dacă doriți ca Eliobot să efectueze o acțiune bazată pe comanda primită de telecomanda cu infraroșu.
De exemplu, deplasați-vă înainte, înapoi, întoarceți la stânga sau la dreapta. De asemenea, îl puteți face să redă muzică sau să aprindă un LED.

