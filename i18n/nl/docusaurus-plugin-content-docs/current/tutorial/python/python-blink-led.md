---
sidebar_position: 2
---

# Laat een LED knipperen



In de elektronica is er een iets helderdere versie van "Hallo wereld!" genaamd "Blink", dat, zoals de naam al doet vermoeden, tot doel heeft een LED op de kaart in uw hand te laten knipperen.
En dat is maar goed ook, want Eliobot is uitgerust met een LED, die veelkleurig is, waardoor je de kleur van jouw keuze kunt weergeven!

![alt-tekst](/img/tutorial/python/python-blink-led/led-turned-on.bmp)

We beginnen onze code met het integreren van enkele bibliotheken. Dit zijn sets van reeds geschreven codes waarmee we eenvoudig functies kunnen toevoegen.

## Declaratie van in-/uitgangen

De eerste heet “board” en is specifiek voor CircuitPython. Dankzij dit kunnen we aan ons programma uitleggen hoe de elementen verbonden zijn met de microcontroller (het brein van Eliobot)

Om het in ons programma te integreren gebruiken we de volgende regel:

```python
import board
```

Hierdoor kunnen we met behulp van het pinnummer de in-/uitgang van het bord oproepen.

```python
board.IO3
```

Of zoals in ons geval om de naam te gebruiken die aan de pin is toegewezen

```python
board.NEOPIXEL
```

## Neopixel LED-verklaring

De Eliobot LED heeft een enigszins specifieke werking omdat hij verschillende kleuren kan weergeven. We zullen een andere bibliotheek gebruiken om de taak te vereenvoudigen:

```python
import neopixel
```

Nu onze bibliotheken deel uitmaken van ons project, kunnen we de functies die ze bevatten gebruiken.
We beginnen met het declareren van onze LED met de volgende functie:

```python
pixel = neopixel.NeoPixel(board.NEOPIXEL, 1, brightness=0.3)
```

``pixel`` dit is de naam die we aan onze LED geven

```python
board.NEOPIXEL nous permet de définir où est branchée la LED sur la carte de Eliobot
```

Op deze locatie is slechts één LED aangesloten, vandaar de 1

Ten slotte kunt u de helderheid aanpassen met een helderheid variërend van 0 tot 1

De LED is klaar voor gebruik, dus we kunnen er een kleur aan toewijzen met het commando:

```python
pixel.fill(( R , G , B))
```

We gebruiken een RGB-kleurcode (rood, groen, blauw) die bestaat uit het definiëren van de hoeveelheid rood, groen en blauw die we willen weergeven met een waarde variërend van 0 (geen kleur) tot 255 (maximale kleur)

Als we bijvoorbeeld puur rood willen weergeven, schrijven we:

```python
pixel.fill((255, 0, 0))
```

In dit stadium wordt de kleur nog niet weergegeven, er ontbreekt nog een laatste commando:

```python
pixel.show()
```

Als we het script uitvoeren ▶️zien we Eliobot oplichten in de gevraagde kleur, in ons geval rood

De volgende stap om Eliobot te laten knipperen is het uitschakelen van de LED, hiervoor zetten we alle kleurwaarden op 0 en vergeten we natuurlijk niet om het resultaat weer te geven:

```python
pixel.fill((0, 0, 0))
pixel.show()
```

## Een timer toegevoegd

Vervolgens definiëren we de tijd tussen elke actie met behulp van een nieuwe ‘tijd’-bibliotheek.

```python
import time
```

Met de “slaap”-functie kunnen we het programma pauzeren voor een duur uitgedrukt in seconden, bijvoorbeeld voor één seconde schrijven we:

```python
time.sleep(1)
```

Deze pauze voegen we toe na elke kleurverandering

```python
pixel.fill((255, 0, 0))
pixel.show()

time.sleep(1)

pixel.fill((0, 0, 0))
pixel.show()

time.sleep(1)
```

Als we dit programma uitvoeren, kunnen we zien dat de LED 1 seconde rood oplicht en vervolgens uitgaat, wat ons bijna dichter bij ons doel brengt om hem te laten knipperen.

## Een lus toevoegen

De laatste stap is om het knipperen langer te laten duren. Hiervoor zou een methode kunnen bestaan ​​uit het een groot aantal keren kopiëren/plakken van de zes regels, maar onze code zou voor weinig geld extreem lang en ingewikkeld worden.

De elegantere methode is om een ​​lus te gebruiken om een ​​stukje programma te herhalen. Degene die ons hier interesseert is de “while”-lus die ons programma zal herhalen zolang de voorwaarde waar is. De truc bestaat er daarom in om het de waarde “True” (altijd waar) te geven in de voorwaarde die een lus zal creëren die zichzelf oneindig herhaalt.

```python
while True:
	pixel.fill((255, 0, 0))
	pixel.show()

	time.sleep(1)

	pixel.fill((0, 0, 0))
	pixel.show()

	time.sleep(1)
```

Merk op dat de onderstaande code “while True: ” is ingesprongen (naar rechts verschoven), wat aangeeft dat deze in de lus wordt herhaald.

## Eindprogramma

Dit is het definitieve programma dat we kunnen uitvoeren ▶️:

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

