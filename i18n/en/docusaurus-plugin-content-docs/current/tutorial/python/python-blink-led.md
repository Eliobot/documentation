---
sidebar_position: 2
---

# Blink an LED



In electronics there is a slightly brighter version of “Hello world!” called “Blink” which, as its name suggests, aims to flash an LED on the card in your hand.
And that’s good since Eliobot is equipped with an LED, which is multi-colored, which will allow you to display the color of your choice!

![alt text](/img/tutorial/python/python-blink-led/led-turned-on.bmp)

We will start our code by integrating some libraries. These are sets of already written codes allowing us to add functions easily.

## Declaration of inputs / outputs

The first is called “board” and is specific to CircuitPython. It is thanks to it that we will be able to explain to our program how the elements are connected to the microcontroller (the brain of Eliobot)

To integrate it into our program we use the following line:

```python
import board
```

This allows us to call the input/output of the board using the pin number.

```python
board.IO3
```

Or as in our case to use the name assigned to the pin

```python
board.NEOPIXEL
```

## Neopixel LED Statement

The Eliobot LED has a somewhat specific operation since it can display several colors, we will use another library to simplify the task:

```python
import neopixel
```

Now that our libraries are in our project, we will be able to use the functions they contain.
We start by declaring our LED with the following function:

```python
pixel = neopixel.NeoPixel(board.NEOPIXEL, 1, brightness=0.3)
```

``pixel`` is the name we give to our LED

```python
board.NEOPIXEL tells us where the LED is connected on Eliobot's board
```

There is only one LED connected to this location, hence the 1

Finally you can adjust the brightness with brightness ranging from 0 to 1

The LED is ready to use, so we can assign it a color with the command:

```python
pixel.fill(( R , G , B))
```

We use an RGB color code (Red, Green, Blue) which consists of defining the quantity of Red, Green and Blue that we want to display with a value ranging from 0 (no color) to 255 (maximum color)

For example, if we want to display pure red, we write:

```python
pixel.fill((255, 0, 0))
```

At this stage the color is not yet displayed, one last command is missing:

```python
pixel.show()
```

If we run the script ▶️we can then see Eliobot lighting up in the requested color, in our case red

The next step to make Eliobot blink is to turn off the LED, for this we set all the color values ​​to 0 and of course we remember to display the result:

```python
pixel.fill((0, 0, 0))
pixel.show()
```

## Added a timer

Then we define the time between each action using a new “time” library.

```python
import time
```

The “sleep” function allows us to pause the program for a duration expressed in seconds, for example for one second we write:

```python
time.sleep(1)
```

We add this pause after each color change

```python
pixel.fill((255, 0, 0))
pixel.show()

time.sleep(1)

pixel.fill((0, 0, 0))
pixel.show()

time.sleep(1)
```

If we run ▶️ this program we can see that the LED lights up red for 1 second then goes out, which brings us almost closer to our goal of making it flash.

## Adding a loop

The final step is to make the flashing last longer. For this one method could consist of copying/pasting the 6 lines just above a large number of times, but our code would become extremely long and complicated for not much.

The more elegant method is to use a loop to repeat a piece of program. The one that interests us here is the “while” loop which will repeat our program as long as its condition is true, the trick therefore consists of giving it the value “True” (always true) in condition which will create a loop which repeats itself infinitely.

```python
while True:
	pixel.fill((255, 0, 0))
	pixel.show()

	time.sleep(1)

	pixel.fill((0, 0, 0))
	pixel.show()

	time.sleep(1)
```

Note that the code below “while True: ” is indented (shifted to the right), showing that it will be repeated in the loop.

## Final program

Here is the final program that we will be able to execute ▶️:

```python
import board
import neopixel
import time

pixel = neopixel.NeoPixel(board.NEOPIXEL, 1, brightness=0.3)

while True:
	pixel.fill((255, 0, 0))
	pixel.show()

	time.sleep(1)

	pixel.fill((0, 0, 0))
	pixel.show()

	time.sleep(1)
```
