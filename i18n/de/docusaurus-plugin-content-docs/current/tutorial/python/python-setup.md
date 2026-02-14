---
sidebar_position: 1
---

# Configuration de Python

Der erste Schritt zum Einstieg in die Programmierung ist die Konfiguration einer Entwicklungsumgebung (im Englischen spricht man von einer IDE). Das, das wir Ihnen anbieten, heißt Thonny und ist hier erhältlich: https://thonny.org/

Sobald Sie die für Ihren Computer entsprechende Version heruntergeladen und installiert haben, konfigurieren wir Thonny so, dass es mit Eliobot kompatibel ist.

![alt text](/img/tutorial/python/python-setup/screenshot.png)

Beim ersten Start bittet Thonny Sie, Ihre Sprache auszuwählen. Sie können dann „Französisch“ auswählen und dann auf „Los geht’s!“ klicken.

![alt text](/img/tutorial/python/python-setup/Capture-decran-2023-08-07-a-11.45.44-1024x565.png)

Nachdem Thonny nun gestartet ist, werden wir Eliobot damit verbinden. Verbinden Sie Eliobot über das USB-Kabel mit Ihrem Computer und klicken Sie dann ganz oben im Fenster auf „Ausführen“ und dann auf „Interpreter konfigurieren“.

![alt text](/img/tutorial/python/python-setup/Capture-decran-2023-08-07-a-11.48.08.png)

Anschließend gelangen Sie zu einem Fenster mit zwei Dropdown-Menüs, die wie folgt konfiguriert werden müssen. Im ersten Schritt werden Sie nach der Art des Interpreters gefragt, in unserem Fall ist es „CircuitPython“. Im zweiten Schritt werden Sie aufgefordert, den Port auszuwählen, zu dem eine Verbindung hergestellt werden soll, und dann „Eliobot“ auszuwählen.

Manchmal wird der Port unter Windows als „CircuitPython“ erkannt, in diesem Fall verwenden wir diesen.

![alt text](/img/tutorial/python/python-setup/Capture-decran-2023-08-07-a-11.49.57-2048x1401.png)

Nachdem Sie auf „OK“ geklickt haben, leuchtet die Eliobot-LED weiß, was bedeutet, dass eine gute Verbindung besteht. Um die Verbindung zu überprüfen, können wir ihm unten in der Konsole den Befehl „help()“ senden, er sollte dann mit der folgenden Meldung antworten:

![alt text](/img/tutorial/python/python-setup/Capture-decran-2023-08-07-a-11.51.05.png)

Ein letzter Schritt, um die Benutzeroberfläche angenehmer zu gestalten, besteht darin, den Inhalt von Eliobot anzuzeigen. Gehen Sie dazu oben auf „Ansicht“ und dann auf „Dateien“.

![alt text](/img/tutorial/python/python-setup/Capture-decran-2023-08-07-a-11.51.33.png)

Sie können sehen, dass gerade eine neue Spalte auf der linken Seite erschienen ist.

Unter „CircuitPython-Gerät“ befinden sich alle in Ihrem Eliobot enthaltenen Dateien.

Dort finden Sie insbesondere die Datei „main.py“, das Hauptprogramm und den gesamten Code des letzten Programms, das Sie an Eliobot gesendet haben. Die Erweiterung „.py“ bedeutet, dass es sich um eine in Python geschriebene Datei handelt.

Wir werden die Datei „main.py“ öffnen, um unser Programm zu erstellen.
Ein gängiges Beispiel ist die Anzeige der Meldung „Hallo Welt!“ und in unserem Fall verwenden wir den Befehl „print()“, um es in der Konsole anzuzeigen.

Unser Programm passt in eine einzige Zeile: print(“Hallo Welt!”)

Um die angezeigte Meldung zu sehen, müssen wir lediglich das Programm ausführen, indem wir auf die Schaltfläche mit dem Pfeil ▶️ klicken.

Sie sollten das folgende Ergebnis erhalten:

![alt text](/img/tutorial/python/python-setup/Capture-decran-2023-08-07-a-13.58.43-1.png)

Und da haben Sie es: Sie haben gerade Ihren ersten Befehl in Python für Eliobot erstellt!

Im folgenden Beispiel werden wir gemeinsam sehen, wie man ein Programm erstellt, für dessen Funktion kein Computer erforderlich ist.