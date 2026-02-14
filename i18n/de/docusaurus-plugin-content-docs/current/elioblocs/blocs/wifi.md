---
last_modified_on: "2024-02-26"
title: "Netzwerk"
description: "Elioblocs – Netzwerke"
---

Netzwerkblöcke ermöglichen Aktionen rund um die Verbindung von Eliobot mit einem drahtlosen Netzwerk.

## **Drahtlose Verbindung**

---

### Stellen Sie eine Verbindung zu einem drahtlosen Netzwerk her

![Mit einem Wi-Fi-Netzwerk verbinden](/img/elioblocs/blocs/wifi/connect-wifi.jpg)

**Typ**: Bestellung

**Definition**:

Mit diesem Block können Sie Eliobot mit einem drahtlosen Netzwerk verbinden. Sie müssen den Netzwerknamen und das Passwort eingeben.
Die Verbindungsinformationen werden in einer Datei mit dem Namen `settings.toml` auf Eliobot gespeichert, sodass Sie sie nicht jedes Mal neu eingeben müssen.
Eliobot stellt beim Start automatisch eine Verbindung zum drahtlosen Netzwerk her.

**Verwenden** :

Wenn Sie möchten, dass Eliobot eine Verbindung zu einem drahtlosen Netzwerk herstellt, um auf das Internet oder einen lokalen Server zugreifen zu können.

### Trennen Sie die Verbindung zu einem drahtlosen Netzwerk

![Von einem Wi-Fi-Netzwerk trennen](/img/elioblocs/blocs/wifi/disconnect-wifi.jpg)

**Typ**: Bestellung

**Definition**:

Mit diesem Block können Sie Eliobot von einem drahtlosen Netzwerk trennen.

**Verwenden** :

Wenn Sie möchten, dass Eliobot die Verbindung zu einem drahtlosen Netzwerk trennt, um eine Verbindung zu einem anderen Netzwerk herzustellen oder um Strom zu sparen.

### Öffnen Sie einen Zugangspunkt von Eliobot

![Öffnen Sie einen WLAN-Zugangspunkt](/img/elioblocs/blocs/wifi/open-hotspot.jpg)

**Typ**: Bestellung

**Definition**:

Mit diesem Block können Sie einen WLAN-Zugangspunkt von Eliobot aus öffnen. Dadurch können andere Geräte wie Ihr Telefon oder Computer eine Verbindung zu Eliobot herstellen.

:::warning
Das Passwort muss zwischen 8 und 64 Zeichen lang sein.
:::

**Verwenden** :

Wenn Sie beispielsweise eine HTML-Datei von Eliobot bereitstellen möchten, um Ihr Telefon in eine Fernbedienung zu verwandeln.

### Hostnamen festlegen

![Hostnamen festlegen](/img/elioblocs/blocs/wifi/hostname.jpg)

**Typ**: Bestellung

**Definition**:

Mit diesem Block können Sie den Namen des Eliobot-Hosts definieren. Der Hostname ist der Name, der Eliobot im Netzwerk identifiziert.
Geben Sie einfach den Hostnamen zusammen mit der Erweiterung `.local` ein, um von einem anderen Gerät im selben Netzwerk auf Eliobot zuzugreifen.

**Verwenden** :

Wenn Sie von einem anderen Gerät im selben Netzwerk auf Eliobot zugreifen möchten.
Wenn Sie beispielsweise von Ihrem Telefon aus auf die HTML-Seite zugreifen möchten, die Sie auf Eliobot erstellt haben.

### Ist mit einem drahtlosen Netzwerk verbunden?

![Ist mit einem Wi-Fi-Netzwerk verbunden](/img/elioblocs/blocs/wifi/is-connected.jpg)

**Typ**: Boolescher Block

**Definition**:

Mit diesem Block können Sie testen, ob Eliobot mit einem drahtlosen Netzwerk verbunden ist. Er gibt `wahr` zurück, wenn Eliobot verbunden ist, andernfalls `falsch`.

**Verwenden** :

Wenn Sie eine Aktion nur ausführen möchten, wenn Eliobot mit einem drahtlosen Netzwerk verbunden ist.

### Verfügbare drahtlose Netzwerke scannen

![Verfügbare WLAN-Netzwerke scannen](/img/elioblocs/blocs/wifi/scan-wifi.jpg)

**Typ**: Wert

**Definition**:

Mit diesem Block können Sie verfügbare drahtlose Netzwerke scannen. Es wird eine Liste der verfügbaren drahtlosen Netzwerke mit ihrem Namen und ihrer Signalstärke zurückgegeben.

**Verwenden** :

Wenn Sie die verfügbaren drahtlosen Netzwerke anzeigen möchten, wählen Sie das Netzwerk aus, mit dem Sie eine Verbindung herstellen möchten.

### Rufen Sie die IP-Adresse des drahtlosen Netzwerks ab

![IP-Adresse des Wi-Fi-Netzwerks abrufen](/img/elioblocs/blocs/wifi/get-ip.jpg)

