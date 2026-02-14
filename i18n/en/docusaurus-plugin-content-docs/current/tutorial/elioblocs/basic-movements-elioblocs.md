---
sidebar_position: 2
---

# Basic movements

Now that you know how to use the interface, we can go further in programming. The objective of this tutorial is to help you discover the 3 basic movements of the robot: moving it forward, backward and turning.

To put your learning into practice, we challenge you at the end of this tutorial. Your challenge, if you accept it, will be to make a square with Eliobot :)

![alt text](/img/tutorial/elioblocs/basic-movements-elioblocs/Cote-11.png)

To start this tutorial, go to our programming interface https://app.eliobot.com/.


## Move Eliobot forward

The objective of this first step is to move Eliobot forward.

![alt text](/img/tutorial/elioblocs/basic-movements-elioblocs/Cote-12-edited.png)

### Creating the program

To move Eliobot forward, you must select a forward move. Click in the “Movements” block and drag “Move robot forward” into your workspace.

#### Option 1: Movement over a defined duration

If you want Eliobot to move forward for a defined duration (in our example 30 seconds), you must add a time delay to the movement. Click on “Utilities” and insert the “wait 1 second” block.

Change the number 1 to 30 to tell Eliobot to move forward for 30 seconds.

![alt text](/img/tutorial/elioblocs/basic-movements-elioblocs/OFFO.png)

#### Option 2: Movement over an indefinite period

If you want Eliobot to move forward indefinitely, you must add a loop to the movement so that it is repeated. Click on “Loops” in the toolbox and drag the “repeat while” block around the previous block.

Remember, for the loop to be complete, you need to add a condition to it. Eliobot moves forward as long as the condition is true. Click in the “Conditions” block and drag “true” into the loop.

![alt text](/img/tutorial/elioblocs/basic-movements-elioblocs/tuto-3etape-1.png)

### Program transfer

To test the program on Eliobot, plug it into the computer with the USB cable and click on the “Program” button.

You will then see the LED flashing and once finished you can unplug Eliobot to see the result!


## Roll back Eliobot

The objective of this second step is to push Eliobot back.

![alt text](/img/tutorial/elioblocs/basic-movements-elioblocs/Cote-15-edited.png)

The process is identical to the first step because the movement remains the same, it is simply the direction that changes.

We want Eliobot to move backwards. To move it back, simply click on the drop-down menu marked by a small orange triangle to the right of the “Move robot to” block. Then select the “back” option.

![alt text](/img/tutorial/elioblocs/basic-movements-elioblocs/oooooooooooooooooooooooooooooooooooppp.png)

To test the program on Eliobot, plug it into the computer with the USB cable and click on the “Program” button.

You will then see the LED flashing and once finished you can unplug Eliobot to see the result!


## Turn Eliobot to the right

The objective of this third step is to make Eliobot turn right.

![
    
](/img/tutorial/elioblocs/basic-movements-elioblocs/Cote-13-edited.png)
### Creating the program

To turn Eliobot, you must select a rotation movement. Click in the “Movements” block and drag “Turn robot to the right” into your workspace.

#### Option 1: Movement over a defined duration

If you want Eliobot to rotate for a defined duration (in our example 2 seconds), you must add a time delay to the movement. Click on “Utilities” and insert the “wait 1 second” block.

Change the number 1 to the number 2 to tell Eliobot to turn to the right for 2 seconds.

![alt text](/img/tutorial/elioblocs/basic-movements-elioblocs/Capture-ooooii.png)

#### Option 2: Activate spinning top mode 🙂

We want Eliobot to spin to the right for an infinite period of time (to spin a top). You can create a loop so that it repeats. Click on “Loops” in the toolbox and drag the “repeat while” block around the previous block.

To make the loop complete, add a condition to it. The robot turns to the right as long as the condition is true. Click in the “Conditions” block and drag “true” into the loop.

![alt text](/img/tutorial/elioblocs/basic-movements-elioblocs/tuto-3-etape-3-1.png)

### Program transfer

To test the program on Eliobot, plug it into the computer with the USB cable and click on the “Program” button.

You will then see the LED flashing and once finished you can unplug Eliobot to see the result!


## Turn Eliobot to the left

The objective of this fourth step is to make Eliobot turn to the left.

The approach is identical to the previous step, because the rotation movement remains the same, it is the direction that changes.

We want Eliobot to make a left turn. To turn the robot to the left, simply click on the drop-down menu marked by a small orange triangle to the right of the “Turn robot towards” block. Then select the “left” mode.

![alt text](/img/tutorial/elioblocs/basic-movements-elioblocs/Capture-17.png)

To test the program on Eliobot, plug it into the computer with the USB cable and click on the “Program” button.

You will then see the LED flashing and once finished you can unplug Eliobot to see the result!


## Challenge: make a square

It’s time to challenge yourself! Will you be able to make this square?

A square is made up of sub-movements: a straight line and a turn repeated four times.

![alt text](/img/tutorial/elioblocs/basic-movements-elioblocs/Cote-1.png)

### The straight line

The first sub-movement is to move Eliobot forward to trace the first side of the square. As we saw in step 1, you need to select forward movement. Inserts the “Move robot forward” block into the workspace.

You must then add a delay so that Eliobot moves in a straight line over the duration of 1 second. Insert the “wait 1 second” block into utility.

It is possible to modify the time to change the size of the square.

![alt text](/img/tutorial/elioblocs/basic-movements-elioblocs/OOOOOOOOOL.png)


### The turn

The second sub-movement is to turn Eliobot to the right to draw a right angle. As we saw in step 3, insert the “turn robot to the right” block below the previous blocks.

You must then add a time delay so that Eliobot rotates a quarter turn, or 270 milliseconds. Inserts the “wait 1 second” block into the workspace then modifies the duration and unit of the block.

![alt text](/img/tutorial/elioblocs/basic-movements-elioblocs/Capture-PPO.png)


### The magic loop

As a reminder, a square is made up of a straight line and a turn repeated four times. Now that you have made one side of the square, you just have to repeat this operation several times to obtain the remaining sides.

To make your task easier, there is a block that allows you to do this repetition: the loop.

Click on “Loops” in the toolbox and insert the “Repeat…times, do” block in the workspace. Slide this block around the previous ones.

As the square has 4 sides, we ask the loop to repeat 4 times.

![alt text](/img/tutorial/elioblocs/basic-movements-elioblocs/bloc-carre-i.png)


### Program transfer

To test the program on Eliobot, plug it into the computer with the USB cable and click on the “Program” button.

You will then see the LED flashing and once finished you can unplug Eliobot to see the result!

