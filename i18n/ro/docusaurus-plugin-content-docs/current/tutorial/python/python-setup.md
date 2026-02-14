---
sidebar_position: 1
---

# Configurarea Python

Primul pas pentru a începe programarea este configurarea unui mediu de dezvoltare (vorbim de un IDE în engleză). Cel pe care ți-l oferim se numește Thonny și este disponibil chiar aici: https://thonny.org/

Odată ce ați descărcat și instalat versiunea care corespunde computerului dvs., vom configura Thonny astfel încât să fie compatibil cu Eliobot.

![alt text](/img/tutorial/python/python-setup/screenshot.png)

În timpul primei lansări, Thonny vă cere să vă alegeți limba, apoi puteți alege „franceză”, apoi faceți clic pe „Hai!

![alt text](/img/tutorial/python/python-setup/Capture-decran-2023-08-07-a-11.45.44-1024x565.png)

Acum că Thonny este lansat, îl vom conecta pe Eliobot. Conectați Eliobot la computer folosind cablul USB, apoi, în partea de sus a ferestrei, faceți clic pe „Run”, apoi pe „Configurați interpretul”.

![alt text](/img/tutorial/python/python-setup/Capture-decran-2023-08-07-a-11.48.08.png)

Apoi ajungeți la o fereastră cu două meniuri derulante care trebuie configurate ca mai jos. Primul vă întreabă tipul de interpret, în cazul nostru este „CircuitPython”. Al doilea vă cere să selectați portul la care să vă conectați, apoi selectați „Eliobot”.

Uneori, portul este recunoscut ca „CircuitPython” sub Windows, îl vom folosi pe acesta în acest caz.

![alt text](/img/tutorial/python/python-setup/Capture-decran-2023-08-07-a-11.49.57-2048x1401.png)

După ce faceți clic pe „OK”, LED-ul Eliobot se aprinde alb, ceea ce înseamnă că este bine conectat. Pentru a verifica conexiunea, îi putem trimite comanda „help()” în consola din partea de jos, apoi ar trebui să răspundă cu următorul mesaj:

![alt text](/img/tutorial/python/python-setup/Capture-decran-2023-08-07-a-11.51.05.png)

Un ultim pas pentru a face interfața mai plăcută este afișarea conținutului lui Eliobot. Pentru a face acest lucru, mergeți în partea de sus în „Vizualizare”, apoi „Fișiere”

![alt text](/img/tutorial/python/python-setup/Capture-decran-2023-08-07-a-11.51.33.png)

Puteți vedea că tocmai a apărut o nouă coloană în stânga.

Sub „Dispozitivul CircuitPython” sunt toate fișierele conținute în Eliobot.

Veți găsi în special fișierul „main.py”, programul principal și care conține tot codul ultimului program pe care l-ați trimis către Eliobot. Extensia „.py” înseamnă că este un fișier scris în Python.

Vom deschide fișierul „main.py” pentru a ne crea programul.
Un exemplu comun este afișarea mesajului „Hello world!” iar în cazul nostru vom folosi comanda „print()” pentru a o afișa în consolă.

Programul nostru se încadrează într-o singură linie: print(„Bună lume!”)

Pentru a vedea mesajul afișat, tot ce trebuie să facem este să rulăm programul făcând clic pe butonul cu săgeata ▶️.

Ar trebui să obțineți următorul rezultat:

![alt text](/img/tutorial/python/python-setup/Capture-decran-2023-08-07-a-13.58.43-1.png)

Și iată-l, tocmai ați creat prima comandă în Python pentru Eliobot!

În exemplul următor vom vedea împreună cum să construim un program care nu are nevoie de un computer pentru a funcționa.