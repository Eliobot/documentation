---
last_modified_on: "2024-02-26"
title: "Plecaki"
description: "Eliobbloki - Plecaki"
---

Klocki plecaka pozwalają na kontrolowanie akcesoriów Eliobota.

## ŻÓŁW PRZYCISKOWY

:::warning
Uwaga, aby móc skorzystać z Eliobota, należy go wyposażyć w plecak z żółwiem na guziki.
:::

### Program z przyciskami

![Program z przyciskami](/img/elioblocs/blocs/backpacks/turtle-buttons.jpg)

**Typ**: Zamówienie

**Definicja**:

Blok ten umożliwia wykorzystanie plecaka z żółwim guzikiem do sterowania Eliobotem.
Dla każdego przycisku rejestrujemy czynności do wykonania (do przodu, do tyłu, skręć w lewo, skręć w prawo).
Następnie, po nagraniu sekwencji, możesz ją odtworzyć, naciskając środkowy przycisk.

**Używać** :

Aby najmłodsze dziecko mogło zaprogramować Eliobota, za pomocą przycisków wydawać mu polecenia.

## CZUJNIK DHT11

:::warning
Uwaga, aby móc korzystać z Eliobota, należy go wyposażyć w plecak z czujnikiem wilgotności oraz bibliotekę Adafruit DHT.
:::

### Pobierz wartość temperatury lub wilgotności

![Pobierz wartość temperatury lub wilgotności](/img/elioblocs/blocs/backpacks/dht11.jpg)

**Typ**: Wartość

**Definicja**:

Blok ten umożliwia pobranie wartości temperatury lub wilgotności zmierzonej przez czujnik DHT11.

**Używać** :

Jeśli chcesz odzyskać temperaturę lub wilgotność zmierzoną przez czujnik, aby wykorzystać ją w swoim programie. Na przykład, aby wyświetlić temperaturę w terminalu.

## MATRYCA LED

:::warning
Uwaga, aby móc skorzystać z Eliobota, należy go wyposażyć w plecak z matrycą LED.
:::

### Wybór kolorów matrycy LED

![Wybierz kolory matrycy LED](/img/elioblocs/blocs/backpacks/matrix-choose-colors.jpg)

**Typ**: Zamówienie

**Definicja**:

Blok ten umożliwia wybór kolorów matrycy LED. Pozwala narysować co tylko chcesz na matrycy LED 5x5 z kolorami RGB. Uwaga: Kolor czarny odpowiada wyłączonej diodzie LED.

**Używać** :

Jeśli chcesz narysować logo lub komunikat na matrycy LED. Na przykład, aby wyświetlić informacje na podstawie wyników czujników.

### Wyraźne kolory z matrycy LED

![Wyraźne kolory matrycy LED](/img/elioblocs/blocs/backpacks/matrix-clear.jpg)

**Typ**: Zamówienie

**Definicja**:

Blok ten umożliwia wymazanie kolorów z matrycy LED. Umożliwia zresetowanie matrycy LED 5x5 przy wyłączonych wszystkich diodach LED.

**Używać** :

Jeśli chcesz wymazać to, co jest wyświetlane na matrycy LED. Na przykład, aby usunąć wiadomość lub logo.

### Wybierz logo do wyświetlenia na matrycy LED

![Wybierz logo matrycy LED](/img/elioblocs/blocs/backpacks/matrix-choose-logo.jpg)

**Typ**: Zamówienie

**Definicja**:

Blok ten pozwala wybrać logo, które będzie wyświetlane na matrycy LED:
- Serce
- Szczęśliwy uśmiech
- Smutny uśmiech
- Strzałka w górę
- Strzałka w dół
- Strzałka w lewo
- Strzałka w prawo
- Przechodzić
-Sprawdzać

**Używać** :

Jeśli chcesz wyświetlić logo na matrycy LED. Na przykład, aby wskazać kierunek, w którym podąża Eliobot lub wykrycie przeszkody.

### Przewijanie tekstu na matrycy LED

![Przewiń tekst na matrycy LED](/img/elioblocs/blocs/backpacks/matrix-scroll-text.jpg)

**Typ**: Zamówienie

**Definicja**:

Blok ten umożliwia przewijanie tekstu na matrycy LED, można także wybrać kolor tekstu.

**Używać** :

Jeżeli chcesz wyświetlić komunikat na matrycy LED. Na przykład, aby wyświetlić wiadomość powitalną lub wiadomość w przypadku wykrycia przeszkody.

## CZUJNIK BME280

:::warning
Uwaga, aby móc korzystać z Eliobota, należy go wyposażyć w plecak z czujnikiem środowiskowym oraz bibliotekę Adafruit BME280.
:::

