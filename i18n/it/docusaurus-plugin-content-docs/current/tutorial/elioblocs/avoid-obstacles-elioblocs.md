---
sidebar_position: 3
---

# Evita gli ostacoli

In questo tutorial impareremo come utilizzare i sensori per utilizzare Eliobot in autonomia e fargli evitare un ostacolo 😉


## Come funzionano i sensori a infrarossi

Eliobot è dotato di 4 sensori a infrarossi (vedi schema sotto) che gli permettono di rilevare gli ostacoli.

![testo alternativo](/img/tutorial/elioblocs/avoid-obstacles-elioblocs/eliobot-sensors-position.png)

Ma tecnicamente come funziona? 🤔

Ogni sensore è composto da un trasmettitore e un ricevitore. Il ruolo del trasmettitore è inviare luce per illuminare gli ostacoli. La luce verrà poi riflessa verso il ricevitore, il che ci permetterà di conoscere la quantità di luce ricevuta e quindi dedurre una distanza.

Maggiore è la quantità di luce, più vicino è l'ostacolo.

![testo alternativo](/img/tutorial/elioblocs/avoid-obstacles-elioblocs/infrared-sensor.png)

## Rileva un ostacolo

Per iniziare questo tutorial, vai alla nostra interfaccia di programmazione https://app.eliobot.com/.

Partiamo con un primo semplice esempio: se Eliobot rileva un ostacolo davanti a sé, si accende il LED rosso. Se Eliobot non rileva alcun ostacolo, il LED si spegne 💡

![testo alternativo](/img/tutorial/elioblocs/avoid-obstacles-elioblocs/obstacle-light-example.png)

Il primo passo è selezionare l'azione di rilevamento degli ostacoli. Per fare ciò, vai alla scheda ```Obstacles``` quindi seleziona il blocco ```c'è un ostacolo davanti```.

E' possibile scegliere quale sensore utilizzare, nel nostro caso sarà il sensore frontale.

Probabilmente avrai notato che questo nuovo blocco ha una forma diversa e non può essere utilizzato come i blocchi utilizzati fino ad ora. Si tratta di un booleano che potremo utilizzare come condizione nel blocco ```Se... fai... altrimenti```.

Infine, per identificare chiaramente quando è stato rilevato un ostacolo, mostriamo un colore con il blocco ```Mostra colore``` nella parte ```allora```, e ```Spegni la luce``` nella parte ```altrimenti```.

Seleziona il colore che preferisci, l'artista sei tu! 😉

![testo alternativo](/img/tutorial/elioblocs/avoid-obstacles-elioblocs/color-when-obstacle.png)

## Aggira l'ostacolo

Ora che Eliobot è in grado di rilevare un ostacolo, potremo dirgli cosa fare quando ne incontra uno. L'azione più semplice è semplicemente cambiare direzione ruotando a destra o a sinistra.

![testo alternativo](/img/tutorial/elioblocs/avoid-obstacles-elioblocs/obstacle-turn-example.png)

Poiché la maggior parte del lavoro è già stato svolto con il programma sopra, lo riprenderemo aggiungendo movimenti oltre ai comandi per il LED.

Per prima cosa definiamo il movimento da fare quando Eliobot incontra un ostacolo, nel nostro caso fare un quarto di giro a destra. Per fare ciò puoi prendere il blocco ```Ruota a destra di 90 gradi``` nella scheda ```Movimenti``` e aggiungerlo sotto il colore rosso.

Poi definiamo il movimento da fare quando non ci sono ostacoli, cioè andare avanti. Troverai il blocco ```Muoviti in avanti``` anche nella scheda ```Movimenti```, che verrà inserito nella parte ```altrimenti```

![testo alternativo](/img/tutorial/elioblocs/avoid-obstacles-elioblocs/turn-when-obstacle.png)


### Trasferimento del programma

Per testare il programma su Eliobot, collegalo al computer con il cavo USB e clicca sul pulsante “Programma”.

Vedrai quindi il LED lampeggiare e una volta terminato potrai scollegare Eliobot per vedere il risultato! 🙂
