---
last_modified_on: "2024-02-26"
title: "Batería"
description: "Componente Eliobot - Batería"
---


<img src={require("@site/static/img/eliobot/battery/Eliobot - Battery.png").default} alt="Eliobot battery" width="49%" />


## Uso con Elioblocs

La batería no se puede manipular con Elioblocs.

## Usar con Python

Para administrar la batería en Python, simplemente cree un objeto usando la biblioteca `analogio`.

La batería está en el pin específico `BATTERY`.

La información que devuelve el pin `BATTERY` son valores analógicos, por lo que deben convertirse en voltaje para obtener el voltaje de la batería.

## Ejemplos relacionados

### Ejemplo de Python

```python
import board
from analogio import AnalogIn

battery = AnalogIn(board.BATTERY) # Crear objeto batterie

def getBatteryVoltage():
    return (battery.value / 5371)
    
print(getBatteryVoltage())
```

Aquí recuperamos el voltaje de la batería en voltios y lo mostramos en el terminal.