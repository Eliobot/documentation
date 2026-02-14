---
last_modified_on: "2024-02-26"
title: "Farben"
description: "Elioblocs - Farben"
---

import Jump from '@site/src/components/Jump';


Eliobot ist mit einer mehrfarbigen LED ausgestattet, wodurch er mehr als 16 Millionen Farben darstellen kann.


## Wählen Sie eine Farbe zur Anzeige aus

Die einfachste Methode zum Einschalten der LED ist die Verwendung des Blocks ```Farbe anzeigen```, der standardmäßig die Farbe Rot anbietet.

![Lichtblockierung an](/img/elioblocs/blocs/colors/light-on.png)

**Typ**: Bestellung

**Definition**:

Anschließend kann es durch Klicken auf die farbige Blase geändert werden, wodurch eine Tabelle mit mehreren Farben angezeigt wird.
Sie müssen lediglich auf die Seite klicken, die Sie anzeigen möchten.

![Farbauswahl](/img/elioblocs/blocs/colors/color-choice.png)

Bitte beachten Sie, dass Schwarz einer ausgeschalteten LED entspricht.

**Verwenden** :

Wenn Sie die LED mit einer bestimmten Farbe zum Leuchten bringen möchten. Beispielsweise um den Status eines Sensors anzuzeigen.


## Schalte das Licht aus

![Licht aus Block](/img/elioblocs/blocs/colors/light-off.png)

**Typ**: Bestellung

**Definition**:

Zwei Möglichkeiten zum Ausschalten der LED:

- Die erste besteht darin, die schwarze Farbe mit dem Block oben anzuzeigen, was darauf hinausläuft, alle Farben auf 0 zu setzen
- Am einfachsten ist es, den dafür vorgesehenen Block ```Licht ausschalten``` zu verwenden.

**Verwenden** :

Wenn Sie die LED ausschalten möchten. Beispielsweise um das Ende einer Aktion anzuzeigen.

## Beispiel

Erfahren Sie im folgenden Beispiel, wie Sie die LED nutzen:

<Jump to="/docs/tutorial/elioblocs/blink-led-elioblocs">Blinken Sie die LED - Elioblocs</Jump>
