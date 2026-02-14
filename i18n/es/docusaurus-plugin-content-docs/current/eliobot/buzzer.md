---
last_modified_on: "2024-02-26"
title: "Zumbador"
description: "Componente Eliobot - Zumbador"
---


<img src={require("@site/static/img/eliobot/buzzer/Eliobot - Buzzer.png").default} alt="Eliobot buzzer" width="49%" />

El timbre de <br/>Eliobot es un timbre pasivo, por lo que puede emitir sonidos en un amplio rango de frecuencia, muy parecido a los teléfonos antiguos.

## Uso con Elioblocs

Para utilizar el timbre de Eliobot en Elioblocs, utilizamos bloques de la categoría <img src={require("@site/static/img/eliobot/buzzer/category-sound.jpg").default} style={{ width: "14%", verticalAlign: "middle" }} alt="categoría son" /> para reproducir un sonido.

## Usar con Python

Para tocar notas en Python, utilizamos el pin `IO17` como salida PWM para poder reproducir la frecuencia deseada.

Para reproducir música, simplemente repite las frecuencias deseadas como en una partitura.

## Ejemplos relacionados

### Ejemplo de Elioblocs

>
> <img src={require("@site/static/img/eliobot/buzzer/example-buzzer-elioblocs.jpg").default} alt="ejemplo buzzer elioblocs" width="49%" />
>

Aquí tocamos la nota `Do` durante 1 segundo y comenzamos de nuevo infinitamente.

---

### Ejemplo de Python

```python
import board
import pwmio
import time

buzzer = pwmio.PWMOut(
                board.IO17, # Pin du buzzer
                variable_frequency=True, # On veut pouvoir changer la fréquence
                ) # Crear objeto buzzer

while True:
    buzzer.frequency = 262 # Fréquence de la note Do
    time.sleep(1) # Attend 1 seconde
    buzzer.frequency = 0 # Detener el sonido
    time.sleep(1) # Attend 1 seconde
```

Aquí tocamos la nota `Do` durante 1 segundo y comenzamos de nuevo infinitamente.