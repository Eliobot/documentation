---
sidebar_position: 2
---

# Movimientos básicos

Ahora que sabes cómo utilizar la interfaz, podemos ir más allá en la programación. El objetivo de este tutorial es ayudarte a descubrir los 3 movimientos básicos del robot: moverlo hacia adelante, hacia atrás y girar.

Para poner en práctica tu aprendizaje, te desafiamos al final de este tutorial. Tu reto, si lo aceptas, será hacer un cuadrado con Eliobot :)

![texto alternativo](/img/tutorial/elioblocs/basic-movements-elioblocs/Cote-11.png)

Para iniciar este tutorial, vaya a nuestra interfaz de programación https://app.eliobot.com/.


## Mueve Eliobot hacia adelante

El objetivo de este primer paso es hacer avanzar a Eliobot.

![texto alternativo](/img/tutorial/elioblocs/basic-movements-elioblocs/Cote-12-edited.png)

### Creando el programa

Para hacer avanzar a Eliobot, debes seleccionar un movimiento hacia adelante. Haga clic en el bloque "Movimientos" y arrastre "Mover robot hacia adelante" a su espacio de trabajo.

#### Opción 1: Movimiento durante una duración definida

Si desea que Eliobot avance durante un período definido (en nuestro ejemplo, 30 segundos), debe agregar un retraso de tiempo al movimiento. Haz clic en “Utilidades” e inserta el bloque “espera 1 segundo”.

Cambia el número 1 a 30 para indicarle a Eliobot que avance durante 30 segundos.

![texto alternativo](/img/tutorial/elioblocs/basic-movements-elioblocs/OFFO.png)

#### Opción 2: Movimiento por tiempo indefinido

Si quieres que Eliobot avance indefinidamente deberás añadir un bucle al movimiento para que se repita. Haga clic en "Bucles" en la caja de herramientas y arrastre el bloque "repetir mientras" alrededor del bloque anterior.

Recuerde, para que el ciclo se complete, debe agregarle una condición. Eliobot avanza mientras la condición sea verdadera. Haga clic en el bloque "Condiciones" y arrastre "verdadero" al bucle.

![texto alternativo](/img/tutorial/elioblocs/basic-movements-elioblocs/tuto-3etape-1.png)

### Transferencia de programa

Para probar el programa en Eliobot, conéctelo a la computadora con el cable USB y haga clic en el botón "Programa".

Luego verás que el LED parpadea y, una vez terminado, podrás desconectar Eliobot para ver el resultado.


## Hacer retroceder a Eliobot

El objetivo de este segundo paso es hacer retroceder a Eliobot.

![texto alternativo](/img/tutorial/elioblocs/basic-movements-elioblocs/Cote-15-edited.png)

El proceso es idéntico al primer paso porque el movimiento sigue siendo el mismo, simplemente es la dirección la que cambia.

Queremos que Eliobot retroceda. Para moverlo hacia atrás, simplemente haga clic en el menú desplegable marcado por un pequeño triángulo naranja a la derecha del bloque "Mover robot a". Luego seleccione la opción “atrás”.

![texto alternativo](/img/tutorial/elioblocs/basic-movements-elioblocs/oooooooooooooooooooooooooooooooooooppp.png)

Para probar el programa en Eliobot, conéctelo a la computadora con el cable USB y haga clic en el botón "Programa".

Luego verás que el LED parpadea y, una vez terminado, podrás desconectar Eliobot para ver el resultado.


## Gira a Eliobot a la derecha

El objetivo de este tercer paso es hacer que Eliobot gire a la derecha.

![
    
](/img/tutorial/elioblocs/basic-movements-elioblocs/Cote-13-edited.png)
### Creando el programa

Para girar a Eliobot, debes seleccionar un movimiento de rotación. Haga clic en el bloque "Movimientos" y arrastre "Girar robot a la derecha" a su espacio de trabajo.

#### Opción 1: Movimiento durante una duración definida

Si desea que Eliobot gire durante un período definido (en nuestro ejemplo, 2 segundos), debe agregar un retraso de tiempo al movimiento. Haz clic en “Utilidades” e inserta el bloque “espera 1 segundo”.

Cambia el número 1 por el número 2 para indicarle a Eliobot que gire a la derecha durante 2 segundos.

![texto alternativo](/img/tutorial/elioblocs/basic-movements-elioblocs/Capture-ooooii.png)

