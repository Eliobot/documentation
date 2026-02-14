---
sidebar_position: 2
---

# Podstawowe ruchy

Skoro już wiesz jak korzystać z interfejsu, możemy przejść dalej w programowaniu. Celem tego samouczka jest pomoc w odkryciu 3 podstawowych ruchów robota: przesuwanie go do przodu, do tyłu i skręcanie.

Aby zastosować zdobytą wiedzę w praktyce, na końcu tego samouczka rzucamy Ci wyzwanie. Twoim wyzwaniem, jeśli je podejmiesz, będzie ułożenie kwadratu z Eliobotem :)

![tekst alternatywny](/img/tutorial/elioblocs/basic-movements-elioblocs/Cote-11.png)

Aby rozpocząć ten samouczek, przejdź do naszego interfejsu programowania https://app.eliobot.com/.


## Przesuń Eliobota do przodu

Celem tego pierwszego kroku jest popchnięcie Eliobota do przodu.

![tekst alternatywny](/img/tutorial/elioblocs/basic-movements-elioblocs/Cote-12-edited.png)

### Tworzenie programu

Aby przesunąć Eliobota do przodu, musisz wybrać ruch do przodu. Kliknij blok „Ruchy” i przeciągnij „Przesuń robota do przodu” do swojego obszaru roboczego.

#### Opcja 1: Ruch w określonym czasie

Jeśli chcesz, aby Eliobot poruszał się do przodu przez określony czas (w naszym przykładzie 30 sekund), musisz dodać do ruchu opóźnienie czasowe. Kliknij „Narzędzia” i wstaw blok „czekaj 1 sekundę”.

Zmień liczbę od 1 do 30, aby Eliobot ruszył do przodu przez 30 sekund.

![tekst alternatywny](/img/tutorial/elioblocs/basic-movements-elioblocs/OFFO.png)

#### Opcja 2: Przeniesienie na czas nieokreślony

Jeśli chcesz, aby Eliobot poruszał się do przodu w nieskończoność, musisz dodać pętlę do ruchu, aby był powtarzany. Kliknij „Pętle” w przyborniku i przeciągnij blok „powtarzaj podczas” wokół poprzedniego bloku.

Pamiętaj, aby pętla była kompletna, musisz dodać do niej warunek. Eliobot porusza się do przodu, dopóki warunek jest spełniony. Kliknij blok „Warunki” i przeciągnij „true” do pętli.

![tekst alternatywny](/img/tutorial/elioblocs/basic-movements-elioblocs/tuto-3etape-1.png)

### Transfer programu

Aby przetestować program na Eliobocie, należy podłączyć go do komputera kablem USB i kliknąć przycisk „Program”.

Następnie zobaczysz migającą diodę LED, a po zakończeniu możesz odłączyć Eliobota, aby zobaczyć wynik!


## Cofnij Eliobota

Celem tego drugiego kroku jest odepchnięcie Eliobota.

![tekst alternatywny](/img/tutorial/elioblocs/basic-movements-elioblocs/Cote-15-edited.png)

Proces jest identyczny z pierwszym krokiem, ponieważ ruch pozostaje ten sam, zmienia się po prostu kierunek.

Chcemy, żeby Eliobot cofnął się. Aby go cofnąć, po prostu kliknij menu rozwijane oznaczone małym pomarańczowym trójkątem po prawej stronie bloku „Przenieś robota do”. Następnie wybierz opcję „wstecz”.

![tekst alternatywny](/img/tutorial/elioblocs/basic-movements-elioblocs/oooooooooooooooooooooooooooooooooooppp.png)

Aby przetestować program na Eliobocie, należy podłączyć go do komputera kablem USB i kliknąć przycisk „Program”.

Następnie zobaczysz migającą diodę LED, a po zakończeniu możesz odłączyć Eliobota, aby zobaczyć wynik!


## Skręć Eliobota w prawo

Celem trzeciego kroku jest nakłonienie Eliobota do skręcenia w prawo.

![
    
](/img/tutorial/elioblocs/basic-movements-elioblocs/Cote-13-edited.png)
### Tworzenie programu

Aby obrócić Eliobota, musisz wybrać ruch obrotowy. Kliknij blok „Ruchy” i przeciągnij „Obróć robota w prawo” do swojego obszaru roboczego.

#### Opcja 1: Ruch w określonym czasie

Jeśli chcesz, aby Eliobot obracał się przez określony czas (w naszym przykładzie 2 sekundy), musisz dodać do ruchu opóźnienie czasowe. Kliknij „Narzędzia” i wstaw blok „czekaj 1 sekundę”.

Zmień cyfrę 1 na cyfrę 2, aby Eliobot skręcił w prawo na 2 sekundy.

![tekst alternatywny](/img/tutorial/elioblocs/basic-movements-elioblocs/Capture-ooooii.png)

