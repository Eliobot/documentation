---
last_modified_on: "2024-10-31"
title: "Przystawki"
description: "Eliobloki – wejścia"
---

Bloki wejściowe umożliwiają pobieranie informacji ze środowiska Eliobota.

Bloki czujników przeszkód umożliwiają sprawdzenie obecności przeszkody w pobliżu Eliobota.

## Sprawdź obecność przeszkody

![Sprawdź przeszkodę](/img/elioblocs/blocs/inputs/test-obstacles.png)

**Typ**: Blok logiczny

**Definicja**:

Blok ten pozwala sprawdzić obecność przeszkody w pewnej odległości od Eliobota:
- z przodu
- z tyłu
- lewy
- Prawidłowy

**Używać** :

Jeśli chcesz ominąć przeszkody, takie jak ściany lub przedmioty.

---

Bloki czujnika linii umożliwiają śledzenie linii lub sprawdzanie jej obecności.

## Podążaj za linią

![tekst alternatywny](/img/elioblocs/blocs/inputs/suivre-ligne.png)

**Typ**: Zamówienie

**Definicja**:

Blok ten umożliwia podążanie za czarną linią.

**Używać** :

Jeśli chcemy, aby Eliobot podążał czarną linią na trasie, na przykład tą z tyłu instrukcji.

## Sprawdź obecność linii

![tekst alternatywny](/img/elioblocs/blocs/inputs/ligne-presente.png)

**Typ**: Blok logiczny

**Definicja**:

Ten blok pozwala sprawdzić obecność czarnej linii pod Eliobotem:
- w środku
- lewy
- Prawidłowy
- środkowy lewy
- prawy środek

**Używać** :

Aby pozwolić Eliobotowi podążać czarną linią na kursie i sprawdzić, czy skręcić w lewo, czy w prawo.

## Zmień czułość czujnika linii

![tekst alternatywny](/img/elioblocs/blocs/inputs/sensi-ligne.png)

**Typ**: Zamówienie

**Definicja**:

Blok ten umożliwia modyfikację czułości czujnika liniowego. Zmienia wartość, przy której czujnik linii wykrywa linię.

**Używać** :

Jeśli znajdujesz się w bardzo jasnym lub ciemnym pomieszczeniu, możesz zmienić czułość czujnika linii, aby lepiej wykrywał linię.

## Odczytaj wartość czujnika liniowego

![tekst alternatywny](/img/elioblocs/blocs/inputs/valeur-ligne.png)

**Typ**: Wartość

**Definicja**:

Blok ten zwraca wartość czujnika liniowego. Możesz go na przykład wyświetlić w terminalu.
Można nim ustawić czułość czujnika liniowego.

**Używać** :

Jeśli chcesz pobrać wartość czujnika liniowego, aby lepiej skalibrować czułość czujnika liniowego.

## Automatyczna kalibracja linii

![tekst alternatywny](/img/elioblocs/blocs/inputs/calibration-ligne.jpg)

**Typ**: Zamówienie

**Definicja**:

Blok ten umożliwia automatyczną kalibrację czujnika liniowego. Umożliwia zdefiniowanie wartości, przy której czujnik liniowy wykrywa linię.

**Używać** :

Musisz umieścić 5 czujników liniowych nad czarną linią, a eliobot automatycznie skalibruje wartość, przy której wykryje linię
poruszanie się do przodu i do tyłu. Aby kalibracja była prawidłowa, Eliobot musi być ustawiony prostopadle do linii.

---

## Sprawdź, czy przycisk jest aktywowany

![Czy przycisk jest aktywowany](/img/elioblocs/blocs/inputs/test-bouton.png)

**Typ**: Blok logiczny

**Definicja**:

Ten blok pozwala sprawdzić, czy przycisk Eliobota jest aktywowany, zwraca `prawda`, jeśli przycisk jest aktywowany, i `fałsz` w przeciwnym razie.

**Używać** :

Jeśli chcesz wykonać akcję tylko wtedy, gdy przycisk Eliobota jest aktywny. Uruchom swój program na przykład.


---

## Pilot na podczerwień

Aby móc korzystać z bloków pilota na podczerwień, należy posiadać pilot na podczerwień dostępny w zestawie Eliobot.

![Pilot na podczerwień](/img/elioblocs/blocs/inputs/nice_ir_remote.jpg)


[Kup tutaj](https://eliobot.com/products/telecommande-infra-rouge)

## Wybierz czujnik do odczytu

![Wybierz czujnik](/img/elioblocs/blocs/inputs/ir_remote_sensor_change.png)

**Typ**: Zamówienie

**Definicja**:

Blok ten pozwala wybrać czujnik podczerwieni do odczytywania poleceń pilota na podczerwień,
możesz wybrać pomiędzy czujnikiem przednim i czujnikiem tylnym.

**Używać** :

Jeśli chcesz, aby polecenia pilota na podczerwień były odczytywane przez przedni lub tylny czujnik.
Na przykład podążaj za Eliobotem i wysyłaj mu polecenia, będąc za nim.

## Przeczytaj polecenie z pilota na podczerwień

![Przeczytaj polecenie](/img/elioblocs/blocs/inputs/ir_remote_do.png)

<p>
<img src={require('@site/static/img/elioblocs/blocs/inputs/ir_remote.png').default} alt="Read command" width="70%"/>
</p>

**Typ**: Zamówienie

**Definicja**:

Blok ten umożliwia odczytanie polecenia z pilota na podczerwień i wykonanie akcji na podstawie otrzymanego polecenia.

**Używać** :

Jeśli chcesz, aby Eliobot wykonywał akcję na podstawie polecenia otrzymanego z pilota na podczerwień.
Na przykład poruszaj się do przodu, do tyłu, skręć w lewo lub w prawo. Można także włączyć odtwarzanie muzyki lub zaświecić diodę LED.

