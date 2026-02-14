---
last_modified_on: "2024-02-26"
title: "Listy"
description: "Eliobloki - Listy"
---

Listy umożliwiają przechowywanie wielu wartości w jednej zmiennej. Są bardzo przydatne do przechowywania danych tego samego typu.

## Utwórz listę

### Pusta lista

![Utwórz listę](/img/elioblocs/blocs/lists/creer-liste-vide.png)

**Typ**: Wartość

**Definicja**:

Tworzy pustą listę.
Sprzęt umożliwia dodawanie pozycji do listy.

**Używać** :

Jeśli chcemy utworzyć listę do przechowywania wartości.

### Lista ze zdefiniowanymi elementami

![Utwórz listę z elementami](/img/elioblocs/blocs/lists/creer-liste.png)

**Typ**: Wartość

**Definicja**:

Tworzy listę ze zdefiniowanymi elementami.
Koło zębate pozwala na dodanie kolejnych pozycji do listy.

**Używać** :

Jeśli chcemy utworzyć listę z już zdefiniowanymi wartościami.

### Lista z powtarzającym się elementem

![Utwórz listę powtarzaną](/img/elioblocs/blocs/lists/creer-liste-repete.png)

**Typ**: Wartość

**Definicja**:

Tworzy listę zawierającą element powtórzony określoną liczbę razy.

**Używać** :

Jeśli chcemy stworzyć listę z elementem powtarzającym się kilka razy.

### Lista z tekstu

![Utwórz listę z tekstu](/img/elioblocs/blocs/lists/liste-texte.png)

**Typ**: Wartość

**Definicja**:

Umożliwia utworzenie listy z tekstu. Separator pozwala określić sposób oddzielania elementów listy.

**Używać** :

Jeśli chcesz utworzyć listę z tekstu lub pliku CSV.

> #### Przykład
> 
> Tekst: „Jestem programistą”
> 
> Z separatorem: " " (spacja)
> 
> Podaje listę: ['ja', 'am', 'a', 'programista']


## Sprawdź długość listy

![Długość listy](/img/elioblocs/blocs/lists/long-liste.png)

**Typ**: Wartość

**Definicja**:

Podaje liczbę elementów znajdujących się na liście.

**Używać** :

Jeśli chcemy wykonać akcję określoną liczbę razy w zależności od długości listy.

## Sprawdź, czy lista jest pusta

![Pusta lista](/img/elioblocs/blocs/lists/liste-vide.png)

**Typ**: Blok logiczny

**Definicja**:

Umożliwia sprawdzenie, czy lista jest pusta, czy nie (zwraca wartość logiczną).

**Używać** :

Jeśli chcemy wykonać akcję, jeśli lista jest pusta. Na przykład jego wypełnienie.

## Znajdź wystąpienie na liście

![Znajdź wystąpienie na liście](/img/elioblocs/blocs/lists/occurence-liste.png)

**Typ**: Wartość

**Definicja**:

Zwraca pozycję pierwszego wystąpienia elementu na liście.

**Używać** :

Jeśli chcemy wiedzieć, czy element znajduje się na liście i na jakiej pozycji.

## Edytuj listę

![Zmień element listy](/img/elioblocs/blocs/lists/mettre-liste.png)

**Typ**: Zamówienie

**Definicja**:

Umożliwia przeniesienie/wstawienie elementu na wybraną pozycję na liście.

**Używać** :

Jeśli chcesz zmodyfikować listę przesuwając element lub wstawiając element w danym miejscu.

## Sortuj listę

![Sortuj listę](/img/elioblocs/blocs/lists/trier-liste.png)

**Typ**: Wartość

**Definicja**:

Umożliwia sortowanie listy w kolejności rosnącej lub malejącej.
Z opcjami:
- **numeryczny**: sortuje elementy jako liczby.
- **alfabetycznie**: sortuje elementy jako tekst.
- **Alfabetyczne ignorowanie wielkości liter**: sortuje elementy jako tekst bez uwzględniania wielkich i małych liter.

**Używać** :

Jeśli chcesz posortować listę, aby ułatwić jej przeglądanie.

