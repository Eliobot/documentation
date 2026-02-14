---
last_modified_on: "2024-02-26"
title: "Colors"
description: "Elioblocs - Colors"
---

import Jump from '@site/src/components/Jump';


Eliobot is equipped with a multi-color LED, allowing it to display more than 16 million colors.


## Select a color to display

The simplest method to turn on the LED is to use the ```Show color``` block, which offers the default red color.

![Light block on](/img/elioblocs/blocs/colors/light-on.png)

**Type**: Order

**Definition** :

It can then be changed by clicking on the colored bubble, revealing a table with several colors.
All you have to do is click on the one you want to display.

![Color selector](/img/elioblocs/blocs/colors/color-choice.png)

Please note, black corresponds to an off LED.

**Use** :

If you want to light up the LED with a specific color. For example, to indicate the status of a sensor.


## Turn off the light

![Light off block](/img/elioblocs/blocs/colors/light-off.png)

**Type**: Order

**Definition** :

Two possibilities for turning off the LED:

- The first is to display the black color with the block above, which amounts to setting all colors to 0
- The simplest way is to use the dedicated block below: `Turn off light`

**Use** :

If you want to turn off the LED. For example, to indicate the end of an action.

## Example

Learn how to use the LED in the following example:

<Jump to="/docs/tutorial/elioblocs/blink-led-elioblocs">Flash the LED - Elioblocs</Jump>
