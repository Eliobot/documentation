---
last_modified_on: "2024-02-26"
title: "Buton"
description: "Componenta Eliobot - Buton"
---


<img src={require("@site/static/img/eliobot/button/Eliobot - Button.png").default} alt="Eliobot button" width="49%" />

Butonul <br/>Eliobot poate fi folosit pentru a-l pune în modul Bootloading sau pentru a fi folosit într-un program.

:::note
Pentru a pune Eliobot în modul de încărcare, pur și simplu țineți butonul apăsat în timp ce porniți Eliobot. Aveți grijă să faceți acest lucru înainte de a conecta Eliobot la computer.
:::

:::warning
Modul de încărcare este un mod care vă permite să flashați microcontrolerul Eliobot.
:::

## Utilizați cu Elioblocs

Pentru a folosi butonul Eliobot pe Elioblocs, folosim blocul <img src={require("@site/static/img/elioblocs/blocs/inputs/test-bouton.png").default} style={{ width: "14%", verticalAlign: "middle" }} alt="test buton" /> pentru a testa dacă butonul este apăsat sau nu, returnează `adevărat` dacă butonul este apăsat și `fals` în caz contrar.

## Utilizați cu Python

Butonul lui Eliobot este conectat la pinul `IO0` de pe card, trebuie doar să citiți starea pinului pentru a ști dacă butonul este apăsat sau nu.

Informațiile pe care le returnează butonul sunt valori numerice (0,1), deci trebuie convertite în boolean pentru a ști dacă butonul este apăsat sau nu.

## Exemple înrudite

### Exemplu Elioblocs

>
><img src={require("@site/static/img/eliobot/button/example-button-elioblocs.jpg").default} alt="exemple bouton elioblocs" width="49%" />
>

Aici, folosim blocul <img src={require("@site/static/img/elioblocs/blocs/inputs/test-bouton.png").default} style={{ width: "14%", verticalAlign: "middle" }} alt="test buton" /> pentru a scrie că butonul este apăsat în terminal.

---

### Exemplu Python

```python
import board
from digitalio import DigitalInOut, Direction, Pull

button = DigitalInOut(board.IO0) # Création de l'objet bouton
button.direction = Direction.INPUT # Configuration du bouton en entrée

if button.value: # Si le bouton est pressé
    print("Buton apăsat")
```

Aici, folosim biblioteca `board` pentru a prelua pinul `IO0` și biblioteca `digitalio` pentru a configura pinul de intrare. Apoi testăm dacă butonul este apăsat și afișăm un mesaj în terminal.