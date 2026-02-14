---
last_modified_on: "2024-02-26"
title: "Loops"
description: "Elioblocs - Loops"
---

Loops let you repeat actions a certain number of times, or until a condition is met (or not). They are very useful for automating repetitive tasks.

## Repeat X times

![For loop](/img/elioblocs/blocs/loops/boucle-repeter.png)

**Type**: Order

**Definition** :

This loop repeats the blocks it contains a certain number of times. To define the number of repetitions, you can directly write the desired number of times in the box or use a block containing a value.

**Use** :

If we want Eliobot to advance one space 5 times.

## Repeat while

![While loop](/img/elioblocs/blocs/loops/boucle-while.png)

**Type**: Order

**Definition** :

This loop is made up of two parts:

- **Condition**: while/until this condition is/is true.
- **Condition to check**: the condition to check at each loop turn.

> #### As long as
>
> This loop repeats the blocks it contains as long as the condition is true.
>
> #### Until
>
> This loop repeats the blocks it contains until the condition is true.

**Use** :

If we want Eliobot to move forward as long as a sensor does not detect an obstacle.


## Count with ```i```

![For i loop](/img/elioblocs/blocs/loops/boucle-for.png)

**Type**: Order

**Definition** :

This loop allows the blocks it contains to be repeated a certain number of times using a variable ```i``` which goes from 0 to the defined value. This variable ```i``` is incremented each loop by the last value.

> #### Detail
> 
> <img src={require('@site/static/img/elioblocs/blocs/loops/example-boucle-for.jpg').default} style={{ width: '50%', verticalAlign: 'middle' }} alt="Example for" />
> 
> 1. Start value of iterations.
> 2. End value of iterations.
> 3. Increment of the variable ```i``` at each loop turn.

**Use** :

If we want Eliobot to move forward 5 times by one square, displaying the square number.

## For ```i``` in the list

![For j in list loop](/img/elioblocs/blocs/loops/boucle-for-liste.png)

**Type**: Order

**Definition** :

This loop allows you to repeat the blocks it contains the number of times there are elements in a list.

**Use** :

If we want to browse a list of values ​​and display them one by one.

## Exit loop or Move to next loop iteration

![Exit loop](/img/elioblocs/blocs/loops/quitter-boucle.png)

**Type**: Order

**Definition** :

This block has two uses:

- **Exit loop**: allows you to exit the current loop.
- **Skip to next iteration**: allows you to move to the next iteration of the current loop.

**Use** :

If we want to exit an infinite loop under certain conditions, or skip an iteration in a `Repeat X times` loop.

