---
last_modified_on: "2024-02-26"
title: "Wi-Fi"
description: "Komponent Eliobota - WiFi"
---


<img src={require('@site/static/img/eliobot/wifi/Eliobot - WiFi.png').default} alt="Eliobot WiFi" width="49%" />

<br/>Wi-Fi Eliobota umożliwia połączenie się z siecią Wi-Fi w celu komunikacji z innymi urządzeniami.

## Używaj z Elioblocami

W Elioblocs używamy kategorii <img src={require('@site/static/img/eliobot/wifi/category-wifi.jpg').default} style={{ width: "14%", verticalAlign: "middle" }} alt="wifi connect" /> do połączenia i wszystkiego, co można zrobić w sieciach.

## Używaj z Pythonem

Aby skorzystać z Wi-Fi Eliobota w Pythonie, istnieją dwie możliwości:

- Użyj biblioteki `wifi`, aby połączyć się z siecią Wi-Fi.
- Użyj pliku `settings.toml`, aby skonfigurować Wi-Fi.

Informacje o połączeniu Wi-Fi są przechowywane w pliku `settings.toml` w katalogu głównym karty.

Oto przykład pliku `settings.toml`:
```toml
CIRCUITPY_WIFI_SSID = "your_wifi_ssid"
CIRCUITPY_WIFI_PASSWORD = "your_wifi_password"
CIRCUITPY_WEB_API_PASSWORD = "your_web_api_password"
```

:::note
Informacje o połączeniu zawarte w pliku `settings.toml` są trwałe, to znaczy są zapisywane nawet po wyłączeniu karty, więc nie ma konieczności ich ponownego zapisywania przy każdym ponownym uruchomieniu karty.
:::

:::tip
Po zapisaniu informacji o połączeniu w pliku `settings.toml` możliwy jest dostęp do IDE, menedżera plików i terminala z adresu IP Eliobota. Jest to funkcja zintegrowana z CircuitPython.
Dowiedz się więcej tutaj: [Przebieg pracy w sieci](https://learn.adafruit.com/getting-started-with-web-workflow-using-the-code-editor)
:::

## Powiązane przykłady

### Przykład Elioblocs

>
> <img src={require('@site/static/img/eliobot/wifi/example-wifi-elioblocs.jpg').default} alt="exemple wifi elioblocs" width="49%" />
>   

Tutaj łączymy się z siecią Wi-Fi, sprawdzamy czy połączenie zostało nawiązane, jeśli tak, wyświetlamy adres IP, w przeciwnym razie wyświetlamy listę dostępnych sieci.

---

### Przykład Pythona

#### Z księgarnią `wifi`

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

W tym przykładzie łączymy się z siecią Wi-Fi, sprawdzamy czy połączenie zostało nawiązane, jeśli tak, wyświetlamy adres IP, w przeciwnym razie wyświetlamy listę dostępnych sieci.

#### Z plikiem `settings.toml`

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

Zasada taka sama jak w poprzednim przykładzie, tyle że tym razem informację o połączeniu zapisujemy w pliku `settings.toml` czyli program nie łączy się automatycznie z siecią Wi-Fi, aby połączenie zostało nawiązane, należy ponownie uruchomić kartę.

:::tip
Możliwe jest modyfikowanie informacji o połączeniu w pliku `settings.toml` przy użyciu IDE takiego jak Thonny bez konieczności modyfikowania kodu Pythona.
:::



