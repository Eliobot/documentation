---
last_modified_on: "2024-02-26"
title: "Rucksäcke"
description: "Elioblocs - Rucksäcke"
---

Backpack-Blöcke ermöglichen die Steuerung von Eliobots Zubehör.

## KNOPFSCHILDKRÖTE

:::warning
Bitte beachten Sie, dass Eliobot mit dem Button-Schildkröten-Rucksack ausgestattet sein muss, um verwendet zu werden.
:::

### Programm mit Tasten

![Programm mit Tasten](/img/elioblocs/blocs/backpacks/turtle-buttons.jpg)

**Typ**: Bestellung

**Definition**:

Mit diesem Block können Sie den Schildkrötenknopf-Rucksack verwenden, um Eliobot zu steuern.
Wir erfassen die auszuführenden Aktionen (vorwärts, rückwärts, links abbiegen, rechts abbiegen) für jede Schaltfläche.
Sobald die Sequenz aufgezeichnet ist, können Sie sie durch Drücken der mittleren Taste abspielen.

**Verwenden** :

Das jüngste Kind soll Eliobot programmieren, indem es ihm mithilfe von Tasten Anweisungen gibt.

## DHT11-SENSOR

:::warning
Bitte beachten Sie, dass Eliobot zur Verwendung mit dem Feuchtigkeitssensor-Rucksack und der Adafruit DHT-Bibliothek ausgestattet sein muss.
:::

### Temperatur- oder Luftfeuchtigkeitswert abrufen

![Temperatur- oder Luftfeuchtigkeitswert abrufen](/img/elioblocs/blocs/backpacks/dht11.jpg)

**Typ**: Wert

**Definition**:

Mit diesem Block können Sie den vom DHT11-Sensor gemessenen Temperatur- oder Feuchtigkeitswert abrufen.

**Verwenden** :

Wenn Sie die vom Sensor gemessene Temperatur oder Luftfeuchtigkeit abrufen möchten, um sie in Ihrem Programm zu verwenden. Beispielsweise um die Temperatur im Terminal anzuzeigen.

## LED-MATRIX

:::warning
Bitte beachten Sie, dass Eliobot zur Verwendung mit dem LED-Matrix-Rucksack ausgestattet sein muss.
:::

### Auswahl der Farben einer LED-Matrix

![LED-Matrixfarben auswählen](/img/elioblocs/blocs/backpacks/matrix-choose-colors.jpg)

**Typ**: Bestellung

**Definition**:

Mit diesem Block können Sie die Farben einer LED-Matrix auswählen. Damit können Sie auf einer 5x5-LED-Matrix mit RGB-Farben zeichnen, was Sie wollen. Hinweis: Schwarz entspricht einer ausgeschalteten LED.

**Verwenden** :

Wenn Sie ein Logo oder eine Botschaft auf eine LED-Matrix zeichnen möchten. Zum Beispiel, um Informationen basierend auf den Ergebnissen Ihrer Sensoren anzuzeigen.

### Klare Farben aus einer LED-Matrix

![Klare LED-Matrixfarben](/img/elioblocs/blocs/backpacks/matrix-clear.jpg)

**Typ**: Bestellung

**Definition**:

Mit diesem Block können Sie die Farben aus einer LED-Matrix löschen. Damit können Sie eine 5x5-LED-Matrix zurücksetzen, bei der alle LEDs ausgeschaltet sind.

**Verwenden** :

Wenn Sie löschen möchten, was auf einer LED-Matrix angezeigt wird. Zum Beispiel, um eine Nachricht oder ein Logo zu löschen.

### Wählen Sie ein Logo zur Anzeige auf einer LED-Matrix

![Wählen Sie das LED-Matrix-Logo](/img/elioblocs/blocs/backpacks/matrix-choose-logo.jpg)

**Typ**: Bestellung

**Definition**:

Mit diesem Block können Sie ein Logo auswählen, das auf einer LED-Matrix angezeigt werden soll:
- Herz
- Fröhlicher Smiley
- Trauriger Smiley
- Pfeil nach oben
- Pfeil nach unten
- Pfeil nach links
- Pfeil nach rechts
- Kreuz
-Überprüfen

**Verwenden** :

Wenn Sie ein Logo auf einer LED-Matrix anzeigen möchten. Beispielsweise um anzuzeigen, in welche Richtung sich Eliobot bewegt oder ob ein Hindernis erkannt wird.

### Lauftext auf einer LED-Matrix

![Lauftext auf LED-Matrix](/img/elioblocs/blocs/backpacks/matrix-scroll-text.jpg)

**Typ**: Bestellung

**Definition**:

Mit diesem Block können Sie den Text auf der LED-Matrix scrollen lassen und auch die Farbe des Textes auswählen.

**Verwenden** :

Wenn Sie eine Meldung auf der LED-Matrix anzeigen möchten. Beispielsweise zur Anzeige einer Willkommensnachricht oder einer Meldung, wenn ein Hindernis erkannt wird.

## BME280 SENSOR

:::warning
Bitte beachten Sie, dass Eliobot zur Verwendung mit dem Umgebungssensor-Rucksack und der Adafruit BME280-Bibliothek ausgestattet sein muss.
:::

