---
last_modified_on: "2024-02-26"
title: "Wifi"
description: "Componente Eliobot - WiFi"
---


<img src={require('@site/static/img/eliobot/wifi/Eliobot - WiFi.png').default} alt="Eliobot WiFi" width="49%" />

<br/>Il Wi-Fi di Eliobot ti consente di connetterti a una rete Wi-Fi per comunicare con altri dispositivi.

## Utilizzare con Eliobloc

In Eliobloc utilizziamo la categoria <img src={require('@site/static/img/eliobot/wifi/category-wifi.jpg').default} style={{ width: "14%", verticalAlign: "middle" }} alt="wifi connect" /> per la connessione e tutto ciò che si può fare nelle Reti.

## Da utilizzare con Python

Per utilizzare il Wi-Fi di Eliobot in Python ci sono due possibilità:

- Utilizza la libreria `wifi` per connetterti a una rete Wi-Fi.
- Utilizzare il file `settings.toml` per configurare il Wi-Fi.

Le informazioni sulla connessione Wi-Fi sono archiviate nel file `settings.toml` nella radice della scheda.

Ecco un esempio di un file `settings.toml`:
```toml
CIRCUITPY_WIFI_SSID = "your_wifi_ssid"
CIRCUITPY_WIFI_PASSWORD = "your_wifi_password"
CIRCUITPY_WEB_API_PASSWORD = "your_web_api_password"
```

:::note
Le informazioni di connessione contenute nel file `settings.toml` sono persistenti, cioè vengono salvate anche se la scheda viene spenta, quindi non è necessario riscriverle ogni volta che si riavvia la scheda.
:::

:::tip
Dopo aver scritto le informazioni di connessione nel file `settings.toml`, è possibile accedere ad un IDE, ad un file manager ed ad un terminale dall'indirizzo IP di Eliobot. Questa è una funzione integrata in CircuitPython.
Ulteriori informazioni qui: [Web Workflow](https://learn.adafruit.com/getting-started-with-web-workflow-using-the-code-editor)
:::

## Esempi correlati

### Esempio di Eliobloc

>
> <img src={require('@site/static/img/eliobot/wifi/example-wifi-elioblocs.jpg').default} alt="exemple wifi elioblocs" width="49%" />
>   

Qui ci colleghiamo a una rete Wi-Fi, controlliamo se la connessione è stabilita, se sì, visualizziamo l'indirizzo IP altrimenti visualizziamo l'elenco delle reti disponibili.

---

### Esempio Python

#### Con la libreria `wifi`

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

In questo esempio ci colleghiamo ad una rete Wi-Fi, controlliamo se la connessione è stabilita, se sì, visualizziamo l'indirizzo IP altrimenti visualizziamo l'elenco delle reti disponibili.

#### Con il file `settings.toml`

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

Stesso principio dell'esempio precedente, ma questa volta scriviamo le informazioni di connessione nel file `settings.toml` cioè il programma non si connette automaticamente alla rete Wi-Fi, è necessario riavviare la scheda affinché la connessione venga stabilita.

:::tip
È possibile modificare le informazioni di connessione nel file `settings.toml` utilizzando un IDE come Thonny senza dover modificare il codice Python.
:::



