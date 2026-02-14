---
sidebar_position: 3
---

# Evitați obstacolele

În acest tutorial, vom învăța cum să folosim senzorii pentru a folosi Eliobot în mod independent și pentru a-l face să evite un obstacol 😉


## Cum funcționează senzorii cu infraroșu

Eliobot este echipat cu 4 senzori infrarosu (vezi diagrama de mai jos) care ii permit sa detecteze obstacolele.

![alt text](/img/tutorial/elioblocs/avoid-obstacles-elioblocs/eliobot-sensors-position.png)

Dar tehnic cum funcționează? 🤔

Fiecare senzor este alcătuit dintr-un transmițător și un receptor. Rolul emițătorului este de a trimite lumină pentru a ilumina obstacolele. Lumina va fi apoi reflectata catre receptor, ceea ce ne va permite sa cunoastem cantitatea de lumina primita si deci sa deducem o distanta.

Cu cât cantitatea de lumină este mai mare, cu atât obstacolul este mai aproape.

![alt text](/img/tutorial/elioblocs/avoid-obstacles-elioblocs/infrared-sensor.png)

## Detectează un obstacol

Pentru a începe acest tutorial, accesați interfața noastră de programare https://app.eliobot.com/.

Începem cu un prim exemplu simplu: dacă Eliobot detectează un obstacol în fața lui, LED-ul roșu se aprinde. Dacă Eliobot nu detectează niciun obstacol, LED-ul se stinge 💡

![alt text](/img/tutorial/elioblocs/avoid-obstacles-elioblocs/obstacle-light-example.png)

Primul pas este să selectați acțiunea de detectare a obstacolelor. Pentru a face acest lucru, accesați fila ```Obstacles``` apoi selectați blocul ```există un obstacol în față```.

Este posibil să alegeți ce senzor să folosiți, în cazul nostru va fi senzorul frontal.

Probabil ați observat că acest nou bloc are o formă diferită și nu poate fi folosit așa cum este cu blocurile folosite până acum. Acesta este un boolean pe care îl vom putea folosi ca condiție în blocul ```Dacă... fă... altfel```.

În cele din urmă, pentru a identifica clar când a fost detectat un obstacol, afișăm o culoare cu blocul ```Afișează culoarea``` în partea ```atunci``` și ```Stinge lumina``` în partea ```altfel```.

Alege culoarea pe care o alegi, tu ești artistul! 😉

![alt text](/img/tutorial/elioblocs/avoid-obstacles-elioblocs/color-when-obstacle.png)

## Ocoli obstacolul

Acum că Eliobot este capabil să detecteze un obstacol, îi vom putea spune ce să facă atunci când întâlnește unul. Cea mai simplă acțiune este pur și simplu schimbarea direcției prin pivotarea la dreapta sau la stânga.

![alt text](/img/tutorial/elioblocs/avoid-obstacles-elioblocs/obstacle-turn-example.png)

Deoarece cea mai mare parte a muncii a fost deja făcută cu programul de mai sus, o vom prelua din nou adăugând mișcări în plus față de comenzile pentru LED.

Mai întâi definim mișcarea de făcut când Eliobot întâlnește un obstacol, în cazul nostru faceți un sfert de întoarcere la dreapta. Pentru a face acest lucru, puteți lua blocul ```Pivotează la dreapta cu 90 de grade``` în fila ```Mișcări``` și adăugați-l sub culoarea roșie.

Apoi definim mișcarea de făcut atunci când nu există niciun obstacol, adică să mergem înainte. Veți găsi și blocul ```Deplasează-te înainte``` în fila ```Mișcări```, care va fi plasat în partea ```altfel```

![alt text](/img/tutorial/elioblocs/avoid-obstacles-elioblocs/turn-when-obstacle.png)


### Transfer de program

Pentru a testa programul pe Eliobot, conectați-l la computer cu cablul USB și faceți clic pe butonul „Program”.

Veți vedea apoi LED-ul clipind și, odată terminat, puteți deconecta Eliobot pentru a vedea rezultatul! 🙂
