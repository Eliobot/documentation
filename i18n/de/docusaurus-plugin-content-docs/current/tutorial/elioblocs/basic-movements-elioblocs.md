---
sidebar_position: 2
---

# Grundbewegungen

Nachdem Sie nun wissen, wie Sie die Schnittstelle verwenden, können wir mit der Programmierung fortfahren. Ziel dieses Tutorials ist es, Ihnen dabei zu helfen, die drei Grundbewegungen des Roboters kennenzulernen: Vorwärtsbewegung, Rückwärtsbewegung und Drehung.

Um Ihr Gelerntes in die Praxis umzusetzen, fordern wir Sie am Ende dieses Tutorials heraus. Wenn Sie sie annehmen, besteht Ihre Herausforderung darin, mit Eliobot ein Quadrat zu bilden :)

![alt text](/img/tutorial/elioblocs/basic-movements-elioblocs/Cote-11.png)

Um dieses Tutorial zu starten, gehen Sie zu unserer Programmierschnittstelle https://app.eliobot.com/.


## Bewege Eliobot vorwärts

Ziel dieses ersten Schritts ist es, Eliobot voranzubringen.

![alt text](/img/tutorial/elioblocs/basic-movements-elioblocs/Cote-12-edited.png)

### Erstellen des Programms

Um Eliobot vorwärts zu bewegen, müssen Sie eine Vorwärtsbewegung auswählen. Klicken Sie in den Block „Bewegungen“ und ziehen Sie „Roboter vorwärts bewegen“ in Ihren Arbeitsbereich.

#### Option 1: Bewegung über eine definierte Dauer

Wenn Sie möchten, dass sich Eliobot für eine definierte Dauer (in unserem Beispiel 30 Sekunden) vorwärts bewegt, müssen Sie der Bewegung eine Zeitverzögerung hinzufügen. Klicken Sie auf „Dienstprogramme“ und fügen Sie den Block „1 Sekunde warten“ ein.

Ändern Sie die Zahl 1 in 30, um Eliobot anzuweisen, sich 30 Sekunden lang vorwärts zu bewegen.

![alt text](/img/tutorial/elioblocs/basic-movements-elioblocs/OFFO.png)

#### Option 2: Bewegung auf unbestimmte Zeit

Wenn Sie möchten, dass sich Eliobot unbegrenzt fortbewegt, müssen Sie der Bewegung eine Schleife hinzufügen, damit sie wiederholt wird. Klicken Sie in der Toolbox auf „Loops“ und ziehen Sie den „Repeat While“-Block um den vorherigen Block.

Denken Sie daran, dass Sie eine Bedingung hinzufügen müssen, damit die Schleife abgeschlossen ist. Eliobot bewegt sich vorwärts, solange die Bedingung wahr ist. Klicken Sie in den Block „Bedingungen“ und ziehen Sie „true“ in die Schleife.

![alt text](/img/tutorial/elioblocs/basic-movements-elioblocs/tuto-3etape-1.png)

### Programmübertragung

Um das Programm auf Eliobot zu testen, schließen Sie es mit dem USB-Kabel an den Computer an und klicken Sie auf die Schaltfläche „Programm“.

Dann sehen Sie, wie die LED blinkt, und wenn Sie fertig sind, können Sie den Eliobot ausstecken, um das Ergebnis zu sehen!


## Eliobot zurücksetzen

Das Ziel dieses zweiten Schritts besteht darin, Eliobot zurückzudrängen.

![alt text](/img/tutorial/elioblocs/basic-movements-elioblocs/Cote-15-edited.png)

Der Vorgang ist identisch mit dem ersten Schritt, da die Bewegung gleich bleibt, lediglich die Richtung ändert sich.

Wir wollen, dass Eliobot rückwärts geht. Um ihn zurück zu verschieben, klicken Sie einfach auf das Dropdown-Menü, das durch ein kleines orangefarbenes Dreieck rechts neben dem Block „Roboter verschieben nach“ gekennzeichnet ist. Wählen Sie dann die Option „Zurück“.

![alt text](/img/tutorial/elioblocs/basic-movements-elioblocs/oooooooooooooooooooooooooooooooooooppp.png)

Um das Programm auf Eliobot zu testen, schließen Sie es mit dem USB-Kabel an den Computer an und klicken Sie auf die Schaltfläche „Programm“.

Dann sehen Sie, wie die LED blinkt, und wenn Sie fertig sind, können Sie den Eliobot ausstecken, um das Ergebnis zu sehen!


## Drehe Eliobot nach rechts

Das Ziel dieses dritten Schritts besteht darin, Eliobot dazu zu bringen, nach rechts abzubiegen.

![
    
](/img/tutorial/elioblocs/basic-movements-elioblocs/Cote-13-edited.png)
### Erstellen des Programms

Um Eliobot zu drehen, müssen Sie eine Rotationsbewegung auswählen. Klicken Sie in den Block „Bewegungen“ und ziehen Sie „Roboter nach rechts drehen“ in Ihren Arbeitsbereich.

#### Option 1: Bewegung über eine definierte Dauer

Wenn Sie möchten, dass Eliobot für eine definierte Dauer (in unserem Beispiel 2 Sekunden) rotiert, müssen Sie der Bewegung eine Zeitverzögerung hinzufügen. Klicken Sie auf „Dienstprogramme“ und fügen Sie den Block „1 Sekunde warten“ ein.

Ändern Sie die Zahl 1 in die Zahl 2, um Eliobot anzuweisen, sich 2 Sekunden lang nach rechts zu drehen.

