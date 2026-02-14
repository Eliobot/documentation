---
sidebar_position: 1
---

# Python configureren

De eerste stap om aan de slag te gaan met programmeren is het configureren van een ontwikkelomgeving (in het Engels spreken we van een IDE). Degene die wij u aanbieden heet Thonny en is hier beschikbaar: https://thonny.org/

Zodra u de versie die overeenkomt met uw computer heeft gedownload en geïnstalleerd, zullen we Thonny configureren zodat deze compatibel is met Eliobot.

![alt-tekst](/img/tutorial/python/python-setup/screenshot.png)

Tijdens de eerste lancering vraagt ​​Thonny u om uw taal te kiezen. U kunt vervolgens “Frans” kiezen en vervolgens op “Let’s go!” klikken.

![alt-tekst](/img/tutorial/python/python-setup/Capture-decran-2023-08-07-a-11.45.44-1024x565.png)

Nu Thonny gelanceerd is, gaan we Eliobot eraan koppelen. Sluit Eliobot aan op uw computer met behulp van de USB-kabel en klik vervolgens helemaal bovenaan het venster op "Uitvoeren" en vervolgens op "Configure interpreter".

![alt-tekst](/img/tutorial/python/python-setup/Capture-decran-2023-08-07-a-11.48.08.png)

U komt dan in een venster terecht met twee vervolgkeuzemenu's die moeten worden geconfigureerd zoals hieronder. De eerste vraagt ​​je om het type tolk, in ons geval is dat “CircuitPython”. In de tweede wordt u gevraagd de poort te selecteren waarmee u verbinding wilt maken en vervolgens “Eliobot” te selecteren.

Soms wordt de poort onder Windows herkend als “CircuitPython”, in dit geval zullen we deze gebruiken.

![alt-tekst](/img/tutorial/python/python-setup/Capture-decran-2023-08-07-a-11.49.57-2048x1401.png)

Na het klikken op “OK” licht de Eliobot-LED wit op, wat betekent dat deze goed is aangesloten. Om de verbinding te controleren, kunnen we het commando “help()” in de console onderaan sturen, het zou dan moeten reageren met het volgende bericht:

![alt-tekst](/img/tutorial/python/python-setup/Capture-decran-2023-08-07-a-11.51.05.png)

Een laatste stap om de interface aangenamer te maken is het weergeven van de inhoud van Eliobot. Om dit te doen, ga naar de top in “Beeld” en vervolgens “Bestanden”

![alt-tekst](/img/tutorial/python/python-setup/Capture-decran-2023-08-07-a-11.51.33.png)

Je kunt zien dat er zojuist aan de linkerkant een nieuwe kolom is verschenen.

Onder “CircuitPython-apparaat” staan ​​alle bestanden in uw Eliobot.

U vindt met name het bestand “main.py”, het hoofdprogramma en dat alle code bevat van het laatste programma dat u naar Eliobot heeft verzonden. De extensie “.py” betekent dat het een bestand is dat in Python is geschreven.

We gaan het bestand “main.py” openen om ons programma te maken.
Een veelvoorkomend voorbeeld is het weergeven van het bericht “Hallo wereld!” en in ons geval zullen we de opdracht “print()” gebruiken om het in de console weer te geven.

Ons programma past in één regel: print(“Hallo wereld!”)

Om het bericht weergegeven te zien, hoeven we alleen maar het programma uit te voeren door op de knop met de pijl ▶️ te klikken.

U zou het volgende resultaat moeten krijgen:

![alt-tekst](/img/tutorial/python/python-setup/Capture-decran-2023-08-07-a-13.58.43-1.png)

En daar heb je het, je hebt zojuist je eerste commando in Python voor Eliobot gemaakt!

In het volgende voorbeeld zullen we samen zien hoe we een programma kunnen bouwen dat geen computer nodig heeft om te functioneren.