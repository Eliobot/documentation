---
last_modified_on: "2024-02-26"
title: "Sieć"
description: "Eliobloki - Sieci"
---

Bloki sieciowe umożliwiają wykonanie czynności związanych z podłączeniem Eliobota do sieci bezprzewodowej.

## **Połączenie bezprzewodowe**

---

### Połącz się z siecią bezprzewodową

![Połącz się z siecią Wi-Fi](/img/elioblocs/blocs/wifi/connect-wifi.jpg)

**Typ**: Zamówienie

**Definicja**:

Blok ten umożliwia podłączenie Eliobota do sieci bezprzewodowej. Należy wprowadzić nazwę sieci i hasło.
Informacje o połączeniu są przechowywane w pliku o nazwie `settings.toml` na platformie Eliobot, co oznacza, że ​​nie trzeba ich wprowadzać za każdym razem.
Eliobot automatycznie połączy się z siecią bezprzewodową po uruchomieniu.

**Używać** :

Jeśli chcesz, aby Eliobot łączył się z siecią bezprzewodową, aby móc uzyskać dostęp do Internetu lub lokalnego serwera.

### Rozłącz się z siecią bezprzewodową

![Odłącz się od sieci Wi-Fi](/img/elioblocs/blocs/wifi/disconnect-wifi.jpg)

**Typ**: Zamówienie

**Definicja**:

Blok ten umożliwia odłączenie Eliobota od sieci bezprzewodowej.

**Używać** :

Jeśli chcesz, aby Eliobot rozłączył się z siecią bezprzewodową, aby połączyć się z inną siecią lub oszczędzać energię.

### Otwórz punkt dostępu z poziomu Eliobota

![Otwórz punkt dostępu Wi-Fi](/img/elioblocs/blocs/wifi/open-hotspot.jpg)

**Typ**: Zamówienie

**Definicja**:

Ten blok umożliwia otwarcie punktu dostępu Wi-Fi od Eliobota. Dzięki temu inne urządzenia, takie jak telefon czy komputer, mogą łączyć się z Eliobotem.

:::warning
Hasło musi mieć od 8 do 64 znaków.
:::

**Używać** :

Jeśli chcesz udostępnić plik HTML od Eliobota, aby na przykład Twój telefon stał się pilotem.

### Ustaw nazwę hosta

![Ustaw nazwę hosta](/img/elioblocs/blocs/wifi/hostname.jpg)

**Typ**: Zamówienie

**Definicja**:

Blok ten umożliwia zdefiniowanie nazwy hosta Eliobota. Nazwa hosta to nazwa identyfikująca Eliobota w sieci.
Po prostu wpisz nazwę hosta z rozszerzeniem `.local`, aby uzyskać dostęp do Eliobota z innego urządzenia w tej samej sieci.

**Używać** :

Jeśli chcesz uzyskać dostęp do Eliobota z innego urządzenia w tej samej sieci.
Na przykład, jeśli chcesz uzyskać dostęp do strony HTML utworzonej w Eliobocie za pomocą telefonu.

### Czy masz połączenie z siecią bezprzewodową?

![Jest podłączony do sieci Wi-Fi](/img/elioblocs/blocs/wifi/is-connected.jpg)

**Typ**: Blok logiczny

**Definicja**:

Ten blok pozwala sprawdzić, czy Eliobot jest podłączony do sieci bezprzewodowej. Zwraca `prawda`, jeśli Eliobot jest podłączony do sieci bezprzewodowej, lub `fałsz` w przeciwnym razie.

**Używać** :

Jeśli chcesz wykonać akcję tylko wtedy, gdy Eliobot jest podłączony do sieci bezprzewodowej.

### Skanuj dostępne sieci bezprzewodowe

![Skanuj dostępne sieci Wi-Fi](/img/elioblocs/blocs/wifi/scan-wifi.jpg)

**Typ**: Wartość

**Definicja**:

Blok ten umożliwia skanowanie dostępnych sieci bezprzewodowych. Zwraca listę dostępnych sieci bezprzewodowych z ich nazwą i siłą sygnału.

**Używać** :

Jeśli chcesz wyświetlić dostępne sieci bezprzewodowe, wybierz sieć, z którą chcesz się połączyć.

### Uzyskaj adres IP sieci bezprzewodowej

