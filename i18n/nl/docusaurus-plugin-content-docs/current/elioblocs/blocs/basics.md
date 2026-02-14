---
last_modified_on: "2024-02-26"
title: "Basisprincipes"
description: "Elioblocs - Basis"
---

import Jump from '@site/src/components/Jump';

De basisblokken zijn de eerste blokken die u gaat gebruiken om Eliobot te programmeren.

## Bij het opstarten

![Wij beginnen](/img/elioblocs/blocs/basics/boucle-start.jpg)

**Type**: Bestelling

**Definitie** :

Dit blok is een lus die slechts één keer wordt uitgevoerd aan het begin van het programma. Alleen de blokken in deze lus of in een Repeat Indefinitely-lus worden uitgevoerd, de andere worden gedeactiveerd.

**Gebruik** :

Als we willen dat Eliobot bij het opstarten één veld vooruit gaat.


## Herhaal voor onbepaalde tijd

![Oneindige lus](/img/elioblocs/blocs/basics/boucle-infinie.png)

**Type**: Bestelling

**Definitie** :

Deze lus herhaalt de blokken die hij bevat voor onbepaalde tijd. Om de lus te stoppen, moet u <img src={require('@site/static/img/elioblocs/blocs/loops/quitter-boucle.png').default} style={{ width: '14%', verticalAlign: 'middle' }} alt="Quitter boucle" /> gebruiken.

:::warning
Let op: na het gebruik van deze lus worden **alleen** de blokken binnenin oneindig uitgevoerd.
:::

**Gebruik** :

Als we willen dat Eliobot voor onbepaalde tijd vooruitgaat.

## Wacht X seconden

![Wacht X seconden](/img/elioblocs/blocs/basics/attendre.png)

**Type**: Bestelling

**Definitie** :

Met dit blok kunt u het programma een bepaald aantal seconden/milliseconden pauzeren.

**Gebruik** :

Als u tussen twee acties een pauze in uw programma wilt nemen.

## Toon een waarde in de terminal

![Waarde afdrukken in de terminal](/img/elioblocs/blocs/basics/print-valeur.png)

**Type**: Bestelling

**Definitie** :

Met dit blok kunt u een waarde in de terminal weergeven. De waarde kan een getal, tekst of een Booleaanse waarde zijn.

**Gebruik** :

Als u een waarde wilt weergeven om fouten in uw programma op te sporen.