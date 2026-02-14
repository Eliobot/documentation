---
last_modified_on: "2024-02-26"
title: "Bateria"
description: "Komponent Eliobota - Bateria"
---


<img src={require("@site/static/img/eliobot/battery/Eliobot - Battery.png").default} alt="Eliobot battery" width="49%" />


## Używaj z Elioblocami

Baterii nie można obsługiwać za pomocą Eliobbloków.

## Używaj z Pythonem

Aby zarządzać baterią w Pythonie, po prostu utwórz obiekt za pomocą biblioteki `analogio`.

Bateria jest na konkretnym pinie `BATTERY`.

Informacje, które zwraca pin `BATTERY` są wartościami analogowymi, dlatego należy je przeliczyć na napięcie, aby otrzymać napięcie akumulatora.

## Powiązane przykłady

### Przykład Pythona

```python
import board
from analogio import AnalogIn

battery = AnalogIn(board.BATTERY) # Création de l'objet batterie

def getBatteryVoltage():
    return (battery.value / 5371)
    
print(getBatteryVoltage())
```

Tutaj pobieramy napięcie akumulatora w woltach i wyświetlamy je na terminalu.
