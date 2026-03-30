---
last_modified_on: "2024-02-26"
title: "Brzęczyk"
description: "Komponent Eliobota - Buzzer"
---


<img src={require("@site/static/img/eliobot/buzzer/Eliobot - Buzzer.png").default} alt="Eliobot buzzer" width="49%" />

<br/>Le buzzer d'Eliobot est un buzzer passif, il peut donc émettre des sons sur une grande plage de fréquence un peu comme les vieux téléphones.

## Używaj z Elioblocami

Aby użyć brzęczyka Eliobota na Elioblocach, używamy klocków z kategorii <img src={require("@site/static/img/eliobot/buzzer/category-sound.jpg").default} style={{ width: "14%", verticalAlign: "middle" }} alt="catégorie son" /> do odtworzenia dźwięku.

## Używanie z Pythonem

Aby odtwarzać nuty w Pythonie, używamy pinu `IO17` jako wyjścia PWM, aby móc odtworzyć żądaną częstotliwość.

Aby odtwarzać muzykę, po prostu powtórz żądane częstotliwości, jak w partyturze.

## Powiązane przykłady

### Przykład eliobbloków

>
> <img src={require("@site/static/img/eliobot/buzzer/example-buzzer-elioblocs.jpg").default} alt="exemple buzzer elioblocs" width="49%" />
>   

Tutaj gramy nutę `Do` przez 1 sekundę i zaczynamy od nowa w nieskończoność.

---

### Przykład Pythona

#### Z biblioteką `elio.py`

```python
import board
import pwmio
from elio import Buzzer

buzzer_pin = pwmio.PWMOut(board.IO17, variable_frequency=True)
buzzer = Buzzer(buzzer_pin)

NOTES = {
    "Do": 262,
    "silence": 0.1,
}

while True:
    buzzer.play_note("Do", 1, NOTES, 80)  # Joue Do pendant 1 seconde
    buzzer.play_note("silence", 1, NOTES, 0)  # Pause d'1 seconde
```

Tutaj gramy nutę `Do` przez 1 sekundę i zaczynamy od nowa w nieskończoność.

---

#### Bez biblioteki `elio.py`

```python
import board
import pwmio
import time

buzzer = pwmio.PWMOut(board.IO17, variable_frequency=True)

while True:
    buzzer.frequency = 262       # Fréquence de la note Do
    buzzer.duty_cycle = 32768    # 50% duty cycle pour émettre le son
    time.sleep(1)
    buzzer.duty_cycle = 0        # Arrête le son
    time.sleep(1)
```

Ta sama zasada, ale bezpośrednio kontrolująca częstotliwość i cykl pracy PWM.
