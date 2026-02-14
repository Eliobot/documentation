---
last_modified_on: "2024-02-26"
title: "Warunki"
description: "Eliobloki – warunki"
---

import Jump from '@site/src/components/Jump';


Warunki umożliwiają wykonywanie działań w oparciu o określone warunki. To właśnie sprawia, że ​​program jest „inteligentny” i sprawia, że ​​podejmuje decyzje.


W programowaniu używamy

## Jeśli - Zrób - W przeciwnym razie

![Zablokuj, jeśli - Wykonaj - Inaczej](/img/elioblocs/blocs/conditions/if-else.png)

**Typ**: Zamówienie

**Definicja**:

Ten blok umożliwia wykonanie akcji, jeśli warunek jest prawdziwy, i innej akcji, jeśli warunek jest fałszywy.
Składa się z trzech części:

- **If**: warunek do sprawdzenia (jeśli jest prawdziwy, wykonujemy blok `Faire`, nazywamy go wartością logiczną).
- **Do**: blok instrukcji do wykonania, jeśli warunek jest spełniony.
- **Else**: blok instrukcji do wykonania, jeśli warunek jest fałszywy.

**Używać** :

Jeśli chcemy, aby Eliobot jechał do przodu, jeśli czujnik wykryje przeszkodę, i cofał się, jeśli nie zostanie wykryta żadna przeszkoda.


## Jeśli — Zrób

![Jeśli zablokuj - Wykonaj](/img/elioblocs/blocs/conditions/if.png)

Ten blok wykorzystuje tę samą logikę, co blok `Si - Faire - Sinon`, ale z jedną cechą charakterystyczną: możemy zmodyfikować blok, aby dodać dodatkowe warunki za pomocą przekładni.

### Edycja bloku

![Mutator bloku Si](/img/elioblocs/blocs/conditions/if-mutator.png)

**Typ**: Zamówienie

**Definicja**:

Tutaj możesz ustawić dowolną liczbę warunków. Jeżeli wszystkie warunki są spełnione, wówczas zostanie wykonana część bloku `Faire`.
Wszystkie warunki są sprawdzane jeden po drugim w kolejności, w jakiej są ułożone. Jeśli warunek jest fałszywy, wówczas jego blok `Faire` nie zostanie wykonany.

**Używać** :

Jeśli chcemy, aby Eliobot jechał do przodu, jeśli czujnik wykryje przeszkodę, i cofał się, jeśli nie zostanie wykryta żadna przeszkoda, ale także aby robot się zatrzymał, jeśli inny czujnik wykryje przeszkodę.

> #### Przykład
>
> <img src={require('@site/static/img/elioblocs/blocs/conditions/example-if.jpg').default} style={{ width: '30%', verticalAlign: 'middle' }} alt="Example Si" />
>
> W tym przykładzie zostanie wykonany tylko pierwszy warunek, ponieważ jest to pierwszy warunek na liście, który jest prawdziwy. Jeżeli pierwszy warunek byłby fałszywy, wówczas drugi warunek byłby prawdziwy, a gdyby i ten był fałszywy, interweniowałby blok „else”, który działałby, gdy żaden z poprzednich warunków nie był spełniony.

## Porównanie

![Blok porównawczy](/img/elioblocs/blocs/conditions/est-egal.png)

**Typ**: Blok logiczny

**Definicja**:

Blok ten umożliwia porównanie dwóch wartości. Składa się z dwóch części:

- **Pierwsza i druga wartość**: wartości do porównania.
- **Operator porównania**: rodzaj porównania, które należy wykonać (równy, inny, większy, mniejszy, większy lub równy, mniejszy lub równy).

**Używać** :

Jeśli chcemy wiedzieć, czy dwie wartości są równe, czy jedna wartość jest większa od drugiej itp.

## Operacja logiczna

![Blok operacji logicznych](/img/elioblocs/blocs/conditions/et.png)

**Typ**: Blok logiczny

**Definicja**:

Blok ten umożliwia wykonanie operacji logicznej pomiędzy dwoma warunkami. Składa się z dwóch części:

- **Pierwszy warunek i drugi warunek**: warunki do porównania.
- **Operator logiczny**: typ operacji logicznej do wykonania (AND, OR).

**Używać** :

Jeśli chcemy wiedzieć, czy dwa warunki są prawdziwe, czy też jeden warunek jest prawdziwy.

## NIE

![Blok nr](/img/elioblocs/blocs/conditions/no.png)

**Typ**: Blok logiczny

**Definicja**:

Blok ten umożliwia zanegowanie warunku. Oznacza to, że niezależnie od warunku, jeśli jest prawdziwy, stanie się fałszywy i odwrotnie.

**Używać** :

Jeśli chcemy zmienić warunek z true na false i odwrotnie.

## Prawda/Fałsz

![Prawda / Fałsz Blok](/img/elioblocs/blocs/conditions/vrai.png)

**Typ**: Blok logiczny

**Definicja**:

Blok ten umożliwia zdefiniowanie wartości logicznej. Oznacza to, że wartość jest prawdziwa lub fałszywa.

**Używać** :

Jeśli chcemy zdefiniować warunek początkowy.

## Null

![Blok pusty](/img/elioblocs/blocs/conditions/bloc-nul.png)

**Typ**: Wartość

**Definicja**:

Blok ten umożliwia zdefiniowanie wartości zerowej. Oznacza to, że wartość nie jest zdefiniowana.
Null często oznacza, że ​​zmienna nie ma wartości lub nie jest zdefiniowana.

:::warning
Bądź ostrożny, wartość zerowa nie jest tym samym, co wartość zerowa.
:::

**Używać** :

Jeżeli chcemy zdefiniować zmienną bez nadawania jej wartości.

## Testuj

![Blok testowy](/img/elioblocs/blocs/conditions/test.png)

**Typ**: Wartość

**Definicja**:

Ten blok umożliwia przetestowanie warunku. Składa się z dwóch części:

- **Stan**: stan do sprawdzenia.
- **Wartość do użycia**: W zależności od wyniku warunku, wartość do użycia.

**Używać** :

Jeśli chcemy przetestować warunek i użyć innej wartości w zależności od wyniku.

## Przykład

Dowiedz się, jak używać warunków w następującym przykładzie:

<Jump to="/docs/tutorial/elioblocs/avoid-obstacles-elioblocs">Unikanie przeszkód - Elioblocs</Jump>