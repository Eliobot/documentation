---
sidebar_position: 5
title: "WiFi-Konnektivität"
description: "WiFiConnectivity-Klasse – WLAN-Verwaltung auf Eliobot"
---

# WiFi-Konnektivität

Die `WiFiConnectivity`-Klasse vereinfacht die WLAN-Verwaltung auf Eliobot: Verbindung zu einem Netzwerk, Erstellung eines Zugangspunkts und Scannen verfügbarer Netzwerke.

## Initialisierung

```python
from elio import WiFiConnectivity

wifi_ctrl = WiFiConnectivity()
```

## Methoden

### `connect_to_wifi(ssid, password, webpassword)` *(statische Methode)*

Speichert WLAN-Anmeldeinformationen in der Datei `settings.toml` und zeigt eine Meldung zum Neustart der Karte an.

:::note
Die Verbindung wird hergestellt, wenn Eliobot **neu startet**, nicht sofort.
:::

| Paramètre     | Type | Description                                 |
|---------------|------|---------------------------------------------|
| `ssid`        | str  | Nom du réseau WiFi                          |
| `password`    | str  | Mot de passe du réseau WiFi                 |
| `webpassword` | str  | Mot de passe pour l'API web CircuitPython   |

```python
WiFiConnectivity.connect_to_wifi("MonReseau", "monmotdepasse", "webmdp")
```

Die generierte `settings.toml`-Datei:

```toml
CIRCUITPY_WIFI_SSID = "MonReseau"
CIRCUITPY_WIFI_PASSWORD = "monmotdepasse"
CIRCUITPY_WEB_API_PASSWORD = "webmdp"
CIRCUITPY_WEB_API_PORT = 8080
```

:::tip Web-Workflow
Sobald die Verbindung hergestellt ist, können Sie direkt über die IP-Adresse von Eliobot in Ihrem Browser auf eine IDE, einen Dateimanager und ein Terminal zugreifen.
Erfahren Sie mehr: [Web-Workflow CircuitPython](https://learn.adafruit.com/getting-started-with-web-workflow-using-the-code-editor)
:::

### `disconnect_from_wifi()` *(statische Methode)*

Trennt Eliobot vom WLAN-Netzwerk.

```python
WiFiConnectivity.disconnect_from_wifi()
```

### `set_access_point(ssid, password)` *(statische Methode)*

Konfigurieren Sie Eliobot als WLAN-Zugangspunkt.

| Paramètre  | Type | Description                   |
|------------|------|-------------------------------|
| `ssid`     | str  | Nom du point d'accès          |
| `password` | str  | Mot de passe du point d'accès |

```python
WiFiConnectivity.set_access_point("Eliobot-AP", "motdepasse")
```

### `scan_wifi_networks()` *(statische Methode)*

Scannt und zeigt verfügbare WLAN-Netzwerke mit SSID, Kanal und Signalpegel (RSSI in dB und Prozent) an.

```python
networks = WiFiConnectivity.scan_wifi_networks()
```

Beispielausgabe:

```
Réseaux WiFi disponibles:
SSID: MonReseau, Canal: 6, RSSI: -55 (58%)
SSID: VoisinReseau, Canal: 11, RSSI: -72 (30%)
```

## Vollständiges Beispiel

```python
from elio import WiFiConnectivity

# Scanner les réseaux disponibles
networks = WiFiConnectivity.scan_wifi_networks()

# Se connecter (nécessite un redémarrage)
WiFiConnectivity.connect_to_wifi("MonReseau", "monmotdepasse", "webmdp")
```
