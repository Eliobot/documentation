---
sidebar_position: 2
---

# Movimenti di base

Ora che sai come utilizzare l'interfaccia, possiamo approfondire la programmazione. L'obiettivo di questo tutorial è aiutarti a scoprire i 3 movimenti base del robot: spostarlo in avanti, indietro e girare.

Per mettere in pratica ciò che hai imparato, ti sfidiamo alla fine di questo tutorial. La tua sfida, se la accetterai, sarà quella di realizzare un quadrato con Eliobot :)

![testo alternativo](/img/tutorial/elioblocs/basic-movements-elioblocs/Cote-11.png)

Per iniziare questo tutorial, vai alla nostra interfaccia di programmazione https://app.eliobot.com/.


## Muovi Eliobot in avanti

L’obiettivo di questo primo passo è far avanzare Eliobot.

![testo alternativo](/img/tutorial/elioblocs/basic-movements-elioblocs/Cote-12-edited.png)

### Creazione del programma

Per far avanzare Eliobot è necessario selezionare una mossa in avanti. Fai clic sul blocco "Movimenti" e trascina "Sposta il robot in avanti" nell'area di lavoro.

#### Opzione 1: movimento per una durata definita

Se vuoi che Eliobot vada avanti per una durata definita (nel nostro esempio 30 secondi), devi aggiungere un ritardo temporale al movimento. Clicca su “Utilità” e inserisci il blocco “attendi 1 secondo”.

Cambia il numero da 1 a 30 per dire a Eliobot di andare avanti per 30 secondi.

![testo alternativo](/img/tutorial/elioblocs/basic-movements-elioblocs/OFFO.png)

#### Opzione 2: Movimento a tempo indeterminato

Se vuoi che Eliobot vada avanti all'infinito, devi aggiungere un loop al movimento in modo che si ripeta. Fai clic su "Loop" nella casella degli strumenti e trascina il blocco "ripeti mentre" attorno al blocco precedente.

Ricorda, affinché il ciclo sia completo, devi aggiungervi una condizione. Eliobot va avanti finché la condizione è vera. Fai clic sul blocco "Condizioni" e trascina "vero" nel ciclo.

![testo alternativo](/img/tutorial/elioblocs/basic-movements-elioblocs/tuto-3etape-1.png)

### Trasferimento del programma

Per testare il programma su Eliobot, collegalo al computer con il cavo USB e clicca sul pulsante “Programma”.

Vedrai quindi il LED lampeggiare e una volta terminato potrai scollegare Eliobot per vedere il risultato!


## Ripristina Eliobot

L’obiettivo di questo secondo passo è respingere Eliobot.

![testo alternativo](/img/tutorial/elioblocs/basic-movements-elioblocs/Cote-15-edited.png)

Il processo è identico al primo passo perché il movimento rimane lo stesso, è semplicemente la direzione che cambia.

Vogliamo che Eliobot faccia un passo indietro. Per spostarlo indietro, è sufficiente fare clic sul menu a discesa contrassegnato da un piccolo triangolo arancione a destra del blocco "Sposta robot in". Quindi seleziona l'opzione "indietro".

![testo alternativo](/img/tutorial/elioblocs/basic-movements-elioblocs/oooooooooooooooooooooooooooooooooooppp.png)

Per testare il programma su Eliobot, collegalo al computer con il cavo USB e clicca sul pulsante “Programma”.

Vedrai quindi il LED lampeggiare e una volta terminato potrai scollegare Eliobot per vedere il risultato!


## Gira Eliobot a destra

L'obiettivo di questo terzo passo è far girare a destra Eliobot.

![
    
](/img/tutorial/elioblocs/basic-movements-elioblocs/Cote-13-edited.png)
### Creazione del programma

Per girare Eliobot è necessario selezionare un movimento di rotazione. Fai clic sul blocco "Movimenti" e trascina "Gira il robot a destra" nell'area di lavoro.

#### Opzione 1: movimento per una durata definita

Se vuoi che Eliobot ruoti per una durata definita (nel nostro esempio 2 secondi), devi aggiungere un ritardo temporale al movimento. Clicca su “Utilità” e inserisci il blocco “attendi 1 secondo”.

Cambia il numero 1 con il numero 2 per dire a Eliobot di girare a destra per 2 secondi.

![testo alternativo](/img/tutorial/elioblocs/basic-movements-elioblocs/Capture-ooooii.png)

