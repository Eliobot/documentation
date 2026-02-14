---
sidebar_position: 3
---

# Hindernissen ausweichen

In diesem Tutorial lernen wir, wie man Eliobot mithilfe von Sensoren selbstständig nutzt und einem Hindernis ausweicht 😉


## Funktionsweise von Infrarotsensoren

Eliobot ist mit 4 Infrarotsensoren ausgestattet (siehe Abbildung unten), die es ihm ermöglichen, Hindernisse zu erkennen.

![alt text](/img/tutorial/elioblocs/avoid-obstacles-elioblocs/eliobot-sensors-position.png)

Aber wie funktioniert das technisch? 🤔

Jeder Sensor besteht aus einem Sender und einem Empfänger. Die Aufgabe des Senders besteht darin, Licht auszusenden, um Hindernisse zu beleuchten. Das Licht wird dann zum Empfänger reflektiert, wodurch wir die Menge des empfangenen Lichts ermitteln und daraus eine Entfernung ableiten können.

Je größer die Lichtmenge, desto näher ist das Hindernis.

![alt text](/img/tutorial/elioblocs/avoid-obstacles-elioblocs/infrared-sensor.png)

## Erkenne ein Hindernis

Um dieses Tutorial zu starten, gehen Sie zu unserer Programmierschnittstelle https://app.eliobot.com/.

Wir beginnen mit einem ersten einfachen Beispiel: Erkennt Eliobot ein Hindernis vor sich, leuchtet die rote LED auf. Wenn Eliobot kein Hindernis erkennt, erlischt die LED 💡

![alt text](/img/tutorial/elioblocs/avoid-obstacles-elioblocs/obstacle-light-example.png)

Der erste Schritt besteht darin, die Hinderniserkennung auszuwählen. Gehen Sie dazu in den Tab ```Hindernisse``` und wählen Sie den Block ```ein Hindernis ist vorne``` aus.

Es ist möglich, den zu verwendenden Sensor auszuwählen, in unserem Fall ist es der Frontsensor.

Sie haben wahrscheinlich bemerkt, dass dieser neue Block eine andere Form hat und nicht wie die bisher verwendeten Blöcke verwendet werden kann. Dies ist ein boolescher Wert, den wir als Bedingung im Block ```Wenn... dann... sonst``` verwenden können.

Um eindeutig zu erkennen, wann ein Hindernis erkannt wird, zeigen wir mit dem Block ```Farbe anzeigen``` im Teil ```dann``` eine Farbe an und verwenden ```Licht ausschalten``` im Teil ```sonst```.

Wähle eine Farbe deiner Wahl, du bist der Künstler oder die Künstlerin! 😉

![alt text](/img/tutorial/elioblocs/avoid-obstacles-elioblocs/color-when-obstacle.png)

## Das Hindernis umfahren

Jetzt, da Eliobot ein Hindernis erkennen kann, sagen wir ihm, was er tun soll, wenn er eines entdeckt. Die einfachste Aktion ist, die Richtung zu ändern, indem er nach rechts oder links dreht.

![alt text](/img/tutorial/elioblocs/avoid-obstacles-elioblocs/obstacle-turn-example.png)

Da der größte Teil der Arbeit mit dem obigen Programm schon erledigt ist, ergänzen wir jetzt Bewegungen zusätzlich zu den LED-Befehlen.

Zuerst definieren wir die Bewegung, die Eliobot bei einem Hindernis ausführt, in unserem Fall eine Vierteldrehung nach rechts. Dazu kannst du den Block ```Um 90 Grad nach rechts drehen``` im Tab ```Bewegungen``` nehmen und unter der roten Farbe hinzufügen.

Dann definieren wir die Bewegung, wenn kein Hindernis vorhanden ist: vorwärts fahren. Du findest dafür ebenfalls den Block ```Vorwärts bewegen``` im Tab ```Bewegungen```; er kommt in den Bereich ```sonst```.

![alt text](/img/tutorial/elioblocs/avoid-obstacles-elioblocs/turn-when-obstacle.png)


### Programmübertragung

Um das Programm auf Eliobot zu testen, schließen Sie es mit dem USB-Kabel an den Computer an und klicken Sie auf die Schaltfläche „Programm“.

Dann sehen Sie, wie die LED blinkt, und wenn Sie fertig sind, können Sie den Eliobot ausstecken, um das Ergebnis zu sehen! 🙂