**Typ**: Wert

**Definition**:

Mit diesem Block können Sie die IP-Adresse des drahtlosen Netzwerks ermitteln, mit dem Eliobot verbunden ist.

**Verwenden** :

Wenn Sie die IP-Adresse des drahtlosen Netzwerks für die Kommunikation mit Eliobot wissen möchten, benötigen Sie diese, um von einem anderen Gerät aus eine Verbindung zu Eliobot herzustellen.

---

### Erstellt eine HTML-Seite

![Eine HTML-Seite erstellen](/img/elioblocs/blocs/wifi/create-html-page.jpg)

**Typ**: Bestellung

**Definition**:

Mit diesem Block können Sie eine HTML-Seite erstellen. Eine HTML-Seite ist eine Webseite, die in einem Webbrowser angezeigt werden kann.
Es wird in einer HTML-Datei auf Eliobot mit dem Namen `index.html` gespeichert und im Ordner `www` abgelegt.
Sie können den Titel der Seite auswählen und den Inhalt darin platzieren. Sobald dieser Block platziert wird, werden alle Schleifen deaktiviert
Wenn Sie den Webserver unbegrenzt oft wiederholen, um den Webserver zu starten, können Sie darauf zugreifen, indem Sie im Access Point-Modus eine Verbindung zu Eliobot herstellen 
und Eingabe der IP-Adresse von Eliobot in Ihren Webbrowser.

**Verwenden** :

Wenn Sie eine Webseite erstellen möchten, um Informationen anzuzeigen und interaktive Elemente wie Schaltflächen oder Anzeigen zu platzieren.

### Fügen Sie Ihrer HTML-Seite eine Schaltfläche hinzu

![Eine Schaltfläche zu einer HTML-Seite hinzufügen](/img/elioblocs/blocs/wifi/add-html-button.jpg)

**Typ**: Bestellung

**Definition**:

Mit diesem Block können Sie einer HTML-Seite eine Schaltfläche hinzufügen.
Eine Schaltfläche ist ein interaktives Element, das vom Benutzer angeklickt werden kann.
Dort können Sie den Text der Schaltfläche und den Code auswählen, der beim Klicken auf die Schaltfläche ausgeführt wird.
Sie können auch die Farbe der Schaltfläche auswählen.

**Verwenden** :

Wenn Sie eine Fernbedienung erstellen möchten, um Eliobot von Ihrem Telefon aus zu steuern.

### Fügen Sie Ihrer HTML-Seite einen Viewer hinzu

![Eine Anzeige zu einer HTML-Seite hinzufügen](/img/elioblocs/blocs/wifi/add-html-value.jpg)

**Typ**: Bestellung

**Definition**:

Mit diesem Block können Sie einer HTML-Seite eine Anzeige hinzufügen. Eine Anzeige ist ein Element, das den Wert anzeigt, den Sie ihm geben.
Sie können den Wert, den Sie anzeigen möchten, in die Anzeige einfügen und den Namen der Anzeige angeben.

**Verwenden** :

Wenn Sie von Ihrem Telefon aus wissen möchten, ob sich vor Eliobot ein Hindernis befindet.

### Erstellen Sie ein HTML-Tag

![Erstellen Sie ein HTML-Tag](/img/elioblocs/blocs/wifi/create-html-div.jpg)

**Typ**: Bestellung

**Definition**:

Mit diesem Block können Sie ein HTML-Tag erstellen. Ein HTML-Tag ist ein Element einer Webseite, das bei der Strukturierung des Inhalts hilft.
Dort können Sie den Typ des Tags auswählen und dessen Inhalt darin platzieren.

Verfügbare Optionen:
-div
- Mitte

**Verwenden** :

Wenn Sie den Inhalt Ihrer HTML-Seite strukturieren möchten.


### Erstellen Sie einen HTML-Titel

![Erstellen Sie einen HTML-Titel](/img/elioblocs/blocs/wifi/create-html-title.jpg)

**Typ**: Bestellung

**Definition**:

Mit diesem Block können Sie einen HTML-Titel erstellen. Ein HTML-Titel ist Text, der eine bestimmte Größe hat und fett gedruckt ist.
Dort können Sie den Titeltext und seine Größe auswählen.

Verfügbare Optionen:
- h1
- h2
- h3
- h4
- h5
- h6

**Verwenden** :

Wenn Sie einen Titel auf Ihrer HTML-Seite anzeigen möchten.

### Erstellen Sie einen HTML-Absatz

![Erstellen Sie einen HTML-Absatz](/img/elioblocs/blocs/wifi/create-html-text.jpg)

**Typ**: Bestellung

**Definition**:

Mit diesem Block können Sie einen HTML-Absatz erstellen. Ein HTML-Absatz ist Text, der auf der Webseite angezeigt wird.

**Verwenden** :

Wenn Sie Text auf Ihrer HTML-Seite anzeigen möchten.
