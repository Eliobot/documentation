---
sidebar_position: 2
---

# Lampeggia un LED



In elettronica esiste una versione leggermente più brillante di “Hello world!” chiamato “Blink” che, come suggerisce il nome, mira a far lampeggiare un LED sulla carta che hai in mano.
E questo è un bene visto che Eliobot è dotato di un LED multicolore che ti permetterà di visualizzare il colore che preferisci!

![testo alternativo](/img/tutorial/python/python-blink-led/led-turned-on.bmp)

Inizieremo il nostro codice integrando alcune librerie. Si tratta di insiemi di codici già scritti che ci consentono di aggiungere facilmente funzioni.

## Dichiarazione di ingressi/uscite

Il primo si chiama “board” ed è specifico di CircuitPython. È grazie ad esso che potremo spiegare al nostro programma come sono collegati gli elementi al microcontrollore (il cervello di Eliobot)

Per integrarlo nel nostro programma utilizziamo la seguente riga:

```python
import board
```

Questo ci permette di chiamare l'input/output della scheda utilizzando il numero del pin.

```python
board.IO3
```

Oppure come nel nostro caso utilizzare il nome assegnato al pin

```python
board.NEOPIXEL
```

## Dichiarazione sui LED Neopixel

L'Eliobot LED ha un funzionamento un po' specifico poiché può visualizzare diversi colori, utilizzeremo un'altra libreria per semplificare il compito:

```python
import neopixel
```

Ora che le nostre librerie sono nel nostro progetto, potremo utilizzare le funzioni che contengono.
Iniziamo dichiarando il nostro LED con la seguente funzione:

```python
pixel = neopixel.NeoPixel(board.NEOPIXEL, 1, brightness=0.3)
```

``pixel`` questo è il nome che diamo al nostro LED

```python
board.NEOPIXEL nous permet de définir où est branchée la LED sur la carte de Eliobot
```

C'è solo un LED collegato a questa posizione, quindi 1

Infine puoi regolare la luminosità con luminosità che va da 0 a 1

Il LED è pronto all'uso, quindi possiamo assegnargli un colore con il comando:

```python
pixel.fill(( R , G , B))
```

Utilizziamo un codice colore RGB (Rosso, Verde, Blu) che consiste nel definire la quantità di Rosso, Verde e Blu che vogliamo visualizzare con un valore che va da 0 (nessun colore) a 255 (colore massimo)

Se ad esempio vogliamo visualizzare il rosso puro scriviamo:

```python
pixel.fill((255, 0, 0))
```

In questa fase il colore non è ancora visualizzato, manca un ultimo comando:

```python
pixel.show()
```

Se eseguiamo lo script ▶️potremo poi vedere Eliobot illuminarsi del colore richiesto, nel nostro caso il rosso

Il prossimo passo per far lampeggiare Eliobot è spegnere il LED, per questo impostiamo tutti i valori dei colori su 0 e ovviamente ricordiamoci di visualizzare il risultato:

```python
pixel.fill((0, 0, 0))
pixel.show()
```

## Aggiunto un timer

Quindi definiamo il tempo tra ogni azione utilizzando una nuova libreria "time".

```python
import time
```

La funzione “sleep” ci permette di mettere in pausa il programma per una durata espressa in secondi, ad esempio per un secondo scriviamo:

```python
time.sleep(1)
```

Aggiungiamo questa pausa dopo ogni cambio di colore

```python
pixel.fill((255, 0, 0))
pixel.show()

time.sleep(1)

pixel.fill((0, 0, 0))
pixel.show()

time.sleep(1)
```

Se eseguiamo ▶️ questo programma possiamo vedere che il LED si illumina di rosso per 1 secondo e poi si spegne, il che ci avvicina quasi al nostro obiettivo di farlo lampeggiare.

## Aggiunta di un ciclo

Il passo finale è far durare più a lungo il lampeggiamento. Per questo un metodo potrebbe consistere nel copiare/incollare le 6 righe appena sopra un gran numero di volte, ma il nostro codice diventerebbe estremamente lungo e complicato per poco.

Il metodo più elegante consiste nell'utilizzare un ciclo per ripetere un pezzo di programma. Quello che qui ci interessa è il ciclo “ while” che ripeterà il nostro programma finché la sua condizione è vera, il trucco consiste quindi nel dargli il valore “True” (sempre vero) in condizione che creerà un ciclo che si ripete all’infinito.

```python
while True:
	pixel.fill((255, 0, 0))
	pixel.show()

	time.sleep(1)

	pixel.fill((0, 0, 0))
	pixel.show()

	time.sleep(1)
```

Tieni presente che il codice sotto " while True: " è rientrato (spostato a destra), a dimostrazione che verrà ripetuto nel ciclo.

## Programma definitivo

Ecco il programma finale che potremo eseguire ▶️:

```python
import board
import neopixel
import time

pixel = neopixel.NeoPixel(board.NEOPIXEL, 1, brightness=0.3)

while True:
	pixel.fill((255, 0, 0))
	pixel.show()

	time.sleep(1)

	pixel.fill((0, 0, 0))
	pixel.show()

	time.sleep(1)
```

