---
sidebar_position: 2
---

# Mișcări de bază

Acum că știi cum să folosești interfața, putem merge mai departe în programare. Obiectivul acestui tutorial este să te ajute să descoperi cele 3 mișcări de bază ale robotului: deplasarea lui înainte, înapoi și întoarcere.

Pentru a vă pune în practică învățarea, vă provocăm la sfârșitul acestui tutorial. Provocarea ta, dacă o accepți, va fi să faci un pătrat cu Eliobot :)

![alt text](/img/tutorial/elioblocs/basic-movements-elioblocs/Cote-11.png)

Pentru a începe acest tutorial, accesați interfața noastră de programare https://app.eliobot.com/.


## Deplasați Eliobot înainte

Obiectivul acestui prim pas este acela de a avansa pe Eliobot.

![alt text](/img/tutorial/elioblocs/basic-movements-elioblocs/Cote-12-edited.png)

### Crearea programului

Pentru a muta Eliobot înainte, trebuie să selectați o mișcare înainte. Faceți clic în blocul „Mișcări” și trageți „Mutați robotul înainte” în spațiul dvs. de lucru.

#### Opțiunea 1: Mișcare pe o durată definită

Dacă doriți ca Eliobot să avanseze pentru o durată definită (în exemplul nostru 30 de secunde), trebuie să adăugați o întârziere la mișcare. Faceți clic pe „Utilități” și introduceți blocul „așteptați 1 secundă”.

Schimbați numărul de la 1 la 30 pentru a-i spune lui Eliobot să înainteze timp de 30 de secunde.

![alt text](/img/tutorial/elioblocs/basic-movements-elioblocs/OFFO.png)

#### Opțiunea 2: Mișcare pe o perioadă nedeterminată

Dacă doriți ca Eliobot să avanseze la infinit, trebuie să adăugați o buclă mișcării, astfel încât să se repete. Faceți clic pe „Loops” în caseta de instrumente și trageți blocul „repeat while” în jurul blocului anterior.

Amintiți-vă, pentru ca bucla să fie completă, trebuie să îi adăugați o condiție. Eliobot avansează atâta timp cât condiția este adevărată. Faceți clic în blocul „Condiții” și trageți „adevărat” în buclă.

![alt text](/img/tutorial/elioblocs/basic-movements-elioblocs/tuto-3etape-1.png)

### Transfer de program

Pentru a testa programul pe Eliobot, conectați-l la computer cu cablul USB și faceți clic pe butonul „Program”.

Veți vedea apoi LED-ul clipind și, odată terminat, puteți deconecta Eliobot pentru a vedea rezultatul!


## Derulează înapoi Eliobot

Obiectivul acestui al doilea pas este să-l împingă pe Eliobot înapoi.

![alt text](/img/tutorial/elioblocs/basic-movements-elioblocs/Cote-15-edited.png)

Procesul este identic cu primul pas pentru că mișcarea rămâne aceeași, pur și simplu direcția este cea care se schimbă.

Vrem ca Eliobot să se miște înapoi. Pentru a-l muta înapoi, pur și simplu faceți clic pe meniul derulant marcat de un mic triunghi portocaliu în dreapta blocului „Mutați robotul în”. Apoi selectați opțiunea „înapoi”.

![alt text](/img/tutorial/elioblocs/basic-movements-elioblocs/oooooooooooooooooooooooooooooooooooppp.png)

Pentru a testa programul pe Eliobot, conectați-l la computer cu cablul USB și faceți clic pe butonul „Program”.

Veți vedea apoi LED-ul clipind și, odată terminat, puteți deconecta Eliobot pentru a vedea rezultatul!


## Rotiți Eliobot la dreapta

Obiectivul acestui al treilea pas este de a-l face pe Eliobot să vireze la dreapta.

![
    
](/img/tutorial/elioblocs/basic-movements-elioblocs/Cote-13-edited.png)
### Crearea programului

Pentru a întoarce Eliobot, trebuie să selectați o mișcare de rotație. Faceți clic în blocul „Mișcări” și trageți „Rotiți robotul la dreapta” în spațiul de lucru.

#### Opțiunea 1: Mișcare pe o durată definită

Dacă doriți ca Eliobot să se rotească pentru o durată definită (în exemplul nostru 2 secunde), trebuie să adăugați o întârziere la mișcare. Faceți clic pe „Utilități” și introduceți blocul „așteptați 1 secundă”.

Schimbați numărul 1 cu numărul 2 pentru a-i spune lui Eliobot să se întoarcă la dreapta timp de 2 secunde.

