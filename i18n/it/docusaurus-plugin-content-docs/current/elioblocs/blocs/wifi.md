---
last_modified_on: "2024-02-26"
title: "Rete"
description: "Elioblocs - Reti"
---

I blocchi di rete consentono di eseguire azioni relative alla connessione di Eliobot ad una rete wireless.

## **Connessione wireless**

---

### Connettiti a una rete wireless

![Connettiti a una rete Wi-Fi](/img/elioblocs/blocs/wifi/connect-wifi.jpg)

**Tipo**: Ordine

**Definizione**:

Questo blocco permette di connettere Eliobot ad una rete wireless. È necessario inserire il nome della rete e la password.
Le informazioni di connessione sono archiviate in un file denominato `settings.toml` su Eliobot, il che significa che non è necessario inserirle ogni volta.
Eliobot si connetterà automaticamente alla rete wireless all'avvio.

**Utilizzo** :

Se desideri che Eliobot si connetta ad una rete wireless per poter accedere a Internet o ad un server locale.

### Disconnettersi da una rete wireless

![Disconnetti da una rete Wi-Fi](/img/elioblocs/blocs/wifi/disconnect-wifi.jpg)

**Tipo**: Ordine

**Definizione**:

Questo blocco permette di disconnettere Eliobot da una rete wireless.

**Utilizzo** :

Se vuoi che Eliobot si disconnetta da una rete wireless per connettersi ad un'altra rete o per risparmiare energia.

### Apri un punto di accesso da Eliobot

![Apri un punto di accesso Wi-Fi](/img/elioblocs/blocs/wifi/open-hotspot.jpg)

**Tipo**: Ordine

**Definizione**:

Questo blocco permette di aprire un punto di accesso Wi-Fi da Eliobot. Ciò consente ad altri dispositivi di connettersi a Eliobot come il tuo telefono o computer.

:::warning
La password deve contenere da 8 a 64 caratteri.
:::

**Utilizzo** :

Se vuoi fornire un file html da Eliobot per rendere il tuo telefono un telecomando, ad esempio.

### Imposta il nome host

![Imposta il nome host](/img/elioblocs/blocs/wifi/hostname.jpg)

**Tipo**: Ordine

**Definizione**:

Questo blocco permette di definire il nome dell'host Eliobot. L'host name è il nome che identifica Eliobot sulla rete.
Basta digitare il nome host accompagnato dall'estensione `.local` per accedere a Eliobot da un altro dispositivo sulla stessa rete.

**Utilizzo** :

Se vuoi accedere a Eliobot da un altro dispositivo sulla stessa rete.
Ad esempio, se vuoi accedere alla pagina html che hai creato su Eliobot dal tuo telefono.

### È connesso a una rete wireless?

![È connesso a una rete Wi-Fi](/img/elioblocs/blocs/wifi/is-connected.jpg)

**Tipo**: blocco booleano

**Definizione**:

Questo blocco permette di testare se Eliobot è connesso ad una rete wireless. Restituisce `vero` se Eliobot è connesso ad una rete wireless e `falso` altrimenti.

**Utilizzo** :

Se vuoi eseguire un'azione solo se Eliobot è connesso ad una rete wireless.

### Scansiona le reti wireless disponibili

![Scansione reti Wi-Fi disponibili](/img/elioblocs/blocs/wifi/scan-wifi.jpg)

**Tipo**: valore

**Definizione**:

Questo blocco consente di scansionare le reti wireless disponibili. Restituisce un elenco di reti wireless disponibili con il nome e la potenza del segnale.

**Utilizzo** :

Se desideri visualizzare le reti wireless disponibili per scegliere a quale rete connetterti.

### Ottieni l'indirizzo IP della rete wireless

![Ottieni indirizzo IP della rete Wi-Fi](/img/elioblocs/blocs/wifi/get-ip.jpg)

**Tipo**: valore

