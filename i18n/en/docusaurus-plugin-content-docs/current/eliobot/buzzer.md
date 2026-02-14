---
last_modified_on: "2024-02-26"
title: "Buzzer"
description: "Eliobot component - Buzzer"
---


<img src={require("@site/static/img/eliobot/buzzer/Eliobot - Buzzer.png").default} alt="Eliobot buzzer" width="49%" />

<br/>Eliobot's buzzer is a passive buzzer, so it can emit sounds over a wide frequency range, much like old telephones.

## Use with Elioblocs

To use Eliobot's buzzer on Elioblocs, we use blocks from the <img src={require("@site/static/img/eliobot/buzzer/category-sound.jpg").default} style={{ width: "14%", verticalAlign: "middle" }} alt="sound category" /> category to play a sound.

## Use with Python

To play notes in Python, we use the `IO17` pin as a PWM output to be able to reproduce the desired frequency.

To play music, simply repeat the desired frequencies like in a score.

## Related examples

### Elioblocs example

>
> <img src={require("@site/static/img/eliobot/buzzer/example-buzzer-elioblocs.jpg").default} alt="Elioblocs buzzer example" width="49%" />
>

Here, we play note `C` for 1 second and repeat forever.

---

### Python example

```python
import board
import pwmio
import time

buzzer = pwmio.PWMOut(
                board.IO17, # Buzzer pin
                variable_frequency=True, # Allow changing the frequency
                ) # Create buzzer object

while True:
    buzzer.frequency = 262 # C note frequency
    time.sleep(1) # Wait 1 second
    buzzer.frequency = 0 # Stop sound
    time.sleep(1) # Wait 1 second
```

Here, we play note `C` for 1 second and repeat forever.
