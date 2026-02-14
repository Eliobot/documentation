---
last_modified_on: "2024-02-26"
title: "Terminal"
description: "Terminal Elioblocs"
---

#### Here is how the terminal is organized. This explanation will help you in the next steps.

![Elioblocs Terminal](/img/elioblocs/terminal/terminal.jpg)

> 1. It's the "drawer" button that allows you to open or close the terminal.
> 
> 2. This is the text area, this is where you will be able to communicate with Eliobot, see the error or success messages from your program and what it may have responded to you.
> 
> 3. This is the terminal button area:
> 
> - Restart the program: to restart the program that you uploaded to Eliobot.
> - Stop program: to stop the currently running program.
> 
> 4. These two buttons are the ones that will allow you to operate the terminal:
> 
> - Upload: This button sends the code to Eliobot, as seen previously, but if you go to the terminal after uploading the code, you will be able to see the code that was sent (the code is sent in a language called binary; it's normal if you can't read it).
>   
> ![Elioblocks Terminal Code](/img/elioblocs/terminal/terminal-televerser.jpg)
>   
> - Connect: This button allows you to establish the connection between Eliobot and your computer, this is what will allow communication between the two. The terminal will serve as messaging for this. 
>    
> ![Elioblocs Terminal Connecter](/img/elioblocs/terminal/terminal-connecter.jpg)

Eliobot is a robot that speaks with the Python programming language. This is why you will see messages in English in the terminal. But don't worry, we'll help you understand what he's telling you.

---

### Terminal functionalities

#### Listen to Eliobot

When in one of your programs with Elioblocs, you use the <img src={require('@site/static/img/elioblocs/terminal/ecrire.jpg').default} style={{ width: '9%', verticalAlign: 'middle' }} alt="Write block" /> or <img src={require('@site/static/img/elioblocs/terminal/afficher-la-valeur.jpg').default} style={{ width: '14%', verticalAlign: 'middle' }} alt="Show value block" /> block, Eliobot will write to the terminal. You will be able to see what it is saying and understand what is happening.
If one of your programs does not work and the LED flashes red, you will be able to see in the terminal what is wrong.

#### Send commands to Eliobot

When in the terminal you see `>>>`, it's Eliobot asking you to send him a command. You can send it commands in Python so that it executes them.
If you want to know more, you can check out the <a href="https://learn.adafruit.com/welcome-to-circuitpython/the-repl" target="_blank" rel="noopener noreferrer" style={{color : 'blue'}}>CircuitPython Documentation</a>.


#### Terminal problems?

If, after clicking the <img src={require('@site/static/img/elioblocs/terminal/connect-button.jpg').default} style={{ width: '12%', verticalAlign: 'middle' }} alt="Connect button" /> button, the message `Eliobot is connected` appears but nothing happens, try clicking the <img src={require('@site/static/img/elioblocs/terminal/restart-button.jpg').default} style={{ width: '4%', verticalAlign: 'middle' }} alt="Restart button" /> button to restart the program, or <img src={require('@site/static/img/elioblocs/terminal/stop-button.jpg').default} style={{ width: '4%', verticalAlign: 'middle' }} alt="Stop button" /> if your program is still running. If nothing happens, unplug Eliobot from your computer, turn it off, and reconnect it.
