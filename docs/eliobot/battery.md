---
last_modified_on: "2024-02-26"
title: "Batterie"
description: "Eliobot component - Batterie"
---


<img src={require("@site/static/img/eliobot/battery/Eliobot - Battery.png").default} alt="Eliobot battery" width="49%" />


## Utilisation avec Elioblocs

La batterie n'est pas manipulable avec Elioblocs.

## Utilisation avec Python

Pour gérer la batterie en python, il suffit de créer un objet à l'aide de la librairie `analogio`.

La batterie est sur le pin spécifique `BATTERY`.

Les informations que le pin `BATTERY` renvoie sont des valeurs analogiques, il faut donc les convertir en tension pour obtenir la tension de la batterie.

## Exemples associés

### Exemple Python

```python
import board
from analogio import AnalogIn

battery = AnalogIn(board.BATTERY) # Création de l'objet batterie

def getBatteryVoltage():
    return (battery.value / 5371)
    
print(getBatteryVoltage())
```

Ici, on récupère la tension de la batterie en volt et on l'affiche dans le terminal.
