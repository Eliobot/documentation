---
last_modified_on: "2024-02-26"
title: "Terminal"
description: "Elioblocuri terminale"
---

#### Acesta este modul în care este compus terminalul. Această parte a explicației vă va fi utilă mai târziu.

![Terminal Elioblocs](/img/elioblocs/terminal/terminal.jpg)

> 1. Este butonul „sertar” care vă permite să deschideți sau să închideți terminalul.
> 
> 2. Aceasta este zona de text, aici vei putea comunica cu Eliobot, vei vedea mesajele de eroare sau de succes din programul tău și ce ți-a răspuns acesta.
> 
> 3. Aceasta este zona butoanelor terminalului:
> 
> - Reporniți programul: pentru a reporni programul pe care l-ați încărcat pe Eliobot.
> - Oprire program: pentru a opri programul care rulează în prezent.
> 
> 4. Aceste două butoane sunt cele care vă vor permite să operați terminalul:
> 
> - Încărcare: Acest buton trimite codul către Eliobot, așa cum s-a văzut anterior, dar dacă te duci la terminal după ce ai încărcat codul, vei putea vedea codul care a fost trimis (codul este trimis într-o limbă numită binar; este normal dacă nu îl poți citi).
>   
> ![Cod terminal Elioblocks](/img/elioblocs/terminal/terminal-televerser.jpg)
>   
> - Conectare: Acest buton vă permite să stabiliți conexiunea între Eliobot și computerul dvs., acesta este ceea ce va permite comunicarea între cei doi. Terminalul va servi ca mesagerie pentru aceasta.
>    
> ![Conector terminal Elioblocs](/img/elioblocs/terminal/terminal-connecter.jpg)

Eliobot este un robot care vorbește cu limbajul de programare Python. Acesta este motivul pentru care veți vedea mesaje în limba engleză în terminal. Dar nu-ți face griji, te vom ajuta să înțelegi ce îți spune.

---

### Funcționalități terminale

#### Ascultă-l pe Eliobot

Când într-unul dintre programele dumneavoastră cu Elioblocs, utilizați blocul <img src={require('@site/static/img/elioblocs/terminal/ecrire.jpg').default} style={{ width: '9%', verticalAlign: 'middle' }} alt="Bloc écrire" /> sau <img src={require('@site/static/img/elioblocs/terminal/afficher-la-valeur.jpg').default} style={{ width: '14%', verticalAlign: 'middle' }} alt="Bloc afficher la valeur" />, Eliobot va scrie în terminal. Veți putea să vedeți ce vă spune și să înțelegeți ce se întâmplă.
Dacă unul dintre programele dvs. nu funcționează și LED-ul clipește roșu, veți putea vedea în terminal ce este în neregulă.

#### Trimite comenzi lui Eliobot

Când în terminal vezi `>>>`, este Eliobot care îți cere să-i trimiți o comandă. Îi puteți trimite comenzi în Python, astfel încât să le execute.
Dacă doriți să aflați mai multe, puteți consulta documentația <a href="https://learn.adafruit.com/welcome-to-circuitpython/the-repl" target="_blank" rel="noopener noreferrer" style={{color : 'blue'}}>CircuitPython</a>.


#### Probleme cu terminalul?

Dacă, după ce faceți clic pe butonul <img src={require('@site/static/img/elioblocs/terminal/connect-button.jpg').default} style={{ width: '12%', verticalAlign: 'middle' }} alt="Buton conectare" />, apare mesajul `Eliobot este conectat`, dar nu se întâmplă nimic, puteți încerca să faceți clic pe butonul <img src={require('@site/static/img/elioblocs/terminal/restart-button.jpg').default} style={{ width: '4%', verticalAlign: 'middle' }} alt="Buton repornire" /> pentru a reporni programul sau <img src={require('@site/static/img/elioblocs/terminal/stop-button.jpg').default} style={{ width: '4%', verticalAlign: 'middle' }} alt="Buton oprire" /> este posibil ca programul dvs. să fie încă în rulare. Dacă nu se întâmplă nimic, deconectați Eliobot de la computer, opriți-l și reconectați-l.