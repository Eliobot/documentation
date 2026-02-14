---
last_modified_on: "2024-02-26"
title: "Brzęczyk"
description: "Komponent Eliobota - Buzzer"
---


<img src={require("@site/static/img/eliobot/buzzer/Eliobot - Buzzer.png").default} alt="Eliobot buzzer" width="49%" />

<br/>Brzęczyk Eliobota jest brzęczykiem pasywnym, więc może emitować dźwięki w szerokim zakresie częstotliwości, podobnie jak stare telefony.

## Używaj z Elioblocami

Aby użyć brzęczyka Eliobota na Elioblocach, używamy klocków z kategorii <img src={require("@site/static/img/eliobot/buzzer/category-sound.jpg").default} style={{ width: "14%", verticalAlign: "middle" }} alt="kategoria dźwięku" /> do odtworzenia dźwięku.

## Używaj z Pythonem

Aby odtwarzać nuty w Pythonie, używamy pinu `IO17` jako wyjścia PWM, aby móc odtworzyć żądaną częstotliwość.

Aby odtwarzać muzykę, po prostu powtórz żądane częstotliwości, jak w partyturze.

## Powiązane przykłady

### Przykład Elioblocs

>
> <img src={require("@site/static/img/eliobot/buzzer/example-buzzer-elioblocs.jpg").default} alt="exemple buzzer elioblocs" width="49%" />
>   

Tutaj gramy nutę `Do` przez 1 sekundę i zaczynamy od nowa w nieskończoność.

---

### Przykład Pythona

```python
import board
import pwmio
import time

buzzer = pwmio.PWMOut(
                board.IO17, # Pin du buzzer
                variable_frequency=True, # On veut pouvoir changer la fréquence
                ) # Création de l'objet buzzer

while True:
    buzzer.frequency = 262 # Fréquence de la note Do
    time.sleep(1) # Attend 1 seconde
    buzzer.frequency = 0 # Arrête le son
    time.sleep(1) # Attend 1 seconde
```

Tutaj gramy nutę `Do` przez 1 sekundę i zaczynamy od nowa w nieskończoność.
