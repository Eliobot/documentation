---
sidebar_position: 1
---

# Hacer parpadear el LED

Ahora que has ensamblado tu Eliobot, aprenderás a programarlo. En este tutorial, lo guiaremos para crear un programa de prueba muy simple que le permitirá familiarizarse con la interfaz.

## Creando el programa

Este programa de “prueba” te permitirá hacer parpadear una luz verde (o la de tu elección) en Eliobot. Sigue todos los pasos atentamente y el resultado estará ahí :)

### Selección de color

El primer paso es seleccionar un color. Vaya a su caja de herramientas y haga clic en el bloque "Colores". Seleccione el bloque "Mostrar color" y arrástrelo al espacio de trabajo.

![Texto alternativo](/img/tutorial/elioblocs/blink-led-elioblocs/prog_blink_1-1.gif)

### Elección del color

Luego podrás cambiar el color de la luz que se iluminará en Eliobot.

Haga clic en el punto rojo en el espacio de trabajo y luego seleccione el color que desea obtener.

![Texto alternativo](/img/tutorial/elioblocs/blink-led-elioblocs/prog_blink_2.gif)

Es posible crear el color que prefieras: verde, azul, rosa, amarillo… ¡diviértete!

### Elección del retraso de tiempo

El tercer paso es determinar cuánto tiempo permanecerá encendida la luz.

Haga clic en el bloque "Utilidades" y luego en "Esperar 1 segundo(s)". Arrastra el bloque de abajo primero al espacio de trabajo.

![Texto alternativo](/img/tutorial/elioblocs/blink-led-elioblocs/prog_blink_3.gif)

¿Has notado la sombra que aparece debajo del bloque cuando lo acercas a otro?
Suéltalo y se unirá.

### Apaga la luz

El cuarto paso es apagar la luz para provocar el efecto intermitente.

Para apagar la luz de Eliobot, vuelve a "Colores" e inserta el bloque "Apagar la luz" después de los demás.

![Texto alternativo](/img/tutorial/elioblocs/blink-led-elioblocs/prog_blink_4.gif)

### Elección del retraso de tiempo

El quinto paso es determinar cuánto tiempo permanecerá apagada la luz.

Así que puedes volver a agregar un bloque "Espera 1 segundo(s)" en la parte inferior.

![Texto alternativo](/img/tutorial/elioblocs/blink-led-elioblocs/prog_blink_5.gif)

### Creando un bucle

El sexto paso es crear un bucle para que el LED parpadee infinitamente.

Haga clic en la categoría "Bucles" y luego en "repetir mientras... hace". Arrástrelo alrededor de los bloques que ya están presentes para incluirlos en el bucle.

![Texto alternativo](/img/tutorial/elioblocs/blink-led-elioblocs/prog_blink_6-1.gif)

Mira, en el bloque verde de arriba, falta una pieza para completar el bucle.

Eliobot está esperando una condición para ejecutar su programa, por lo que forzaremos el bucle para que el programa se repita infinitamente independientemente de la condición.

En “Condiciones” selecciona el bloque “verdadero”. Desliza este bloque hasta la parte superior del bucle para completarlo y ¡listo!

![Texto alternativo](/img/tutorial/elioblocs/blink-led-elioblocs/prog_blink_7.gif)

## La programación de Eliobot

### Conexión Eliobot

Ahora es el momento de conectar Eliobot mediante el cable USB si aún no lo has hecho.

El pequeño LED al lado del enchufe se enciende para mostrar que Eliobot se está cargando.
¡Cuando se apaga significa que está completamente cargada!

![Texto alternativo](/img/tutorial/elioblocs/blink-led-elioblocs/DSC03852-scaled.jpg)

### Enviando código a Eliobot

Para probar su programa en Eliobot, simplemente haga clic en "Programa"

![Texto alternativo](/img/tutorial/elioblocs/blink-led-elioblocs/pp.png)

Se abre una ventana solicitando acceso a un puerto serie, seleccione “Eliobot” o en ciertos casos “CircuitPython”, luego “Conexión”

![Texto alternativo](/img/tutorial/elioblocs/blink-led-elioblocs/Capture-decran-2023-09-04-a-11.55.22.png)

Eliobot luego se reiniciará, luego parpadeará en color violeta y luego en amarillo, ¡eso es todo, está programado!

### Realización del programa

El programa ahora se transmite a su Eliobot. Enciéndelo y admira el trabajo. ¿Qué observas?

¡Una luz verde (o el color que hayas elegido) parpadeará en tu robot! 🙂

![Texto alternativo](/img/tutorial/elioblocs/blink-led-elioblocs/Sans-titre-1.png)

Felicitaciones por este nuevo paso en la programación. El siguiente paso es desafiar a Eliobot haciéndolo moverse :) ¿Estás listo para afrontar este nuevo desafío?

Considera compartir tu experiencia en nuestras redes sociales. Estaremos encantados de compartir tus creaciones y discutir contigo.

Nos vemos pronto 🙂
