---
sidebar_position: 1
---

# Clipește LED-ul

Acum că ți-ai asamblat Eliobot-ul, vei învăța cum să-l programezi. În acest tutorial, vă vom îndruma să creați un program de testare foarte simplu, care vă va permite să vă familiarizați cu interfața.

## Crearea programului

Acest program de „testare” vă va permite să clipiți o lumină verde (sau cea la alegere) pe Eliobot. Urmați toți pașii cu atenție și rezultatul va fi acolo :)

### Selectarea culorilor

Primul pas este alegerea unei culori. Accesați caseta de instrumente și faceți clic pe blocul „Culori”. Selectați blocul „Afișare culoare” și trageți-l în spațiul de lucru.

![Text alternativ](/img/tutorial/elioblocs/blink-led-elioblocs/prog_blink_1-1.gif)

### Alegerea culorii

Puteți schimba apoi culoarea luminii care se va aprinde pe Eliobot.

Faceți clic pe punctul roșu din spațiul de lucru, apoi selectați culoarea pe care doriți să o obțineți.

![Text alternativ](/img/tutorial/elioblocs/blink-led-elioblocs/prog_blink_2.gif)

Este posibil să creați culoarea dorită: verde, albastru, roz, galben... distrați-vă!

### Alegerea timpului de întârziere

Al treilea pas este să determinați cât timp va rămâne aprinsă lumina.

Faceți clic pe blocul „Utilități”, apoi pe „Așteptați 1 secundă(e)”. Trageți mai întâi blocul de mai jos în spațiul de lucru.

![Text alternativ](/img/tutorial/elioblocs/blink-led-elioblocs/prog_blink_3.gif)

Ai observat umbra care apare sub bloc atunci când îl apropii de altul?
Eliberează-l și se va aduna

### Stinge lumina

Al patrulea pas este stingerea luminii pentru a provoca efectul intermitent.

Pentru a stinge lumina lui Eliobot, reveniți la „Culori” și introduceți blocul „Opriți lumina” după celelalte.

![Text alternativ](/img/tutorial/elioblocs/blink-led-elioblocs/prog_blink_4.gif)

### Alegerea timpului de întârziere

Al cincilea pas este de a determina cât timp va rămâne lumina stinsă.

Deci, puteți adăuga din nou un bloc „Așteptați 1 secundă(e)” în partea de jos.

![Text alternativ](/img/tutorial/elioblocs/blink-led-elioblocs/prog_blink_5.gif)

### Crearea unei bucle

Al șaselea pas este să creați o buclă, astfel încât LED-ul să clipească infinit.

Faceți clic pe categoria „Loops” apoi pe „repeat while…do”. Trageți-l în jurul blocurilor deja prezente pentru a le include în buclă.

![Text alternativ](/img/tutorial/elioblocs/blink-led-elioblocs/prog_blink_6-1.gif)

Uite, pe blocul verde din partea de sus, lipsește o piesă pentru ca bucla să fie completă.

Eliobot așteaptă o condiție pentru a-și executa programul, așa că vom forța bucla astfel încât programul să se repete la infinit, indiferent de condiție.

În „Condiții” selectați blocul „adevărat”. Glisați acest bloc în partea de sus a buclei pentru a-l finaliza și voila!

![Text alternativ](/img/tutorial/elioblocs/blink-led-elioblocs/prog_blink_7.gif)

## Programarea lui Eliobot

### Conexiune Eliobot

Acum este momentul să conectați Eliobot folosind cablul USB dacă nu ați făcut-o deja.

Micul LED de lângă priză se aprinde pentru a arăta că Eliobot se încarcă.
Când se stinge înseamnă că este complet încărcat!

![Text alternativ](/img/tutorial/elioblocs/blink-led-elioblocs/DSC03852-scaled.jpg)

### Se trimite codul către Eliobot

Pentru a vă testa programul pe Eliobot, faceți clic pe „Program”

![Text alternativ](/img/tutorial/elioblocs/blink-led-elioblocs/pp.png)

Se deschide o fereastră, solicitând accesul la un port serial, selectați „Eliobot” sau în anumite cazuri „CircuitPython”, apoi „Conexiune”

![Text alternativ](/img/tutorial/elioblocs/blink-led-elioblocs/Capture-decran-2023-09-04-a-11.55.22.png)

Eliobot va reporni apoi apoi clipește violet apoi galben, asta e, este programat!

### Realizarea programului

Programul este acum transmis către Eliobot-ul dumneavoastră. Porniți-l și admirați lucrarea. Ce observati?

O lumină verde (sau culoarea pe care ați ales-o) va clipi apoi pe robotul dvs.! 🙂

![Text alternativ](/img/tutorial/elioblocs/blink-led-elioblocs/Sans-titre-1.png)

Felicitări pentru acest nou pas în programare. Următorul pas, provoacă-l pe Eliobot făcându-l să se miște :) Ești gata să faci față acestei noi provocări?

Luați în considerare împărtășirea experienței dvs. pe rețelele noastre sociale. Vom fi bucuroși să împărtășim creațiile tale și să discutăm cu tine.

Ne vedem curând 🙂
