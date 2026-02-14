---
sidebar_position: 2
---

# Eine LED blinken lassen



In der Elektronik gibt es eine etwas hellere Version von „Hallo Welt!“ Es heißt „Blink“ und zielt, wie der Name schon sagt, darauf ab, eine LED auf der Karte in Ihrer Hand zum Blinken zu bringen.
Und das ist gut so, denn Eliobot ist mit einer mehrfarbigen LED ausgestattet, mit der Sie die Farbe Ihrer Wahl anzeigen können!

![alt text](/img/tutorial/python/python-blink-led/led-turned-on.bmp)

Wir beginnen unseren Code mit der Integration einiger Bibliotheken. Hierbei handelt es sich um Sätze bereits geschriebener Codes, die es uns ermöglichen, Funktionen einfach hinzuzufügen.

## Deklaration der Ein-/Ausgänge

Das erste heißt „Board“ und ist spezifisch für CircuitPython. Dadurch können wir unserem Programm erklären, wie die Elemente mit dem Mikrocontroller (dem Gehirn von Eliobot) verbunden sind.

Um es in unser Programm zu integrieren, verwenden wir die folgende Zeile:

```python
import board
```

Dadurch können wir den Ein-/Ausgang des Boards über die Pin-Nummer aufrufen.

```python
board.IO3
```

Oder wie in unserem Fall den dem Pin zugewiesenen Namen verwenden

```python
board.NEOPIXEL
```

## Neopixel-LED-Erklärung

Die Eliobot-LED hat eine etwas spezifische Funktionsweise, da sie mehrere Farben anzeigen kann. Wir werden eine andere Bibliothek verwenden, um die Aufgabe zu vereinfachen:

```python
import neopixel
```

Da sich unsere Bibliotheken nun in unserem Projekt befinden, können wir die darin enthaltenen Funktionen nutzen.
Wir beginnen damit, unsere LED mit der folgenden Funktion zu deklarieren:

```python
pixel = neopixel.NeoPixel(board.NEOPIXEL, 1, brightness=0.3)
```

„`pixel`“ ist der Name, den wir unserer LED geben

```python
board.NEOPIXEL sagt uns, wo die LED auf Eliobots Platine angeschlossen ist
```

An dieser Stelle ist nur eine LED angeschlossen, daher die 1

Schließlich können Sie die Helligkeit mit einem Helligkeitsbereich von 0 bis 1 anpassen

Die LED ist betriebsbereit, daher können wir ihr mit dem folgenden Befehl eine Farbe zuweisen:

```python
pixel.fill(( R , G , B))
```

Wir verwenden einen RGB-Farbcode (Rot, Grün, Blau), der darin besteht, die Menge an Rot, Grün und Blau, die wir anzeigen möchten, mit einem Wert zwischen 0 (keine Farbe) und 255 (maximale Farbe) zu definieren.

Wenn wir beispielsweise reines Rot anzeigen möchten, schreiben wir:

```python
pixel.fill((255, 0, 0))
```

Zu diesem Zeitpunkt wird die Farbe noch nicht angezeigt, ein letzter Befehl fehlt:

```python
pixel.show()
```

Wenn wir das Skript ▶️ ausführen, können wir sehen, wie Eliobot in der gewünschten Farbe aufleuchtet, in unserem Fall rot

Der nächste Schritt, um Eliobot zum Blinken zu bringen, besteht darin, die LED auszuschalten. Dazu setzen wir alle Farbwerte auf 0 und denken natürlich daran, das Ergebnis anzuzeigen:

```python
pixel.fill((0, 0, 0))
pixel.show()
```

## Timer hinzugefügt

Dann definieren wir die Zeit zwischen den einzelnen Aktionen mithilfe einer neuen „Zeit“-Bibliothek.

```python
import time
```

Mit der „Sleep“-Funktion können wir das Programm für eine in Sekunden ausgedrückte Dauer anhalten, zum Beispiel für eine Sekunde schreiben wir:

```python
time.sleep(1)
```

Diese Pause fügen wir nach jedem Farbwechsel ein

```python
pixel.fill((255, 0, 0))
pixel.show()

time.sleep(1)

pixel.fill((0, 0, 0))
pixel.show()

time.sleep(1)
```

Wenn wir ▶️ dieses Programm ausführen, können wir sehen, dass die LED 1 Sekunde lang rot aufleuchtet und dann erlischt, was uns unserem Ziel, sie zum Blinken zu bringen, fast näher bringt.

## Eine Schleife hinzufügen

Der letzte Schritt besteht darin, die Lebensdauer des Blinkens zu verlängern. Für diese eine Methode könnte das Kopieren/Einfügen der 6 Zeilen oben sehr oft bestehen, aber unser Code würde für nicht viel extrem lang und kompliziert werden.

Die elegantere Methode besteht darin, einen Programmabschnitt mit einer Schleife zu wiederholen. Was uns hier interessiert, ist die „while“-Schleife, die unser Programm wiederholt, solange seine Bedingung wahr ist. Der Trick besteht also darin, ihm in der Bedingung den Wert „True“ (immer wahr) zu geben, wodurch eine Schleife entsteht, die sich unendlich wiederholt.

```python
while True:
	pixel.fill((255, 0, 0))
	pixel.show()

	time.sleep(1)

	pixel.fill((0, 0, 0))
	pixel.show()

	time.sleep(1)
```

Beachten Sie, dass der Code unter „while True:“ eingerückt (nach rechts verschoben) ist, was zeigt, dass er in der Schleife wiederholt wird.

## Endgültiges Programm

Hier ist das endgültige Programm, das wir ausführen können ▶️:

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