![alt text](/img/tutorial/elioblocs/basic-movements-elioblocs/Capture-ooooii.png)

#### Option 2: Kreiselmodus aktivieren 🙂

Wir möchten, dass sich Eliobot unendlich lange nach rechts dreht (um einen Kreisel zu drehen). Sie können eine Schleife erstellen, sodass sie wiederholt wird. Klicken Sie in der Toolbox auf „Loops“ und ziehen Sie den „Repeat While“-Block um den vorherigen Block.

Um die Schleife zu vervollständigen, fügen Sie ihr eine Bedingung hinzu. Der Roboter dreht sich nach rechts, solange die Bedingung erfüllt ist. Klicken Sie in den Block „Bedingungen“ und ziehen Sie „true“ in die Schleife.

![alt text](/img/tutorial/elioblocs/basic-movements-elioblocs/tuto-3-etape-3-1.png)

### Programmübertragung

Um das Programm auf Eliobot zu testen, schließen Sie es mit dem USB-Kabel an den Computer an und klicken Sie auf die Schaltfläche „Programm“.

Dann sehen Sie, wie die LED blinkt, und wenn Sie fertig sind, können Sie den Eliobot ausstecken, um das Ergebnis zu sehen!


## Drehe Eliobot nach links

Das Ziel dieses vierten Schritts besteht darin, Eliobot dazu zu bringen, sich nach links zu drehen.

Die Vorgehensweise ist identisch mit dem vorherigen Schritt, denn die Rotationsbewegung bleibt gleich, es ändert sich die Richtung.

Wir wollen, dass Eliobot nach links abbiegt. Um den Roboter nach links zu drehen, klicken Sie einfach auf das Dropdown-Menü, das durch ein kleines orangefarbenes Dreieck rechts neben dem Block „Roboter in Richtung drehen“ gekennzeichnet ist. Wählen Sie dann den Modus „Links“.

![alt text](/img/tutorial/elioblocs/basic-movements-elioblocs/Capture-17.png)

Um das Programm auf Eliobot zu testen, schließen Sie es mit dem USB-Kabel an den Computer an und klicken Sie auf die Schaltfläche „Programm“.

Dann sehen Sie, wie die LED blinkt, und wenn Sie fertig sind, können Sie den Eliobot ausstecken, um das Ergebnis zu sehen!


## Herausforderung: Bilde ein Quadrat

Es ist Zeit, sich selbst herauszufordern! Schaffst du es, dieses Quadrat zu machen?

Ein Quadrat besteht aus Teilbewegungen: einer geraden Linie und einer viermal wiederholten Drehung.

![alt text](/img/tutorial/elioblocs/basic-movements-elioblocs/Cote-1.png)

### Die gerade Linie

Die erste Unterbewegung besteht darin, Eliobot vorwärts zu bewegen, um die erste Seite des Quadrats nachzuzeichnen. Wie wir in Schritt 1 gesehen haben, müssen Sie die Vorwärtsbewegung auswählen. Fügt den Block „Roboter vorwärts bewegen“ in den Arbeitsbereich ein.

Anschließend müssen Sie eine Verzögerung hinzufügen, damit sich Eliobot über die Dauer von 1 Sekunde in einer geraden Linie bewegt. Fügen Sie den Block „1 Sekunde warten“ in das Dienstprogramm ein.

Es ist möglich, die Zeit zu ändern, um die Größe des Quadrats zu ändern.

![alt text](/img/tutorial/elioblocs/basic-movements-elioblocs/OOOOOOOOOL.png)


### Die Wende

Die zweite Unterbewegung besteht darin, Eliobot nach rechts zu drehen, um einen rechten Winkel zu zeichnen. Wie wir in Schritt 3 gesehen haben, fügen Sie den Block „Roboter nach rechts drehen“ unterhalb der vorherigen Blöcke ein.

Anschließend müssen Sie eine Zeitverzögerung hinzufügen, damit sich Eliobot um eine Vierteldrehung oder 270 Millisekunden dreht. Fügt den Block „1 Sekunde warten“ in den Arbeitsbereich ein und ändert dann die Dauer und Einheit des Blocks.

![alt text](/img/tutorial/elioblocs/basic-movements-elioblocs/Capture-PPO.png)


### Die magische Schleife

Zur Erinnerung: Ein Quadrat besteht aus einer geraden Linie und einer viermal wiederholten Drehung. Nachdem Sie nun eine Seite des Quadrats erstellt haben, müssen Sie diesen Vorgang nur noch mehrmals wiederholen, um die restlichen Seiten zu erhalten.

Um Ihnen die Aufgabe zu erleichtern, gibt es einen Block, der Ihnen diese Wiederholung ermöglicht: die Schleife.

Klicken Sie in der Toolbox auf „Loops“ und fügen Sie den Block „Repeat…times, do“ in den Arbeitsbereich ein. Schieben Sie diesen Block um die vorherigen.

Da das Quadrat vier Seiten hat, bitten wir Sie, die Schleife viermal zu wiederholen.

![alt text](/img/tutorial/elioblocs/basic-movements-elioblocs/bloc-carre-i.png)


### Programmübertragung

Um das Programm auf Eliobot zu testen, schließen Sie es mit dem USB-Kabel an den Computer an und klicken Sie auf die Schaltfläche „Programm“.

Dann sehen Sie, wie die LED blinkt, und wenn Sie fertig sind, können Sie den Eliobot ausstecken, um das Ergebnis zu sehen!

