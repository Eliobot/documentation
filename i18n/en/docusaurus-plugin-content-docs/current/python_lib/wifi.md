---
sidebar_position: 5
title: "WiFiConnectivity"
description: "WiFiConnectivity class — WiFi management on Eliobot"
---

# WiFiConnectivity

The `WiFiConnectivity` class simplifies WiFi management on Eliobot: connection to a network, creation of an access point and scanning of available networks.

## Initialization

```python
from elio import WiFiConnectivity

wifi_ctrl = WiFiConnectivity()
```

## Methods

### `connect_to_wifi(ssid, password, webpassword)` *(static method)*

Saves WiFi credentials to the `settings.toml` file and displays a message to restart the card.

:::note
The connection is made when Eliobot **restarts**, not immediately.
:::

| Paramètre     | Type | Description                                 |
|---------------|------|---------------------------------------------|
| `ssid`        | str  | Nom du réseau WiFi                          |
| `password`    | str  | Mot de passe du réseau WiFi                 |
| `webpassword` | str  | Mot de passe pour l'API web CircuitPython   |

```python
WiFiConnectivity.connect_to_wifi("MonReseau", "monmotdepasse", "webmdp")
```

The `settings.toml` file generated:

```toml
CIRCUITPY_WIFI_SSID = "MonReseau"
CIRCUITPY_WIFI_PASSWORD = "monmotdepasse"
CIRCUITPY_WEB_API_PASSWORD = "webmdp"
CIRCUITPY_WEB_API_PORT = 8080
```

:::tip Web Workflow
Once connected, you can access an IDE, file manager and terminal directly from Eliobot's IP address in your browser.
Learn more: [Web Workflow CircuitPython](https://learn.adafruit.com/getting-started-with-web-workflow-using-the-code-editor)
:::

### `disconnect_from_wifi()` *(static method)*

Disconnects Eliobot from the WiFi network.

```python
WiFiConnectivity.disconnect_from_wifi()
```

### `set_access_point(ssid, password)` *(static method)*

Configure Eliobot as a WiFi access point.

| Paramètre  | Type | Description                   |
|------------|------|-------------------------------|
| `ssid`     | str  | Nom du point d'accès          |
| `password` | str  | Mot de passe du point d'accès |

```python
WiFiConnectivity.set_access_point("Eliobot-AP", "motdepasse")
```

### `scan_wifi_networks()` *(static method)*

Scans and displays available WiFi networks with their SSID, channel and signal level (RSSI in dB and percentage).

```python
networks = WiFiConnectivity.scan_wifi_networks()
```

Example output:

```
Réseaux WiFi disponibles:
SSID: MonReseau, Canal: 6, RSSI: -55 (58%)
SSID: VoisinReseau, Canal: 11, RSSI: -72 (30%)
```

## Complete example

```python
from elio import WiFiConnectivity

# Scanner les réseaux disponibles
networks = WiFiConnectivity.scan_wifi_networks()

# Se connecter (nécessite un redémarrage)
WiFiConnectivity.connect_to_wifi("MonReseau", "monmotdepasse", "webmdp")
```
