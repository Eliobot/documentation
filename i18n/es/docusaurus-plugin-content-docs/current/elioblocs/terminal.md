---
last_modified_on: "2024-02-26"
title: "Terminal"
description: "Terminal de Elioblocs"
---

#### Así está compuesto el terminal. Esta parte de la explicación le será útil más adelante.

![Terminal Elioblocs](/img/elioblocs/terminal/terminal.jpg)

> 1. Es el botón "cajón" que permite abrir o cerrar el terminal.
> 
> 2. Esta es el área de texto, aquí es donde podrás comunicarte con Eliobot, ver los mensajes de error o éxito de tu programa y lo que te pudo haber respondido.
> 
> 3. Esta es el área de botones del terminal:
> 
> - Reiniciar el programa: para reiniciar el programa que subiste a Eliobot.
> - Detener programa: para detener el programa que se está ejecutando actualmente.
> 
> 4. Estos dos botones son los que te permitirán operar el terminal:
> 
> - Subir: Este botón envía el código a Eliobot, como se vio anteriormente, pero si vas al terminal después de cargar el código, podrás ver el código que se envió (el código se envía en un lenguaje llamado binario; es normal si no puedes leerlo).
>   
> ![Código terminal Elioblocks](/img/elioblocs/terminal/terminal-televerser.jpg)
>   
> - Conectar: Este botón te permite establecer la conexión entre Eliobot y tu computadora, esto es lo que permitirá la comunicación entre ambos. El terminal servirá como mensajería para ello. 
>    
> ![Conector de terminal Elioblocs](/img/elioblocs/terminal/terminal-connecter.jpg)

Eliobot es un robot que habla con el lenguaje de programación Python. Es por eso que verás mensajes en inglés en la terminal. Pero no te preocupes, te ayudaremos a entender lo que te está diciendo.

---

### Funcionalidades del terminal

#### Escucha a Eliobot

Cuando en uno de tus programas con Elioblocs utilices el bloque <img src={require('@site/static/img/elioblocs/terminal/ecrire.jpg').default} style={{ width: '9%', verticalAlign: 'middle' }} alt="Bloque escribir" /> o <img src={require('@site/static/img/elioblocs/terminal/afficher-la-valeur.jpg').default} style={{ width: '14%', verticalAlign: 'middle' }} alt="Bloque mostrar valor" />, Eliobot escribirá en el terminal. Podrás ver lo que te está diciendo y entender lo que está pasando.
Si uno de tus programas no funciona y el LED parpadea en rojo, podrás ver en el terminal qué está mal.

#### Enviar comandos a Eliobot

Cuando en la terminal ves `>>>`, es Eliobot pidiéndote que le envíes un comando. Puedes enviarle comandos en Python para que los ejecute.
Si desea saber más, puede consultar <a href="https://learn.adafruit.com/welcome-to-circuitpython/the-repl" target="_blank" rel="noopener noreferrer" style={{color : 'blue'}}>Documentación de CircuitPython</a>.


#### ¿Problemas con terminales?

Si, después de hacer clic en el botón <img src={require('@site/static/img/elioblocs/terminal/connect-button.jpg').default} style={{ width: '12%', verticalAlign: 'middle' }} alt="Botón conectar" />, aparece el mensaje `Eliobot está conectado` pero no pasa nada, prueba a hacer clic en el botón <img src={require('@site/static/img/elioblocs/terminal/restart-button.jpg').default} style={{ width: '4%', verticalAlign: 'middle' }} alt="Botón reiniciar" /> para reiniciar el programa, o en <img src={require('@site/static/img/elioblocs/terminal/stop-button.jpg').default} style={{ width: '4%', verticalAlign: 'middle' }} alt="Botón detener" /> si el programa sigue en ejecución. Si aún no funciona, desconecta Eliobot del ordenador, apágalo y vuelve a conectarlo.
