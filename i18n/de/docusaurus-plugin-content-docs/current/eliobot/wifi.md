---
last_modified_on: "2024-02-26"
title: "WLAN"
description: "Eliobot-Komponente – WLAN"
---


<img src={require('@site/static/img/eliobot/wifi/Eliobot - WiFi.png').default} alt="Eliobot WiFi" width="49%" />

<br/>Eliobots Wi-Fi ermöglicht Ihnen die Verbindung mit einem Wi-Fi-Netzwerk, um mit anderen Geräten zu kommunizieren.

## Verwendung mit Elioblocs

In Elioblocs verwenden wir die Kategorie <img src={require('@site/static/img/eliobot/wifi/category-wifi.jpg').default} style={{ width: "14%", verticalAlign: "middle" }} alt="wifi connect" /> für die Verbindung und alles, was in Netzwerken möglich ist.

## Verwendung mit Python

Um Eliobots WLAN in Python zu nutzen, gibt es zwei Möglichkeiten:

- Verwenden Sie die `wifi`-Bibliothek, um eine Verbindung zu einem Wi-Fi-Netzwerk herzustellen.
- Verwenden Sie die Datei `settings.toml`, um WLAN zu konfigurieren.

Informationen zur Wi-Fi-Verbindung werden in der Datei `settings.toml` im Stammverzeichnis der Karte gespeichert.

Hier ist ein Beispiel einer `settings.toml`-Datei:
```toml
CIRCUITPY_WIFI_SSID = "your_wifi_ssid"
CIRCUITPY_WIFI_PASSWORD = "your_wifi_password"
CIRCUITPY_WEB_API_PASSWORD = "your_web_api_password"
```

:::note
Die in der Datei `settings.toml` enthaltenen Verbindungsinformationen sind persistent, d. h. sie bleiben auch dann erhalten, wenn die Karte ausgeschaltet wird, sodass sie nicht bei jedem Neustart der Karte neu geschrieben werden müssen.
:::

:::tip
Nach dem Schreiben der Verbindungsinformationen in die `settings.toml`-Datei ist es möglich, über die Eliobot-IP-Adresse auf eine IDE, einen Dateimanager und ein Terminal zuzugreifen. Dies ist eine in CircuitPython integrierte Funktion.
Erfahren Sie hier mehr: [Web Workflow](https://learn.adafruit.com/getting-started-with-web-workflow-using-the-code-editor)
:::

## Verwandte Beispiele

### Elioblocs-Beispiel

>
> <img src={require('@site/static/img/eliobot/wifi/example-wifi-elioblocs.jpg').default} alt="exemple wifi elioblocs" width="49%" />
>

Hier stellen wir eine Verbindung zu einem Wi-Fi-Netzwerk her, prüfen, ob die Verbindung hergestellt ist, wenn ja, zeigen wir die IP-Adresse an, andernfalls zeigen wir die Liste der verfügbaren Netzwerke an.

---

### Python-Beispiel

#### Mit der Bibliothek `wifi`

```python
import wifi

wifi.connect("your_wifi_ssid", "your_wifi_password")

if wifi.is_connected():
    print("Connected to Wi-Fi")
    print("IP address:", wifi.ip_address)
else:
    print("Connection failed")
    print("Available networks:", wifi.available_networks)
```

In diesem Beispiel stellen wir eine Verbindung zu einem Wi-Fi-Netzwerk her. Wir prüfen, ob die Verbindung hergestellt wurde. Wenn ja, zeigen wir die IP-Adresse an, andernfalls zeigen wir die Liste der verfügbaren Netzwerke an.

#### Mit der Datei `settings.toml`

```python
import wifi

# Informations de connexion
ssid = "your_wifi_ssid"
password = "your_wifi_password"
webpassword = "your_web_api_password"

# Écriture des informations de connexion dans le fichier settings.toml
with open('settings.toml', 'w') as f:
        f.write('CIRCUITPY_WIFI_SSID = "' + ssid + '"\n')
        f.write('CIRCUITPY_WIFI_PASSWORD = "' + password + '"\n')
        f.write('CIRCUITPY_WEB_API_PASSWORD = "' + webpassword + '"\n')

print("Settings saved")

if wifi.is_connected():
    print("Connected to Wi-Fi")
    print("IP address:", wifi.ip_address)
else:
    print("Connection failed")
    print("Available networks:", wifi.available_networks)
```

Gleiches Prinzip wie im vorherigen Beispiel, aber dieses Mal schreiben wir die Verbindungsinformationen in die Datei `settings.toml`, d. h. das Programm stellt nicht automatisch eine Verbindung zum Wi-Fi-Netzwerk her, die Karte muss neu gestartet werden, damit die Verbindung hergestellt werden kann.

:::tip
Es ist möglich, die Verbindungsinformationen in der `settings.toml`-Datei mit einer IDE wie Thonny zu ändern, ohne den Python-Code ändern zu müssen.
:::

