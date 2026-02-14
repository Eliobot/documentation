---
last_modified_on: "2024-02-26"
title: "Lo esencial"
description: "Elioblocs - Conceptos básicos"
---

import Jump from '@site/src/components/Jump';

Los bloques básicos son los primeros bloques que utilizarás para programar Eliobot.

## Al inicio

![Empezamos](/img/elioblocs/blocs/basics/boucle-start.jpg)

**Tipo**: Orden

**Definición** :

Este bloque es un bucle que se ejecuta solo una vez al inicio del programa, solo se ejecutan los bloques de este bucle o de un bucle Repetir indefinidamente y los demás se desactivan.

**Usar** :

Si queremos que Eliobot avance un espacio al inicio.


## Repetir indefinidamente

![Bucle infinito](/img/elioblocs/blocs/basics/boucle-infinie.png)

**Tipo**: Orden

**Definición** :

Este bucle repite los bloques que contiene indefinidamente. Para detener el bucle, debe utilizar <img src={require('@site/static/img/elioblocs/blocs/loops/quitter-boucle.png').default} style={{ width: '14%', verticalAlign: 'middle' }} alt="Quitter boucle" />.

:::warning
Tenga cuidado, después de usar este bucle, **solo** los bloques internos se ejecutarán infinitamente.
:::

**Usar** :

Si queremos que Eliobot avance indefinidamente.

## Espera X segundos

![Espera X segundos](/img/elioblocs/blocs/basics/attendre.png)

**Tipo**: Orden

**Definición** :

Este bloque le permite pausar el programa durante una cierta cantidad de segundos/milisegundos.

**Usar** :

Si quieres hacer una pausa en tu programa entre dos acciones.

## Mostrar un valor en la terminal

![Imprimir valor en el terminal](/img/elioblocs/blocs/basics/print-valeur.png)

**Tipo**: Orden

**Definición** :

Este bloque le permite mostrar un valor en la terminal. El valor puede ser un número, texto o booleano.

**Usar** :

Si desea mostrar un valor para depurar su programa.