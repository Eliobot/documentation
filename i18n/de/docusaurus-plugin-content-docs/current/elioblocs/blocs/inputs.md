---
last_modified_on: "2024-10-31"
title: "Eingaben"
description: "Elioblocs – Eingaben"
---

Eingabeblöcke ermöglichen es, Informationen aus Eliobots Umgebung abzurufen.

Mit Hindernissensorblöcken können Sie das Vorhandensein eines Hindernisses in der Nähe von Eliobot testen.

## Testen Sie, ob ein Hindernis vorhanden ist

![Hindernis prüfen](/img/elioblocs/blocs/inputs/test-obstacles.png)

**Typ**: Boolescher Block

**Definition**:

Mit diesem Block können Sie das Vorhandensein eines Hindernisses in einer bestimmten Entfernung von Eliobot testen:
- vorne
- hinten
- links
- richtig

**Verwenden** :

Wenn Sie Hindernissen wie Wänden oder Gegenständen ausweichen möchten.

---

Liniensensorblöcke ermöglichen es Ihnen, einer Linie zu folgen oder das Vorhandensein einer Linie zu testen.

## Folgen Sie einer Linie

![alt text](/img/elioblocs/blocs/inputs/suivre-ligne.png)

**Typ**: Bestellung

**Definition**:

Mit diesem Block können Sie einer schwarzen Linie folgen.

**Verwenden** :

Wenn wir möchten, dass Eliobot einer schwarzen Linie auf einer Route folgt, zum Beispiel der auf der Rückseite Ihrer Anweisungen.

## Testen Sie, ob eine Linie vorhanden ist

![alt text](/img/elioblocs/blocs/inputs/ligne-presente.png)

**Typ**: Boolescher Block

**Definition**:

Mit diesem Block können Sie das Vorhandensein einer schwarzen Linie unter Eliobot testen:
- in der Mitte
- links
- richtig
- Mitte links
- rechte Mitte

**Verwenden** :

Damit Eliobot einer schwarzen Linie auf einem Kurs folgen und testen kann, ob er nach links oder rechts abbiegen soll.

## Empfindlichkeit des Zeilensensors ändern

![alt text](/img/elioblocs/blocs/inputs/sensi-ligne.png)

**Typ**: Bestellung

**Definition**:

Mit diesem Block können Sie die Empfindlichkeit des Zeilensensors ändern. Ändert den Wert, bei dem der Liniensensor eine Linie erkennt.

**Verwenden** :

Wenn Sie sich in einem sehr hellen oder dunklen Raum befinden, können Sie die Empfindlichkeit des Liniensensors ändern, damit er die Linie besser erkennt.

## Lesen Sie den Wert eines Zeilensensors

![alt text](/img/elioblocs/blocs/inputs/valeur-ligne.png)

**Typ**: Wert

**Definition**:

Dieser Block gibt den Wert des Zeilensensors zurück. Sie können es beispielsweise im Terminal anzeigen.
Hiermit kann die Empfindlichkeit des Zeilensensors eingestellt werden.

**Verwenden** :

Wenn Sie den Wert des Zeilensensors abrufen möchten, um die Empfindlichkeit des Zeilensensors besser zu kalibrieren.

## Automatische Linienkalibrierung

![alt text](/img/elioblocs/blocs/inputs/calibration-ligne.jpg)

**Typ**: Bestellung

**Definition**:

Mit diesem Block können Sie den Zeilensensor automatisch kalibrieren. Hier können Sie den Wert festlegen, bei dem der Liniensensor eine Linie erkennt.

**Verwenden** :

Sie müssen die 5 Liniensensoren über einer schwarzen Linie platzieren und Eliobot kalibriert automatisch den Wert, bei dem es die Linie erkennt
vorwärts und rückwärts bewegen. Damit die Kalibrierung korrekt ist, muss Eliobot senkrecht zur Linie stehen.

---

## Testen Sie, ob die Schaltfläche aktiviert ist

![Ist die Schaltfläche aktiviert](/img/elioblocs/blocs/inputs/test-bouton.png)

**Typ**: Boolescher Block

**Definition**:

Mit diesem Block können Sie testen, ob die Taste von Eliobot aktiviert ist. Er gibt `wahr` zurück, wenn die Taste aktiviert ist, andernfalls `falsch`.

**Verwenden** :

Wenn Sie eine Aktion nur ausführen möchten, wenn die Eliobot-Schaltfläche aktiviert ist. Starten Sie zum Beispiel Ihr Programm.


---

## Die Infrarot-Fernbedienung

Um die Infrarot-Fernbedienungsblöcke verwenden zu können, müssen Sie über die im Eliobot-Kit enthaltene Infrarot-Fernbedienung verfügen.

![Infrarot-Fernbedienung](/img/elioblocs/blocs/inputs/nice_ir_remote.jpg)


[Hier kaufen](https://eliobot.com/products/telecommande-infra-rouge)

## Sensor zum Auslesen auswählen

![Sensor auswählen](/img/elioblocs/blocs/inputs/ir_remote_sensor_change.png)

**Typ**: Bestellung

**Definition**:

In diesem Block können Sie den Infrarotsensor zum Lesen der Infrarot-Fernbedienungsbefehle auswählen.
Sie können zwischen dem vorderen Sensor und dem hinteren Sensor wählen.

**Verwenden** :

Wenn Sie möchten, dass die Befehle der Infrarot-Fernbedienung vom vorderen oder hinteren Sensor gelesen werden.
Folgen Sie beispielsweise Eliobot und senden Sie ihm Befehle, während Sie hinter ihm sind.

## Lesen Sie den Befehl von der Infrarot-Fernbedienung

![Befehl lesen](/img/elioblocs/blocs/inputs/ir_remote_do.png)

<p>
  <img src={require('@site/static/img/elioblocs/blocs/inputs/ir_remote.png').default} alt="Read command" width="70%"/>
</p>

**Typ**: Bestellung

**Definition**:

Mit diesem Block können Sie den Befehl von der Infrarot-Fernbedienung lesen und basierend auf dem empfangenen Befehl eine Aktion ausführen.

**Verwenden** :

Wenn Sie möchten, dass Eliobot eine Aktion basierend auf dem von der Infrarot-Fernbedienung empfangenen Befehl ausführt.
Bewegen Sie sich zum Beispiel vorwärts, rückwärts, drehen Sie sich nach links oder rechts. Sie können es auch dazu bringen, Musik abzuspielen oder eine LED zum Leuchten zu bringen.
