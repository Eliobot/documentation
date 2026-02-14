---
last_modified_on: "2024-02-26"
title: "Mochilas"
description: "Elioblocs - Mochilas"
---

Los bloques de mochila te permiten controlar los accesorios de Eliobot.

## TORTUGA DE BOTÓN

:::warning
Tenga en cuenta que, para poder utilizar Eliobot, debe estar equipado con la mochila de tortuga con botones.
:::

### Programa con botones

![Programa con botones](/img/elioblocs/blocs/backpacks/turtle-buttons.jpg)

**Tipo**: Orden

**Definición** :

Este bloque te permite usar la mochila con botones de tortuga para controlar a Eliobot.
Registramos las acciones a realizar (avanzar, retroceder, girar a la izquierda, girar a la derecha) para cada botón.
Luego una vez grabada la secuencia podrás reproducirla presionando el botón central.

**Usar** :

Que el niño más pequeño programe a Eliobot, usando botones para darle instrucciones.

## SENSOR DHT11

:::warning
Tenga en cuenta que, para poder utilizarlo, Eliobot debe estar equipado con la mochila con sensor de humedad y la biblioteca Adafruit DHT.
:::

### Recuperar valor de temperatura o humedad

![Obtener valor de temperatura o humedad](/img/elioblocs/blocs/backpacks/dht11.jpg)

**Tipo**: Valor

**Definición** :

Este bloque permite recuperar el valor de temperatura o humedad medido por el sensor DHT11.

**Usar** :

Si desea recuperar la temperatura o humedad medida por el sensor para utilizarlo en su programa. Por ejemplo, para mostrar la temperatura en el terminal.

## MATRIZ LED

:::warning
Tenga en cuenta que, para poder utilizar Eliobot, debe estar equipado con la mochila de matriz LED.
:::

### Elegir los colores de una matriz LED

![Elija colores de matriz LED](/img/elioblocs/blocs/backpacks/matrix-choose-colors.jpg)

**Tipo**: Orden

**Definición** :

Este bloque permite elegir los colores de una matriz de LED. Te permite dibujar lo que quieras en una matriz de LED de 5x5 con colores RGB. Nota: El negro corresponde a un LED apagado.

**Usar** :

Si quieres dibujar un logo o un mensaje en una matriz de LED. Por ejemplo, para mostrar información basada en los resultados de sus sensores.

### Colores claros de una matriz de LED

![Colores claros de la matriz de LED](/img/elioblocs/blocs/backpacks/matrix-clear.jpg)

**Tipo**: Orden

**Definición** :

Este bloque le permite borrar los colores de una matriz de LED. Le permite restablecer una matriz de LED de 5x5 con todos los LED apagados.

**Usar** :

Si desea borrar lo que se muestra en una matriz de LED. Por ejemplo, para borrar un mensaje o un logo.

### Elija un logotipo para mostrar en una matriz de LED

![Elija el logotipo de matriz LED](/img/elioblocs/blocs/backpacks/matrix-choose-logo.jpg)

**Tipo**: Orden

**Definición** :

Este bloque le permite elegir un logotipo para mostrar en una matriz de LED:
- Corazón
- Sonrisa feliz
- Smiley triste
- Flecha arriba
- Flecha hacia abajo
- Flecha izquierda
- Flecha derecha
- Cruz
-Comprobar

**Usar** :

Si desea mostrar un logotipo en una matriz de LED. Por ejemplo, para indicar la dirección que está tomando Eliobot o si detecta algún obstáculo.

### Texto desplazable en una matriz de LED

![Desplazar el texto en la matriz LED](/img/elioblocs/blocs/backpacks/matrix-scroll-text.jpg)

**Tipo**: Orden

**Definición** :

Este bloque le permite desplazar el texto en la matriz de LED, también puede elegir el color del texto.

**Usar** :

Si desea mostrar un mensaje en la matriz de LED. Por ejemplo, para mostrar un mensaje de bienvenida o un mensaje si se detecta un obstáculo.

## SENSOR BME280

:::warning
Tenga en cuenta que, para poder utilizarlo, Eliobot debe estar equipado con la mochila con sensor ambiental y la biblioteca Adafruit BME280.
:::

