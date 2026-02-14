---
last_modified_on: "2024-02-26"
title: "Funkcje"
description: "Eliobloki - Funkcje"
---

Funkcje umożliwiają grupowanie bloków w celu ponownego wykorzystania ich w dalszej części programu.
Są bardzo przydatne, aby uniknąć wielokrotnego powtarzania tych samych bloków.
Możemy także podać im wartości wejściowe i pobrać wartość wyjściową.
Można je wywołać w dowolnym miejscu programu i w razie potrzeby kilka razy, o ile zostały wcześniej zadeklarowane.


## Utwórz funkcję

![Utwórz funkcję](/img/elioblocs/blocs/functions/fonctionA.png)

**Typ**: Zamówienie

**Definicja**:

Funkcja jest jak pętla, zawiera bloki do wykonania. Bloki te zostaną wykonane po wywołaniu funkcji.
Możesz użyć znaku zapytania, aby dodać komentarz do swojej funkcji (na przykład powiedz, co robi).

**Używać** :

Jeśli chcemy pogrupować bloki, aby ponownie wykorzystać je w dalszej części programu. Staramy się umieszczać w funkcji zbędne akcje, aby uniknąć ich wielokrotnego powtarzania.

## Wywołaj funkcję

![Wywołaj funkcję](/img/elioblocs/blocs/functions/fonctionA-appel.png)

**Typ**: Zamówienie

**Definicja**:

Blok ten umożliwia wywołanie funkcji. Bloki wewnątrz funkcji zostaną wykonane.

**Używać** :

Jeśli chcemy wykonać bloki funkcji bez konieczności ich przepisywania.

## Pobierz wartość na wyjściu funkcji

![Funkcja z wartością zwracaną](/img/elioblocs/blocs/functions/fonctionB.png)

**Typ**: Zamówienie

![Przeczytaj zwróconą wartość](/img/elioblocs/blocs/functions/fonctionB-retour.png)

**Typ**: Wartość

**Definicja**:

Istnieją funkcje, które zwracają wartość. Podobnie jak w przypadku normalnej funkcji, znajdujące się w niej bloki zostaną wykonane, ale dodatkowo na końcu zwrócą wartość. Wartość ta może zostać użyta w pozostałej części programu.

**Używać** :

Jeśli chcemy pobrać wartość z funkcji, aby użyć jej w pozostałej części programu. Na przykład, jeśli wykonamy obliczenia w funkcji, możemy pobrać wynik i wykorzystać go w pozostałej części programu.

## Dodaj wartości do wejścia funkcji

![Dodaj dane wejściowe do funkcji](/img/elioblocs/blocs/functions/add-input-functions.png)

![Zadeklaruj wejścia funkcji](/img/elioblocs/blocs/functions/fonctionA-input.png)

**Typ**: Zamówienie

**Definicja**:

Możliwe jest nadanie wartości funkcji, aby z nich korzystała. Wartości te nazywane są parametrami.
Aby dodać parametry do funkcji, po prostu dodaj je do bloku funkcyjnego za pomocą koła zębatego.
Wywołując funkcję musimy podać wartości tych parametrów.

**Używać** :

Wyobraźmy sobie funkcję obliczającą Pitagorasa. Możemy podać jej dwa boki trójkąta, tak aby zwróciła przeciwprostokątną.

## Wyjście z funkcji

![Wartość zwrócona w przypadku zdarzenia](/img/elioblocs/blocs/functions/return-function.png)

**Typ**: Zamówienie

**Definicja**:

Ten blok umożliwia wyjście z funkcji i zwrócenie wartości, jeśli warunek jest spełniony.

**Używać** :

Jeśli chcemy wyjść z funkcji przed końcem, możemy użyć tego bloku do zwrócenia wartości.