**Definizione**:

Questo blocco permette di ottenere l'indirizzo IP della rete wireless a cui Eliobot è connesso.

**Utilizzo** :

Se vuoi conoscere l'indirizzo IP della rete wireless per comunicare con Eliobot, ti servirà per connetterti a Eliobot da un altro dispositivo.

---

### Crea una pagina html

![Crea una pagina HTML](/img/elioblocs/blocs/wifi/create-html-page.jpg)

**Tipo**: Ordine

**Definizione**:

Questo blocco ti consente di creare una pagina HTML. Una pagina HTML è una pagina Web che può essere visualizzata in un browser Web.
Verrà salvato in un file html su Eliobot chiamato `index.html` e verrà inserito nella cartella `www`.
Puoi scegliere il titolo della pagina e inserirne il contenuto. Una volta posizionato questo blocco disabilita tutti i loop
ripetuto all'infinito per avviare il web server, sarà possibile accedervi collegandosi ad Eliobot in modalità access point
e inserendo l'indirizzo IP di Eliobot nel tuo browser web.

**Utilizzo** :

Se desideri creare una pagina Web per visualizzare informazioni e posizionare elementi interattivi come pulsanti o display.

### Aggiungi un pulsante alla tua pagina html

![Aggiungi un pulsante a una pagina HTML](/img/elioblocs/blocs/wifi/add-html-button.jpg)

**Tipo**: Ordine

**Definizione**:

Questo blocco ti consente di aggiungere un pulsante a una pagina HTML.
Un pulsante è un elemento interattivo su cui l'utente può fare clic.
Lì puoi scegliere il testo del pulsante e il codice che verrà eseguito quando si fa clic sul pulsante.
Puoi anche scegliere il colore del pulsante.

**Utilizzo** :

Se vuoi realizzare un telecomando per controllare Eliobot dal tuo telefono.

### Aggiungi un visualizzatore alla tua pagina html

![Aggiungi un display a una pagina HTML](/img/elioblocs/blocs/wifi/add-html-value.jpg)

**Tipo**: Ordine

**Definizione**:

Questo blocco ti consente di aggiungere un display a una pagina HTML, un display è un elemento che mostra il valore che gli dai.
È possibile inserire il valore che si desidera visualizzare all'interno del display e il nome del display.

**Utilizzo** :

Se vuoi sapere se c'è un ostacolo davanti a Eliobot dal tuo telefono.

### Crea un tag html

![Crea un tag HTML](/img/elioblocs/blocs/wifi/create-html-div.jpg)

**Tipo**: Ordine

**Definizione**:

Questo blocco ti consente di creare un tag HTML. Un tag HTML è un elemento di una pagina web che aiuta a strutturare il contenuto.
Lì puoi scegliere il tipo di tag e inserirne il contenuto.

Opzioni disponibili:
-div
- centro

**Utilizzo** :

Se vuoi strutturare il contenuto della tua pagina html.


### Crea un titolo html

![Crea un titolo HTML](/img/elioblocs/blocs/wifi/create-html-title.jpg)

**Tipo**: Ordine

**Definizione**:

Questo blocco ti consente di creare un titolo HTML. Un titolo HTML è un testo che avrà una certa dimensione e sarà in grassetto.
Lì puoi scegliere il testo del titolo e la sua dimensione.

Opzioni disponibili:
-h1
-h2
-h3
-h4
-h5
-h6

**Utilizzo** :

Se vuoi visualizzare un titolo nella tua pagina html.

### Crea un paragrafo html

![Crea un paragrafo HTML](/img/elioblocs/blocs/wifi/create-html-text.jpg)

**Tipo**: Ordine

**Definizione**:

Questo blocco ti consente di creare un paragrafo HTML. Un paragrafo HTML è il testo che verrà visualizzato sulla pagina web.

**Utilizzo** :

Se vuoi visualizzare del testo nella tua pagina html.
