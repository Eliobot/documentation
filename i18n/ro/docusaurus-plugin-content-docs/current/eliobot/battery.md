---
last_modified_on: "2024-02-26"
title: "Baterie"
description: "Componenta Eliobot - Baterie"
---


<img src={require("@site/static/img/eliobot/battery/Eliobot - Battery.png").default} alt="Eliobot battery" width="49%" />


## Utilizați cu Elioblocs

Bateria nu poate fi manipulată cu Elioblocs.

## Utilizați cu Python

Pentru a gestiona bateria în Python, pur și simplu creați un obiect folosind biblioteca `analogio`.

Bateria se află pe pinul specific `BATTERY`.

Informațiile pe care le returnează pinul `BATTERY` sunt valori analogice, deci trebuie convertite în tensiune pentru a obține tensiunea bateriei.

## Exemple înrudite

### Exemplu Python

```python
import board
from analogio import AnalogIn

battery = AnalogIn(board.BATTERY) # Création de l'objet batterie

def getBatteryVoltage():
    return (battery.value / 5371)
    
print(getBatteryVoltage())
```

Aici, preluăm tensiunea bateriei în volți și o afișăm în terminal.
