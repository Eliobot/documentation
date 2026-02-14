---
sidebar_position: 2
---

# Clipește un LED



În electronică există o versiune puțin mai strălucitoare a „Hello world!” numit „Blink”, care, după cum sugerează și numele, are ca scop să clipească un LED pe cardul din mână.
Și asta este bine, deoarece Eliobot este echipat cu un LED, care este multicolor, care vă va permite să afișați culoarea dorită!

![alt text](/img/tutorial/python/python-blink-led/led-turned-on.bmp)

Vom începe codul prin integrarea unor biblioteci. Acestea sunt seturi de coduri deja scrise care ne permit să adăugăm cu ușurință funcții.

## Declarație intrări/ieșiri

Primul se numește „board” și este specific pentru CircuitPython. Datorită acesteia, vom putea explica programului nostru modul în care elementele sunt conectate la microcontroler (creierul lui Eliobot)

Pentru a-l integra în programul nostru folosim următoarea linie:

```python
import board
```

Acest lucru ne permite să apelăm intrarea/ieșirea plăcii folosind numărul pin.

```python
board.IO3
```

Sau ca în cazul nostru să folosim numele atribuit pinului

```python
board.NEOPIXEL
```

## Declarație LED Neopixel

LED-ul Eliobot are o funcționare oarecum specifică, deoarece poate afișa mai multe culori, vom folosi o altă bibliotecă pentru a simplifica sarcina:

```python
import neopixel
```

Acum că bibliotecile noastre sunt în proiectul nostru, vom putea folosi funcțiile pe care le conțin.
Începem prin a ne declara LED-ul cu următoarea funcție:

```python
pixel = neopixel.NeoPixel(board.NEOPIXEL, 1, brightness=0.3)
```

``pixel`` acesta este numele pe care îl dăm LED-ului nostru

```python
board.NEOPIXEL nous permet de définir où est branchée la LED sur la carte de Eliobot
```

Există un singur LED conectat la această locație, de unde și 1

În cele din urmă, puteți regla luminozitatea cu luminozitate cuprinsă între 0 și 1

LED-ul este gata de utilizare, așa că îi putem atribui o culoare cu comanda:

```python
pixel.fill(( R , G , B))
```

Folosim un cod de culoare RGB (Roșu, Verde, Albastru) care constă în definirea cantității de Roșu, Verde și Albastru pe care dorim să o afișăm cu o valoare cuprinsă între 0 (fără culoare) și 255 (culoare maximă)

De exemplu, dacă vrem să afișăm roșu pur, scriem:

```python
pixel.fill((255, 0, 0))
```

În această etapă culoarea nu este încă afișată, lipsește o ultimă comandă:

```python
pixel.show()
```

Dacă rulăm scriptul ▶️putem vedea apoi Eliobot aprinzându-se în culoarea cerută, în cazul nostru roșu

Următorul pas pentru a face Eliobot să clipească este să stingem LED-ul, pentru aceasta setăm toate valorile de culoare la 0 și bineînțeles ne amintim să afișăm rezultatul:

```python
pixel.fill((0, 0, 0))
pixel.show()
```

## S-a adăugat un temporizator

Apoi definim timpul dintre fiecare acțiune folosind o nouă bibliotecă „timp”.

```python
import time
```

Funcția „sleep” ne permite să întrerupem programul pentru o durată exprimată în secunde, de exemplu pentru o secundă scriem:

```python
time.sleep(1)
```

Adăugăm această pauză după fiecare schimbare de culoare

```python
pixel.fill((255, 0, 0))
pixel.show()

time.sleep(1)

pixel.fill((0, 0, 0))
pixel.show()

time.sleep(1)
```

Dacă rulăm ▶️ acest program putem vedea că LED-ul se aprinde roșu timp de 1 secundă apoi se stinge, ceea ce ne aduce aproape mai aproape de obiectivul nostru de a-l face să clipească.

## Adăugarea unei bucle

Pasul final este de a face clipirea să dureze mai mult. Pentru aceasta, o singură metodă ar putea consta în copierea/lipirea celor 6 linii chiar deasupra de un număr mare de ori, dar codul nostru ar deveni extrem de lung și complicat pentru nu mult.

Metoda mai elegantă este să folosiți o buclă pentru a repeta o bucată de program. Cea care ne interesează aici este bucla „while” care ne va repeta programul atâta timp cât condiția sa este adevărată, trucul constă deci în a-i da valoarea „True” (întotdeauna adevărat) în condiția care va crea o buclă care se repetă la infinit.

```python
while True:
	pixel.fill((255, 0, 0))
	pixel.show()

	time.sleep(1)

	pixel.fill((0, 0, 0))
	pixel.show()

	time.sleep(1)
```

Rețineți că codul de mai jos „while True:” este indentat (deplasat la dreapta), arătând că se va repeta în buclă.

## Programul final

Iată programul final pe care îl vom putea executa ▶️:

```python
import board
import neopixel
import time

pixel = neopixel.NeoPixel(board.NEOPIXEL, 1, brightness=0.3)

while True:
	pixel.fill((255, 0, 0))
	pixel.show()

	time.sleep(1)

	pixel.fill((0, 0, 0))
	pixel.show()

	time.sleep(1)
```

