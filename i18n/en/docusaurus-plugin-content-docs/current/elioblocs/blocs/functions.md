---
last_modified_on: "2024-02-26"
title: "Functions"
description: "Elioblocs - Functions"
---

Functions let you group blocks so you can reuse them later in your program.
They are very useful to avoid repeating the same blocks multiple times.
You can also pass input values to them and get an output value back.
You can call them anywhere in the program, and as many times as needed, as long as they are declared first.


## Create a function

![Create a function](/img/elioblocs/blocs/functions/fonctionA.png)

**Type**: Order

**Definition** :

A function is like a loop, it contains blocks to execute. These blocks will be executed when the function is called.
You can use the question mark to add a comment to your function (say what it does for example).

**Use** :

If we want to group blocks to reuse them later in the program. We try to put redundant actions in a function to avoid repeating them several times.

## Call a function

![Call a function](/img/elioblocs/blocs/functions/fonctionA-appel.png)

**Type**: Order

**Definition** :

This block allows you to call a function. Blocks inside the function will be executed.

**Use** :

If we want to execute the blocks of a function without having to rewrite them.

## Get a value at the output of the function

![Function with value return](/img/elioblocs/blocs/functions/fonctionB.png)

**Type**: Order

![Read returned value](/img/elioblocs/blocs/functions/fonctionB-retour.png)

**Type**: Value

**Definition** :

There are functions that return a value. Like a normal function the blocks inside will be executed, but in addition, it will return a value at the end. This value can be used in the rest of the program.

**Use** :

If we want to retrieve a value from a function to use it in the rest of the program. For example, if we perform a calculation in a function, we can retrieve the result to use it in the rest of the program.

## Add values ​​to function input

![Add input to a function](/img/elioblocs/blocs/functions/add-input-functions.png)

![Declare function inputs](/img/elioblocs/blocs/functions/fonctionA-input.png)

**Type**: Order

**Definition** :

It is possible to give values ​​to a function so that it uses them. These values ​​are called parameters.
To add parameters to a function, simply add them to the function block using the gear.
When we call the function, we must give values ​​for these parameters.

**Use** :

Let's imagine having a function that calculates Pythagoras, we can give it the two sides of the triangle so that it returns the hypotenuse.

## Exit from a function

![Return value on event](/img/elioblocs/blocs/functions/return-function.png)

**Type**: Order

**Definition** :

This block allows you to exit a function and return a value if a condition is met.

**Use** :

If we want to exit a function before the end, we can use this block to return a value.
