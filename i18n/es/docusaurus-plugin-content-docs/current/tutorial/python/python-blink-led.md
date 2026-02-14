---
sidebar_position: 2
---

# Hacer parpadear un LED



En electrónica hay una versión un poco más brillante de “¡Hola mundo!” llamado "Blink" que, como su nombre indica, tiene como objetivo hacer parpadear un LED en la tarjeta que tiene en la mano.
¡Y eso es bueno ya que Eliobot está equipado con un LED multicolor que te permitirá mostrar el color que elijas!

![texto alternativo](/img/tutorial/python/python-blink-led/led-turned-on.bmp)

Comenzaremos nuestro código integrando algunas bibliotecas. Estos son conjuntos de códigos ya escritos que nos permiten agregar funciones fácilmente.

## Declaración de entradas/salidas

El primero se llama "placa" y es específico de CircuitPython. Es gracias a él que podremos explicar a nuestro programa cómo se conectan los elementos al microcontrolador (el cerebro de Eliobot)

Para integrarlo en nuestro programa utilizamos la siguiente línea:

```python
import board
```

Esto nos permite llamar a la entrada/salida de la placa mediante el número de pin.

```python
board.IO3
```

O como en nuestro caso usar el nombre asignado al pin

```python
board.NEOPIXEL
```

## Declaración LED de Neopixel

El Eliobot LED tiene un funcionamiento un tanto específico ya que puede mostrar varios colores, usaremos otra biblioteca para simplificar la tarea:

```python
import neopixel
```

Ahora que nuestras bibliotecas están en nuestro proyecto, podremos usar las funciones que contienen.
Empezamos declarando nuestro LED con la siguiente función:

```python
pixel = neopixel.NeoPixel(board.NEOPIXEL, 1, brightness=0.3)
```

``pixel`` es el nombre que le damos a nuestro LED

```python
board.NEOPIXEL nos permite definir dónde está conectada la LED en la placa de Eliobot
```

Sólo hay un LED conectado a esta ubicación, de ahí el 1

Finalmente puedes ajustar el brillo con un brillo que oscila entre 0 y 1.

El LED está listo para usar, por lo que podemos asignarle un color con el comando:

```python
pixel.fill(( R , G , B))
```

Usamos un código de color RGB (Rojo, Verde, Azul) que consiste en definir la cantidad de Rojo, Verde y Azul que queremos mostrar con un valor que va desde 0 (sin color) hasta 255 (color máximo)

Por ejemplo, si queremos mostrar rojo puro, escribimos:

```python
pixel.fill((255, 0, 0))
```

En este punto el color aún no se muestra, falta un último comando:

```python
pixel.show()
```

Si ejecutamos el script ▶️ podremos ver a Eliobot iluminándose en el color solicitado, en nuestro caso rojo

El siguiente paso para hacer parpadear a Eliobot es apagar el LED, para ello ponemos todos los valores de color en 0 y por supuesto nos acordamos de mostrar el resultado:

```python
pixel.fill((0, 0, 0))
pixel.show()
```

## Se agregó un temporizador

Luego definimos el tiempo entre cada acción usando una nueva biblioteca de "tiempo".

```python
import time
```

La función “sleep” nos permite pausar el programa por un tiempo expresado en segundos, por ejemplo durante un segundo escribimos:

```python
time.sleep(1)
```

Agregamos esta pausa después de cada cambio de color.

```python
pixel.fill((255, 0, 0))
pixel.show()

time.sleep(1)

pixel.fill((0, 0, 0))
pixel.show()

time.sleep(1)
```

Si ejecutamos ▶️ este programa podremos ver que el LED se enciende en rojo durante 1 segundo y luego se apaga, lo que nos acerca casi a nuestro objetivo de hacerlo parpadear.

## Agregar un bucle

El último paso es hacer que el tapajuntas dure más. Para este método, un método podría consistir en copiar/pegar las 6 líneas justo arriba una gran cantidad de veces, pero nuestro código se volvería extremadamente largo y complicado por poco.

El método más elegante es utilizar un bucle para repetir una parte del programa. El que nos interesa aquí es el bucle “ while” que repetirá nuestro programa siempre que su condición sea verdadera, el truco consiste entonces en darle el valor “True” (siempre verdadero) en una condición que creará un bucle que se repetirá infinitamente.

```python
while True:
	pixel.fill((255, 0, 0))
	pixel.show()

	time.sleep(1)

	pixel.fill((0, 0, 0))
	pixel.show()

	time.sleep(1)
```

Tenga en cuenta que el código debajo de " while True: " tiene sangría (desplazado hacia la derecha), lo que muestra que se repetirá en el bucle.

## Programa final

Aquí está el programa final que podremos ejecutar ▶️:

```python
import board
import neopixel
import time

pixel = neopixel.NeoPixel(board.NEOPIXEL, 1, brightness=0.3)

while True:
	pixel.fill((255, 0, 0))
	pixel.show()

	time.sleep(1)

	pixel.fill((0, 0, 0))
	pixel.show()

	time.sleep(1)
```
