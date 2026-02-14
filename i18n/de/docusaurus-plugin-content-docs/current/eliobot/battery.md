---
last_modified_on: "2024-02-26"
title: "Batterie"
description: "Eliobot-Komponente – Batterie"
---


<img src={require("@site/static/img/eliobot/battery/Eliobot - Battery.png").default} alt="Eliobot battery" width="49%" />


## Verwendung mit Elioblocs

Die Batterie kann nicht mit Elioblocs gehandhabt werden.

## Verwendung mit Python

Um die Batterie in Python zu verwalten, erstellen Sie einfach ein Objekt mithilfe der `analogio`-Bibliothek.

Die Batterie befindet sich am spezifischen Pin `BATTERY`.

Die Informationen, die der `BATTERY`-Pin zurückgibt, sind analoge Werte und müssen daher in Spannung umgewandelt werden, um die Batteriespannung zu erhalten.

## Verwandte Beispiele

### Python-Beispiel

```python
import board
from analogio import AnalogIn

battery = AnalogIn(board.BATTERY) # Batterieobjekt erstellen

def getBatteryVoltage():
    return (battery.value / 5371)
    
print(getBatteryVoltage())
```

Hier rufen wir die Batteriespannung in Volt ab und zeigen sie im Terminal an.
