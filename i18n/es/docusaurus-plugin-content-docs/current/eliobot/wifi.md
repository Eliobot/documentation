---
last_modified_on: "2024-02-26"
title: "Wi-Fi"
description: "Componente Eliobot - WiFi"
---


<img src={require('@site/static/img/eliobot/wifi/Eliobot - WiFi.png').default} alt="Eliobot WiFi" width="49%" />

<br/>El Wi-Fi de Eliobot te permite conectarte a una red Wi-Fi para comunicarte con otros dispositivos.

## Uso con Elioblocs

En Elioblocs utilizamos la categoría <img src={require('@site/static/img/eliobot/wifi/category-wifi.jpg').default} style={{ width: "14%", verticalAlign: "middle" }} alt="wifi connect" /> para la conexión y todo lo que se puede hacer en Redes.

## Usar con Python

Para utilizar el Wi-Fi de Eliobot en Python, existen dos posibilidades:

- Utilice la biblioteca `wifi` para conectarse a una red Wi-Fi.
- Utilice el archivo `settings.toml` para configurar Wi-Fi.

La información de la conexión Wi-Fi se almacena en el archivo `settings.toml` en la raíz de la tarjeta.

A continuación se muestra un ejemplo de un archivo `settings.toml`:
```toml
CIRCUITPY_WIFI_SSID = "your_wifi_ssid"
CIRCUITPY_WIFI_PASSWORD = "your_wifi_password"
CIRCUITPY_WEB_API_PASSWORD = "your_web_api_password"
```

:::note
La información de conexión contenida en el archivo `settings.toml` es persistente, es decir, se guarda incluso si se apaga la tarjeta, por lo que no es necesario reescribirla cada vez que se reinicia la tarjeta.
:::

:::tip
Después de escribir la información de conexión en el archivo `settings.toml`, es posible acceder a un IDE, un administrador de archivos y una terminal desde la dirección IP de Eliobot. Esta es una función integrada en CircuitPython.
Obtenga más información aquí: [Flujo de trabajo web](https://learn.adafruit.com/getting-started-with-web-workflow-using-the-code-editor)
:::

## Ejemplos relacionados

### Ejemplo de Elioblocs

>
> <img src={require('@site/static/img/eliobot/wifi/example-wifi-elioblocs.jpg').default} alt="ejemplo wifi elioblocs" width="49%" />
>

Aquí nos conectamos a una red Wi-Fi, verificamos si la conexión está establecida, en caso afirmativo, mostramos la dirección IP, de lo contrario mostramos la lista de redes disponibles.

---

### Ejemplo de Python

#### Con la librería `wifi`

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

En este ejemplo, nos conectamos a una red Wi-Fi, verificamos si la conexión está establecida, en caso afirmativo, mostramos la dirección IP, de lo contrario mostramos la lista de redes disponibles.

#### Con el archivo `settings.toml`

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

Mismo principio que el ejemplo anterior, pero esta vez escribimos la información de conexión en el archivo `settings.toml`, es decir, el programa no se conecta automáticamente a la red Wi-Fi, se debe reiniciar la tarjeta para que se establezca la conexión.

:::tip
Es posible modificar la información de conexión en el archivo `settings.toml` usando un IDE como Thonny sin tener que modificar el código Python.
:::


