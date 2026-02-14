---
last_modified_on: "2024-02-26"
title: "Reţea"
description: "Elioblocs - Rețele"
---

Blocurile de rețea vă permit să efectuați acțiuni legate de conectarea Eliobot la o rețea fără fir.

## **Conexiune fără fir**

---

### Conectați-vă la o rețea fără fir

![Conectați-vă la o rețea Wi-Fi](/img/elioblocs/blocs/wifi/connect-wifi.jpg)

**Tip**: Comandă

**Definiție**:

Acest bloc vă permite să conectați Eliobot la o rețea wireless. Trebuie să introduceți numele și parola rețelei.
Informațiile de conectare sunt stocate într-un fișier numit `settings.toml` pe Eliobot, ceea ce înseamnă că nu trebuie să le introduceți de fiecare dată.
Eliobot se va conecta automat la rețeaua wireless la pornire.

**Utilizați**:

Dacă doriți ca Eliobot să se conecteze la o rețea wireless pentru a putea accesa internetul sau un server local.

### Deconectați-vă de la o rețea fără fir

![Deconectați-vă de la o rețea Wi-Fi](/img/elioblocs/blocs/wifi/disconnect-wifi.jpg)

**Tip**: Comandă

**Definiție**:

Acest bloc vă permite să deconectați Eliobot de la o rețea wireless.

**Utilizați**:

Dacă doriți ca Eliobot să se deconecteze de la o rețea wireless pentru a se conecta la o altă rețea sau pentru a economisi energie.

### Deschideți un punct de acces din Eliobot

![Deschide un punct de acces Wi-Fi](/img/elioblocs/blocs/wifi/open-hotspot.jpg)

**Tip**: Comandă

**Definiție**:

Acest bloc vă permite să deschideți un punct de acces Wi-Fi de la Eliobot. Acest lucru permite altor dispozitive să se conecteze la Eliobot, cum ar fi telefonul sau computerul.

:::warning
Parola trebuie să aibă între 8 și 64 de caractere.
:::

**Utilizați**:

Dacă doriți să serviți un fișier html de la Eliobot pentru a face telefonul dvs. o telecomandă de exemplu.

### Setați numele gazdei

![Setați numele gazdei](/img/elioblocs/blocs/wifi/hostname.jpg)

**Tip**: Comandă

**Definiție**:

Acest bloc vă permite să definiți numele gazdei Eliobot. Numele gazdă este numele care îl identifică pe Eliobot în rețea.
Pur și simplu introduceți numele gazdei însoțit de extensia `.local` pentru a accesa Eliobot de pe alt dispozitiv din aceeași rețea.

**Utilizați**:

Dacă doriți să accesați Eliobot de pe alt dispozitiv din aceeași rețea.
De exemplu, dacă doriți să accesați pagina html pe care ați creat-o pe Eliobot de pe telefon.

### Este conectat la o rețea fără fir?

![Este conectat la o rețea Wi-Fi](/img/elioblocs/blocs/wifi/is-connected.jpg)

**Tip**: bloc boolean

**Definiție**:

Acest bloc vă permite să testați dacă Eliobot este conectat la o rețea wireless. Returnează `adevărat` dacă Eliobot este conectat la o rețea fără fir și `fals` în caz contrar.

**Utilizați**:

Dacă doriți să efectuați o acțiune numai dacă Eliobot este conectat la o rețea wireless.

### Scanați rețelele wireless disponibile

![Scanați rețelele Wi-Fi disponibile](/img/elioblocs/blocs/wifi/scan-wifi.jpg)

**Tip**: valoare

**Definiție**:

Acest bloc vă permite să scanați rețelele wireless disponibile. Acesta returnează o listă de rețele wireless disponibile cu numele și puterea semnalului.

**Utilizați**:

Dacă doriți să vizualizați rețelele wireless disponibile pentru a alege la ce rețea să vă conectați.

### Obțineți adresa IP a rețelei wireless

![Obțineți adresa IP rețelei Wi-Fi](/img/elioblocs/blocs/wifi/get-ip.jpg)

