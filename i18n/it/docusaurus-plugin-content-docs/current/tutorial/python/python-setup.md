---
sidebar_position: 1
---

# Configurazione di Python

Il primo passo per iniziare a programmare è configurare un ambiente di sviluppo (si parla di IDE in inglese). Quello che ti proponiamo si chiama Thonny ed è disponibile proprio qui: https://thonny.org/

Una volta scaricata e installata la versione corrispondente al tuo computer, configureremo Thonny affinché sia ​​compatibile con Eliobot.

![testo alternativo](/img/tutorial/python/python-setup/screenshot.png)

Durante il primo avvio Thonny ti chiede di scegliere la tua lingua, tu puoi quindi scegliere “Francese” quindi cliccare su “Andiamo!”

![testo alternativo](/img/tutorial/python/python-setup/Capture-decran-2023-08-07-a-11.45.44-1024x565.png)

Ora che Thonny è lanciato, gli collegheremo Eliobot. Collega Eliobot al tuo computer utilizzando il cavo USB, quindi nella parte superiore della finestra fai clic su "Esegui", quindi su "Configura interprete".

![testo alternativo](/img/tutorial/python/python-setup/Capture-decran-2023-08-07-a-11.48.08.png)

Si arriva quindi su una finestra con due menù a tendina che dovranno essere configurati come di seguito. Il primo ti chiede il tipo di interprete, nel nostro caso è “CircuitPython”. La seconda chiede di selezionare la porta a cui connettersi, quindi selezionare “Eliobot”.

A volte la porta viene riconosciuta come "CircuitPython" in Windows, in questo caso utilizzeremo questa.

![testo alternativo](/img/tutorial/python/python-setup/Capture-decran-2023-08-07-a-11.49.57-2048x1401.png)

Dopo aver cliccato su “OK” il led di Eliobot si illumina di bianco significa che è ben collegato. Per verificare la connessione possiamo inviargli il comando “help()” nella console in basso, dovrebbe poi rispondere con il seguente messaggio:

![testo alternativo](/img/tutorial/python/python-setup/Capture-decran-2023-08-07-a-11.51.05.png)

Un ultimo passo per rendere l'interfaccia più gradevole è visualizzare il contenuto di Eliobot. Per fare ciò, vai in alto in “Visualizza” quindi “File”

![testo alternativo](/img/tutorial/python/python-setup/Capture-decran-2023-08-07-a-11.51.33.png)

Puoi vedere che una nuova colonna è appena apparsa a sinistra.

Sotto “Dispositivo CircuitPython” ci sono tutti i file contenuti nel tuo Eliobot.

Troverai in particolare il file “main.py”, il programma principale e che contiene tutto il codice dell'ultimo programma che hai inviato a Eliobot. L'estensione “.py” significa che si tratta di un file scritto in Python.

Apriremo il file "main.py" per creare il nostro programma.
Un esempio comune è visualizzare il messaggio “Hello world!” e nel nostro caso utilizzeremo il comando “print()” per visualizzarlo nella console.

Il nostro programma sta in una sola riga: print(“Ciao mondo!”)

Per vedere visualizzato il messaggio non dovremo fare altro che eseguire il programma cliccando sul pulsante con la freccia ▶️.

Dovresti ottenere il seguente risultato:

![testo alternativo](/img/tutorial/python/python-setup/Capture-decran-2023-08-07-a-13.58.43-1.png)

Ed ecco fatto, hai appena creato il tuo primo comando in Python per Eliobot!

Nell'esempio seguente vedremo insieme come costruire un programma che non necessita di un computer per funzionare.