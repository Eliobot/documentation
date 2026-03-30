---
sidebar_position: 5
title: "WiFiConnectiviteit"
description: "WiFiConnectivity-klasse — WiFi-beheer op Eliobot"
---

# WiFiConnectiviteit

De klasse `WiFiConnectivity` vereenvoudigt het WiFi-beheer op Eliobot: verbinding maken met een netwerk, een toegangspunt creëren en beschikbare netwerken scannen.

## Initialisatie

```python
from elio import WiFiConnectivity

wifi_ctrl = WiFiConnectivity()
```

## Methoden

### `connect_to_wifi(ssid, password, webpassword)` *(statische methode)*

Slaat WiFi-inloggegevens op in het `settings.toml`-bestand en geeft een bericht weer om de kaart opnieuw op te starten.

:::note
De verbinding wordt gemaakt wanneer Eliobot **opnieuw opstart**, niet onmiddellijk.
:::

| Paramètre     | Type | Description                                 |
|---------------|------|---------------------------------------------|
| `ssid`        | str  | Nom du réseau WiFi                          |
| `password`    | str  | Mot de passe du réseau WiFi                 |
| `webpassword` | str  | Mot de passe pour l'API web CircuitPython   |

```python
WiFiConnectivity.connect_to_wifi("MonReseau", "monmotdepasse", "webmdp")
```

Het `settings.toml`-bestand gegenereerd:

```toml
CIRCUITPY_WIFI_SSID = "MonReseau"
CIRCUITPY_WIFI_PASSWORD = "monmotdepasse"
CIRCUITPY_WEB_API_PASSWORD = "webmdp"
CIRCUITPY_WEB_API_PORT = 8080
```

:::tip Webworkflow
Eenmaal verbonden, heeft u rechtstreeks toegang tot een IDE, bestandsbeheerder en terminal vanaf het IP-adres van Eliobot in uw browser.
Meer informatie: [Webworkflow CircuitPython](https://learn.adafruit.com/getting-started-with-web-workflow-using-the-code-editor)
:::

### `disconnect_from_wifi()` *(statische methode)*

Verbreekt de verbinding tussen Eliobot en het WiFi-netwerk.

```python
WiFiConnectivity.disconnect_from_wifi()
```

### `set_access_point(ssid, password)` *(statische methode)*

Configureer Eliobot als WiFi-toegangspunt.

| Paramètre  | Type | Description                   |
|------------|------|-------------------------------|
| `ssid`     | str  | Nom du point d'accès          |
| `password` | str  | Mot de passe du point d'accès |

```python
WiFiConnectivity.set_access_point("Eliobot-AP", "motdepasse")
```

### `scan_wifi_networks()` *(statische methode)*

Scant en toont beschikbare WiFi-netwerken met hun SSID, kanaal en signaalniveau (RSSI in dB en percentage).

```python
networks = WiFiConnectivity.scan_wifi_networks()
```

Voorbeelduitvoer:

```
Réseaux WiFi disponibles:
SSID: MonReseau, Canal: 6, RSSI: -55 (58%)
SSID: VoisinReseau, Canal: 11, RSSI: -72 (30%)
```

## Compleet voorbeeld

```python
from elio import WiFiConnectivity

# Scanner les réseaux disponibles
networks = WiFiConnectivity.scan_wifi_networks()

# Se connecter (nécessite un redémarrage)
WiFiConnectivity.connect_to_wifi("MonReseau", "monmotdepasse", "webmdp")
```
