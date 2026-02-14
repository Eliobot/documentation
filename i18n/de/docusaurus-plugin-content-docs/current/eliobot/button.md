---
last_modified_on: "2024-02-26"
title: "Taste"
description: "Eliobot-Komponente – Schaltfläche"
---


<img src={require("@site/static/img/eliobot/button/Eliobot - Button.png").default} alt="Eliobot button" width="49%" />

<br/>Die Eliobot-Taste kann verwendet werden, um ihn in den Bootload-Modus zu versetzen oder in einem Programm zu verwenden.

:::note
Um Eliobot in den Bootload-Modus zu versetzen, halten Sie einfach die Taste gedrückt, während Sie Eliobot einschalten. Achten Sie darauf, dies zu tun, bevor Sie Eliobot an den Computer anschließen.
:::

:::warning
Der Bootload-Modus ist ein Modus, der es Ihnen ermöglicht, den Eliobot-Mikrocontroller zu flashen.
:::

## Verwendung mit Elioblocs

Um die Eliobot-Taste auf Elioblocs zu verwenden, verwenden wir den Block <img src={require("@site/static/img/elioblocs/blocs/inputs/test-bouton.png").default} style={{ width: "14%", verticalAlign: "middle" }} alt="test bouton" />, um zu testen, ob die Taste gedrückt wird oder nicht. Er gibt `wahr` zurück, wenn die Taste gedrückt wird, andernfalls `falsch`.

## Verwendung mit Python

Der Knopf von Eliobot ist mit dem Pin `IO0` auf der Karte verbunden. Sie müssen nur den Zustand des Pins lesen, um zu wissen, ob der Knopf gedrückt ist oder nicht.

Die Informationen, die die Schaltfläche zurückgibt, sind numerische Werte (0,1), daher müssen sie in einen Booleschen Wert umgewandelt werden, um zu wissen, ob die Schaltfläche gedrückt wurde oder nicht.

## Verwandte Beispiele

### Elioblocs-Beispiel

>
><img src={require("@site/static/img/eliobot/button/example-button-elioblocs.jpg").default} alt="exemple bouton elioblocs" width="49%" />
>

Hier verwenden wir den <img src={require("@site/static/img/elioblocs/blocs/inputs/test-bouton.png").default} style={{ width: "14%", verticalAlign: "middle" }} alt="test bouton" />-Block, um zu schreiben, dass die Taste im Terminal gedrückt wird.

---

### Python-Beispiel

```python
import board
from digitalio import DigitalInOut, Direction, Pull

button = DigitalInOut(board.IO0) # Tastenobjekt erstellen
button.direction = Direction.INPUT # Taste als Eingang konfigurieren

if button.value: # Wenn die Taste gedrückt ist
    print("Taste gedrückt")
```

Hier verwenden wir die Bibliothek `board` zum Abrufen des Pins `IO0` und die Bibliothek `digitalio` zum Konfigurieren des Eingangspins. Dann testen wir, ob die Taste gedrückt wird und zeigen eine Meldung im Terminal an.
