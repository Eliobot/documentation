---
last_modified_on: "2024-02-26"
title: "Basics"
description: "Elioblocs - Basics"
---

import Jump from '@site/src/components/Jump';

The basic blocks are the first blocks you will use to program Eliobot.

## At startup

![We start](/img/elioblocs/blocs/basics/boucle-start.jpg)

**Type**: Order

**Definition** :

This block is a loop which is executed only once at the start of the program only the blocks in this loop or in a Repeat Indefinitely loop are executed the others are deactivated.

**Use** :

If we want Eliobot to move forward one space at startup.


## Repeat indefinitely

![Infinite loop](/img/elioblocs/blocs/basics/boucle-infinie.png)

**Type**: Order

**Definition** :

This loop repeats the blocks it contains indefinitely. To stop the loop, you must use <img src={require('@site/static/img/elioblocs/blocs/loops/quitter-boucle.png').default} style={{ width: '14%', verticalAlign: 'middle' }} alt="Quitter boucle" />.

:::warning
Be careful, after using this loop, **only** the blocks inside will be executed infinitely.
:::

**Use** :

If we want Eliobot to advance indefinitely.

## Wait X seconds

![Wait for X seconds](/img/elioblocs/blocs/basics/attendre.png)

**Type**: Order

**Definition** :

This block allows you to pause the program for a certain number of seconds/milliseconds.

**Use** :

If you want to take a break in your program between two actions.

## Show a value in the terminal

![Print value in the terminal](/img/elioblocs/blocs/basics/print-valeur.png)

**Type**: Order

**Definition** :

This block allows you to display a value in the terminal. The value can be a number, text, or a Boolean.

**Use** :

If you want to display a value to debug your program.