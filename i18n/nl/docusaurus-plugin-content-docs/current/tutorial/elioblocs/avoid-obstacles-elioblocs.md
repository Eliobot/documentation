---
sidebar_position: 3
---

# Vermijd obstakels

In deze tutorial leren we hoe we sensoren kunnen gebruiken om Eliobot zelfstandig te gebruiken en een obstakel te vermijden 😉


## Hoe infraroodsensoren werken

Eliobot is uitgerust met 4 infraroodsensoren (zie onderstaand diagram) waarmee hij obstakels kan detecteren.

![alt-tekst](/img/tutorial/elioblocs/avoid-obstacles-elioblocs/eliobot-sensors-position.png)

Maar hoe werkt het technisch? 🤔

Elke sensor bestaat uit een zender en een ontvanger. De rol van de zender is om licht te sturen om obstakels te verlichten. Het licht wordt dan naar de ontvanger gereflecteerd, waardoor we de hoeveelheid ontvangen licht kunnen kennen en zo een afstand kunnen afleiden.

Hoe groter de hoeveelheid licht, hoe dichterbij het obstakel.

![alt-tekst](/img/tutorial/elioblocs/avoid-obstacles-elioblocs/infrared-sensor.png)

## Detecteer een obstakel

Om deze tutorial te starten, ga naar onze programmeerinterface https://app.eliobot.com/.

We beginnen met een eerste eenvoudig voorbeeld: als Eliobot een obstakel ervoor detecteert, gaat de rode LED branden. Als Eliobot geen obstakel detecteert, gaat de LED uit 💡

![alt-tekst](/img/tutorial/elioblocs/avoid-obstacles-elioblocs/obstacle-light-example.png)

De eerste stap is het selecteren van de obstakeldetectieactie. Ga hiervoor naar het tabblad ```Obstacles``` en selecteer vervolgens het blok ```er is een obstakel voor```.

Het is mogelijk om te kiezen welke sensor je wilt gebruiken, in ons geval zal dit de sensor aan de voorkant zijn.

Je hebt waarschijnlijk gemerkt dat dit nieuwe blok een andere vorm heeft en niet kan worden gebruikt zoals de tot nu toe gebruikte blokken. Dit is een Booleaanse waarde die we kunnen gebruiken als voorwaarde in het ```Als... doe... anders``` blok.

Om duidelijk te identificeren wanneer een obstakel is gedetecteerd, geven we een kleur weer met het blok ```Toon kleur``` in het deel ```dan```, en ```Licht uitschakelen``` in het deel ```anders```.

Selecteer de kleur van jouw keuze, jij bent de kunstenaar! 😉

![alt-tekst](/img/tutorial/elioblocs/avoid-obstacles-elioblocs/color-when-obstacle.png)

## Ga om het obstakel heen

Nu Eliobot een obstakel kan detecteren, kunnen we hem vertellen wat hij moet doen als hij er een tegenkomt. De eenvoudigste actie is simpelweg van richting veranderen door naar rechts of links te draaien.

![alt-tekst](/img/tutorial/elioblocs/avoid-obstacles-elioblocs/obstacle-turn-example.png)

Omdat het meeste werk al met het bovenstaande programma is gedaan, gaan we het nog een keer overdoen door naast de commando's voor de LED ook bewegingen toe te voegen.

Eerst definiëren we de beweging die moet worden gemaakt wanneer Eliobot een obstakel tegenkomt, in ons geval maken we een kwartslag naar rechts. Om dit te doen, kunt u het blok ```90 graden naar rechts draaien``` in het tabblad ```Bewegingen``` nemen en dit onder de rode kleur toevoegen.

Vervolgens definiëren we de beweging die moet worden gemaakt als er geen obstakel is, d.w.z. vooruit. Je vindt het blok ```Vooruit bewegen``` ook in het tabblad ```Bewegingen```, dat in het onderdeel ```anders``` wordt geplaatst

![alt-tekst](/img/tutorial/elioblocs/avoid-obstacles-elioblocs/turn-when-obstacle.png)


### Programmaoverdracht

Om het programma op Eliobot te testen, sluit u het met de USB-kabel aan op de computer en klikt u op de knop “Programma”.

Je ziet dan de LED knipperen en als je klaar bent, kun je Eliobot loskoppelen om het resultaat te zien! 🙂