#### Opción 2: Activar el modo peonza 🙂

Queremos que Eliobot gire hacia la derecha durante un período de tiempo infinito (para hacer girar una peonza). Puedes crear un bucle para que se repita. Haga clic en "Bucles" en la caja de herramientas y arrastre el bloque "repetir mientras" alrededor del bloque anterior.

Para completar el ciclo, agréguele una condición. El robot gira hacia la derecha mientras la condición sea verdadera. Haga clic en el bloque "Condiciones" y arrastre "verdadero" al bucle.

![texto alternativo](/img/tutorial/elioblocs/basic-movements-elioblocs/tuto-3-etape-3-1.png)

### Transferencia de programa

Para probar el programa en Eliobot, conéctelo a la computadora con el cable USB y haga clic en el botón "Programa".

Luego verás que el LED parpadea y, una vez terminado, podrás desconectar Eliobot para ver el resultado.


## Gira a Eliobot hacia la izquierda

El objetivo de este cuarto paso es hacer que Eliobot gire hacia la izquierda.

El planteamiento es idéntico al paso anterior, porque el movimiento de rotación sigue siendo el mismo, es la dirección la que cambia.

Queremos que Eliobot gire a la izquierda. Para girar el robot hacia la izquierda, simplemente haga clic en el menú desplegable marcado por un pequeño triángulo naranja a la derecha del bloque "Girar el robot hacia". Luego seleccione el modo "izquierda".

![texto alternativo](/img/tutorial/elioblocs/basic-movements-elioblocs/Capture-17.png)

Para probar el programa en Eliobot, conéctelo a la computadora con el cable USB y haga clic en el botón "Programa".

Luego verás que el LED parpadea y, una vez terminado, podrás desconectar Eliobot para ver el resultado.


## Reto: hacer un cuadrado

¡Es hora de desafiarte a ti mismo! ¿Podrás hacer este cuadrado?

Un cuadrado se compone de submovimientos: una línea recta y un giro repetido cuatro veces.

![texto alternativo](/img/tutorial/elioblocs/basic-movements-elioblocs/Cote-1.png)

### La línea recta

El primer submovimiento es hacer avanzar a Eliobot para trazar el primer lado del cuadrado. Como vimos en el paso 1, debes seleccionar el movimiento hacia adelante. Inserta el bloque "Mover el robot hacia adelante" en el espacio de trabajo.

Luego debes agregar un retraso para que Eliobot se mueva en línea recta durante 1 segundo. Inserte el bloque "esperar 1 segundo" en la utilidad.

Es posible modificar el tiempo para cambiar el tamaño del cuadrado.

![texto alternativo](/img/tutorial/elioblocs/basic-movements-elioblocs/OOOOOOOOOL.png)


### El turno

El segundo submovimiento consiste en girar a Eliobot hacia la derecha para dibujar un ángulo recto. Como vimos en el paso 3, inserte el bloque “girar el robot a la derecha” debajo de los bloques anteriores.

Luego debes agregar un retraso de tiempo para que Eliobot gire un cuarto de vuelta, o 270 milisegundos. Inserta el bloque "esperar 1 segundo" en el espacio de trabajo y luego modifica la duración y la unidad del bloque.

![texto alternativo](/img/tutorial/elioblocs/basic-movements-elioblocs/Capture-PPO.png)


### El bucle mágico

Como recordatorio, un cuadrado se compone de una línea recta y un giro repetido cuatro veces. Ahora que ya has hecho un lado del cuadrado, solo debes repetir esta operación varias veces para obtener los lados restantes.

Para facilitarte la tarea, existe un bloque que te permite hacer esta repetición: el bucle.

Haga clic en "Bucles" en la caja de herramientas e inserte el bloque "Repetir... veces, hacer" en el espacio de trabajo. Desliza este bloque alrededor de los anteriores.

Como el cuadrado tiene 4 lados, pedimos que el bucle se repita 4 veces.

![texto alternativo](/img/tutorial/elioblocs/basic-movements-elioblocs/bloc-carre-i.png)


### Transferencia de programa

Para probar el programa en Eliobot, conéctelo a la computadora con el cable USB y haga clic en el botón "Programa".

Luego verás que el LED parpadea y, una vez terminado, podrás desconectar Eliobot para ver el resultado.

