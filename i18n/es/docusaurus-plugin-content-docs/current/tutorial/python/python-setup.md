---
sidebar_position: 1
---

# Configuration de Python

El primer paso para iniciarse en la programación es configurar un entorno de desarrollo (hablamos de IDE en inglés). El que te ofrecemos se llama Thonny y está disponible aquí mismo: https://thonny.org/

Una vez que hayas descargado e instalado la versión que corresponde a tu ordenador, configuraremos Thonny para que sea compatible con Eliobot.

![texto alternativo](/img/tutorial/python/python-setup/screenshot.png)

Durante el primer lanzamiento, Thonny te pide que elijas tu idioma, luego puedes elegir "francés" y luego hacer clic en "¡Vamos!"

![texto alternativo](/img/tutorial/python/python-setup/Capture-decran-2023-08-07-a-11.45.44-1024x565.png)

Ahora que se lanzó Thonny, conectaremos Eliobot a él. Conecte Eliobot a su computadora usando el cable USB, luego, en la parte superior de la ventana, haga clic en "Ejecutar" y luego en "Configurar intérprete".

![texto alternativo](/img/tutorial/python/python-setup/Capture-decran-2023-08-07-a-11.48.08.png)

Luego llegará a una ventana con dos menús desplegables que deben configurarse como se muestra a continuación. El primero te pregunta el tipo de intérprete, en nuestro caso es “CircuitPython”. El segundo le pide que seleccione el puerto al que conectarse, luego seleccione "Eliobot".

A veces, el puerto se reconoce como "CircuitPython" en Windows; en este caso usaremos este.

![texto alternativo](/img/tutorial/python/python-setup/Capture-decran-2023-08-07-a-11.49.57-2048x1401.png)

Después de hacer clic en “Aceptar” el LED del Eliobot se ilumina en blanco lo que significa que está bien conectado. Para verificar la conexión podemos enviarle el comando “help()” en la consola en la parte inferior, luego debería responder con el siguiente mensaje:

![texto alternativo](/img/tutorial/python/python-setup/Capture-decran-2023-08-07-a-11.51.05.png)

Un último paso para hacer la interfaz más agradable es mostrar el contenido de Eliobot. Para hacer esto, vaya a la parte superior en "Ver" y luego en "Archivos".

![texto alternativo](/img/tutorial/python/python-setup/Capture-decran-2023-08-07-a-11.51.33.png)

Puedes ver que acaba de aparecer una nueva columna a la izquierda.

Debajo de "Dispositivo CircuitPython" se encuentran todos los archivos contenidos en su Eliobot.

Encontrarás en particular el archivo “main.py”, el programa principal y que contiene todo el código del último programa que enviaste a Eliobot. La extensión “.py” significa que es un archivo escrito en Python.

Vamos a abrir el archivo “main.py” para crear nuestro programa.
Un ejemplo común es mostrar el mensaje "¡Hola mundo!" y en nuestro caso usaremos el comando “print()” para mostrarlo en la consola.

Nuestro programa cabe en una sola línea: print(“¡Hola mundo!”)

Para ver el mensaje mostrado lo único que tenemos que hacer es ejecutar el programa pulsando en el botón con la flecha ▶️.

Deberías obtener el siguiente resultado:

![texto alternativo](/img/tutorial/python/python-setup/Capture-decran-2023-08-07-a-13.58.43-1.png)

Y ahí lo tienes, ¡acabas de crear tu primer comando en Python para Eliobot!

En el siguiente ejemplo veremos juntos cómo construir un programa que no necesita una computadora para funcionar.