---
sidebar_position: 5
title: "WiFiConnectivity"
description: "Classe WiFiConnectivity — gestion du WiFi sur Eliobot"
---

# WiFiConnectivity

La classe `WiFiConnectivity` simplifie la gestion du WiFi sur Eliobot : connexion à un réseau, création d'un point d'accès et scan des réseaux disponibles.

## Initialisation

```python
from elio import WiFiConnectivity

wifi_ctrl = WiFiConnectivity()
```

## Méthodes

### `connect_to_wifi(ssid, password, webpassword)` *(méthode statique)*

Enregistre les identifiants WiFi dans le fichier `settings.toml` et affiche un message pour redémarrer la carte.

:::note
La connexion est effectuée au **redémarrage** d'Eliobot, pas immédiatement.
:::

| Paramètre     | Type | Description                                 |
|---------------|------|---------------------------------------------|
| `ssid`        | str  | Nom du réseau WiFi                          |
| `password`    | str  | Mot de passe du réseau WiFi                 |
| `webpassword` | str  | Mot de passe pour l'API web CircuitPython   |

```python
WiFiConnectivity.connect_to_wifi("MonReseau", "monmotdepasse", "webmdp")
```

Le fichier `settings.toml` généré :

```toml
CIRCUITPY_WIFI_SSID = "MonReseau"
CIRCUITPY_WIFI_PASSWORD = "monmotdepasse"
CIRCUITPY_WEB_API_PASSWORD = "webmdp"
CIRCUITPY_WEB_API_PORT = 8080
```

:::tip Web Workflow
Une fois connecté, tu peux accéder à un IDE, un gestionnaire de fichiers et un terminal directement depuis l'adresse IP d'Eliobot dans ton navigateur.
En savoir plus : [Web Workflow CircuitPython](https://learn.adafruit.com/getting-started-with-web-workflow-using-the-code-editor)
:::

### `disconnect_from_wifi()` *(méthode statique)*

Déconnecte Eliobot du réseau WiFi.

```python
WiFiConnectivity.disconnect_from_wifi()
```

### `set_access_point(ssid, password)` *(méthode statique)*

Configure Eliobot en point d'accès WiFi.

| Paramètre  | Type | Description                   |
|------------|------|-------------------------------|
| `ssid`     | str  | Nom du point d'accès          |
| `password` | str  | Mot de passe du point d'accès |

```python
WiFiConnectivity.set_access_point("Eliobot-AP", "motdepasse")
```

### `scan_wifi_networks()` *(méthode statique)*

Scanne et affiche les réseaux WiFi disponibles avec leur SSID, canal et niveau de signal (RSSI en dB et en pourcentage).

```python
networks = WiFiConnectivity.scan_wifi_networks()
```

Exemple de sortie :

```
Réseaux WiFi disponibles:
SSID: MonReseau, Canal: 6, RSSI: -55 (58%)
SSID: VoisinReseau, Canal: 11, RSSI: -72 (30%)
```

## Exemple complet

```python
from elio import WiFiConnectivity

# Scanner les réseaux disponibles
networks = WiFiConnectivity.scan_wifi_networks()

# Se connecter (nécessite un redémarrage)
WiFiConnectivity.connect_to_wifi("MonReseau", "monmotdepasse", "webmdp")
```
