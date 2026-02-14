---
sidebar_position: 1
---

# Die LED blinken lassen

Nachdem Sie Ihren Eliobot nun zusammengebaut haben, lernen Sie, wie man ihn programmiert. In diesem Tutorial helfen wir Ihnen, ein sehr einfaches Testprogramm zu erstellen, mit dem Sie sich mit der Benutzeroberfläche vertraut machen können.

## Erstellen des Programms

Mit diesem „Test“-Programm können Sie bei Eliobot ein grünes Licht (oder ein Licht Ihrer Wahl) aufleuchten lassen. Befolgen Sie alle Schritte sorgfältig und das Ergebnis wird da sein :)

### Farbauswahl

Der erste Schritt besteht darin, eine Farbe auszuwählen. Gehen Sie zu Ihrer Toolbox und klicken Sie auf den Block „Farben“. Wählen Sie den Block „Farbe anzeigen“ aus und ziehen Sie ihn in den Arbeitsbereich.

![Alt-Text](/img/tutorial/elioblocs/blink-led-elioblocs/prog_blink_1-1.gif)

### Farbauswahl

Anschließend können Sie die Farbe des Lichts ändern, das auf Eliobot aufleuchtet.

Klicken Sie auf den roten Punkt im Arbeitsbereich und wählen Sie dann die Farbe aus, die Sie erhalten möchten.

![Alt-Text](/img/tutorial/elioblocs/blink-led-elioblocs/prog_blink_2.gif)

Es ist möglich, die Farbe Ihrer Wahl zu kreieren: Grün, Blau, Rosa, Gelb ... viel Spaß!

### Auswahl der Zeitverzögerung

Der dritte Schritt besteht darin, zu bestimmen, wie lange das Licht eingeschaltet bleiben soll.

Klicken Sie auf den Block „Dienstprogramme“ und dann auf „1 Sekunde(n) warten“. Ziehen Sie zunächst den Block unten in den Arbeitsbereich.

![Alt-Text](/img/tutorial/elioblocs/blink-led-elioblocs/prog_blink_3.gif)

Haben Sie den Schatten bemerkt, der unter dem Block erscheint, wenn Sie ihn einem anderen näher bringen?
Lass es los und es wird zusammenkommen

### Schalte das Licht aus

Der vierte Schritt besteht darin, das Licht auszuschalten, um den Blinkeffekt zu erzeugen.

Um Eliobots Licht auszuschalten, gehen Sie zurück zu „Farben“ und fügen Sie nach den anderen den Block „Licht ausschalten“ ein.

![Alt-Text](/img/tutorial/elioblocs/blink-led-elioblocs/prog_blink_4.gif)

### Auswahl der Zeitverzögerung

Der fünfte Schritt besteht darin, zu bestimmen, wie lange das Licht ausgeschaltet bleibt.

Sie können also unten erneut einen „Warten Sie 1 Sekunde(n)“-Block hinzufügen.

![Alt-Text](/img/tutorial/elioblocs/blink-led-elioblocs/prog_blink_5.gif)

### Erstellen einer Schleife

Der sechste Schritt besteht darin, eine Schleife zu erstellen, sodass die LED unendlich blinkt.

Klicken Sie auf die Kategorie „Loops“ und dann auf „Repeat while…do“. Ziehen Sie es um die bereits vorhandenen Blöcke herum, um sie in die Schleife einzubeziehen.

![Alt-Text](/img/tutorial/elioblocs/blink-led-elioblocs/prog_blink_6-1.gif)

Schauen Sie, auf dem grünen Block oben fehlt ein Teil, damit die Schleife fertig ist.

Eliobot wartet auf eine Bedingung, um sein Programm auszuführen, also erzwingen wir die Schleife, sodass das Programm unabhängig von der Bedingung unendlich oft wiederholt wird.

Wählen Sie unter „Bedingungen“ den Block „wahr“ aus. Schieben Sie diesen Block an die Spitze der Schleife, um ihn fertigzustellen, und voilà!

![Alt-Text](/img/tutorial/elioblocs/blink-led-elioblocs/prog_blink_7.gif)

## Eliobots Programmierung

### Eliobot-Verbindung

Jetzt ist es an der Zeit, Eliobot über das USB-Kabel anzuschließen, falls Sie dies noch nicht getan haben.

Die kleine LED neben der Steckdose leuchtet auf und zeigt damit an, dass Eliobot aufgeladen wird.
Wenn es sich ausschaltet, bedeutet das, dass es vollständig aufgeladen ist!

![Alt-Text](/img/tutorial/elioblocs/blink-led-elioblocs/DSC03852-scaled.jpg)

### Code an Eliobot senden

Um Ihr Programm auf Eliobot zu testen, klicken Sie einfach auf „Programm“.

![Alt-Text](/img/tutorial/elioblocs/blink-led-elioblocs/pp.png)

Es öffnet sich ein Fenster, das den Zugriff auf einen seriellen Port anfordert. Wählen Sie „Eliobot“ oder in bestimmten Fällen „CircuitPython“ und dann „Verbindung“.

![Alt-Text](/img/tutorial/elioblocs/blink-led-elioblocs/Capture-decran-2023-09-04-a-11.55.22.png)

Eliobot startet dann neu, blinkt dann lila und dann gelb, fertig, es ist programmiert!

### Umsetzung des Programms

Das Programm wird nun an Ihren Eliobot übertragen. Schalten Sie es ein und bewundern Sie die Arbeit. Was beobachten Sie?

Anschließend blinkt an Ihrem Roboter ein grünes Licht (oder die von Ihnen gewählte Farbe)! 🙂

![Alt-Text](/img/tutorial/elioblocs/blink-led-elioblocs/Sans-titre-1.png)

Herzlichen Glückwunsch zu diesem neuen Schritt in der Programmierung. Fordern Sie im nächsten Schritt Eliobot heraus, indem Sie ihn bewegen :) Sind Sie bereit, diese neue Herausforderung anzunehmen?

Erwägen Sie, Ihre Erfahrungen in unseren sozialen Netzwerken zu teilen. Gerne teilen wir Ihre Kreationen und diskutieren mit Ihnen.

Bis bald 🙂
