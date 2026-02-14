---
last_modified_on: "2024-02-26"
title: "Wifi"
description: "Eliobot-component - WiFi"
---


<img src={require('@site/static/img/eliobot/wifi/Eliobot - WiFi.png').default} alt="Eliobot WiFi" width="49%" />

Met <br/>Eliobot's Wi-Fi kunt u verbinding maken met een Wi-Fi-netwerk om met andere apparaten te communiceren.

## Gebruik met Elioblocs

In Elioblocs gebruiken we de categorie <img src={require('@site/static/img/eliobot/wifi/category-wifi.jpg').default} style={{ width: "14%", verticalAlign: "middle" }} alt="wifi connect" /> voor de verbinding en alles wat gedaan kan worden in Netwerken.

## Gebruik met Python

Om de Wi-Fi van Eliobot in Python te gebruiken, zijn er twee mogelijkheden:

- Gebruik de `wifi` bibliotheek om verbinding te maken met een Wi-Fi-netwerk.
- Gebruik het bestand `settings.toml` om Wi-Fi te configureren.

Wi-Fi-verbindingsinformatie wordt opgeslagen in het `settings.toml`-bestand in de hoofdmap van de kaart.

Hier is een voorbeeld van een `settings.toml`-bestand:
```toml
CIRCUITPY_WIFI_SSID = "your_wifi_ssid"
CIRCUITPY_WIFI_PASSWORD = "your_wifi_password"
CIRCUITPY_WEB_API_PASSWORD = "your_web_api_password"
```

:::note
De verbindingsinformatie in het `settings.toml`-bestand is persistent, dat wil zeggen dat deze wordt opgeslagen, zelfs als de kaart is uitgeschakeld. Het is dus niet nodig om deze telkens opnieuw te schrijven wanneer de kaart opnieuw wordt opgestart.
:::

:::tip
Na het schrijven van de verbindingsinformatie in het `settings.toml` bestand, is het mogelijk om toegang te krijgen tot een IDE, een bestandsbeheerder en een terminal vanaf het Eliobot IP-adres. Dit is een functie geïntegreerd in CircuitPython.
Lees hier meer: ​​[Webworkflow](https://learn.adafruit.com/getting-started-with-web-workflow-using-the-code-editor)
:::

## Gerelateerde voorbeelden

### Elioblocs-voorbeeld

>
> <img src={require('@site/static/img/eliobot/wifi/example-wifi-elioblocs.jpg').default} alt="exemple wifi elioblocs" width="49%" />
>   

Hier maken we verbinding met een Wi-Fi-netwerk, we controleren of de verbinding tot stand is gebracht, zo ja, we geven het IP-adres weer, anders geven we de lijst met beschikbare netwerken weer.

---

### Python-voorbeeld

#### Bij de boekwinkel `wifi`

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

In dit voorbeeld maken we verbinding met een Wi-Fi-netwerk, controleren we of de verbinding tot stand is gebracht en zo ja, dan geven we het IP-adres weer, anders geven we de lijst met beschikbare netwerken weer.

#### Met het bestand `settings.toml`

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

Hetzelfde principe als het vorige voorbeeld, maar deze keer schrijven we de verbindingsinformatie in het bestand `settings.toml`. Dat wil zeggen dat het programma niet automatisch verbinding maakt met het Wi-Fi-netwerk; de kaart moet opnieuw worden opgestart om de verbinding tot stand te brengen.

:::tip
Het is mogelijk om de verbindingsinformatie in het `settings.toml`-bestand te wijzigen met behulp van een IDE zoals Thonny zonder dat u de Python-code hoeft te wijzigen.
:::



