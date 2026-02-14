---
sidebar_position: 3
---

# Eviter les obstacles

En este tutorial aprenderemos a utilizar sensores para utilizar Eliobot de forma independiente y evitar un obstáculo 😉


## Cómo funcionan los sensores infrarrojos

Eliobot está equipado con 4 sensores infrarrojos (ver el diagrama a continuación) que le permiten detectar obstáculos.

![texto alternativo](/img/tutorial/elioblocs/avoid-obstacles-elioblocs/eliobot-sensors-position.png)

Pero técnicamente ¿cómo funciona? 🤔

Cada sensor se compone de un transmisor y un receptor. La función del transmisor es enviar luz para iluminar obstáculos. La luz se reflejará entonces hacia el receptor, lo que nos permitirá saber la cantidad de luz recibida y por tanto deducir una distancia.

Cuanto mayor sea la cantidad de luz, más cerca estará el obstáculo.

![texto alternativo](/img/tutorial/elioblocs/avoid-obstacles-elioblocs/infrared-sensor.png)

## Detectar un obstáculo

Para iniciar este tutorial, vaya a nuestra interfaz de programación https://app.eliobot.com/.

Empezamos con un primer ejemplo sencillo: si Eliobot detecta un obstáculo delante, el LED rojo se enciende. Si Eliobot no detecta ningún obstáculo, el LED se apaga 💡

![texto alternativo](/img/tutorial/elioblocs/avoid-obstacles-elioblocs/obstacle-light-example.png)

El primer paso es seleccionar la acción de detección de obstáculos. Para hacerlo, ve a la pestaña `Obstáculos` y selecciona el bloque `hay un obstáculo delante`.

Es posible elegir qué sensor utilizar, en nuestro caso será el sensor frontal.

Probablemente hayas notado que este nuevo bloque tiene una forma diferente y no se puede usar tal cual con los bloques utilizados hasta ahora. Es un bloque booleano que podremos usar como condición en el bloque `Si... hacer... de lo contrario`.

Finalmente, para identificar claramente cuando se detecta un obstáculo, muestra un color con el bloque `Mostrar color` en la rama `hacer`, y `Apagar la luz` en la rama `de lo contrario`.

Selecciona el color de tu preferencia, ¡tú eres el artista! 😉

![alt text](/img/tutorial/elioblocs/avoid-obstacles-elioblocs/color-when-obstacle.png)

## Esquivar el obstáculo

Ahora que Eliobot es capaz de detectar un obstáculo, podremos decirle qué hacer cuando encuentre uno. La acción más sencilla es simplemente cambiar de dirección girando hacia la derecha o hacia la izquierda.

![alt text](/img/tutorial/elioblocs/avoid-obstacles-elioblocs/obstacle-turn-example.png)

Como la mayor parte del trabajo ya se ha realizado con el programa anterior, lo retomaremos agregando movimientos además de los comandos para el LED.

Primero definimos el movimiento a realizar cuando Eliobot encuentre un obstáculo, en nuestro caso hacer un cuarto de giro hacia la derecha. Para ello, toma el bloque `Girar a la derecha 90 grados` en la pestaña `Movimientos` y colócalo debajo del color rojo.

Luego definimos el movimiento a realizar cuando no hay ningún obstáculo, es decir, avanzar. Encontrarás el bloque `Avanzar` en la pestaña `Movimientos`; colócalo en la rama `de lo contrario`.

![texto alternativo](/img/tutorial/elioblocs/avoid-obstacles-elioblocs/turn-when-obstacle.png)


### Transferencia de programa

Para probar el programa en Eliobot, conéctelo a la computadora con el cable USB y haga clic en el botón "Programa".

Luego verás que el LED parpadea y, una vez terminado, podrás desconectar Eliobot para ver el resultado. 🙂
