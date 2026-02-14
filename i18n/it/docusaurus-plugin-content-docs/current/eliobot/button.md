---
last_modified_on: "2024-02-26"
title: "Pulsante"
description: "Componente Eliobot - Pulsante"
---


<img src={require("@site/static/img/eliobot/button/Eliobot - Button.png").default} alt="Eliobot button" width="49%" />

<br/>Il pulsante di Eliobot può essere utilizzato per metterlo in modalità Bootloading o per essere utilizzato in un programma.

:::note
Per mettere Eliobot in modalità bootloading è sufficiente tenere premuto il pulsante mentre si accende Eliobot. Fare attenzione a farlo prima di collegare Eliobot al computer.
:::

:::warning
La modalità bootloading è una modalità che consente di eseguire il flashing del microcontrollore Eliobot.
:::

## Utilizzare con Eliobloc

Per utilizzare il pulsante Eliobot su Eliobloc, utilizziamo il blocco <img src={require("@site/static/img/elioblocs/blocs/inputs/test-bouton.png").default} style={{ width: "14%", verticalAlign: "middle" }} alt="test pulsante" /> per testare se il pulsante è premuto o meno, restituisce `vero` se il pulsante è premuto e `falso` altrimenti.

## Da utilizzare con Python

Il pulsante di Eliobot è collegato al pin `IO0` presente sulla scheda, basta leggere lo stato del pin per sapere se il pulsante è premuto o meno.

Le informazioni restituite dal pulsante sono valori numerici (0,1), quindi devono essere convertite in booleani per sapere se il pulsante è premuto o meno.

## Esempi correlati

### Esempio di Eliobloc

>
><img src={require("@site/static/img/eliobot/button/example-button-elioblocs.jpg").default} alt="exemple bouton elioblocs" width="49%" />
>

Qui utilizziamo il blocco <img src={require("@site/static/img/elioblocs/blocs/inputs/test-bouton.png").default} style={{ width: "14%", verticalAlign: "middle" }} alt="test pulsante" /> per scrivere che il pulsante è premuto nel terminale.

---

### Esempio Python

```python
import board
from digitalio import DigitalInOut, Direction, Pull

button = DigitalInOut(board.IO0) # Création de l'objet bouton
button.direction = Direction.INPUT # Configuration du bouton en entrée

if button.value: # Si le bouton est pressé
    print("Pulsante premuto")
```

In questo caso utilizziamo la libreria `board` per recuperare il pin `IO0` e la libreria `digitalio` per configurare il pin di ingresso. Quindi testiamo se il pulsante è premuto e visualizziamo un messaggio nel terminale.