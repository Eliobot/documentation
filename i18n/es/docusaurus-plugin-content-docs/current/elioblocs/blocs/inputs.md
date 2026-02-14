---
last_modified_on: "2024-10-31"
title: "Entradas"
description: "Elioblocs - Entradas"
---

Los bloques de entrada le permiten recuperar información del entorno de Eliobot.

Los bloques de sensores de obstáculos te permiten probar la presencia de un obstáculo cerca de Eliobot.

## Prueba de presencia de un obstáculo

![Comprobar obstáculo](/img/elioblocs/blocs/inputs/test-obstacles.png)

**Tipo**: bloque booleano

**Definición** :

Este bloque te permite probar la presencia de un obstáculo a cierta distancia de Eliobot:
- en el frente
- en la parte de atrás
- izquierda
- correcto

**Usar** :

Si quieres evitar obstáculos como paredes u objetos.

---

Los bloques de sensores de línea le permiten seguir una línea o probar la presencia de una línea.

## Sigue una línea

![texto alternativo](/img/elioblocs/blocs/inputs/suivre-ligne.png)

**Tipo**: Orden

**Definición** :

Este bloque te permite seguir una línea negra.

**Usar** :

Si queremos que Eliobot siga una línea negra en una ruta, la que está al dorso de sus instrucciones por ejemplo.

## Prueba de la presencia de una línea

![texto alternativo](/img/elioblocs/blocs/inputs/ligne-presente.png)

**Tipo**: bloque booleano

**Definición** :

Este bloque te permite probar la presencia de una línea negra debajo de Eliobot:
- en el medio
- izquierda
- correcto
- centro izquierda
- medio derecho

**Usar** :

Para permitir que Eliobot siga una línea negra en un recorrido y pruebe si debe girar a la izquierda o a la derecha.

## Cambiar la sensibilidad del sensor de línea

![texto alternativo](/img/elioblocs/blocs/inputs/sensi-ligne.png)

**Tipo**: Orden

**Definición** :

Este bloque permite modificar la sensibilidad del sensor de línea. Cambia el valor en el que el sensor de línea detecta una línea.

**Usar** :

Si estás en un espacio muy iluminado u oscuro, puedes cambiar la sensibilidad del sensor de línea para que detecte mejor la línea.

## Leer el valor de un sensor de línea.

![texto alternativo](/img/elioblocs/blocs/inputs/valeur-ligne.png)

**Tipo**: Valor

**Definición** :

Este bloque devuelve el valor del sensor de línea. Puedes mostrarlo en la terminal, por ejemplo.
Se puede utilizar para configurar la sensibilidad del sensor de línea.

**Usar** :

Si desea recuperar el valor del sensor de línea para calibrar mejor la sensibilidad del sensor de línea.

## Calibración automática de línea

![texto alternativo](/img/elioblocs/blocs/inputs/calibration-ligne.jpg)

**Tipo**: Orden

**Definición** :

Este bloque le permite calibrar automáticamente el sensor de línea. Le permite definir el valor en el que el sensor de línea detecta una línea.

**Usar** :

Debes colocar los 5 sensores de línea encima de una línea negra y eliobot calibrará automáticamente el valor en el que detecta la línea
avanzando y retrocediendo. Eliobot debe estar perpendicular a la línea para que la calibración sea correcta.

---

## Probar si el botón está activado

![¿Está activado el botón](/img/elioblocs/blocs/inputs/test-bouton.png)?

**Tipo**: bloque booleano

**Definición** :

Este bloque te permite probar si el botón de Eliobot está activado, desarrollar `verdadero` si el botón está activado y `falso` en el caso contrario.

**Usar** :

Si deseas realizar una acción solo si el botón Eliobot está activado. Inicie su programa, por ejemplo.


---

## El control remoto por infrarrojos

Para utilizar los bloques de control remoto por infrarrojos, es necesario tener disponible el control remoto por infrarrojos en el kit Eliobot.

![Control remoto por infrarrojos](/img/elioblocs/blocs/inputs/nice_ir_remote.jpg)


[Compre aquí](https://eliobot.com/products/telecommande-infra-rouge)

## Elija sensor para lectura

![Elija sensor](/img/elioblocs/blocs/inputs/ir_remote_sensor_change.png)

**Tipo**: Orden

**Definición** :

Este bloque permite elegir el sensor de infrarrojos para leer los comandos del mando a distancia por infrarrojos,
Puedes elegir entre el sensor delantero y el sensor trasero.

**Usar** :

Si desea que los comandos del control remoto por infrarrojos sean leídos por el sensor delantero o trasero.
Por ejemplo para seguir a Eliobot y enviarle órdenes mientras estás detrás de él.

## Leer el comando del control remoto por infrarrojos

![Leer comando](/img/elioblocs/blocs/inputs/ir_remote_do.png)

<p>
  <img src={require('@site/static/img/elioblocs/blocs/inputs/ir_remote.png').default} alt="Read command" width="70%"/>
</p>

**Tipo**: Orden

**Definición** :

Este bloque le permite leer el comando del control remoto por infrarrojos y realizar una acción en función del comando recibido.

**Usar** :

Si quieres que Eliobot realice una acción en función de la orden recibida por el mando a distancia por infrarrojos.
Por ejemplo, avanzar, retroceder, girar a la izquierda o a la derecha. También puedes hacer que reproduzca música o encienda un LED.
