---
last_modified_on: "2024-02-26"
title: "Schleifen"
description: "Elioblocs - Schleifen"
---

Schleifen ermöglichen es, Aktionen eine bestimmte Anzahl von Malen zu wiederholen oder bis eine Bedingung erfüllt ist. Sie sind sehr nützlich, um wiederholende Aufgaben zu automatisieren.

## X-mal wiederholen

![Für Schleife](/img/elioblocs/blocs/loops/boucle-repeter.png)

**Typ**: Bestellung

**Definition**:

Diese Schleife wiederholt die darin enthaltenen Blöcke eine bestimmte Anzahl von Malen. Um die Anzahl der Wiederholungen festzulegen, können Sie die gewünschte Anzahl direkt in das Feld schreiben oder einen Block verwenden, der einen Wert enthält.

**Verwenden** :

Wenn wir möchten, dass Eliobot fünfmal um ein Feld vorrückt.

## Wiederholen, solange

![While-Schleife](/img/elioblocs/blocs/loops/boucle-while.png)

**Typ**: Bestellung

**Definition**:

Diese Schleife besteht aus zwei Teilen:

- **Bedingung**: solange/bis diese Bedingung wahr ist/ist.
- **Zu prüfende Bedingung**: die Bedingung, die bei jedem Schleifendurchlauf überprüft werden soll.

> #### Solange
>
> Diese Schleife wiederholt die darin enthaltenen Blöcke, solange die Bedingung wahr ist.
>
> #### Bis
>
> Diese Schleife wiederholt die darin enthaltenen Blöcke, bis die Bedingung wahr ist.

**Verwenden** :

Wenn wir möchten, dass Eliobot sich vorwärts bewegt, solange ein Sensor kein Hindernis erkennt.


## Zählen mit ```i```

![Für i-Schleife](/img/elioblocs/blocs/loops/boucle-for.png)

**Typ**: Bestellung

**Definition**:

Mit dieser Schleife können die darin enthaltenen Blöcke mithilfe einer Variablen ```i```, die von 0 bis zum definierten Wert reicht, eine bestimmte Anzahl von Malen wiederholt werden. Diese Variable ```i``` wird in jeder Schleife um den letzten Wert erhöht.

> #### Detail
> 
> <img src={require('@site/static/img/elioblocs/blocs/loops/example-boucle-for.jpg').default} style={{ width: '50%', verticalAlign: 'middle' }} alt="Example for" />
> 
> 1. Startwert der Iterationen.
> 2. Endwert der Iterationen.
> 3. Inkrementierung der Variablen ```i``` bei jedem Schleifendurchlauf.

**Verwenden** :

Wenn wir möchten, dass Eliobot sich fünfmal um ein Quadrat vorwärts bewegt, wird die Quadratzahl angezeigt.

## Für ```i``` in der Liste

![Für j in Listenschleife](/img/elioblocs/blocs/loops/boucle-for-liste.png)

**Typ**: Bestellung

**Definition**:

Mit dieser Schleife können Sie die darin enthaltenen Blöcke so oft wiederholen, wie Elemente in einer Liste vorhanden sind.

**Verwenden** :

Wenn wir eine Liste von Werten durchsuchen und diese einzeln anzeigen möchten.

## Schleife verlassen oder zur nächsten Schleifeniteration wechseln

![Schleife verlassen](/img/elioblocs/blocs/loops/quitter-boucle.png)

**Typ**: Bestellung

**Definition**:

Dieser Block hat zwei Verwendungszwecke:

- **Schleife verlassen**: Ermöglicht das Verlassen der aktuellen Schleife.
- **Zur nächsten Iteration springen**: ermöglicht es Ihnen, zur nächsten Iteration der aktuellen Schleife zu wechseln.

**Verwenden** :

Wenn wir unter bestimmten Bedingungen eine Endlosschleife verlassen oder einen Schleifendurchlauf in einer ```Répéter X fois```-Schleife überspringen möchten.

