---
sidebar_position: 1
---

# Lampeggia il LED

Ora che hai assemblato il tuo Eliobot imparerai a programmarlo. In questo tutorial ti guideremo alla creazione di un programma di test molto semplice che ti permetterà di prendere confidenza con l'interfaccia.

## Creazione del programma

Questo programma di “test” ti permetterà di accendere una luce verde (o quella a tua scelta) su Eliobot. Segui attentamente tutti i passaggi e il risultato sarà lì :)

### Selezione del colore

Il primo passo è selezionare un colore. Vai nella casella degli strumenti e fai clic sul blocco "Colori". Seleziona il blocco "Mostra colore" e trascinalo nell'area di lavoro.

![Testo alternativo](/img/tutorial/elioblocs/blink-led-elioblocs/prog_blink_1-1.gif)

### Scelta del colore

Potrai poi cambiare il colore della luce che si accenderà su Eliobot.

Clicca sul punto rosso nell'area di lavoro quindi seleziona il colore che desideri ottenere.

![Testo alternativo](/img/tutorial/elioblocs/blink-led-elioblocs/prog_blink_2.gif)

E' possibile creare il colore che preferite: verde, blu, rosa, giallo... buon divertimento!

### Scelta del ritardo

Il terzo passo è determinare per quanto tempo la luce rimarrà accesa.

Fare clic sul blocco "Utilità" quindi su "Aspetta 1 secondo(i)". Trascina prima il blocco sottostante nell'area di lavoro.

![Testo alternativo](/img/tutorial/elioblocs/blink-led-elioblocs/prog_blink_3.gif)

Hai notato l'ombra che appare sotto il blocco quando lo avvicini ad un altro?
Rilasciatelo e si unirà

### Spegni la luce

Il quarto passo è spegnere la luce per provocare l'effetto lampeggiante.

Per spegnere la luce di Eliobot torna su "Colori" e inserisci dopo gli altri il blocco "Spegni la luce".

![Testo alternativo](/img/tutorial/elioblocs/blink-led-elioblocs/prog_blink_4.gif)

### Scelta del ritardo

Il quinto passo è determinare per quanto tempo la luce rimarrà spenta.

Quindi puoi nuovamente aggiungere un blocco "Aspetta 1 secondo(i)" in basso.

![Testo alternativo](/img/tutorial/elioblocs/blink-led-elioblocs/prog_blink_5.gif)

### Creazione di un ciclo

Il sesto passo è creare un ciclo in modo che il LED lampeggi all'infinito.

Fare clic sulla categoria "Loop" quindi su "ripeti mentre... fai". Trascinalo attorno ai blocchi già presenti per includerli nel loop.

![Testo alternativo](/img/tutorial/elioblocs/blink-led-elioblocs/prog_blink_6-1.gif)

Guarda, sul blocco verde in alto, manca un pezzo per completare il ciclo.

Eliobot sta aspettando una condizione per eseguire il suo programma, quindi forzeremo il ciclo in modo che il programma si ripeta all'infinito indipendentemente dalla condizione.

In “Condizioni” seleziona il blocco “vero”. Fai scorrere questo blocco in cima al ciclo per completarlo e voilà!

![Testo alternativo](/img/tutorial/elioblocs/blink-led-elioblocs/prog_blink_7.gif)

##Programmazione di Eliobot

### Connessione Eliobot

Adesso è il momento di connettere Eliobot tramite il cavo USB se non l'hai già fatto.

Il piccolo LED accanto alla presa si accende per indicare che Eliobot è in ricarica.
Quando si spegne significa che è completamente carico!

![Testo alternativo](/img/tutorial/elioblocs/blink-led-elioblocs/DSC03852-scaled.jpg)

### Invio codice a Eliobot

Per testare il tuo programma su Eliobot è sufficiente cliccare su “Programma”

![Testo alternativo](/img/tutorial/elioblocs/blink-led-elioblocs/pp.png)

Si apre una finestra che richiede l'accesso ad una porta seriale, selezionare “Eliobot” o in alcuni casi “CircuitPython”, quindi “Connessione”

![Testo alternativo](/img/tutorial/elioblocs/blink-led-elioblocs/Capture-decran-2023-09-04-a-11.55.22.png)

Eliobot si riavvierà quindi lampeggerà in viola e poi in giallo, ecco, è programmato!

### Realizzazione del programma

Il programma è ora trasmesso al tuo Eliobot. Accendilo e ammira il lavoro. Cosa osservi?

Una luce verde (o il colore che hai scelto) lampeggerà sul tuo robot! 🙂

![Testo alternativo](/img/tutorial/elioblocs/blink-led-elioblocs/Sans-titre-1.png)

Congratulazioni per questo nuovo passo nella programmazione. Il prossimo passo è sfidare Eliobot facendolo muovere :) Sei pronto ad affrontare questa nuova sfida?

Considera la possibilità di condividere la tua esperienza sui nostri social network. Saremo felici di condividere le vostre creazioni e discutere con voi.

A presto 🙂
