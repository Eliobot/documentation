---
last_modified_on: "2024-02-26"
title: "Funktionen"
description: "Elioblocs - Funktionen"
---

Funktionen ermöglichen es, Blöcke zu gruppieren und später im Programm wiederzuverwenden.
Sie sind sehr nützlich, um dieselben Blöcke nicht mehrfach wiederholen zu müssen.
Man kann ihnen auch Eingabewerte geben und einen Ausgabewert zurückerhalten.
Sie können überall im Programm und so oft wie nötig aufgerufen werden, solange sie vorher deklariert wurden.


## Erstellen Sie eine Funktion

![Eine Funktion erstellen](/img/elioblocs/blocs/functions/fonctionA.png)

**Typ**: Bestellung

**Definition**:

Eine Funktion ist wie eine Schleife, sie enthält auszuführende Blöcke. Diese Blöcke werden beim Aufruf der Funktion ausgeführt.
Sie können das Fragezeichen verwenden, um einen Kommentar zu Ihrer Funktion hinzuzufügen (z. B. sagen Sie, was sie tut).

**Verwenden** :

Wenn wir Blöcke gruppieren möchten, um sie später im Programm wiederzuverwenden. Wir versuchen, redundante Aktionen in eine Funktion einzufügen, um zu vermeiden, dass sie mehrmals wiederholt werden.

## Rufen Sie eine Funktion auf

![Funktion aufrufen](/img/elioblocs/blocs/functions/fonctionA-appel.png)

**Typ**: Bestellung

**Definition**:

Mit diesem Block können Sie eine Funktion aufrufen. Blöcke innerhalb der Funktion werden ausgeführt.

**Verwenden** :

Wenn wir die Blöcke einer Funktion ausführen möchten, ohne sie neu schreiben zu müssen.

## Einen Wert am Ausgang der Funktion abrufen

![Funktion mit Wert return](/img/elioblocs/blocs/functions/fonctionB.png)

**Typ**: Bestellung

![Zurückgegebenen Wert lesen](/img/elioblocs/blocs/functions/fonctionB-retour.png)

**Typ**: Wert

**Definition**:

Es gibt Funktionen, die einen Wert zurückgeben. Wie bei einer normalen Funktion werden die darin enthaltenen Blöcke ausgeführt, aber zusätzlich wird am Ende ein Wert zurückgegeben. Dieser Wert kann im Rest des Programms verwendet werden.

**Verwenden** :

Wenn wir einen Wert von einer Funktion abrufen möchten, um ihn im Rest des Programms zu verwenden. Wenn wir beispielsweise eine Berechnung in einer Funktion durchführen, können wir das Ergebnis abrufen, um es im Rest des Programms zu verwenden.

## Werte zur Funktionseingabe hinzufügen

![Eingabe zu einer Funktion hinzufügen](/img/elioblocs/blocs/functions/add-input-functions.png)

![Funktionseingänge deklarieren](/img/elioblocs/blocs/functions/fonctionA-input.png)

**Typ**: Bestellung

**Definition**:

Es ist möglich, einer Funktion Werte zuzuweisen, damit sie diese verwendet. Diese Werte werden Parameter genannt.
Um Parameter zu einer Funktion hinzuzufügen, fügen Sie diese einfach mit dem Zahnrad zum Funktionsblock hinzu.
Wenn wir die Funktion aufrufen, müssen wir Werte für diese Parameter angeben.

**Verwenden** :

Stellen wir uns vor, wir hätten eine Funktion, die Pythagoras berechnet. Wir können ihr die beiden Seiten des Dreiecks zuweisen, sodass sie die Hypotenuse zurückgibt.

## Eine Funktion verlassen

![Rückgabewert bei Ereignis](/img/elioblocs/blocs/functions/return-function.png)

**Typ**: Bestellung

**Definition**:

Mit diesem Block können Sie eine Funktion beenden und einen Wert zurückgeben, wenn eine Bedingung erfüllt ist.

**Verwenden** :

Wenn wir eine Funktion vor dem Ende beenden möchten, können wir diesen Block verwenden, um einen Wert zurückzugeben.