#### Opcja 2: Aktywuj tryb bączka 🙂

Chcemy, aby Eliobot kręcił się w prawo przez nieskończony okres czasu (aby obrócić górę). Możesz utworzyć pętlę, aby się powtarzała. Kliknij „Pętle” w przyborniku i przeciągnij blok „powtarzaj podczas” wokół poprzedniego bloku.

Aby pętla była kompletna, dodaj do niej warunek. Robot skręca w prawo, dopóki warunek jest spełniony. Kliknij blok „Warunki” i przeciągnij „true” do pętli.

![tekst alternatywny](/img/tutorial/elioblocs/basic-movements-elioblocs/tuto-3-etape-3-1.png)

### Transfer programu

Aby przetestować program na Eliobocie, należy podłączyć go do komputera kablem USB i kliknąć przycisk „Program”.

Następnie zobaczysz migającą diodę LED, a po zakończeniu możesz odłączyć Eliobota, aby zobaczyć wynik!


## Skręć Eliobota w lewo

Celem czwartego kroku jest doprowadzenie Eliobota do skrętu w lewo.

Podejście jest identyczne jak w poprzednim kroku, ponieważ ruch obrotowy pozostaje ten sam, zmienia się jedynie kierunek.

Chcemy, żeby Eliobot skręcił w lewo. Aby obrócić robota w lewo, wystarczy kliknąć menu rozwijane oznaczone małym pomarańczowym trójkątem po prawej stronie bloku „Obróć robota w stronę”. Następnie wybierz tryb „w lewo”.

![tekst alternatywny](/img/tutorial/elioblocs/basic-movements-elioblocs/Capture-17.png)

Aby przetestować program na Eliobocie, należy podłączyć go do komputera kablem USB i kliknąć przycisk „Program”.

Następnie zobaczysz migającą diodę LED, a po zakończeniu możesz odłączyć Eliobota, aby zobaczyć wynik!


## Wyzwanie: zrób kwadrat

Czas rzucić sobie wyzwanie! Czy uda Ci się zrobić ten kwadrat?

Kwadrat składa się z ruchów cząstkowych: linii prostej i obrotu powtórzonego czterokrotnie.

![tekst alternatywny](/img/tutorial/elioblocs/basic-movements-elioblocs/Cote-1.png)

### Linia prosta

Pierwszy ruch cząstkowy polega na przesunięciu Eliobota do przodu, aby prześledzić pierwszy bok kwadratu. Jak widzieliśmy w kroku 1, musisz wybrać ruch do przodu. Wstawia blok „Przesuń robota do przodu” w obszarze roboczym.

Następnie musisz dodać opóźnienie, aby Eliobot poruszał się po linii prostej przez 1 sekundę. Wstaw blok „poczekaj 1 sekundę” do narzędzia.

Istnieje możliwość modyfikacji czasu w celu zmiany wielkości kwadratu.

![tekst alternatywny](/img/tutorial/elioblocs/basic-movements-elioblocs/OOOOOOOOOL.png)


### Kolej

Drugi ruch cząstkowy polega na obróceniu Eliobota w prawo, aby narysować kąt prosty. Jak widzieliśmy w kroku 3, wstaw blok „skręć robota w prawo” poniżej poprzednich bloków.

Następnie należy dodać opóźnienie czasowe, aby Eliobot wykonał obrót o ćwierć obrotu, czyli 270 milisekund. Wstawia blok „czekaj 1 sekundę” do obszaru roboczego, a następnie modyfikuje czas trwania i jednostkę bloku.

![tekst alternatywny](/img/tutorial/elioblocs/basic-movements-elioblocs/Capture-PPO.png)


### Magiczna pętla

Dla przypomnienia, kwadrat składa się z linii prostej i zakrętu powtórzonego czterokrotnie. Teraz, gdy już wykonałeś jeden bok kwadratu, wystarczy powtórzyć tę operację kilka razy, aby uzyskać pozostałe boki.

Aby ułatwić Ci zadanie, istnieje blok umożliwiający wykonanie tego powtórzenia: pętla.

Kliknij „Pętle” w przyborniku i wstaw blok „Powtarzaj… razy, wykonaj” w obszarze roboczym. Przesuń ten blok wokół poprzednich.

Ponieważ kwadrat ma 4 boki, prosimy pętlę o powtórzenie 4 razy.

![tekst alternatywny](/img/tutorial/elioblocs/basic-movements-elioblocs/bloc-carre-i.png)


### Transfer programu

Aby przetestować program na Eliobocie, należy podłączyć go do komputera kablem USB i kliknąć przycisk „Program”.

Następnie zobaczysz migającą diodę LED, a po zakończeniu możesz odłączyć Eliobota, aby zobaczyć wynik!


