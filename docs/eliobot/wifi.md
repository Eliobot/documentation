---
last_modified_on: "2024-02-26"
title: "WiFi"
description: "Eliobot component - WiFi"
---


<img src={require('@site/static/img/eliobot/wifi/Eliobot - WiFi.png').default} alt="Eliobot WiFi" width="49%" />

<br/>Le Wi-Fi d'Eliobot permet de se connecter à un réseau Wi-Fi pour communiquer avec d'autres appareils.

## Utilisation avec Elioblocs

Dans Elioblocs, on utilise la catégorie <img src={require('@site/static/img/eliobot/wifi/category-wifi.jpg').default} style={{ width: "14%", verticalAlign: "middle" }} alt="wifi connect" /> pour la connexion et tout ce qu'il est possible de réaliser en Réseaux.

## Utilisation avec Python

Pour utiliser le Wi-Fi d'Eliobot en Python, il existe deux possibilités :

- Utiliser la librairie `wifi` pour se connecter à un réseau Wi-Fi.
- Utiliser le fichier `settings.toml` pour configurer le Wi-Fi.

Les informations de connexion au Wi-Fi sont stockées dans le fichier `settings.toml` à la racine de la carte.

Voici un exemple de fichier `settings.toml` :
```toml
CIRCUITPY_WIFI_SSID = "your_wifi_ssid"
CIRCUITPY_WIFI_PASSWORD = "your_wifi_password"
CIRCUITPY_WEB_API_PASSWORD = "your_web_api_password"
```
:::note
Les informations de connexions contenue dans le fichier `settings.toml` sont persistantes, c'est-à-dire qu'elles sont sauvegardées même si la carte est éteinte, il n'est donc pas nécessaire de les réécrire à chaque redémarrage de la carte.
:::

:::tip
Après avoir écrit les informations de connexion dans le fichier `settings.toml`, il est possible d'accéder à un IDE, un manageur de fichier et un terminal depuis l'adresse IP d'Eliobot c'est une fonction intégrée à CircuitPython.
En savoir plus ici : [Web Workflow](https://learn.adafruit.com/getting-started-with-web-workflow-using-the-code-editor)
:::
## Exemples associés

### Exemple Elioblocs

>
> <img src={require('@site/static/img/eliobot/wifi/example-wifi-elioblocs.jpg').default} alt="exemple wifi elioblocs" width="49%" />
>   

Ici, on se connecte à un réseau Wi-Fi, on vérifie si la connexion est établie si oui, on affiche l'adresse IP sinon on affiche la liste des réseaux disponible.

---

### Exemple Python

#### Avec la librairie `wifi`

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

Dans cet exemple, on se connecte à un réseau Wi-Fi, on vérifie si la connexion est établie si oui, on affiche l'adresse IP sinon on affiche la liste des réseaux disponible.

#### Avec le fichier `settings.toml`

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

Même principe que l'exemple précédent, mais cette fois-ci, on écrit les informations de connexion dans le fichier `settings.toml` à savoir que le programme ne se connecte pas automatiquement au réseau Wi-Fi, il faut redémarrer la carte pour que la connexion soit établie.

:::tip
Il est possible de modifier les informations de connexion dans le fichier `settings.toml` grâce à un IDE comme Thonny sans avoir à modifier le code Python.
:::