#### Opzione 2: attiva la modalità trottola 🙂

Vogliamo che Eliobot ruoti verso destra per un periodo di tempo infinito (per far girare una trottola). È possibile creare un loop in modo che si ripeta. Fai clic su "Loop" nella casella degli strumenti e trascina il blocco "ripeti mentre" attorno al blocco precedente.

Per completare il ciclo, aggiungi una condizione. Il robot gira a destra finché la condizione è vera. Fai clic sul blocco "Condizioni" e trascina "vero" nel ciclo.

![testo alternativo](/img/tutorial/elioblocs/basic-movements-elioblocs/tuto-3-etape-3-1.png)

### Trasferimento del programma

Per testare il programma su Eliobot, collegalo al computer con il cavo USB e clicca sul pulsante “Programma”.

Vedrai quindi il LED lampeggiare e una volta terminato potrai scollegare Eliobot per vedere il risultato!


## Gira Eliobot a sinistra

L'obiettivo di questo quarto passo è far girare Eliobot a sinistra.

L'approccio è identico al passaggio precedente, perché il movimento di rotazione rimane lo stesso, è la direzione che cambia.

Vogliamo che Eliobot effettui una svolta a sinistra. Per girare il robot verso sinistra è sufficiente cliccare sul menu a tendina contrassegnato da un triangolino arancione a destra del blocco “Gira il robot verso”. Selezionare quindi la modalità “sinistra”.

![testo alternativo](/img/tutorial/elioblocs/basic-movements-elioblocs/Capture-17.png)

Per testare il programma su Eliobot, collegalo al computer con il cavo USB e clicca sul pulsante “Programma”.

Vedrai quindi il LED lampeggiare e una volta terminato potrai scollegare Eliobot per vedere il risultato!


## Sfida: crea un quadrato

È tempo di sfidare te stesso! Riuscirai a realizzare questa piazza?

Un quadrato è composto da sottomovimenti: una linea retta e un giro ripetuto quattro volte.

![testo alternativo](/img/tutorial/elioblocs/basic-movements-elioblocs/Cote-1.png)

### La linea retta

Il primo sotto-movimento consiste nel far avanzare Eliobot per tracciare il primo lato del quadrato. Come abbiamo visto nel passaggio 1, è necessario selezionare il movimento in avanti. Inserisce il blocco “Sposta robot in avanti” nell'area di lavoro.

È poi necessario aggiungere un ritardo affinché Eliobot si muova in linea retta per la durata di 1 secondo. Inserisci il blocco "attendi 1 secondo" nell'utilità.

È possibile modificare l'ora per cambiare la dimensione del quadrato.

![testo alternativo](/img/tutorial/elioblocs/basic-movements-elioblocs/OOOOOOOOOL.png)


### La svolta

Il secondo sotto-movimento consiste nel girare Eliobot verso destra per disegnare un angolo retto. Come abbiamo visto nel passaggio 3, inserisci il blocco “gira il robot a destra” sotto i blocchi precedenti.

È poi necessario aggiungere un ritardo temporale affinché Eliobot ruoti di un quarto di giro, ovvero 270 millisecondi. Inserisce il blocco “attendi 1 secondo” nell'area di lavoro quindi modifica la durata e l'unità del blocco.

![testo alternativo](/img/tutorial/elioblocs/basic-movements-elioblocs/Capture-PPO.png)


### Il ciclo magico

Ricordiamo che un quadrato è formato da una linea retta e da un giro ripetuto quattro volte. Ora che avete realizzato un lato del quadrato, non vi resta che ripetere più volte questa operazione per ottenere i restanti lati.

Per facilitarti il ​​compito, c'è un blocco che ti permette di fare questa ripetizione: il loop.

Fare clic su "Loop" nella casella degli strumenti e inserire il blocco "Ripeti...volte, esegui" nell'area di lavoro. Fai scorrere questo blocco attorno a quelli precedenti.

Dato che il quadrato ha 4 lati, chiediamo al cappio di ripetersi 4 volte.

![testo alternativo](/img/tutorial/elioblocs/basic-movements-elioblocs/bloc-carre-i.png)


### Trasferimento del programma

Per testare il programma su Eliobot, collegalo al computer con il cavo USB e clicca sul pulsante “Programma”.

Vedrai quindi il LED lampeggiare e una volta terminato potrai scollegare Eliobot per vedere il risultato!