### Recuperar diferentes valores medidos por el sensor BME280

![Obtener diferentes valores medidos](/img/elioblocs/blocs/backpacks/bme280.jpg)

**Tipo**: Valor

**Definición** :

Este bloque permite recuperar diferentes valores medidos por el sensor BME280:
- Temperatura
- Humedad
- Presión
- Altitud

**Usar** :

Si desea recuperar la temperatura, humedad, presión o altitud medida por el sensor para utilizarlo en su programa. Por ejemplo, para hacer que Eliobot avance si la temperatura es demasiado alta.

### Establecer presión a nivel del mar

![Establecer presión a nivel del mar](/img/elioblocs/blocs/backpacks/bme-sea-level.jpg)

**Tipo**: Orden

**Definición** :

Este bloque permite definir la presión a nivel del mar para el sensor BME280.

**Usar** :

Si desea configurar la presión a nivel del mar para el sensor de presión. Por ejemplo, para obtener una medición precisa de la altitud. Puedes encontrarlo en este [sitio](https://zoom.earth/maps/pressure/) coloca el cursor en el mar más cercano a ti.

## Pantalla OLED

:::warning
Tenga en cuenta que, para poder utilizar Eliobot, debe estar equipado con la mochila con pantalla OLED.
:::

### Mostrar texto en una pantalla OLED

![Mostrar texto en pantalla OLED](/img/elioblocs/blocs/backpacks/oled-text.jpg)

**Tipo**: Orden

**Definición** :

Este bloque le permite mostrar texto en una pantalla OLED.
Puedes elegir en qué línea quieres mostrar el texto, la pantalla tiene 6 líneas.

**Usar** :

Si desea mostrar un mensaje en una pantalla OLED.
Por ejemplo, para mostrar un mensaje de bienvenida o un mensaje si se detecta un obstáculo.

### Pantalla OLED clara

![Borrar pantalla OLED](/img/elioblocs/blocs/backpacks/oled-clear.jpg)

**Tipo**: Orden

**Definición** :

Este bloque te permite borrar la pantalla OLED.

**Usar** :

Si desea borrar lo que se muestra en la pantalla OLED. Por ejemplo, para borrar un mensaje o un logo.

## Servomotor

:::warning
Tenga en cuenta que, para poder utilizar Eliobot, debe estar equipado con la mochila del servomotor.
:::

### Establecer la posición del servomotor

![Establecer posición del servomotor](/img/elioblocs/blocs/backpacks/servo-motor.jpg)

**Tipo**: Orden

**Definición** :

Este bloque le permite definir la posición del servomotor, también puede elegir la ubicación a la que está conectado.

**Usar** :

Si desea establecer la posición del servomotor para que gire en un ángulo preciso.
Por ejemplo, para girar la cabeza de Eliobot.

## Servomotor continuo

:::warning
Tenga en cuenta que, para poder utilizar Eliobot, debe estar equipado con la mochila de servomotor continuo.
:::

### Gire el servomotor continuo

![Girar el servomotor continuo](/img/elioblocs/blocs/backpacks/continuous-servo-motor.jpg)

**Tipo**: Orden

**Definición** :

Este bloque permite girar el servomotor continuo en un sentido u otro con una velocidad determinada, también puedes elegir la ubicación a la que está conectado.

**Usar** :

Si desea girar el servomotor continuo para que se mueva hacia adelante o hacia atrás.

## Sensor de ultrasonido

:::warning
Tenga en cuenta que, para poder utilizarlo, Eliobot debe estar equipado con la mochila con sensor ultrasónico.
:::

### Recuperar la distancia medida por el sensor ultrasónico

![Obtener distancia medida](/img/elioblocs/blocs/backpacks/hcsr04.jpg)

**Tipo**: Valor

**Definición** :

Este bloque permite recuperar la distancia medida por el sensor de ultrasonidos.

**Usar** :

Si deseas recuperar la distancia medida por el sensor de ultrasonido para utilizarlo en tu programa. Por ejemplo, para evitar obstáculos.