![Uzyskaj adres IP sieci Wi-Fi](/img/elioblocs/blocs/wifi/get-ip.jpg)

**Typ**: Wartość

**Definicja**:

Blok ten umożliwia uzyskanie adresu IP sieci bezprzewodowej, do której podłączony jest Eliobot.

**Używać** :

Jeśli chcesz poznać adres IP sieci bezprzewodowej do komunikacji z Eliobotem, będzie Ci on potrzebny do połączenia się z Eliobotem z innego urządzenia.

---

### Tworzy stronę HTML

![Utwórz stronę HTML](/img/elioblocs/blocs/wifi/create-html-page.jpg)

**Typ**: Zamówienie

**Definicja**:

Ten blok umożliwia utworzenie strony HTML. Strona HTML to strona internetowa, którą można wyświetlić w przeglądarce internetowej.
Zostanie on zapisany w pliku HTML na Eliobocie o nazwie `index.html` i umieszczony w folderze `www`.
Możesz wybrać tytuł strony i umieścić w niej jej zawartość. Po umieszczeniu tego bloku wszystkie pętle zostaną wyłączone
powtarzane w nieskończoność, aby uruchomić serwer WWW, możesz uzyskać do niego dostęp, łącząc się z Eliobotem w trybie punktu dostępu
i wpisaniu w przeglądarce internetowej adresu IP Eliobota.

**Używać** :

Jeśli chcesz stworzyć stronę internetową, aby wyświetlać informacje i umieszczać elementy interaktywne, takie jak przyciski lub wyświetlacze.

### Dodaj przycisk do swojej strony HTML

![Dodaj przycisk do strony HTML](/img/elioblocs/blocs/wifi/add-html-button.jpg)

**Typ**: Zamówienie

**Definicja**:

Ten blok umożliwia dodanie przycisku do strony HTML.
Przycisk to element interaktywny, w który użytkownik może kliknąć.
Tam możesz wybrać tekst przycisku oraz kod, który zostanie wykonany po kliknięciu przycisku.
Możesz także wybrać kolor przycisku.

**Używać** :

Jeśli chcesz zrobić pilota do sterowania Eliobotem z telefonu.

### Dodaj przeglądarkę do swojej strony HTML

![Dodaj wyświetlacz do strony HTML](/img/elioblocs/blocs/wifi/add-html-value.jpg)

**Typ**: Zamówienie

**Definicja**:

Ten blok umożliwia dodanie wyświetlacza do strony HTML, wyświetlacz to element, który wyświetla wartość, którą mu nadasz.
Możesz umieścić wartość, którą chcesz wyświetlić wewnątrz wyświetlacza i nazwę wyświetlacza.

**Używać** :

Jeśli chcesz wiedzieć, czy przed Eliobotem znajduje się przeszkoda, ze swojego telefonu.

### Utwórz tag HTML

![Utwórz tag HTML](/img/elioblocs/blocs/wifi/create-html-div.jpg)

**Typ**: Zamówienie

**Definicja**:

Ten blok umożliwia utworzenie znacznika HTML. Znacznik HTML to element strony internetowej, który pomaga uporządkować treść.
Tam możesz wybrać typ tagu i umieścić w nim jego zawartość.

Dostępne opcje:
-div
- centrum

**Używać** :

Jeśli chcesz uporządkować zawartość swojej strony HTML.


### Utwórz tytuł HTML

![Utwórz tytuł HTML](/img/elioblocs/blocs/wifi/create-html-title.jpg)

**Typ**: Zamówienie

**Definicja**:

Ten blok umożliwia utworzenie tytułu HTML. Tytuł HTML to tekst o określonym rozmiarze i pogrubiony.
Tam możesz wybrać tekst tytułu i jego rozmiar.

Dostępne opcje:
- godz.1
- godz
- h3
- h4
- godz5
- h6

**Używać** :

Jeśli chcesz wyświetlić tytuł na swojej stronie HTML.

### Utwórz akapit HTML

![Utwórz akapit HTML](/img/elioblocs/blocs/wifi/create-html-text.jpg)

**Typ**: Zamówienie

**Definicja**:

Ten blok umożliwia utworzenie akapitu HTML. Akapit HTML to tekst, który będzie wyświetlany na stronie internetowej.

**Używać** :

Jeśli chcesz wyświetlić tekst na swojej stronie HTML.
