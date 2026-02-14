---
last_modified_on: "2024-02-26"
title: "Colori"
description: "Eliobloc - Colori"
---

import Jump from '@site/src/components/Jump';


Eliobot è dotato di un LED multicolore, che gli consente di visualizzare più di 16 milioni di colori.


## Seleziona un colore da visualizzare

Il metodo più semplice per accendere il LED è utilizzare il blocco ```Mostra colore``` che offre il colore rosso predefinito.

![Blocco luci acceso](/img/elioblocs/blocs/colors/light-on.png)

**Tipo**: Ordine

**Definizione**:

Può quindi essere modificato facendo clic sulla bolla colorata, rivelando una tabella con diversi colori.
Tutto quello che devi fare è cliccare su quello che desideri visualizzare.

![Selettore colore](/img/elioblocs/blocs/colors/color-choice.png)

Si prega di notare che il nero corrisponde a un LED spento.

**Utilizzo** :

Se vuoi accendere il LED con un colore specifico. Ad esempio, per indicare lo stato di un sensore.


## Spegni la luce

![Spia spenta](/img/elioblocs/blocs/colors/light-off.png)

**Tipo**: Ordine

**Definizione**:

Due possibilità per spegnere il LED:

- Il primo è visualizzare il colore nero con il blocco sopra, il che equivale a impostare tutti i colori su 0
- Il modo più semplice è utilizzare il blocco dedicato qui sotto ```Spegni la luce```

**Utilizzo** :

Se vuoi spegnere il LED. Ad esempio, per indicare la fine di un'azione.

## Esempio

Scopri come utilizzare il LED nel seguente esempio:

<Jump to="/docs/tutorial/elioblocs/blink-led-elioblocs">Fai lampeggiare il LED - Elioblocs</Jump>

