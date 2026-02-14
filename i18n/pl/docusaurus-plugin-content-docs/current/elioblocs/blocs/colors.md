---
last_modified_on: "2024-02-26"
title: "Zabarwienie"
description: "Eliobloki - Kolory"
---

import Jump from '@site/src/components/Jump';


Eliobot wyposażony jest w wielokolorową diodę LED, dzięki której może wyświetlać ponad 16 milionów kolorów.


## Wybierz kolor do wyświetlenia

Najprostszą metodą włączenia diody LED jest użycie bloku ```Pokaż kolor```, który oferuje domyślny kolor czerwony.

![Blok świetlny włączony](/img/elioblocs/blocs/colors/light-on.png)

**Typ**: Zamówienie

**Definicja**:

Można to następnie zmienić, klikając kolorową bańkę, odsłaniając tabelę z kilkoma kolorami.
Wszystko, co musisz zrobić, to kliknąć na ten, który chcesz wyświetlić.

![Wybór koloru](/img/elioblocs/blocs/colors/color-choice.png)

Należy pamiętać, że kolor czarny odpowiada wyłączonej diodzie LED.

**Używać** :

Jeśli chcesz zaświecić diodę LED określonym kolorem. Na przykład, aby wskazać stan czujnika.


## Wyłącz światło

![Blokada oświetlenia wyłączona](/img/elioblocs/blocs/colors/light-off.png)

**Typ**: Zamówienie

**Definicja**:

Dwie możliwości wyłączenia diody LED:

- Pierwsza to wyświetlenie koloru czarnego przy bloku powyżej, co sprowadza się do ustawienia wszystkich kolorów na 0
- Najprościej jest użyć dedykowanego bloku poniżej ```Wyłącz światło```

**Używać** :

Jeśli chcesz wyłączyć diodę LED. Na przykład, aby wskazać koniec akcji.

## Przykład

Dowiedz się, jak używać diody LED w następującym przykładzie:

<Jump to="/docs/tutorial/elioblocs/blink-led-elioblocs">Błyskaj diodą LED - Elioblocs</Jump>

