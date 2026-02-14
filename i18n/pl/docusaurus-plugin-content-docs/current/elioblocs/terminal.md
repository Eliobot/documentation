---
last_modified_on: "2024-02-26"
title: "Terminal"
description: "Terminale Elioblocks"
---

#### Tak zbudowany jest terminal. Ta część wyjaśnienia przyda Ci się później.

![Terminal Elioblocs](/img/elioblocs/terminal/terminal.jpg)

> 1. Jest to przycisk „szuflada”, który umożliwia otwarcie lub zamknięcie terminala.
> 
> 2. To jest obszar tekstowy, w którym będziesz mógł komunikować się z Eliobotem, przeglądać komunikaty o błędach lub powodzeniu swojego programu oraz to, co mógł Ci odpowiedzieć.
> 
> 3. To jest obszar przycisków terminala:
> 
> - Uruchom ponownie program: aby ponownie uruchomić program przesłany do Eliobota.
> - Zatrzymaj program: aby zatrzymać aktualnie uruchomiony program.
> 
> 4. Te dwa przyciski umożliwiają obsługę terminala:
> 
> - Prześlij: Ten przycisk wysyła kod do Eliobota, jak pokazano wcześniej, ale jeśli po przesłaniu kodu przejdziesz do terminala, będziesz mógł zobaczyć wysłany kod (kod jest wysyłany w języku zwanym binarnym; jest to normalne, jeśli nie możesz go odczytać).
>   
> ![Kod terminala Elioblocks](/img/elioblocs/terminal/terminal-televerser.jpg)
>   
> - Połącz: Ten przycisk umożliwia nawiązanie połączenia pomiędzy Eliobotem a Twoim komputerem, co umożliwi komunikację między nimi. Terminal będzie w tym celu służył jako komunikator.
>    
> ![Złącze terminala Elioblocs](/img/elioblocs/terminal/terminal-connecter.jpg)

Eliobot to robot posługujący się językiem programowania Python. Dlatego w terminalu zobaczysz komunikaty w języku angielskim. Ale nie martw się, pomożemy ci zrozumieć, co ci mówi.

---

### Funkcje terminala

#### Posłuchaj Eliobota

Kiedy w jednym z programów z Elioblocs użyjesz bloku <img src={require('@site/static/img/elioblocs/terminal/ecrire.jpg').default} style={{ width: '9%', verticalAlign: 'middle' }} alt="Bloc écrire" /> lub <img src={require('@site/static/img/elioblocs/terminal/afficher-la-valeur.jpg').default} style={{ width: '14%', verticalAlign: 'middle' }} alt="Bloc afficher la valeur" />, Eliobot napisze do terminala. Będziesz mógł zobaczyć, co ci mówi i zrozumieć, co się dzieje.
Jeśli któryś z Twoich programów nie działa i dioda LED miga na czerwono, na terminalu będziesz mógł zobaczyć, co jest nie tak.

#### Wyślij polecenia do Eliobota

Kiedy w terminalu zobaczysz `>>>`, oznacza to, że Eliobot prosi Cię o wysłanie mu polecenia. Możesz wysyłać mu polecenia w Pythonie, aby je wykonał.
Jeśli chcesz dowiedzieć się więcej, możesz zapoznać się z dokumentacją <a href="https://learn.adafruit.com/welcome-to-circuitpython/the-repl" target="_blank" rel="noopener noreferrer" style={{color : 'blue'}}>CircuitPython</a>.


#### Problemy z terminalem?

Jeśli po kliknięciu przycisku <img src={require('@site/static/img/elioblocs/terminal/connect-button.jpg').default} style={{ width: '12%', verticalAlign: 'middle' }} alt="Przycisk połącz" /> pojawi się komunikat `Eliobot jest połączony`, ale nic się nie stanie, możesz spróbować kliknąć przycisk <img src={require('@site/static/img/elioblocs/terminal/restart-button.jpg').default} style={{ width: '4%', verticalAlign: 'middle' }} alt="Przycisk restart" />, aby ponownie uruchomić program, w przeciwnym razie <img src={require('@site/static/img/elioblocs/terminal/stop-button.jpg').default} style={{ width: '4%', verticalAlign: 'middle' }} alt="Przycisk stop" /> Twój program może nadal działać. Jeśli nic się nie stanie, odłącz Eliobota od komputera, wyłącz go i podłącz ponownie.