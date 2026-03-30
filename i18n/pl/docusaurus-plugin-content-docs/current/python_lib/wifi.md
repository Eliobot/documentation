---
sidebar_position: 5
title: "Łączność Wi-Fi"
description: "Klasa WiFiConnectivity — zarządzanie Wi-Fi na Eliobocie"
---

# Łączność Wi-Fi

Klasa `WiFiConnectivity` upraszcza zarządzanie Wi-Fi w Eliobocie: połączenie z siecią, utworzenie punktu dostępowego i skanowanie dostępnych sieci.

## Inicjalizacja

```python
from elio import WiFiConnectivity

wifi_ctrl = WiFiConnectivity()
```

## Metody

### `connect_to_wifi(ssid, password, webpassword)` *(metoda statyczna)*

Zapisuje dane uwierzytelniające Wi-Fi w pliku `settings.toml` i wyświetla komunikat o konieczności ponownego uruchomienia karty.

:::note
Połączenie zostaje nawiązane po **restartowaniu** Eliobota, a nie natychmiast.
:::

| Paramètre     | Type | Description                                 |
|---------------|------|---------------------------------------------|
| `ssid`        | str  | Nom du réseau WiFi                          |
| `password`    | str  | Mot de passe du réseau WiFi                 |
| `webpassword` | str  | Mot de passe pour l'API web CircuitPython   |

```python
WiFiConnectivity.connect_to_wifi("MonReseau", "monmotdepasse", "webmdp")
```

Wygenerowany plik `settings.toml`:

```toml
CIRCUITPY_WIFI_SSID = "MonReseau"
CIRCUITPY_WIFI_PASSWORD = "monmotdepasse"
CIRCUITPY_WEB_API_PASSWORD = "webmdp"
CIRCUITPY_WEB_API_PORT = 8080
```

:::tip Przepływ pracy w sieci Web
Po podłączeniu możesz uzyskać dostęp do IDE, menedżera plików i terminala bezpośrednio z adresu IP Eliobota w przeglądarce.
Dowiedz się więcej: [Web Workflow CircuitPython](https://learn.adafruit.com/getting-started-with-web-workflow-using-the-code-editor)
:::

### `disconnect_from_wifi()` *(metoda statyczna)*

Rozłącza Eliobota z siecią Wi-Fi.

```python
WiFiConnectivity.disconnect_from_wifi()
```

### `set_access_point(ssid, password)` *(metoda statyczna)*

Skonfiguruj Eliobota jako punkt dostępu Wi-Fi.

| Paramètre  | Type | Description                   |
|------------|------|-------------------------------|
| `ssid`     | str  | Nom du point d'accès          |
| `password` | str  | Mot de passe du point d'accès |

```python
WiFiConnectivity.set_access_point("Eliobot-AP", "motdepasse")
```

### `scan_wifi_networks()` *(metoda statyczna)*

Skanuje i wyświetla dostępne sieci Wi-Fi wraz z ich identyfikatorem SSID, kanałem i poziomem sygnału (RSSI w dB i procentach).

```python
networks = WiFiConnectivity.scan_wifi_networks()
```

Przykładowe wyjście:

```
Réseaux WiFi disponibles:
SSID: MonReseau, Canal: 6, RSSI: -55 (58%)
SSID: VoisinReseau, Canal: 11, RSSI: -72 (30%)
```

## Kompletny przykład

```python
from elio import WiFiConnectivity

# Scanner les réseaux disponibles
networks = WiFiConnectivity.scan_wifi_networks()

# Se connecter (nécessite un redémarrage)
WiFiConnectivity.connect_to_wifi("MonReseau", "monmotdepasse", "webmdp")
```
