---
last_modified_on: "2024-02-26"
title: "Botón"
description: "Componente Eliobot - Botón"
---


<img src={require("@site/static/img/eliobot/button/Eliobot - Button.png").default} alt="Eliobot button" width="49%" />

<br/>El botón Eliobot se puede utilizar para ponerlo en modo Bootloading o para utilizarlo en un programa.

:::note
Para poner Eliobot en modo de carga de arranque, simplemente mantén presionado el botón mientras enciendes Eliobot. Tenga cuidado de hacer esto antes de conectar Eliobot a la computadora.
:::

:::warning
El modo de carga de arranque es un modo que le permite actualizar el microcontrolador Eliobot.
:::

## Uso con Elioblocs

Para usar el botón de Eliobot en Elioblocs, usa el bloque <img src={require("@site/static/img/elioblocs/blocs/inputs/test-bouton.png").default} style={{ width: "14%", verticalAlign: "middle" }} alt="prueba de botón" /> para comprobar si el botón está pulsado o no. Devuelve `verdadero` si el botón está pulsado y `falso` en caso contrario.

## Usar con Python

El botón de Eliobot está conectado al pin `IO0` de la tarjeta, solo hay que leer el estado del pin para saber si el botón está presionado o no.

La información que devuelve el botón son valores numéricos (0,1), por lo que hay que convertirlos a booleanos para saber si el botón está presionado o no.

## Ejemplos relacionados

### Ejemplo de Elioblocs

>
><img src={require("@site/static/img/eliobot/button/example-button-elioblocs.jpg").default} alt="ejemplo botón elioblocs" width="49%" />
>

Aquí usamos el bloque <img src={require("@site/static/img/elioblocs/blocs/inputs/test-bouton.png").default} style={{ width: "14%", verticalAlign: "middle" }} alt="prueba de botón" /> para escribir en la terminal cuando el botón está pulsado.

---

### Ejemplo de Python

```python
import board
from digitalio import DigitalInOut, Direction, Pull

button = DigitalInOut(board.IO0) # Crear objeto bouton
button.direction = Direction.INPUT # Configurar el botón como entrada

if button.value: # Si el botón está pulsado
    print("Botón pulsado")
```

Aquí, usamos la biblioteca `board` para recuperar el pin `IO0` y la biblioteca `digitalio` para configurar el pin de entrada. Luego probamos si el botón está presionado y mostramos un mensaje en la terminal.
