---
sidebar_position: 5
title: "WiFiConectividad"
description: "Clase de conectividad WiFi: gestión de WiFi en Eliobot"
---

# WiFiConectividad

La clase `WiFiConnectivity` simplifica la gestión WiFi en Eliobot: conexión a una red, creación de un punto de acceso y escaneo de redes disponibles.

## Inicialización

```python
from elio import WiFiConnectivity

wifi_ctrl = WiFiConnectivity()
```

## Métodos

### `connect_to_wifi(ssid, password, webpassword)` *(método estático)*

Guarda las credenciales de WiFi en el archivo `settings.toml` y muestra un mensaje para reiniciar la tarjeta.

:::note
La conexión se realiza cuando Eliobot **se reinicia**, no inmediatamente.
:::

| Paramètre     | Type | Description                                 |
|---------------|------|---------------------------------------------|
| `ssid`        | str  | Nom du réseau WiFi                          |
| `password`    | str  | Mot de passe du réseau WiFi                 |
| `webpassword` | str  | Mot de passe pour l'API web CircuitPython   |

```python
WiFiConnectivity.connect_to_wifi("MonReseau", "monmotdepasse", "webmdp")
```

El archivo `settings.toml` generó:

```toml
CIRCUITPY_WIFI_SSID = "MonReseau"
CIRCUITPY_WIFI_PASSWORD = "monmotdepasse"
CIRCUITPY_WEB_API_PASSWORD = "webmdp"
CIRCUITPY_WEB_API_PORT = 8080
```

:::tip Flujo de trabajo web
Una vez conectado, puede acceder a un IDE, administrador de archivos y terminal directamente desde la dirección IP de Eliobot en su navegador.
Más información: [Circuito de flujo de trabajo webPython](https://learn.adafruit.com/getting-started-with-web-workflow-using-the-code-editor)
:::

### `disconnect_from_wifi()` *(método estático)*

Desconecta Eliobot de la red WiFi.

```python
WiFiConnectivity.disconnect_from_wifi()
```

### `set_access_point(ssid, password)` *(método estático)*

Configura Eliobot como punto de acceso WiFi.

| Paramètre  | Type | Description                   |
|------------|------|-------------------------------|
| `ssid`     | str  | Nom du point d'accès          |
| `password` | str  | Mot de passe du point d'accès |

```python
WiFiConnectivity.set_access_point("Eliobot-AP", "motdepasse")
```

### `scan_wifi_networks()` *(método estático)*

Escanea y muestra las redes WiFi disponibles con su SSID, canal y nivel de señal (RSSI en dB y porcentaje).

```python
networks = WiFiConnectivity.scan_wifi_networks()
```

Salida de ejemplo:

```
Réseaux WiFi disponibles:
SSID: MonReseau, Canal: 6, RSSI: -55 (58%)
SSID: VoisinReseau, Canal: 11, RSSI: -72 (30%)
```

## Ejemplo completo

```python
from elio import WiFiConnectivity

# Scanner les réseaux disponibles
networks = WiFiConnectivity.scan_wifi_networks()

# Se connecter (nécessite un redémarrage)
WiFiConnectivity.connect_to_wifi("MonReseau", "monmotdepasse", "webmdp")
```