**Tip**: valoare

**Definiție**:

Acest bloc vă permite să obțineți adresa IP a rețelei wireless la care este conectat Eliobot.

**Utilizați**:

Dacă doriți să aflați adresa IP a rețelei wireless pentru a comunica cu Eliobot, veți avea nevoie de ea pentru a vă conecta la Eliobot de pe alt dispozitiv.

---

### Creează o pagină html

![Creează o pagină HTML](/img/elioblocs/blocs/wifi/create-html-page.jpg)

**Tip**: Comandă

**Definiție**:

Acest bloc vă permite să creați o pagină HTML. O pagină HTML este o pagină web care poate fi afișată într-un browser web.
Acesta va fi salvat într-un fișier html pe Eliobot numit `index.html` și va fi plasat în folderul `www`.
Puteți alege titlul paginii și să plasați conținutul acesteia în interior. Odată plasat acest bloc, toate buclele sunt dezactivate
repetat pe termen nelimitat pentru a porni serverul web, îl puteți accesa conectându-vă la Eliobot în modul punct de acces
și introducerea adresei IP a lui Eliobot în browserul dvs. web.

**Utilizați**:

Dacă doriți să creați o pagină web pentru a afișa informații și pentru a plasa elemente interactive precum butoane sau afișaje.

### Adăugați un buton la pagina dvs. html

![Adăugați un buton la o pagină HTML](/img/elioblocs/blocs/wifi/add-html-button.jpg)

**Tip**: Comandă

**Definiție**:

Acest bloc vă permite să adăugați un buton la o pagină HTML.
Un buton este un element interactiv pe care utilizatorul poate face clic.
Acolo puteți alege textul butonului și codul care va fi executat la apăsarea butonului.
De asemenea, puteți alege culoarea butonului.

**Utilizați**:

Dacă doriți să faceți o telecomandă pentru a controla Eliobot de pe telefon.

### Adăugați un vizualizator la pagina dvs. html

![Adăugați un afișaj la o pagină HTML](/img/elioblocs/blocs/wifi/add-html-value.jpg)

**Tip**: Comandă

**Definiție**:

Acest bloc vă permite să adăugați un afișaj la o pagină HTML, un afișaj este un element care afișează valoarea pe care i-o dați.
Puteți plasa valoarea pe care doriți să o afișați în interiorul afișajului și numele afișajului.

**Utilizați**:

Dacă vrei să știi dacă un obstacol se află în fața lui Eliobot de pe telefonul tău.

### Creați o etichetă html

![Creați o etichetă HTML](/img/elioblocs/blocs/wifi/create-html-div.jpg)

**Tip**: Comandă

**Definiție**:

Acest bloc vă permite să creați o etichetă HTML. O etichetă HTML este un element al unei pagini web care ajută la structurarea conținutului.
Acolo puteți alege tipul de etichetă și puteți plasa conținutul acesteia în interior.

Opțiuni disponibile:
-div
- centru

**Utilizați**:

Dacă doriți să structurați conținutul paginii dvs. html.


### Creați un titlu html

![Creați un titlu HTML](/img/elioblocs/blocs/wifi/create-html-title.jpg)

**Tip**: Comandă

**Definiție**:

Acest bloc vă permite să creați un titlu HTML. Un titlu HTML este un text care va avea o anumită dimensiune și va avea caractere aldine.
Acolo puteți alege textul titlului și dimensiunea acestuia.

Opțiuni disponibile:
- h1
- h2
- h3
- h4
- h5
- h6

**Utilizați**:

Dacă doriți să afișați un titlu în pagina dvs. html.

### Creați un paragraf html

![Creați un paragraf HTML](/img/elioblocs/blocs/wifi/create-html-text.jpg)

**Tip**: Comandă

**Definiție**:

Acest bloc vă permite să creați un paragraf HTML. Un paragraf HTML este un text care va fi afișat pe pagina web.

**Utilizați**:

Dacă doriți să afișați text în pagina dvs. html.
