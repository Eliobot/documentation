---
last_modified_on: "2024-02-26"
title: "Pętle"
description: "Eliobbloki – pętle"
---

Pętle umożliwiają powtarzanie akcji określoną liczbę razy, aż warunek zostanie spełniony (lub nie). Są bardzo przydatne do automatyzacji powtarzalnych zadań.

## Powtórz X razy

![For pętla](/img/elioblocs/blocs/loops/boucle-repeter.png)

**Typ**: Zamówienie

**Definicja**:

Ta pętla powtarza zawarte w niej bloki określoną liczbę razy. Aby określić liczbę powtórzeń, możesz bezpośrednio wpisać żądaną liczbę razy w polu lub użyć bloku zawierającego wartość.

**Używać** :

Jeśli chcemy, żeby Eliobot przesunął się o jedno pole 5 razy.

## Powtórz podczas

![Pętla while](/img/elioblocs/blocs/loops/boucle-while.png)

**Typ**: Zamówienie

**Definicja**:

Pętla ta składa się z dwóch części:

- **Warunek**: dopóki/dopóki ten warunek jest/jest prawdziwy.
- **Warunek do sprawdzenia**: warunek do sprawdzenia przy każdym zwoju pętli.

> #### Tak długo jak
>
> Ta pętla powtarza zawarte w niej bloki, dopóki warunek jest spełniony.
>
> #### Do
>
> Ta pętla powtarza zawarte w niej bloki, aż warunek zostanie spełniony.

**Używać** :

Jeśli chcemy, żeby Eliobot jechał do przodu, o ile czujnik nie wykryje przeszkody.


## Policz za pomocą ```i```

![Dla pętli](/img/elioblocs/blocs/loops/boucle-for.png)

**Typ**: Zamówienie

**Definicja**:

Pętla ta pozwala na powtórzenie zawartych w niej bloków określoną liczbę razy przy użyciu zmiennej ```i```, której wartość zmienia się od 0 do określonej wartości. Ta zmienna ```i``` jest zwiększana w każdej pętli o ostatnią wartość.

> #### Szczegóły
> 
> <img src={require('@site/static/img/elioblocs/blocs/loops/example-boucle-for.jpg').default} style={{ width: '50%', verticalAlign: 'middle' }} alt="Example for" />
> 
> 1. Wartość początkowa iteracji.
> 2. Wartość końcowa iteracji.
> 3. Zwiększenie zmiennej ```i``` przy każdym zwoju pętli.

**Używać** :

Jeśli chcemy, aby Eliobot przesunął się 5 razy o jedno pole do przodu, wyświetlając liczbę kwadratu.

## Dla ```i``` na liście

![Dla j w pętli listy](/img/elioblocs/blocs/loops/boucle-for-liste.png)

**Typ**: Zamówienie

**Definicja**:

Pętla ta umożliwia powtarzanie bloków, które zawiera, tyle razy, ile elementów znajduje się na liście.

**Używać** :

Jeśli chcemy przeglądać listę wartości i wyświetlać je jedna po drugiej.

## Wyjdź z pętli lub przejdź do następnej iteracji pętli

![Wyjście z pętli](/img/elioblocs/blocs/loops/quitter-boucle.png)

**Typ**: Zamówienie

**Definicja**:

Blok ten ma dwa zastosowania:

- **Wyjście z pętli**: umożliwia wyjście z bieżącej pętli.
- **Przeskocz do następnej iteracji**: umożliwia przejście do następnej iteracji bieżącej pętli.

**Używać** :

Jeśli chcemy wyjść z nieskończonej pętli pod pewnymi warunkami lub pominąć iterację pętli w pętli ```Répéter X fois```.


