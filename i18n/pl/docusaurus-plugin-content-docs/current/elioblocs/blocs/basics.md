---
last_modified_on: "2024-02-26"
title: "Podstawy"
description: "Eliobloki - podstawy"
---

import Jump from '@site/src/components/Jump';

Bloki podstawowe to pierwsze bloki, których użyjesz do programowania Eliobota.

## Podczas uruchamiania

![Zaczynamy](/img/elioblocs/blocs/basics/boucle-start.jpg)

**Typ**: Zamówienie

**Definicja**:

Ten blok jest pętlą, która jest wykonywana tylko raz na początku programu. Wykonywane są tylko bloki w tej pętli lub w pętli Powtórz na czas nieokreślony, pozostałe są dezaktywowane.

**Używać** :

Jeśli chcemy, aby Eliobot przy uruchomieniu przesunął się o jedno pole do przodu.


## Powtarzaj w nieskończoność

![Nieskończona pętla](/img/elioblocs/blocs/basics/boucle-infinie.png)

**Typ**: Zamówienie

**Definicja**:

Ta pętla powtarza zawarte w niej bloki w nieskończoność. Aby zatrzymać pętlę, musisz użyć <img src={require('@site/static/img/elioblocs/blocs/loops/quitter-boucle.png').default} style={{ width: '14%', verticalAlign: 'middle' }} alt="Quitter boucle" />.

:::warning
Bądź ostrożny, po użyciu tej pętli **tylko** bloki wewnątrz będą wykonywane w nieskończoność.
:::

**Używać** :

Jeśli chcemy, żeby Eliobot rozwijał się w nieskończoność.

## Poczekaj X sekund

![Poczekaj X sekund](/img/elioblocs/blocs/basics/attendre.png)

**Typ**: Zamówienie

**Definicja**:

Blok ten umożliwia wstrzymanie programu na określoną liczbę sekund/milisekund.

**Używać** :

Jeśli chcesz zrobić sobie przerwę w programie pomiędzy dwiema akcjami.

## Pokaż wartość w terminalu

![Wydrukuj wartość w terminalu](/img/elioblocs/blocs/basics/print-valeur.png)

**Typ**: Zamówienie

**Definicja**:

Blok ten umożliwia wyświetlenie wartości w terminalu. Wartością może być liczba, tekst lub wartość logiczna.

**Używać** :

Jeśli chcesz wyświetlić wartość w celu debugowania programu.