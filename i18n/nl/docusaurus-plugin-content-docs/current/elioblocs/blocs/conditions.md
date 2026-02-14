---
last_modified_on: "2024-02-26"
title: "Voorwaarden"
description: "Elioblocs – Voorwaarden"
---

import Jump from '@site/src/components/Jump';


Met Voorwaarden kunt u acties uitvoeren op basis van bepaalde voorwaarden. Dit maakt een programma ‘intelligent’ en zorgt ervoor dat het beslissingen neemt.


Bij het programmeren gebruiken we

## Als - Doe - Anders

![Blokkeren als - doen - anders](/img/elioblocs/blocs/conditions/if-else.png)

**Type**: Bestelling

**Definitie** :

Met dit blok kunt u een actie uitvoeren als een voorwaarde waar is, en een andere actie als de voorwaarde onwaar is.
Het bestaat uit drie delen:

- **If**: de voorwaarde die moet worden gecontroleerd (als deze waar is, voeren we het `Faire`-blok uit, we noemen dit een booleaanse waarde).
- **Do**: het blok met instructies dat moet worden uitgevoerd als de voorwaarde waar is.
- **Anders**: het blok met instructies dat moet worden uitgevoerd als de voorwaarde onwaar is.

**Gebruik** :

Als we willen dat Eliobot vooruit gaat als een sensor een obstakel detecteert, en achteruit als er geen obstakel wordt gedetecteerd.


## Als - Doen

![Als blokkeren - Doen](/img/elioblocs/blocs/conditions/if.png)

Dit blok gebruikt dezelfde logica als het `Si - Faire - Sinon` blok, maar met één specifiek kenmerk kunnen we het blok aanpassen om aanvullende voorwaarden toe te voegen met behulp van de uitrusting.

### Het blok bewerken

![Mutator van het blok Si](/img/elioblocs/blocs/conditions/if-mutator.png)

**Type**: Bestelling

**Definitie** :

Hier kunt u zoveel voorwaarden stapelen als u wilt. Als aan alle voorwaarden voldaan is, wordt het deel van het `Faire` blok uitgevoerd.
Alle voorwaarden worden één voor één gecontroleerd in de volgorde waarin ze zijn gestapeld. Als een voorwaarde onwaar is, wordt het `Faire`-blok ervan niet uitgevoerd.

**Gebruik** :

Als we willen dat Eliobot vooruit beweegt als een sensor een obstakel detecteert, en achteruit als er geen obstakel wordt gedetecteerd, maar ook dat de robot stopt als een andere sensor een obstakel detecteert.

> #### Voorbeeld
>
> <img src={require('@site/static/img/elioblocs/blocs/conditions/example-if.jpg').default} style={{ width: '30%', verticalAlign: 'middle' }} alt="Example Si" />
>
> In dit voorbeeld wordt alleen de eerste voorwaarde uitgevoerd omdat dit de eerste voorwaarde in de lijst is die waar is. Als de eerste voorwaarde onwaar was geweest, dan zou de tweede voorwaarde waar zijn geweest, en als deze ook onwaar was geweest, zou het 'else'-blok tussenbeide zijn gekomen, terwijl geen van de voorgaande voorwaarden waar was.

## Vergelijking

![Vergelijkingsblok](/img/elioblocs/blocs/conditions/est-egal.png)

**Type**: Booleaans blok

**Definitie** :

Met dit blok kunt u twee waarden vergelijken. Het bestaat uit twee delen:

- **Eerste waarde en tweede waarde**: de te vergelijken waarden.
- **Vergelijkingsoperator**: het type vergelijking dat moet worden uitgevoerd (gelijk, verschillend, groter, minder, groter of gelijk, minder of gelijk).

**Gebruik** :

Als we willen weten of twee waarden gelijk zijn, of de ene waarde groter is dan de andere, enz.

## Logische werking

![Logisch bedieningsblok](/img/elioblocs/blocs/conditions/et.png)

**Type**: Booleaans blok

**Definitie** :

Met dit blok kunt u een logische bewerking uitvoeren tussen twee voorwaarden. Het bestaat uit twee delen:

- **Eerste voorwaarde en tweede voorwaarde**: de voorwaarden om te vergelijken.
- **Logische operator**: het type logische bewerking dat moet worden uitgevoerd (AND, OR).

**Gebruik** :

Als we willen weten of twee voorwaarden waar zijn of dat één voorwaarde waar is.

## Nee

![Blokkeer Nee](/img/elioblocs/blocs/conditions/no.png)

**Type**: Booleaans blok

**Definitie** :

Met dit blok kunt u een voorwaarde tenietdoen. Dit betekent dat ongeacht de voorwaarde, als het waar is, het onwaar zal worden en omgekeerd.

**Gebruik** :

Als we een voorwaarde willen veranderen van waar naar onwaar of andersom.

## Waar/onwaar

![Waar / Onwaar Blokkeren](/img/elioblocs/blocs/conditions/vrai.png)

**Type**: Booleaans blok

**Definitie** :

Met dit blok kunt u een Booleaanse waarde definiëren. Dit betekent dat de waarde waar of onwaar is.

**Gebruik** :

Als we een startvoorwaarde willen definiëren.

## Nul

![Null Block](/img/elioblocs/blocs/conditions/bloc-nul.png)

**Type**: Waarde

**Definitie** :

Met dit blok kunt u een nulwaarde definiëren. Dit betekent dat de waarde niet is gedefinieerd.
Null wordt vaak gebruikt om aan te geven dat een variabele geen waarde heeft of niet is gedefinieerd.

:::warning
Let op, de nulwaarde is niet hetzelfde als de nulwaarde.
:::

**Gebruik** :

Als we een variabele willen definiëren zonder er een waarde aan te geven.

## Test

![Testblok](/img/elioblocs/blocs/conditions/test.png)

**Type**: Waarde

**Definitie** :

Met dit blok kunt u een voorwaarde testen. Het bestaat uit twee delen:

- **Conditie**: de te testen staat.
- **Te gebruiken waarde**: afhankelijk van het resultaat van de voorwaarde, de te gebruiken waarde.

**Gebruik** :

Als we een voorwaarde willen testen en afhankelijk van het resultaat een andere waarde willen gebruiken.

## Voorbeeld

Leer hoe u voorwaarden gebruikt in het volgende voorbeeld:

<Jump to="/docs/tutorial/elioblocs/avoid-obstacles-elioblocs">Het vermijden van obstakels - Elioblocs</Jump>