---
last_modified_on: "2024-02-26"
title: "Przycisk"
description: "Komponent Eliobota - Przycisk"
---


<img src={require("@site/static/img/eliobot/button/Eliobot - Button.png").default} alt="Eliobot button" width="49%" />

<br/>Przycisk Eliobota może zostać użyty do przejścia w tryb ładowania lub użycia go w programie.

:::note
Aby przełączyć Eliobota w tryb ładowania, po prostu przytrzymaj przycisk podczas włączania Eliobota. Należy to zrobić ostrożnie przed podłączeniem Eliobota do komputera.
:::

:::warning
Tryb ładowania to tryb, który pozwala na flashowanie mikrokontrolera Eliobota.
:::

## Używaj z Elioblocami

Aby użyć przycisku Eliobot na Elioblocach, używamy bloku <img src={require("@site/static/img/elioblocs/blocs/inputs/test-bouton.png").default} style={{ width: "14%", verticalAlign: "middle" }} alt="test przycisku" /> do sprawdzenia, czy przycisk jest wciśnięty, czy nie, zwraca `prawda`, jeśli przycisk jest naciśnięty, i `fałsz` w przeciwnym razie.

## Używaj z Pythonem

Przycisk Eliobota jest podłączony do pinu `IO0` na karcie, wystarczy odczytać stan pinu, aby wiedzieć, czy przycisk jest wciśnięty, czy nie.

Informacje, które zwraca przycisk, są wartościami numerycznymi (0,1), dlatego należy je przekonwertować na wartość logiczną, aby wiedzieć, czy przycisk został naciśnięty, czy nie.

## Powiązane przykłady

### Przykład Elioblocs

>
><img src={require("@site/static/img/eliobot/button/example-button-elioblocs.jpg").default} alt="exemple bouton elioblocs" width="49%" />
>

Tutaj za pomocą bloku <img src={require("@site/static/img/elioblocs/blocs/inputs/test-bouton.png").default} style={{ width: "14%", verticalAlign: "middle" }} alt="test przycisku" /> zapiszemy, że przycisk został wciśnięty w terminalu.

---

### Przykład Pythona

```python
import board
from digitalio import DigitalInOut, Direction, Pull

button = DigitalInOut(board.IO0) # Création de l'objet bouton
button.direction = Direction.INPUT # Configuration du bouton en entrée

if button.value: # Si le bouton est pressé
    print("Przycisk wciśnięty")
```

Tutaj używamy biblioteki `board` do pobrania pinu `IO0` i biblioteki `digitalio` do skonfigurowania pinu wejściowego. Następnie sprawdzamy czy przycisk został wciśnięty i wyświetlamy komunikat w terminalu.