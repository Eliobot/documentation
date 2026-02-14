---
last_modified_on: "2024-02-26"
title: "Red"
description: "Elioblocs - Redes"
---

Los bloques de red le permiten realizar acciones relacionadas con la conexión de Eliobot a una red inalámbrica.

## **Conexión inalámbrica**

---

### Conectarse a una red inalámbrica

![Conéctese a una red Wi-Fi](/img/elioblocs/blocs/wifi/connect-wifi.jpg)

**Tipo**: Orden

**Definición** :

Este bloque te permite conectar Eliobot a una red inalámbrica. Debe ingresar el nombre de la red y la contraseña.
La información de conexión se almacena en un archivo llamado `settings.toml` en Eliobot, lo que significa que no es necesario ingresarlo cada vez.
Eliobot se conectará automáticamente a la red inalámbrica al iniciarse.

**Usar** :

Si desea que Eliobot se conecte a una red inalámbrica para poder acceder a Internet o a un servidor local.

### Desconectarse de una red inalámbrica

![Desconectarse de una red Wi-Fi](/img/elioblocs/blocs/wifi/disconnect-wifi.jpg)

**Tipo**: Orden

**Definición** :

Este bloque te permite desconectar Eliobot de una red inalámbrica.

**Usar** :

Si quieres que Eliobot se desconecte de una red inalámbrica para conectarse a otra red o para ahorrar energía.

### Abrir un punto de acceso desde Eliobot

![Abrir un punto de acceso Wi-Fi](/img/elioblocs/blocs/wifi/open-hotspot.jpg)

**Tipo**: Orden

**Definición** :

Este bloque te permite abrir un punto de acceso Wi-Fi desde Eliobot. Esto permite que otros dispositivos se conecten a Eliobot, como su teléfono o computadora.

:::warning
La contraseña debe tener entre 8 y 64 caracteres.
:::

**Usar** :

Si desea enviar un archivo html de Eliobot para convertir su teléfono en un control remoto, por ejemplo.

### Establecer nombre de host

![Establezca el nombre de host](/img/elioblocs/blocs/wifi/hostname.jpg)

**Tipo**: Orden

**Definición** :

Este bloque le permite definir el nombre del host de Eliobot. El nombre de host es el nombre que identifica a Eliobot en la red.
Simplemente escriba el nombre del host acompañado de la extensión `.local` para acceder a Eliobot desde otro dispositivo en la misma red.

**Usar** :

Si deseas acceder a Eliobot desde otro dispositivo en la misma red.
Por ejemplo, si deseas acceder a la página html que creaste en Eliobot desde tu teléfono.

### ¿Está conectado a una red inalámbrica?

![Está conectado a una red Wi-Fi](/img/elioblocs/blocs/wifi/is-connected.jpg)

**Tipo**: bloque booleano

**Definición** :

Este bloque te permite comprobar si Eliobot está conectado a una red inalámbrica. Devuelve `verdadero` si Eliobot está conectado, y `falso` en caso contrario.

**Usar** :

Si deseas realizar una acción solo si Eliobot está conectado a una red inalámbrica.

### Escanear redes inalámbricas disponibles

![Escanear redes Wi-Fi disponibles](/img/elioblocs/blocs/wifi/scan-wifi.jpg)

**Tipo**: Valor

**Definición** :

Este bloque le permite escanear redes inalámbricas disponibles. Devuelve una lista de redes inalámbricas disponibles con su nombre y intensidad de la señal.

**Usar** :

Si desea ver las redes inalámbricas disponibles, elija a qué red conectarse.

### Obtener la dirección IP de la red inalámbrica

![Obtener dirección IP de red Wi-Fi](/img/elioblocs/blocs/wifi/get-ip.jpg)

**Tipo**: Valor

**Definición** :

Este bloque te permite obtener la dirección IP de la red inalámbrica a la que está conectado Eliobot.

**Usar** :

Si quieres saber la dirección IP de la red inalámbrica para comunicarte con Eliobot, la necesitarás para conectarte a Eliobot desde otro dispositivo.

---

### Crea una página html

![Crear una página HTML](/img/elioblocs/blocs/wifi/create-html-page.jpg)

**Tipo**: Orden

**Definición** :

Este bloque le permite crear una página HTML. Una página HTML es una página web que se puede mostrar en un navegador web.
Se guardará en un archivo html en Eliobot llamado `index.html` y se colocará en la carpeta `www`.
Puedes elegir el título de la página y colocar su contenido dentro. Una vez colocado este bloque se desactivan todos los bucles.
repetido indefinidamente para iniciar el servidor web, puede acceder a él conectándose a Eliobot en modo punto de acceso 
e ingresando la dirección IP de Eliobot en su navegador web.

**Usar** :

Si desea crear una página web para mostrar información y colocar elementos interactivos como botones o displays.

### Agregue un botón a su página html

![Agregar un botón a una página HTML](/img/elioblocs/blocs/wifi/add-html-button.jpg)

**Tipo**: Orden

**Definición** :

Este bloque le permite agregar un botón a una página HTML.
Un botón es un elemento interactivo en el que el usuario puede hacer clic.
Allí podrás elegir el texto del botón y el código que se ejecutará cuando se haga clic en el botón.
También puedes elegir el color del botón.

**Usar** :

Si quieres hacer un mando a distancia para controlar Eliobot desde tu teléfono.

### Agregue un visor a su página html

![Agregar una pantalla a una página HTML](/img/elioblocs/blocs/wifi/add-html-value.jpg)

**Tipo**: Orden

**Definición** :

Este bloque te permite agregar una visualización a una página HTML, una visualización es un elemento que muestra el valor que le asignas.
Puede colocar el valor que desea mostrar dentro de la pantalla y el nombre de la pantalla.

**Usar** :

Si quieres saber si hay un obstáculo frente a Eliobot desde tu teléfono.

### Crear una etiqueta html

![Crear una etiqueta HTML](/img/elioblocs/blocs/wifi/create-html-div.jpg)

**Tipo**: Orden

**Definición** :

Este bloque le permite crear una etiqueta HTML. Una etiqueta HTML es un elemento de una página web que ayuda a estructurar el contenido.
Allí podrás elegir el tipo de etiqueta y colocar su contenido dentro.

Opciones disponibles:
-div
- centro

**Usar** :

Si desea estructurar el contenido de su página html.


### Crear un título html

![Crear un título HTML](/img/elioblocs/blocs/wifi/create-html-title.jpg)

**Tipo**: Orden

**Definición** :

Este bloque le permite crear un título HTML. Un título HTML es un texto que tendrá un tamaño determinado y estará en negrita.
Allí podrás elegir el texto del título y su tamaño.

Opciones disponibles:
- h1
- h2
-h3
- h4
- h5
-h6

**Usar** :

Si desea mostrar un título en su página html.

### Crear un párrafo html

![Crear un párrafo HTML](/img/elioblocs/blocs/wifi/create-html-text.jpg)

**Tipo**: Orden

**Definición** :

Este bloque le permite crear un párrafo HTML. Un párrafo HTML es texto que se mostrará en la página web.

**Usar** :

Si desea mostrar texto en su página html.
