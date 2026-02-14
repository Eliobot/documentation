---
last_modified_on: "2024-02-26"
title: "Terminal"
description: "Elioblocs-Terminal"
---

#### So ist das Terminal aufgebaut. Diese Erklärung hilft dir bei den nächsten Schritten.

![Elioblocs Terminal](/img/elioblocs/terminal/terminal.jpg)

> 1. Mit der „Schubladen“-Taste können Sie das Terminal öffnen oder schließen.
> 
> 2. Dies ist der Textbereich. Hier können Sie mit Eliobot kommunizieren, die Fehler- oder Erfolgsmeldungen Ihres Programms sehen und sehen, wie es Ihnen möglicherweise reagiert hat.
> 
> 3. Dies ist der Terminal-Tastenbereich:
> 
> - Programm neu starten: um das Programm neu zu starten, das Sie auf Eliobot hochgeladen haben.
> - Programm stoppen: um das aktuell laufende Programm zu stoppen.
> 
> 4. Mit diesen beiden Tasten können Sie das Terminal bedienen:
> 
> - Hochladen: Diese Schaltfläche sendet den Code an Eliobot, wie zuvor gesehen, aber wenn Sie nach dem Hochladen des Codes zum Terminal gehen, können Sie den gesendeten Code sehen (der Code wird in einer Sprache namens Binär gesendet; es ist normal, wenn Sie ihn nicht lesen können).
>   
> ![Elioblocks Terminalcode](/img/elioblocs/terminal/terminal-televerser.jpg)
>   
> - Verbinden: Mit dieser Schaltfläche können Sie die Verbindung zwischen Eliobot und Ihrem Computer herstellen und so die Kommunikation zwischen beiden ermöglichen. Dabei dient das Terminal als Messaging. 
>    
> ![Elioblocs Terminal Connector](/img/elioblocs/terminal/terminal-connecter.jpg)

Eliobot ist ein Roboter, der mit der Programmiersprache Python spricht. Aus diesem Grund werden Ihnen im Terminal Meldungen in englischer Sprache angezeigt. Aber keine Sorge, wir helfen Ihnen zu verstehen, was er Ihnen sagt.

---

### Terminalfunktionen

#### Hören Sie sich Eliobot an

Wenn Sie in einem Ihrer Programme mit Elioblocs den Block <img src={require('@site/static/img/elioblocs/terminal/ecrire.jpg').default} style={{ width: '9%', verticalAlign: 'middle' }} alt="Bloc écrire" /> oder <img src={require('@site/static/img/elioblocs/terminal/afficher-la-valeur.jpg').default} style={{ width: '14%', verticalAlign: 'middle' }} alt="Bloc afficher la valeur" /> verwenden, schreibt Eliobot in das Terminal. Sie werden sehen können, was er Ihnen sagt, und verstehen, was vor sich geht. 
Sollte eines Ihrer Programme nicht funktionieren und die LED rot blinken, können Sie im Terminal sehen, was falsch ist.

#### Befehle an Eliobot senden

Wenn Sie im Terminal `>>>` sehen, ist es Eliobot, der Sie auffordert, ihm einen Befehl zu senden. Sie können ihm Befehle in Python senden, damit er diese ausführt.
Wenn Sie mehr wissen möchten, können Sie sich die <a href="https://learn.adafruit.com/welcome-to-circuitpython/the-repl" target="_blank" rel="noopener noreferrer" style={{color : 'blue'}}>CircuitPython-Dokumentation</a> ansehen.


#### Terminalprobleme?

Wenn nach dem Klick auf die Schaltfläche <img src={require('@site/static/img/elioblocs/terminal/connect-button.jpg').default} style={{ width: '12%', verticalAlign: 'middle' }} alt="Verbinden-Schaltfläche" /> die Meldung `Eliobot ist verbunden` erscheint, aber nichts passiert, können Sie auf die Schaltfläche <img src={require('@site/static/img/elioblocs/terminal/restart-button.jpg').default} style={{ width: '4%', verticalAlign: 'middle' }} alt="Neu starten" /> klicken, um das Programm neu zu starten. Andernfalls läuft Ihr Programm möglicherweise noch. Wenn weiterhin nichts passiert, trennen Sie Eliobot vom Computer, schalten Sie ihn aus und schließen Sie ihn erneut an.
