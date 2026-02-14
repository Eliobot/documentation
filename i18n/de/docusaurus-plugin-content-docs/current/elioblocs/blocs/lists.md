---
last_modified_on: "2024-02-26"
title: "Listen"
description: "Elioblocs - Listen"
---

Listen ermöglichen es, mehrere Werte in einer einzigen Variablen zu speichern. Sie sind sehr nützlich, um Daten desselben Typs zu speichern.

## Erstellen Sie eine Liste

### Leere Liste

![Liste erstellen](/img/elioblocs/blocs/lists/creer-liste-vide.png)

**Typ**: Wert

**Definition**:

Erstellt eine leere Liste.
Mit dem Zahnrad können Sie Elemente zur Liste hinzufügen.

**Verwenden** :

Wenn wir eine Liste zum Speichern von Werten erstellen möchten.

### Liste mit definierten Elementen

![Liste mit Elementen erstellen](/img/elioblocs/blocs/lists/creer-liste.png)

**Typ**: Wert

**Definition**:

Erstellt eine Liste mit den definierten Elementen.
Mit dem Zahnrad können Sie der Liste weitere Elemente hinzufügen.

**Verwenden** :

Wenn wir eine Liste mit bereits definierten Werten erstellen möchten.

### Liste mit wiederholtem Element

![Wiederholte Liste erstellen](/img/elioblocs/blocs/lists/creer-liste-repete.png)

**Typ**: Wert

**Definition**:

Erstellt eine Liste mit einem Element, das eine bestimmte Anzahl von Malen wiederholt wird.

**Verwenden** :

Wenn wir eine Liste erstellen möchten, bei der ein Element mehrmals wiederholt wird.

### Liste aus Text

![Liste aus Text erstellen](/img/elioblocs/blocs/lists/liste-texte.png)

**Typ**: Wert

**Definition**:

Ermöglicht das Erstellen einer Liste aus Text. Mit dem Trennzeichen können Sie festlegen, wie die Elemente der Liste getrennt werden.

**Verwenden** :

Wenn Sie eine Liste aus einem Text oder einer CSV erstellen möchten.

> #### Beispiel
> 
> Der Text: „Ich bin Programmierer“
> 
> Mit dem Trennzeichen: „ “ (Leerzeichen)
> 
> Gibt die Liste aus: ['I', 'am', 'a', 'programmer']


## Finden Sie die Länge einer Liste heraus

![Listenlänge](/img/elioblocs/blocs/lists/long-liste.png)

**Typ**: Wert

**Definition**:

Gibt die Anzahl der in einer Liste vorhandenen Elemente an.

**Verwenden** :

Wenn wir eine Aktion abhängig von der Länge der Liste eine bestimmte Anzahl von Malen ausführen möchten.

## Testen Sie, ob eine Liste leer ist

![Leere Liste](/img/elioblocs/blocs/lists/liste-vide.png)

**Typ**: Boolescher Block

**Definition**:

Ermöglicht Ihnen zu testen, ob eine Liste leer ist oder nicht (gibt einen booleschen Wert zurück).

**Verwenden** :

Wenn wir eine Aktion ausführen möchten, wenn eine Liste leer ist. Zum Beispiel das Ausfüllen.

## Suchen Sie ein Vorkommen in einer Liste

![Vorkommen in Liste finden](/img/elioblocs/blocs/lists/occurence-liste.png)

**Typ**: Wert

**Definition**:

Gibt die Position des ersten Vorkommens eines Elements in einer Liste zurück.

**Verwenden** :

Wenn wir wissen wollen, ob und an welcher Position ein Element in einer Liste vorhanden ist.

## Eine Liste bearbeiten

![Listenelement ändern](/img/elioblocs/blocs/lists/mettre-liste.png)

**Typ**: Bestellung

**Definition**:

Ermöglicht das Verschieben/Einfügen eines Elements an eine bestimmte Position in der Liste.

**Verwenden** :

Wenn Sie eine Liste ändern möchten, indem Sie ein Element verschieben oder ein Element an einer bestimmten Position einfügen.

## Eine Liste sortieren

![Liste sortieren](/img/elioblocs/blocs/lists/trier-liste.png)

**Typ**: Wert

**Definition**:

Ermöglicht das Sortieren einer Liste in aufsteigender oder absteigender Reihenfolge.
Mit den Optionen:
- **numerisch**: Sortiert Elemente als Zahlen.
- **alphabetisch**: Sortiert Elemente als Text.
- **Alphabetische Groß-/Kleinschreibung ignorieren**: Sortiert Elemente als Text, ohne Groß- und Kleinschreibung zu berücksichtigen.

**Verwenden** :

Wenn Sie eine Liste sortieren möchten, um sie einfacher durchsuchen zu können.
