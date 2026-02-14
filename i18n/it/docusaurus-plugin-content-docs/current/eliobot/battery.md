---
last_modified_on: "2024-02-26"
title: "Batteria"
description: "Componente Eliobot - Batteria"
---


<img src={require("@site/static/img/eliobot/battery/Eliobot - Battery.png").default} alt="Eliobot battery" width="49%" />


## Utilizzare con Eliobloc

La batteria non può essere maneggiata con Eliobloc.

## Da utilizzare con Python

Per gestire la batteria in Python è sufficiente creare un oggetto utilizzando la libreria `analogio`.

La batteria si trova sullo specifico pin `BATTERY`.

Le informazioni che restituisce il pin `BATTERY` sono valori analogici, quindi devono essere convertite in tensione per ottenere la tensione della batteria.

## Esempi correlati

### Esempio Python

```python
import board
from analogio import AnalogIn

battery = AnalogIn(board.BATTERY) # Création de l'objet batterie

def getBatteryVoltage():
    return (battery.value / 5371)
    
print(getBatteryVoltage())
```

Qui recuperiamo la tensione della batteria in volt e la visualizziamo nel terminale.