### Pobierz różne wartości zmierzone przez czujnik BME280

![Uzyskaj różne zmierzone wartości](/img/elioblocs/blocs/backpacks/bme280.jpg)

**Typ**: Wartość

**Definicja**:

Blok ten umożliwia odzyskanie różnych wartości zmierzonych przez czujnik BME280:
- Temperatura
- Wilgotność
- Ciśnienie
- Wysokość

**Używać** :

Jeśli chcesz odzyskać temperaturę, wilgotność, ciśnienie lub wysokość zmierzoną przez czujnik, aby wykorzystać je w swoim programie. Na przykład, aby Eliobot ruszył do przodu, jeśli temperatura jest zbyt wysoka.

### Ustaw ciśnienie na poziomie morza

![Ustaw ciśnienie na poziomie morza](/img/elioblocs/blocs/backpacks/bme-sea-level.jpg)

**Typ**: Zamówienie

**Definicja**:

Blok ten umożliwia zdefiniowanie ciśnienia na poziomie morza dla czujnika BME280.

**Używać** :

Jeśli chcesz ustawić ciśnienie na poziomie morza dla czujnika ciśnienia. Na przykład, aby uzyskać dokładny pomiar wysokości. Znajdziesz go na tej [stronie](https://zoom.earth/maps/pressure/), umieść kursor na morzu najbliżej Ciebie.

## Ekran OLED

:::warning
Uwaga, aby móc korzystać z Eliobota, należy go wyposażyć w plecak z ekranem OLED.
:::

### Wyświetl tekst na ekranie OLED

![Wyświetl tekst na ekranie OLED](/img/elioblocs/blocs/backpacks/oled-text.jpg)

**Typ**: Zamówienie

**Definicja**:

Blok ten umożliwia wyświetlanie tekstu na ekranie OLED.
Możesz wybrać, w której linii chcesz wyświetlić tekst, ekran ma 6 linii.

**Używać** :

Jeśli chcesz wyświetlić wiadomość na ekranie OLED.
Na przykład, aby wyświetlić wiadomość powitalną lub wiadomość w przypadku wykrycia przeszkody.

### Wyczyść ekran OLED

![Wyczyść ekran OLED](/img/elioblocs/blocs/backpacks/oled-clear.jpg)

**Typ**: Zamówienie

**Definicja**:

Blok ten umożliwia wymazanie ekranu OLED.

**Używać** :

Jeśli chcesz usunąć to, co jest wyświetlane na ekranie OLED. Na przykład, aby usunąć wiadomość lub logo.

## Serwosilnik

:::warning
Uwaga, aby móc korzystać z Eliobota, należy go wyposażyć w plecak z serwomotorem.
:::

### Ustaw pozycję serwosilnika

![Ustaw pozycję serwosilnika](/img/elioblocs/blocs/backpacks/servo-motor.jpg)

**Typ**: Zamówienie

**Definicja**:

Blok ten pozwala na zdefiniowanie położenia serwomotoru, można także wybrać miejsce do którego jest on podłączony.

**Używać** :

Jeśli chcesz ustawić położenie serwosilnika tak, aby obracał się pod precyzyjnym kątem.
Na przykład, aby obrócić głowę Eliobota.

## Ciągły serwomotor

:::warning
Należy pamiętać, że aby móc korzystać z Eliobota, należy go wyposażyć w ciągły plecak na serwomotor.
:::

### Obróć ciągły serwomotor

![Obróć ciągły serwomotor](/img/elioblocs/blocs/backpacks/continuous-servo-motor.jpg)

**Typ**: Zamówienie

**Definicja**:

Blok ten umożliwia obracanie serwomotoru ciągłego w jedną lub drugą stronę z określoną prędkością, można także wybrać miejsce, do którego jest on podłączony.

**Używać** :

Jeśli chcesz obrócić ciągły serwomotor, aby poruszał się do przodu lub do tyłu.

## Czujnik ultradźwiękowy

:::warning
Uwaga, aby móc korzystać z Eliobota, należy go wyposażyć w plecak z czujnikiem ultradźwiękowym.
:::

### Pobierz odległość zmierzoną przez czujnik ultradźwiękowy

![Zmierz odległość](/img/elioblocs/blocs/backpacks/hcsr04.jpg)

**Typ**: Wartość

**Definicja**:

Blok ten umożliwia odzyskanie odległości zmierzonej przez czujnik ultradźwiękowy.

**Używać** :

Jeśli chcesz odzyskać dystans zmierzony przez czujnik ultradźwiękowy wykorzystaj go w swoim programie. Na przykład, aby uniknąć przeszkód.









