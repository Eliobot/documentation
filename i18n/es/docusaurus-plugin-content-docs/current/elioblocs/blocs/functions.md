---
last_modified_on: "2024-02-26"
title: "Funciones"
description: "Elioblocs - Funciones"
---

Las funciones le permiten agrupar bloques para reutilizarlos más adelante en el programa.
Son muy útiles para evitar repetir varias veces los mismos bloques.
On peut aussi leur donner des valeurs en entrée et récupérer une valeur en sortie.
Se pueden llamar en cualquier parte del programa y varias veces si es necesario, siempre y cuando hayan sido declarados anteriormente.


## Crear una función

![Crear una función](/img/elioblocs/blocs/functions/fonctionA.png)

**Tipo**: Orden

**Definición** :

Una función es como un bucle, contiene bloques para ejecutar. Estos bloques se ejecutarán cuando se llame a la función.
Puede utilizar el signo de interrogación para agregar un comentario a su función (diga qué hace, por ejemplo).

**Usar** :

Si queremos agrupar bloques para reutilizarlos más adelante en el programa. Intentamos poner acciones redundantes en una función para evitar repetirlas varias veces.

## Llamar a una función

![Llamar a una función](/img/elioblocs/blocs/functions/fonctionA-appel.png)

**Tipo**: Orden

**Definición** :

Este bloque le permite llamar a una función. Se ejecutarán los bloques dentro de la función.

**Usar** :

Si queremos ejecutar los bloques de una función sin tener que reescribirlos.

## Obtener un valor en la salida de la función

![Función con valor return](/img/elioblocs/blocs/functions/fonctionB.png)

**Tipo**: Orden

![Leer el valor devuelto](/img/elioblocs/blocs/functions/fonctionB-retour.png)

**Tipo**: Valor

**Definición** :

Hay funciones que devuelven un valor. Como una función normal, los bloques internos se ejecutarán, pero además devolverá un valor al final. Este valor se puede utilizar en el resto del programa.

**Usar** :

Si queremos recuperar un valor de una función para usarlo en el resto del programa. Por ejemplo, si realizamos un cálculo en una función, podemos recuperar el resultado para usarlo en el resto del programa.

## Agregar valores a la entrada de la función

![Agregar entrada a una función](/img/elioblocs/blocs/functions/add-input-functions.png)

![Declarar entradas de función](/img/elioblocs/blocs/functions/fonctionA-input.png)

**Tipo**: Orden

**Definición** :

Es posible darle valores a una función para que los utilice. Estos valores se denominan parámetros.
Para agregar parámetros a una función, simplemente agréguelos al bloque de funciones usando el engranaje.
Cuando llamamos a la función, debemos dar valores para estos parámetros.

**Usar** :

Imaginemos que tenemos una función que calcula a Pitágoras, podemos darle los dos lados del triángulo para que nos devuelva la hipotenusa.

## Salir de una función

![Valor de retorno en event](/img/elioblocs/blocs/functions/return-function.png)

**Tipo**: Orden

**Definición** :

Este bloque le permite salir de una función y devolver un valor si se cumple una condición.

**Usar** :

Si queremos salir de una función antes del final, podemos usar este bloque para devolver un valor.