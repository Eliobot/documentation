---
last_modified_on: "2024-02-26"
title: "LED"
description: "Componente Eliobot - LED"
---


<img src={require("@site/static/img/eliobot/led/Eliobot - LED.png").default} alt="Eliobot LED" width="49%" />

Los LED de Eliobot son LED RGB, pueden mostrar cualquier color mezclando los tres colores básicos: rojo, verde y azul.

## Uso con Elioblocs

Para utilizar LED Eliobot en Elioblocs, utiliza bloques de la categoría <img src={require("@site/static/img/eliobot/led/category-color.jpg").default} style={{ width: "14%", verticalAlign: "middle" }} alt="test bouton" />.

## Usar con Python

Para usar led en Python, simplemente cree un objeto usando la biblioteca `neopixel`.

El LED está en el pin específico `NEOPIXEL`, o usando `IO1` directamente.

## Ejemplos relacionados

### Ejemplo de Elioblocs

>
> <img src={require("@site/static/img/eliobot/led/example-led-elioblocs.jpg").default} alt="ejemplo led elioblocs" width="49%" />
>

Encendemos y apagamos el LED continuamente esperando 1 segundo entre cada acción para que podamos ver el cambio de color.

---

### Ejemplo de Python

```python
import board
import neopixel
import time

led = neopixel.NeoPixel(
                    board.NEOPIXEL, # Pin de la led
                    1, # Número de leds
                    brightness=0.2, # Luminosidad del led
                    auto_write=False, # No queremos que el led se encienda automáticamente
                    pixel_order=neopixel.GRB # Orden de los colores
                    ) # Crear objeto led

while True:
    led.fill((255, 0, 0)) # Enciende el led en rojo
    led.show() # Muestra el color
    time.sleep(1) # Espera 1 segundo
    led.fill((0, 0, 0)) # Apaga el led
    led.show() # Muestra el color
    time.sleep(1) # Espera 1 segundo
```

Mismo principio que con los Elioblocs, encendemos y apagamos el LED continuamente esperando 1 segundo entre cada acción para que podamos ver el cambio de color.