![alt text](/img/tutorial/elioblocs/basic-movements-elioblocs/Capture-ooooii.png)

#### Opțiunea 2: Activați modul spinning top 🙂

Vrem ca Eliobot să se învârtă spre dreapta pentru o perioadă infinită de timp (să învârtă un vârf). Puteți crea o buclă astfel încât să se repete. Faceți clic pe „Loops” în caseta de instrumente și trageți blocul „repeat while” în jurul blocului anterior.

Pentru a finaliza bucla, adăugați o condiție. Robotul se întoarce la dreapta atâta timp cât condiția este adevărată. Faceți clic în blocul „Condiții” și trageți „adevărat” în buclă.

![alt text](/img/tutorial/elioblocs/basic-movements-elioblocs/tuto-3-etape-3-1.png)

### Transfer de program

Pentru a testa programul pe Eliobot, conectați-l la computer cu cablul USB și faceți clic pe butonul „Program”.

Veți vedea apoi LED-ul clipind și, odată terminat, puteți deconecta Eliobot pentru a vedea rezultatul!


## Rotiți Eliobot la stânga

Obiectivul acestui al patrulea pas este de a-l face pe Eliobot să vireze la stânga.

Abordarea este identică cu pasul anterior, deoarece mișcarea de rotație rămâne aceeași, sensul este cel care se schimbă.

Vrem ca Eliobot să facă un viraj la stânga. Pentru a întoarce robotul la stânga, faceți clic pe meniul derulant marcat de un mic triunghi portocaliu în dreapta blocului „Întoarce robotul spre”. Apoi selectați modul „stânga”.

![alt text](/img/tutorial/elioblocs/basic-movements-elioblocs/Capture-17.png)

Pentru a testa programul pe Eliobot, conectați-l la computer cu cablul USB și faceți clic pe butonul „Program”.

Veți vedea apoi LED-ul clipind și, odată terminat, puteți deconecta Eliobot pentru a vedea rezultatul!


## Provocare: faceți un pătrat

Este timpul să te provoci! Veți putea face acest pătrat?

Un pătrat este alcătuit din sub-mișcări: o linie dreaptă și o întoarcere repetată de patru ori.

![alt text](/img/tutorial/elioblocs/basic-movements-elioblocs/Cote-1.png)

### Linia dreaptă

Prima mișcare secundară este de a muta Eliobot înainte pentru a urmări prima latură a pătratului. După cum am văzut la pasul 1, trebuie să selectați mișcarea înainte. Inserează blocul „Mișcă robotul înainte” în spațiul de lucru.

Apoi trebuie să adăugați o întârziere, astfel încât Eliobot să se miște în linie dreaptă pe durata de 1 secundă. Introduceți blocul „așteptați 1 secundă” în utilitar.

Este posibil să modificați timpul pentru a schimba dimensiunea pătratului.

![alt text](/img/tutorial/elioblocs/basic-movements-elioblocs/OOOOOOOOOL.png)


### Turnul

A doua sub-mișcare este să rotiți Eliobot la dreapta pentru a desena un unghi drept. După cum am văzut la pasul 3, introduceți blocul „întoarceți robotul la dreapta” sub blocurile anterioare.

Apoi trebuie să adăugați o întârziere, astfel încât Eliobot să se rotească cu un sfert de tură sau 270 de milisecunde. Inserează blocul „așteptați 1 secundă” în spațiul de lucru, apoi modifică durata și unitatea blocului.

![alt text](/img/tutorial/elioblocs/basic-movements-elioblocs/Capture-PPO.png)


### Bucla magică

Ca o reamintire, un pătrat este format dintr-o linie dreaptă și o viraj repetat de patru ori. Acum că ați făcut o latură a pătratului, trebuie doar să repetați această operațiune de mai multe ori pentru a obține laturile rămase.

Pentru a vă ușura sarcina, există un bloc care vă permite să faceți această repetiție: bucla.

Faceți clic pe „Loops” în caseta de instrumente și introduceți blocul „Repeat… times, do” în spațiul de lucru. Glisați acest bloc în jurul celor anterioare.

Deoarece pătratul are 4 laturi, cerem buclei să se repete de 4 ori.

![alt text](/img/tutorial/elioblocs/basic-movements-elioblocs/bloc-carre-i.png)


### Transfer de program

Pentru a testa programul pe Eliobot, conectați-l la computer cu cablul USB și faceți clic pe butonul „Program”.

Veți vedea apoi LED-ul clipind și, odată terminat, puteți deconecta Eliobot pentru a vedea rezultatul!


