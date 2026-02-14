---
last_modified_on: "2024-02-26"
title: "Bucles"
description: "Elioblocs - Bucles"
---

Los bucles permiten repetir acciones un determinado número de veces hasta que se cumpla (o no) una condición. Son muy útiles para automatizar tareas repetitivas.

## Repetir X veces

![Para bucle](/img/elioblocs/blocs/loops/boucle-repeter.png)

**Tipo**: Orden

**Definición** :

Este bucle repite los bloques que contiene un determinado número de veces. Para definir el número de repeticiones, puede escribir directamente el número de veces deseado en el cuadro o utilizar un bloque que contenga un valor.

**Usar** :

Si queremos que Eliobot avance un espacio 5 veces.

## Repetir mientras

![Mientras bucle](/img/elioblocs/blocs/loops/boucle-while.png)

**Tipo**: Orden

**Definición** :

Este bucle se compone de dos partes:

- **Condición**: mientras/hasta que esta condición sea verdadera.
- **Condición a comprobar**: la condición a comprobar en cada vuelta del bucle.

> #### Mientras
>
> Este bucle repite los bloques que contiene mientras la condición sea verdadera.
>
> #### Hasta
>
> Este bucle repite los bloques que contiene hasta que la condición sea verdadera.

**Usar** :

Si queremos que Eliobot avance siempre y cuando un sensor no detecte ningún obstáculo.


## Cuenta con ```i```

![Para bucle](/img/elioblocs/blocs/loops/boucle-for.png)

**Tipo**: Orden

**Definición** :

Este bucle permite repetir un número determinado de veces los bloques que contiene utilizando una variable ```i``` que va de 0 al valor definido. Esta variable ```i``` se incrementa en cada bucle en el último valor.

> #### Detalle
> 
> <img src={require('@site/static/img/elioblocs/blocs/loops/example-boucle-for.jpg').default} style={{ width: '50%', verticalAlign: 'middle' }} alt="Example for" />
> 
> 1. Valor inicial de las iteraciones.
> 2. Valor final de las iteraciones.
> 3. Incremento de la variable ```i``` en cada vuelta del bucle.

**Usar** :

Si queremos que Eliobot avance 5 veces un cuadrado, mostrando el número del cuadrado.

## Para ```i``` en la lista

![Para j en la lista loop](/img/elioblocs/blocs/loops/boucle-for-liste.png)

**Tipo**: Orden

**Definición** :

Este bucle te permite repetir los bloques que contiene la cantidad de veces que haya elementos en una lista.

**Usar** :

Si queremos explorar una lista de valores y mostrarlos uno por uno.

## Salir del bucle o pasar a la siguiente iteración del bucle

![Salir del bucle](/img/elioblocs/blocs/loops/quitter-boucle.png)

**Tipo**: Orden

**Definición** :

Este bloque tiene dos usos:

- **Salir del bucle**: le permite salir del bucle actual.
- **Pasar a la siguiente iteración**: le permite pasar a la siguiente iteración del bucle actual.

**Usar** :

Si quieres salir de un bucle infinito bajo ciertas condiciones, o saltar una iteración en un bucle `Repetir X veces`, usa este bloque.

