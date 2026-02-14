---
last_modified_on: "2024-02-26"
title: "Lussen"
description: "Elioblocs - Lussen"
---

Met lussen kunnen acties een bepaald aantal keren worden herhaald totdat aan een voorwaarde is voldaan (of niet). Ze zijn erg handig voor het automatiseren van repetitieve taken.

## Herhaal X keer

![Voor lus](/img/elioblocs/blocs/loops/boucle-repeter.png)

**Type**: Bestelling

**Definitie** :

Deze lus herhaalt de blokken die het bevat een bepaald aantal keren. Om het aantal herhalingen te definiëren, kunt u direct het gewenste aantal keren in het vak schrijven of een blok met een waarde gebruiken.

**Gebruik** :

Als we willen dat Eliobot 5 keer één veld vooruit gaat.

## Herhaal terwijl

![Terwijl loop](/img/elioblocs/blocs/loops/boucle-while.png)

**Type**: Bestelling

**Definitie** :

Deze lus bestaat uit twee delen:

- **Voorwaarde**: zolang/totdat deze voorwaarde waar is/is.
- **Te controleren voorwaarde**: de voorwaarde die moet worden gecontroleerd bij elke lusbeurt.

> #### Zolang
>
> Deze lus herhaalt de blokken die deze bevat, zolang de voorwaarde waar is.
>
> #### Tot
>
> Deze lus herhaalt de blokken die deze bevat totdat de voorwaarde waar is.

**Gebruik** :

Als we willen dat Eliobot vooruitgaat zolang een sensor geen obstakel detecteert.


## Tel met ```i```

![Voor ik loop](/img/elioblocs/blocs/loops/boucle-for.png)

**Type**: Bestelling

**Definitie** :

Met deze lus kunnen de blokken die deze bevat een bepaald aantal keren worden herhaald met behulp van een variabele ```i``` die van 0 naar de gedefinieerde waarde gaat. Deze variabele ```i``` wordt elke lus verhoogd met de laatste waarde.

> #### Details
> 
> <img src={require('@site/static/img/elioblocs/blocs/loops/example-boucle-for.jpg').default} style={{ width: '50%', verticalAlign: 'middle' }} alt="Example for" />
> 
> 1. Startwaarde van iteraties.
> 2. Eindwaarde van iteraties.
> 3. Verhoging van de variabele ```i``` bij elke luswisseling.

**Gebruik** :

Als we willen dat Eliobot 5 keer één vakje vooruit gaat, waarbij het vierkantsnummer wordt weergegeven.

## Voor ```i``` in de lijst

![Voor j in lijstlus](/img/elioblocs/blocs/loops/boucle-for-liste.png)

**Type**: Bestelling

**Definitie** :

Met deze lus kunt u de blokken die deze bevat herhalen, zo vaak als er elementen in een lijst voorkomen.

**Gebruik** :

Als we door een lijst met waarden willen bladeren en ze één voor één willen weergeven.

## Sluit de lus af of ga naar de volgende lus-iteratie

![Verlaat lus](/img/elioblocs/blocs/loops/quitter-boucle.png)

**Type**: Bestelling

**Definitie** :

Dit blok heeft twee toepassingen:

- **Exit loop**: hiermee kunt u de huidige lus verlaten.
- **Ga naar volgende iteratie**: hiermee kunt u naar de volgende iteratie van de huidige lus gaan.

**Gebruik** :

Als we onder bepaalde omstandigheden een oneindige lus willen verlaten of een lus-iteratie in een lus ```Répéter X fois``` willen overslaan.