### Rufen Sie verschiedene vom BME280-Sensor gemessene Werte ab

![Verschiedene Werte messen lassen](/img/elioblocs/blocs/backpacks/bme280.jpg)

**Typ**: Wert

**Definition**:

Mit diesem Block können Sie verschiedene vom BME280-Sensor gemessene Werte wiederherstellen:
- Temperatur
- Luftfeuchtigkeit
- Druck
- Höhe

**Verwenden** :

Wenn Sie die vom Sensor gemessene Temperatur, Luftfeuchtigkeit, den Druck oder die Höhe abrufen möchten, um sie in Ihrem Programm zu verwenden. Zum Beispiel, um Eliobot vorwärts zu bewegen, wenn die Temperatur zu hoch ist.

### Stellen Sie den Luftdruck auf Meereshöhe ein

![Luftdruck auf Meereshöhe einstellen](/img/elioblocs/blocs/backpacks/bme-sea-level.jpg)

**Typ**: Bestellung

**Definition**:

Mit diesem Block können Sie den Meeresspiegeldruck für den BME280-Sensor definieren.

**Verwenden** :

Wenn Sie den Meeresspiegeldruck für den Drucksensor einstellen möchten. Zum Beispiel um eine genaue Höhenmessung zu erhalten. Sie finden es auf dieser [Site](https://zoom.earth/maps/pressure/). Platzieren Sie Ihren Cursor auf dem Meer, das Ihnen am nächsten liegt.

## OLED-Bildschirm

:::warning
Bitte beachten Sie, dass Eliobot zur Verwendung mit dem OLED-Bildschirmrucksack ausgestattet sein muss.
:::

### Text auf einem OLED-Bildschirm anzeigen

![Text auf OLED-Bildschirm anzeigen](/img/elioblocs/blocs/backpacks/oled-text.jpg)

**Typ**: Bestellung

**Definition**:

Mit diesem Block können Sie Text auf einem OLED-Bildschirm anzeigen.
Sie können wählen, in welcher Zeile Sie den Text anzeigen möchten, der Bildschirm hat 6 Zeilen.

**Verwenden** :

Wenn Sie eine Nachricht auf einem OLED-Bildschirm anzeigen möchten.
Beispielsweise zur Anzeige einer Willkommensnachricht oder einer Meldung, wenn ein Hindernis erkannt wird.

### OLED-Bildschirm löschen

![OLED-Bildschirm löschen](/img/elioblocs/blocs/backpacks/oled-clear.jpg)

**Typ**: Bestellung

**Definition**:

Mit diesem Block können Sie den OLED-Bildschirm löschen.

**Verwenden** :

Wenn Sie löschen möchten, was auf dem OLED-Bildschirm angezeigt wird. Zum Beispiel, um eine Nachricht oder ein Logo zu löschen.

## Servomotor

:::warning
Bitte beachten Sie, dass Eliobot zur Verwendung mit dem Servomotor-Rucksack ausgestattet sein muss.
:::

### Stellt die Position des Servomotors ein

![Stellen Sie die Position des Servomotors ein](/img/elioblocs/blocs/backpacks/servo-motor.jpg)

**Typ**: Bestellung

**Definition**:

Mit diesem Block können Sie die Position des Servomotors definieren und auch den Ort auswählen, an dem er angeschlossen ist.

**Verwenden** :

Wenn Sie die Position des Servomotors so einstellen möchten, dass er sich in einem präzisen Winkel dreht.
Zum Beispiel, um Eliobots Kopf zu drehen.

## Kontinuierlicher Servomotor

:::warning
Bitte beachten Sie, dass Eliobot zur Verwendung mit dem kontinuierlichen Servomotor-Rucksack ausgestattet sein muss.
:::

### Drehen Sie den kontinuierlichen Servomotor

![Servomotor kontinuierlich drehen](/img/elioblocs/blocs/backpacks/continuous-servo-motor.jpg)

**Typ**: Bestellung

**Definition**:

Mit diesem Block können Sie den kontinuierlichen Servomotor mit einer bestimmten Geschwindigkeit in die eine oder andere Richtung drehen. Sie können auch den Ort auswählen, an dem er angeschlossen ist.

**Verwenden** :

Wenn Sie den kontinuierlichen Servomotor so drehen möchten, dass er sich vorwärts oder rückwärts bewegt.

## Ultraschallsensor

:::warning
Bitte beachten Sie, dass Eliobot zur Verwendung mit dem Ultraschallsensor-Rucksack ausgestattet sein muss.
:::

### Rufen Sie die vom Ultraschallsensor gemessene Entfernung ab

![Entfernung messen lassen](/img/elioblocs/blocs/backpacks/hcsr04.jpg)

**Typ**: Wert

**Definition**:

Mit diesem Block können Sie die vom Ultraschallsensor gemessene Entfernung wiederherstellen.

**Verwenden** :

Wenn Sie die vom Ultraschallsensor gemessene Distanz wiederherstellen möchten, um sie in Ihrem Programm zu verwenden. Zum Beispiel um Hindernissen auszuweichen.








