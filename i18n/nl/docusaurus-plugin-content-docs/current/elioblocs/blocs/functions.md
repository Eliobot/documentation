---
last_modified_on: "2024-02-26"
title: "Functies"
description: "Elioblocs - Functies"
---

Met functies kunt u blokken groeperen om ze later in het programma opnieuw te gebruiken.
Ze zijn erg handig om te voorkomen dat dezelfde blokken meerdere keren worden herhaald.
We kunnen ze ook invoerwaarden geven en een uitvoerwaarde ophalen.
Ze kunnen overal in het programma worden opgeroepen en indien nodig meerdere keren, zolang ze maar eerder zijn gedeclareerd.


## Maak een functie

![Maak een functie](/img/elioblocs/blocs/functions/fonctionA.png)

**Type**: Bestelling

**Definitie** :

Een functie is als een lus: deze bevat blokken die moeten worden uitgevoerd. Deze blokken worden uitgevoerd wanneer de functie wordt aangeroepen.
U kunt het vraagteken gebruiken om commentaar aan uw functie toe te voegen (zeg bijvoorbeeld wat deze doet).

**Gebruik** :

Als we blokken willen groeperen om ze later in het programma opnieuw te gebruiken. We proberen overtollige acties in een functie te plaatsen om te voorkomen dat ze meerdere keren worden herhaald.

## Roep een functie op

![Een functie oproepen](/img/elioblocs/blocs/functions/fonctionA-appel.png)

**Type**: Bestelling

**Definitie** :

Met dit blok kunt u een functie aanroepen. Blokken binnen de functie worden uitgevoerd.

**Gebruik** :

Als we de blokken van een functie willen uitvoeren zonder ze te herschrijven.

## Haal een waarde op aan de uitvoer van de functie

![Functie met waarde return](/img/elioblocs/blocs/functions/fonctionB.png)

**Type**: Bestelling

![Lees geretourneerde waarde](/img/elioblocs/blocs/functions/fonctionB-retour.png)

**Type**: Waarde

**Definitie** :

Er zijn functies die een waarde retourneren. Net als bij een normale functie worden de blokken binnenin uitgevoerd, maar bovendien wordt er aan het einde een waarde geretourneerd. Deze waarde kan in de rest van het programma worden gebruikt.

**Gebruik** :

Als we een waarde uit een functie willen ophalen om deze in de rest van het programma te gebruiken. Als we bijvoorbeeld een berekening in een functie uitvoeren, kunnen we het resultaat ophalen om het in de rest van het programma te gebruiken.

## Voeg waarden toe aan functie-invoer

![Voeg invoer toe aan een functie](/img/elioblocs/blocs/functions/add-input-functions.png)

![Declareer functie-ingangen](/img/elioblocs/blocs/functions/fonctionA-input.png)

**Type**: Bestelling

**Definitie** :

Het is mogelijk om waarden aan een functie te geven, zodat deze deze gebruikt. Deze waarden worden parameters genoemd.
Om parameters aan een functie toe te voegen, voegt u ze eenvoudigweg toe aan het functieblok met behulp van het tandwiel.
Wanneer we de functie aanroepen, moeten we waarden voor deze parameters opgeven.

**Gebruik** :

Laten we ons voorstellen dat we een functie hebben die Pythagoras berekent. We kunnen deze de twee zijden van de driehoek geven, zodat deze de hypotenusa retourneert.

## Een functie afsluiten

![Retourwaarde op evenement](/img/elioblocs/blocs/functions/return-function.png)

**Type**: Bestelling

**Definitie** :

Met dit blok kunt u een functie afsluiten en een waarde retourneren als aan een voorwaarde is voldaan.

**Gebruik** :

Als we een functie vóór het einde willen verlaten, kunnen we dit blok gebruiken om een ​​waarde terug te geven.
