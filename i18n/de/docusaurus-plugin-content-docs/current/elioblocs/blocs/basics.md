---
last_modified_on: "2024-02-26"
title: "Grundlagen"
description: "Elioblocs – Grundlagen"
---

import Jump from '@site/src/components/Jump';

Die Basisblöcke sind die ersten Blöcke, die Sie zum Programmieren von Eliobot verwenden.

## Beim Start

![Wir starten](/img/elioblocs/blocs/basics/boucle-start.jpg)

**Typ**: Bestellung

**Definition**:

Bei diesem Block handelt es sich um eine Schleife, die nur einmal am Anfang des Programms ausgeführt wird. Nur die Blöcke in dieser Schleife oder in einer „Repeat Indefinitely“-Schleife werden ausgeführt, die anderen werden deaktiviert.

**Verwenden** :

Wenn wir möchten, dass Eliobot beim Start ein Feld vorwärts geht.


## Auf unbestimmte Zeit wiederholen

![Endlosschleife](/img/elioblocs/blocs/basics/boucle-infinie.png)

**Typ**: Bestellung

**Definition**:

Diese Schleife wiederholt die darin enthaltenen Blöcke auf unbestimmte Zeit. Um die Schleife zu stoppen, müssen Sie <img src={require('@site/static/img/elioblocs/blocs/loops/quitter-boucle.png').default} style={{ width: '14%', verticalAlign: 'middle' }} alt="Quitter boucle" /> verwenden.

:::warning
Seien Sie vorsichtig, nach der Verwendung dieser Schleife werden **nur** die darin enthaltenen Blöcke unbegrenzt ausgeführt.
:::

**Verwenden** :

Wenn wir wollen, dass Eliobot auf unbestimmte Zeit vorankommt.

## Warten Sie X Sekunden

![X Sekunden warten](/img/elioblocs/blocs/basics/attendre.png)

**Typ**: Bestellung

**Definition**:

Mit diesem Block können Sie das Programm für eine bestimmte Anzahl von Sekunden/Millisekunden anhalten.

**Verwenden** :

Wenn Sie zwischen zwei Aktionen eine Pause in Ihrem Programm einlegen möchten.

## Einen Wert im Terminal anzeigen

![Wert im Terminal drucken](/img/elioblocs/blocs/basics/print-valeur.png)

**Typ**: Bestellung

**Definition**:

Mit diesem Block können Sie einen Wert im Terminal anzeigen. Der Wert kann eine Zahl, ein Text oder ein Boolescher Wert sein.

**Verwenden** :

Wenn Sie einen Wert zum Debuggen Ihres Programms anzeigen möchten.