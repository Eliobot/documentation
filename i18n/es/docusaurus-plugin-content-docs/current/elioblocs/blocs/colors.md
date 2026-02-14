---
last_modified_on: "2024-02-26"
title: "Colores"
description: "Elioblocs - Colores"
---

import Jump from '@site/src/components/Jump';


Eliobot está equipado con un LED multicolor que le permite mostrar más de 16 millones de colores.


## Seleccione un color para mostrar

El método más simple para encender el LED es usar el bloque ```Mostrar color```, que propone por defecto el color rojo.

![Bloqueo de luz en](/img/elioblocs/blocs/colors/light-on.png)

**Tipo**: Orden

**Definición** :

Luego se puede cambiar haciendo clic en la burbuja de color, lo que revela una tabla con varios colores.
Todo lo que tienes que hacer es hacer clic en el que deseas mostrar.

![Selector de color](/img/elioblocs/blocs/colors/color-choice.png)

Tenga en cuenta que el negro corresponde a un LED apagado.

**Usar** :

Si quieres iluminar el LED con un color específico. Por ejemplo, para indicar el estado de un sensor.


## Apaga la luz

![Bloque de luz apagada](/img/elioblocs/blocs/colors/light-off.png)

**Tipo**: Orden

**Definición** :

Dos posibilidades para apagar el LED:

- La primera es mostrar el color negro con el bloque de arriba, lo que equivale a establecer todos los colores en 0.
- También puedes usar el bloque designado por ```Apagar la luz```

**Usar** :

Si desea apagar el LED. Por ejemplo, para indicar el final de una acción.

## Ejemplo

Aprenda a utilizar el LED en el siguiente ejemplo:

<Jump to="/docs/tutorial/elioblocs/blink-led-elioblocs">Haz parpadear el LED - Elioblocs</Jump>
