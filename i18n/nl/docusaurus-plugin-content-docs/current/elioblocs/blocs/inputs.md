---
last_modified_on: "2024-10-31"
title: "Voorgerechten"
description: "Elioblocs - Ingangen"
---

Met invoerblokken kunt u informatie uit de omgeving van Eliobot ophalen.

Met obstakelsensorblokken kunt u de aanwezigheid van een obstakel in de buurt van Eliobot testen.

## Test op de aanwezigheid van een obstakel

![Controleer obstakel](/img/elioblocs/blocs/inputs/test-obstacles.png)

**Type**: Booleaans blok

**Definitie** :

Met dit blok kunt u de aanwezigheid van een obstakel op een bepaalde afstand van Eliobot testen:
- aan de voorkant
- aan de achterkant
- links
- rechts

**Gebruik** :

Als u obstakels zoals muren of voorwerpen wilt vermijden.

---

Met lijnsensorblokken kunt u een lijn volgen of testen op de aanwezigheid van een lijn.

## Volg een lijn

![alt-tekst](/img/elioblocs/blocs/inputs/suivre-ligne.png)

**Type**: Bestelling

**Definitie** :

Met dit blok kun je een zwarte lijn volgen.

**Gebruik** :

Als we willen dat Eliobot een zwarte lijn op een route volgt, bijvoorbeeld die op de achterkant van uw instructies.

## Test op de aanwezigheid van een lijn

![alt-tekst](/img/elioblocs/blocs/inputs/ligne-presente.png)

**Type**: Booleaans blok

**Definitie** :

Met dit blok kunt u de aanwezigheid van een zwarte lijn onder Eliobot testen:
- in het midden
- links
- rechts
- midden links
- rechts midden

**Gebruik** :

Om Eliobot in staat te stellen een zwarte lijn op een koers te volgen en te testen of hij links of rechts moet afslaan.

## Wijzig de gevoeligheid van de lijnsensor

![alt-tekst](/img/elioblocs/blocs/inputs/sensi-ligne.png)

**Type**: Bestelling

**Definitie** :

Met dit blok kunt u de gevoeligheid van de lijnsensor wijzigen. Wijzigt de waarde waarbij de lijnsensor een lijn detecteert.

**Gebruik** :

Als u zich in een zeer lichte of donkere ruimte bevindt, kunt u de gevoeligheid van de lijnsensor wijzigen, zodat deze de lijn beter detecteert.

## Lees de waarde van een lijnsensor

![alt-tekst](/img/elioblocs/blocs/inputs/valeur-ligne.png)

**Type**: Waarde

**Definitie** :

Dit blok retourneert de waarde van de lijnsensor. U kunt het bijvoorbeeld in de terminal weergeven.
Hiermee kan de gevoeligheid van de lijnsensor worden ingesteld.

**Gebruik** :

Als u de waarde van de lijnsensor wilt ophalen om de gevoeligheid van de lijnsensor beter te kalibreren.

## Automatische lijnkalibratie

![alt-tekst](/img/elioblocs/blocs/inputs/calibration-ligne.jpg)

**Type**: Bestelling

**Definitie** :

Met dit blok kunt u de lijnsensor automatisch kalibreren. Hiermee kunt u de waarde definiëren waarbij de lijnsensor een lijn detecteert.

**Gebruik** :

Je moet de 5 lijnsensoren boven een zwarte lijn plaatsen en eliobot zal automatisch de waarde kalibreren waarop hij de lijn detecteert door
vooruit en achteruit bewegen. Eliobot moet loodrecht op de lijn staan ​​om de kalibratie correct te laten zijn.

---

## Test of de knop is geactiveerd

![Is knop geactiveerd](/img/elioblocs/blocs/inputs/test-bouton.png)

**Type**: Booleaans blok

**Definitie** :

Met dit blok kunt u testen of de knop van Eliobot is geactiveerd. Het retourneert `waar` als de knop is geactiveerd en anders `onwaar`.

**Gebruik** :

Als u alleen een actie wilt uitvoeren als de Eliobot-knop is geactiveerd. Start bijvoorbeeld uw programma.


---

## De infraroodafstandsbediening

Om de infraroodafstandsbedieningsblokken te gebruiken, moet u de infraroodafstandsbediening beschikbaar hebben in de Eliobot-kit.

![Infraroodafstandsbediening](/img/elioblocs/blocs/inputs/nice_ir_remote.jpg)


[Koop hier](https://eliobot.com/products/telecommande-infra-rouge)

## Kies een sensor om te lezen

![Kies sensor](/img/elioblocs/blocs/inputs/ir_remote_sensor_change.png)

**Type**: Bestelling

**Definitie** :

Met dit blok kunt u de infraroodsensor kiezen voor het lezen van de opdrachten van de infraroodafstandsbediening,
je kunt kiezen tussen de voorsensor en de achtersensor.

**Gebruik** :

Als u wilt dat de opdrachten van de infraroodafstandsbediening door de voor- of achtersensor worden gelezen.
Bijvoorbeeld om Eliobot te volgen en hem commando's te sturen terwijl jij achter hem staat.

## Lees de opdracht van de infraroodafstandsbediening

![Lees commando](/img/elioblocs/blocs/inputs/ir_remote_do.png)

<p>
<img src={require('@site/static/img/elioblocs/blocs/inputs/ir_remote.png').default} alt="Read command" width="70%"/>
</p>

**Type**: Bestelling

**Definitie** :

Met dit blok kunt u de opdracht van de infraroodafstandsbediening lezen en een actie uitvoeren op basis van de ontvangen opdracht.

**Gebruik** :

Als u wilt dat Eliobot een actie uitvoert op basis van de opdracht die door de infraroodafstandsbediening wordt ontvangen.
Ga bijvoorbeeld vooruit, achteruit, draai naar links of rechts. Je kunt hem ook muziek laten afspelen of een LED laten oplichten.

