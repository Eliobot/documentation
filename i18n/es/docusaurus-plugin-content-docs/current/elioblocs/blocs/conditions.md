---
last_modified_on: "2024-02-26"
title: "Condiciones"
description: "Elioblocs – Condiciones"
---

import Jump from '@site/src/components/Jump';


Las condiciones le permiten realizar acciones basadas en ciertas condiciones. Esto es lo que hace que un programa sea “inteligente” y le permite tomar decisiones.


En programación usamos:

## Si - Hacer - De lo contrario

![Bloquear si - Hacer - Si no](/img/elioblocs/blocs/conditions/if-else.png)

**Tipo**: Orden

**Definición** :

Este bloque le permite realizar una acción si una condición es verdadera y otra acción si la condición es falsa.
Se compone de tres partes:

- **If**: la condición a verificar (si es verdadera, ejecutamos el bloque `Hacer`; a esto lo llamamos booleano).
- **Do**: el bloque de instrucciones a ejecutar si la condición es verdadera.
- **Else**: el bloque de instrucciones a ejecutar si la condición es falsa.

**Usar** :

Si queremos que Eliobot avance si un sensor detecta un obstáculo, y que retroceda si no detecta ningún obstáculo.


## Si - Hacer

![Si bloquea - Do](/img/elioblocs/blocs/conditions/if.png)

Este bloque usa la misma lógica que el bloque `Si - Hacer - Si no`, pero con una especificidad: podemos modificar el bloque para agregar condiciones adicionales usando el engranaje.

### Editando el bloque

![Mutador del bloque Si](/img/elioblocs/blocs/conditions/if-mutator.png)

**Tipo**: Orden

**Definición** :

Aquí puedes acumular tantas condiciones como quieras. Si todas las condiciones son verdaderas, se ejecutará la parte del bloque `Hacer`.
Todas las condiciones se verifican una por una en el orden en que se apilan. Si una condición es falsa, entonces el bloque `Hacer` no se ejecutará.

**Usar** :

Si queremos que Eliobot avance si un sensor detecta un obstáculo, y que retroceda si no detecta ningún obstáculo, pero también que el robot se detenga si otro sensor detecta un obstáculo.

> #### Ejemplo
>
> <img src={require('@site/static/img/elioblocs/blocs/conditions/example-if.jpg').default} style={{ width: '30%', verticalAlign: 'middle' }} alt="Example Si" />
>
> En este ejemplo, solo se ejecutará la primera condición porque es la primera de la lista que es verdadera. Si la primera condición hubiera sido falsa, entonces la segunda condición habría sido verdadera, y si esta también hubiera sido falsa, habría intervenido el bloque 'else', actuando cuando ninguna de las condiciones anteriores es verdadera.

## Comparación

![Bloque de comparación](/img/elioblocs/blocs/conditions/est-egal.png)

**Tipo**: bloque booleano

**Definición** :

Este bloque le permite comparar dos valores. Se compone de dos partes:

- **Primer valor y segundo valor**: los valores a comparar.
- **Operador de comparación**: el tipo de comparación a realizar (igual, diferente, mayor, menor, mayor o igual, menor o igual).

**Usar** :

Si queremos saber si dos valores son iguales, si un valor es mayor que otro, etc.

## Operación lógica

![Bloque de operación lógica](/img/elioblocs/blocs/conditions/et.png)

**Tipo**: bloque booleano

**Definición** :

Este bloque le permite realizar una operación lógica entre dos condiciones. Se compone de dos partes:

- **Primera condición y segunda condición**: las condiciones a comparar.
- **Operador lógico**: el tipo de operación lógica a realizar (Y, O).

**Usar** :

Si queremos saber si dos condiciones son verdaderas o si una condición es verdadera.

## No

![Bloquear No](/img/elioblocs/blocs/conditions/no.png)

**Tipo**: bloque booleano

**Definición** :

Este bloque le permite negar una condición. Esto significa que no importa la condición, si es verdadera, se volverá falsa y viceversa.

**Usar** :

Si queremos cambiar una condición de verdadera a falsa o viceversa.

## Verdadero / Falso

![Bloque Verdadero / Falso](/img/elioblocs/blocs/conditions/vrai.png)

**Tipo**: bloque booleano

**Definición** :

Este bloque le permite definir un valor booleano. Esto significa que el valor es verdadero o falso.

**Usar** :

Si queremos definir una condición inicial.

## Nulo

![Bloque nulo](/img/elioblocs/blocs/conditions/bloc-nul.png)

**Tipo**: Valor

**Definición** :

Este bloque le permite definir un valor cero. Esto significa que el valor no está definido.
Nulo se utiliza a menudo para significar que una variable no tiene valor o no está definida.

:::warning
Cuidado, el valor cero no es lo mismo que el valor cero.
:::

**Usar** :

Si queremos definir una variable sin darle un valor.

## Prueba

![Bloque de prueba](/img/elioblocs/blocs/conditions/test.png)

**Tipo**: Valor

**Definición** :

Este bloque le permite probar una condición. Se compone de dos partes:

- **Condición**: la condición a probar.
- **Valor a usar**: Dependiendo del resultado de la condición, el valor a usar.

**Usar** :

Si queremos probar una condición y usar un valor diferente dependiendo del resultado.

## Ejemplo

Aprenda a utilizar las condiciones en el siguiente ejemplo:

<Jump to="/docs/tutorial/elioblocs/avoid-obstacles-elioblocs">Evitando obstáculos - Elioblocs</Jump>
