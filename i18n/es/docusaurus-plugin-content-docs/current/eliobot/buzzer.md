---
last_modified_on: "2024-02-26"
title: "Zumbador"
description: "Componente Eliobot - Zumbador"
---


<img src={require("@site/static/img/eliobot/buzzer/Eliobot - Buzzer.png").default} alt="Eliobot buzzer" width="49%" />

<br/>Le buzzer d'Eliobot est un buzzer passif, il peut donc émettre des sons sur une grande plage de fréquence un peu comme les vieux téléphones.

## Usar con Elioblocs

Para usar el timbre de Eliobot en Elioblocs, usamos bloques de la categoría <img src={require("@site/static/img/eliobot/buzzer/category-sound.jpg").default} style={{ width: "14%", verticalAlign: "middle" }} alt="catégorie son" /> para reproducir un sonido.

## Usando con Python

Para tocar notas en Python, utilizamos el pin `IO17` como salida PWM para poder reproducir la frecuencia deseada.

Para reproducir música, simplemente repite las frecuencias deseadas como en una partitura.

## Ejemplos relacionados

### Ejemplo de elioblocs

>
> <img src={require("@site/static/img/eliobot/buzzer/example-buzzer-elioblocs.jpg").default} alt="exemple buzzer elioblocs" width="49%" />
>   

Aquí tocamos la nota `Do` durante 1 segundo y comenzamos de nuevo infinitamente.

---

### Ejemplo de Python

#### Con la biblioteca `elio.py`

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

Aquí tocamos la nota `Do` durante 1 segundo y comenzamos de nuevo infinitamente.

---

#### Sin la biblioteca `elio.py`

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

Mismo principio, pero controlando directamente la frecuencia y el ciclo de trabajo del PWM.
