---
last_modified_on: "2024-10-31"
title: "Antipasti"
description: "Elioblocchi - Ingressi"
---

I blocchi di input consentono di recuperare informazioni dall'ambiente di Eliobot.

I blocchi sensore ostacolo permettono di testare la presenza di un ostacolo in prossimità di Eliobot.

## Verifica la presenza di un ostacolo

![Controlla ostacolo](/img/elioblocs/blocs/inputs/test-obstacles.png)

**Tipo**: blocco booleano

**Definizione**:

Questo blocco permette di testare la presenza di un ostacolo ad una certa distanza da Eliobot:
- nella parte anteriore
- sul retro
- Sinistra
- Giusto

**Utilizzo** :

Se vuoi evitare ostacoli come muri o oggetti.

---

I blocchi sensore di linea consentono di seguire una linea o testare la presenza di una linea.

## Segui una linea

![testo alternativo](/img/elioblocs/blocs/inputs/suivre-ligne.png)

**Tipo**: Ordine

**Definizione**:

Questo blocco ti consente di seguire una linea nera.

**Utilizzo** :

Se vogliamo che Eliobot segua una linea nera su un percorso, ad esempio quella sul retro delle vostre istruzioni.

## Verifica la presenza di una linea

![testo alternativo](/img/elioblocs/blocs/inputs/ligne-presente.png)

**Tipo**: blocco booleano

**Definizione**:

Questo blocco permette di testare la presenza di una linea nera sotto Eliobot:
- nel mezzo
- Sinistra
- Giusto
- centro sinistra
- al centro destro

**Utilizzo** :

Per consentire a Eliobot di seguire una linea nera su un percorso e testare se girare a sinistra o a destra.

## Modifica la sensibilità del sensore di linea

![testo alternativo](/img/elioblocs/blocs/inputs/sensi-ligne.png)

**Tipo**: Ordine

**Definizione**:

Questo blocco permette di modificare la sensibilità del sensore di linea. Modifica il valore al quale il sensore di linea rileva una linea.

**Utilizzo** :

Se ti trovi in ​​uno spazio molto luminoso o buio, puoi modificare la sensibilità del sensore di linea in modo che rilevi meglio la linea.

## Legge il valore di un sensore di linea

![testo alternativo](/img/elioblocs/blocs/inputs/valeur-ligne.png)

**Tipo**: valore

**Definizione**:

Questo blocco restituisce il valore del sensore di linea. Puoi visualizzarlo nel terminale, ad esempio.
Può essere utilizzato per impostare la sensibilità del sensore di linea.

**Utilizzo** :

Se vuoi recuperare il valore del sensore di linea per calibrare meglio la sensibilità del sensore di linea.

## Calibrazione automatica della linea

![testo alternativo](/img/elioblocs/blocs/inputs/calibration-ligne.jpg)

**Tipo**: Ordine

**Definizione**:

Questo blocco permette di calibrare automaticamente il sensore di linea. Consente di definire il valore al quale il sensore di linea rileva una linea.

**Utilizzo** :

È necessario posizionare i 5 sensori di linea sopra una linea nera ed eliobot calibrerà automaticamente il valore al quale rileva la linea
muovendosi avanti e indietro. Eliobot deve essere perpendicolare alla linea affinché la calibrazione sia corretta.

---

## Verifica se il pulsante è attivato

![Il pulsante è attivato](/img/elioblocs/blocs/inputs/test-bouton.png)

**Tipo**: blocco booleano

**Definizione**:

Questo blocco permette di testare se il pulsante di Eliobot è attivato, restituisce `vero` se il pulsante è attivato e `falso` altrimenti.

**Utilizzo** :

Se vuoi eseguire un'azione solo se il pulsante Eliobot è attivato. Avvia il tuo programma, ad esempio.


---

## Il telecomando a infrarossi

Per utilizzare i blocchi telecomando a infrarossi è necessario avere il telecomando a infrarossi disponibile nel kit Eliobot.

![Telecomando a infrarossi](/img/elioblocs/blocs/inputs/nice_ir_remote.jpg)


[Acquista qui](https://eliobot.com/products/telecommande-infra-rouge)

## Scegli il sensore per la lettura

![Scegli sensore](/img/elioblocs/blocs/inputs/ir_remote_sensor_change.png)

**Tipo**: Ordine

**Definizione**:

Questo blocco permette di scegliere il sensore a infrarossi per la lettura dei comandi del telecomando a infrarossi,
puoi scegliere tra il sensore anteriore e il sensore posteriore.

**Utilizzo** :

Se si desidera che i comandi del telecomando a infrarossi vengano letti dal sensore anteriore o posteriore.
Ad esempio per seguire Eliobot e mandargli comandi mentre sei dietro di lui.

## Leggi il comando dal telecomando a infrarossi

![Leggi comando](/img/elioblocs/blocs/inputs/ir_remote_do.png)

<p>
<img src={require('@site/static/img/elioblocs/blocs/inputs/ir_remote.png').default} alt="Read command" width="70%"/>
</p>

**Tipo**: Ordine

**Definizione**:

Questo blocco permette di leggere il comando proveniente dal telecomando a infrarossi ed eseguire un'azione in base al comando ricevuto.

**Utilizzo** :

Se vuoi che Eliobot esegua un'azione in base al comando ricevuto dal telecomando a infrarossi.
Ad esempio, vai avanti, indietro, gira a sinistra o a destra. Puoi anche fargli riprodurre musica o accendere un LED.

