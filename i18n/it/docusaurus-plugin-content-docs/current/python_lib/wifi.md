---
sidebar_position: 5
title: "Connettività WiFi"
description: "Classe WiFiConnectivity — Gestione WiFi su Eliobot"
---

# Connettività WiFi

La classe `WiFiConnectivity` semplifica la gestione WiFi su Eliobot: connessione ad una rete, creazione di un punto di accesso e scansione delle reti disponibili.

## Inizializzazione

```python
from elio import WiFiConnectivity

wifi_ctrl = WiFiConnectivity()
```

## Metodi

### `connect_to_wifi(ssid, password, webpassword)` *(metodo statico)*

Salva le credenziali WiFi nel file `settings.toml` e visualizza un messaggio per riavviare la scheda.

:::note
La connessione viene stabilita al **riavvio** di Eliobot, non immediatamente.
:::

| Paramètre     | Type | Description                                 |
|---------------|------|---------------------------------------------|
| `ssid`        | str  | Nom du réseau WiFi                          |
| `password`    | str  | Mot de passe du réseau WiFi                 |
| `webpassword` | str  | Mot de passe pour l'API web CircuitPython   |

```python
WiFiConnectivity.connect_to_wifi("MonReseau", "monmotdepasse", "webmdp")
```

Il file `settings.toml` generato:

```toml
CIRCUITPY_WIFI_SSID = "MonReseau"
CIRCUITPY_WIFI_PASSWORD = "monmotdepasse"
CIRCUITPY_WEB_API_PASSWORD = "webmdp"
CIRCUITPY_WEB_API_PORT = 8080
```

:::tip Flusso di lavoro Web
Una volta connesso, puoi accedere a IDE, file manager e terminale direttamente dall'indirizzo IP di Eliobot nel tuo browser.
Ulteriori informazioni: [Circuito del flusso di lavoro WebPython](https://learn.adafruit.com/getting-started-with-web-workflow-using-the-code-editor)
:::

### `disconnect_from_wifi()` *(metodo statico)*

Disconnette Eliobot dalla rete WiFi.

```python
WiFiConnectivity.disconnect_from_wifi()
```

### `set_access_point(ssid, password)` *(metodo statico)*

Configura Eliobot come punto di accesso WiFi.

| Paramètre  | Type | Description                   |
|------------|------|-------------------------------|
| `ssid`     | str  | Nom du point d'accès          |
| `password` | str  | Mot de passe du point d'accès |

```python
WiFiConnectivity.set_access_point("Eliobot-AP", "motdepasse")
```

### `scan_wifi_networks()` *(metodo statico)*

Esegue la scansione e visualizza le reti WiFi disponibili con il loro SSID, canale e livello del segnale (RSSI in dB e percentuale).

```python
networks = WiFiConnectivity.scan_wifi_networks()
```

Esempio di output:

```
Réseaux WiFi disponibles:
SSID: MonReseau, Canal: 6, RSSI: -55 (58%)
SSID: VoisinReseau, Canal: 11, RSSI: -72 (30%)
```

## Esempio completo

```python
from elio import WiFiConnectivity

# Scanner les réseaux disponibles
networks = WiFiConnectivity.scan_wifi_networks()

# Se connecter (nécessite un redémarrage)
WiFiConnectivity.connect_to_wifi("MonReseau", "monmotdepasse", "webmdp")
```
