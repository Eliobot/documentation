---
sidebar_position: 2
---

# Zabłyśnij diodą LED



W elektronice istnieje nieco jaśniejsza wersja „Hello world!” o nazwie „Blink”, która, jak sama nazwa wskazuje, ma na celu miganie diody LED na karcie w dłoni.
I dobrze, bo Eliobot wyposażony jest w wielokolorową diodę LED, która pozwoli Ci wyświetlić wybrany kolor!

![tekst alternatywny](/img/tutorial/python/python-blink-led/led-turned-on.bmp)

Nasz kod zaczniemy od integracji niektórych bibliotek. Są to zestawy już napisanych kodów pozwalających na łatwe dodawanie funkcji.

## Deklaracja wejść/wyjść

Pierwsza nazywa się „board” i jest specyficzna dla CircuitPython. To dzięki niemu będziemy mogli wytłumaczyć naszemu programowi w jaki sposób elementy są połączone z mikrokontrolerem (mózgiem Eliobota)

Aby zintegrować go z naszym programem, używamy następującej linii:

```python
import board
```

Dzięki temu możemy wywołać wejście/wyjście płytki za pomocą numeru pinu.

```python
board.IO3
```

Lub jak w naszym przypadku użyć nazwy przypisanej do pinu

```python
board.NEOPIXEL
```

## Oświadczenie dotyczące diod Neopixel

Dioda Eliobot ma dość specyficzne działanie, ponieważ może wyświetlać kilka kolorów, użyjemy innej biblioteki, aby uprościć zadanie:

```python
import neopixel
```

Teraz, gdy nasze biblioteki znajdują się w naszym projekcie, będziemy mogli korzystać z funkcji, które zawierają.
Zaczynamy od zadeklarowania naszej diody LED za pomocą następującej funkcji:

```python
pixel = neopixel.NeoPixel(board.NEOPIXEL, 1, brightness=0.3)
```

``pixel`` to nazwa, którą nadajemy naszej diodzie LED

```python
board.NEOPIXEL nous permet de définir où est branchée la LED sur la carte de Eliobot
```

Do tego miejsca jest podłączona tylko jedna dioda LED, stąd 1

Wreszcie możesz dostosować jasność w zakresie jasności od 0 do 1

Dioda LED jest gotowa do użycia, więc możemy przypisać jej kolor za pomocą polecenia:

```python
pixel.fill(( R , G , B))
```

Używamy kodu koloru RGB (czerwony, zielony, niebieski), który polega na określeniu ilości koloru czerwonego, zielonego i niebieskiego, które chcemy wyświetlić, o wartości od 0 (brak koloru) do 255 (maksymalny kolor)

Na przykład, jeśli chcemy wyświetlić czystą czerwień, piszemy:

```python
pixel.fill((255, 0, 0))
```

Na tym etapie kolor nie jest jeszcze wyświetlany, brakuje ostatniego polecenia:

```python
pixel.show()
```

Jeśli uruchomimy skrypt ▶️możemy wtedy zobaczyć Eliobota zapalającego się w żądanym kolorze, w naszym przypadku czerwonym

Następnym krokiem, aby Eliobot mrugnął, jest wyłączenie diody LED, w tym celu ustawiamy wszystkie wartości kolorów na 0 i oczywiście pamiętamy o wyświetleniu wyniku:

```python
pixel.fill((0, 0, 0))
pixel.show()
```

## Dodano timer

Następnie definiujemy czas pomiędzy każdą akcją, korzystając z nowej biblioteki „time”.

```python
import time
```

Funkcja „uśpienia” pozwala nam zatrzymać program na czas wyrażony w sekundach, np. na jedną sekundę piszemy:

```python
time.sleep(1)
```

Tę pauzę dodajemy po każdej zmianie koloru

```python
pixel.fill((255, 0, 0))
pixel.show()

time.sleep(1)

pixel.fill((0, 0, 0))
pixel.show()

time.sleep(1)
```

Jeśli uruchomimy ▶️ten program, zobaczymy, że dioda LED zapala się na czerwono przez 1 sekundę, a następnie gaśnie, co przybliża nas prawie do celu, jakim jest sprawienie, aby zaczęła migać.

## Dodawanie pętli

Ostatnim krokiem jest wydłużenie czasu flashowania. W tym przypadku jedna metoda mogłaby polegać na skopiowaniu/wklejeniu 6 linii nieco powyżej dużą liczbę razy, ale nasz kod stałby się niezwykle długi i skomplikowany przez niewiele.

Bardziej elegancką metodą jest użycie pętli do powtórzenia fragmentu programu. Interesuje nas tutaj pętla „while”, która będzie powtarzać nasz program tak długo, jak jej warunek będzie prawdziwy, dlatego sztuczka polega na nadaniu mu wartości „True” (zawsze prawdziwy) w warunku, który utworzy pętlę powtarzającą się w nieskończoność.

```python
while True:
	pixel.fill((255, 0, 0))
	pixel.show()

	time.sleep(1)

	pixel.fill((0, 0, 0))
	pixel.show()

	time.sleep(1)
```

Zauważ, że poniższy kod „while True:” jest wcięty (przesunięty w prawo), co pokazuje, że zostanie powtórzony w pętli.

## Program końcowy

Oto ostateczny program, który będziemy mogli zrealizować ▶️:

```python
import board
import neopixel
import time

pixel = neopixel.NeoPixel(board.NEOPIXEL, 1, brightness=0.3)

while True:
	pixel.fill((255, 0, 0))
	pixel.show()

	time.sleep(1)

	pixel.fill((0, 0, 0))
	pixel.show()

	time.sleep(1)
```

