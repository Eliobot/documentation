---
last_modified_on: "2024-02-26"
title: "Wifi"
description: "Componenta Eliobot - WiFi"
---


<img src={require('@site/static/img/eliobot/wifi/Eliobot - WiFi.png').default} alt="Eliobot WiFi" width="49%" />

<br/>Wi-Fi-ul lui Eliobot vă permite să vă conectați la o rețea Wi-Fi pentru a comunica cu alte dispozitive.

## Utilizați cu Elioblocs

În Elioblocs, folosim categoria <img src={require('@site/static/img/eliobot/wifi/category-wifi.jpg').default} style={{ width: "14%", verticalAlign: "middle" }} alt="wifi connect" /> pentru conexiune și tot ce se poate face în Rețele.

## Utilizați cu Python

Pentru a utiliza Wi-Fi-ul lui Eliobot în Python, există două posibilități:

- Utilizați biblioteca `wifi` pentru a vă conecta la o rețea Wi-Fi.
- Utilizați fișierul `settings.toml` pentru a configura Wi-Fi.

Informațiile de conexiune Wi-Fi sunt stocate în fișierul `settings.toml` de la rădăcina cardului.

Iată un exemplu de fișier `settings.toml`:
```toml
CIRCUITPY_WIFI_SSID = "your_wifi_ssid"
CIRCUITPY_WIFI_PASSWORD = "your_wifi_password"
CIRCUITPY_WEB_API_PASSWORD = "your_web_api_password"
```

:::note
Informațiile de conexiune conținute în fișierul `settings.toml` sunt persistente, adică sunt salvate chiar dacă cardul este oprit, deci nu este necesar să o rescrieți de fiecare dată când cardul este repornit.
:::

:::tip
După scrierea informațiilor de conectare în fișierul `settings.toml`, este posibil să accesați un IDE, un manager de fișiere și un terminal de pe adresa IP Eliobot. Aceasta este o funcție integrată în CircuitPython.
Aflați mai multe aici: [Web Workflow](https://learn.adafruit.com/getting-started-with-web-workflow-using-the-code-editor)
:::

## Exemple înrudite

### Exemplu Elioblocs

>
> <img src={require('@site/static/img/eliobot/wifi/example-wifi-elioblocs.jpg').default} alt="exemple wifi elioblocs" width="49%" />
>   

Aici, ne conectăm la o rețea Wi-Fi, verificăm dacă conexiunea este stabilită dacă da, afișăm adresa IP în caz contrar afișăm lista rețelelor disponibile.

---

### Exemplu Python

#### Cu librăria `wifi`

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

În acest exemplu, ne conectăm la o rețea Wi-Fi, verificăm dacă conexiunea este stabilită dacă da, afișăm adresa IP în caz contrar afișăm lista rețelelor disponibile.

#### Cu fișierul `settings.toml`

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

Același principiu ca exemplul anterior, dar de data aceasta, scriem informațiile de conectare în fișierul `settings.toml` adică programul nu se conectează automat la rețeaua Wi-Fi, cardul trebuie repornit pentru ca conexiunea să fie stabilită.

:::tip
Este posibil să modificați informațiile de conectare din fișierul `settings.toml` folosind un IDE precum Thonny fără a fi nevoie să modificați codul Python.
:::



