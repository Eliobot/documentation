---
last_modified_on: "2024-02-26"
title: "Bedingungen"
description: "Elioblocs – Bedingungen"
---

import Jump from '@site/src/components/Jump';


Mit Bedingungen können Sie Aktionen basierend auf bestimmten Bedingungen ausführen. Das macht ein Programm „intelligent“ und sorgt dafür, dass es Entscheidungen trifft.


Beim Programmieren verwenden wir

## Wenn – Tun – Sonst

![Block If - Do - Else](/img/elioblocs/blocs/conditions/if-else.png)

**Typ**: Bestellung

**Definition**:

Mit diesem Block können Sie eine Aktion ausführen, wenn eine Bedingung wahr ist, und eine andere Aktion, wenn die Bedingung falsch ist.
Er besteht aus drei Teilen:

- **Wenn**: die zu prüfende Bedingung (wenn sie wahr ist, führen wir den `Tun`-Block aus; das ist ein boolescher Wert).
- **Do**: der Befehlsblock, der ausgeführt wird, wenn die Bedingung wahr ist.
- **Else**: der Befehlsblock, der ausgeführt wird, wenn die Bedingung falsch ist.

**Verwenden** :

Wir möchten, dass sich Eliobot vorwärts bewegt, wenn ein Sensor ein Hindernis erkennt, und rückwärts, wenn kein Hindernis erkannt wird.


## Wenn – Tun

![Wenn Blockieren - Do](/img/elioblocs/blocs/conditions/if.png)

Dieser Block verwendet die gleiche Logik wie der Block `Wenn - Tun - Sonst`, mit einer Besonderheit: Wir können den Block über das Zahnrad um zusätzliche Bedingungen erweitern.

### Bearbeiten des Blocks

![Mutator des Blocks Si](/img/elioblocs/blocs/conditions/if-mutator.png)

**Typ**: Bestellung

**Definition**:

Hier können Sie beliebig viele Bedingungen stapeln. Wenn alle Bedingungen erfüllt sind, wird der `Tun`-Teil des Blocks ausgeführt.
Alle Bedingungen werden einzeln in der Reihenfolge überprüft, in der sie gestapelt sind. Wenn eine Bedingung falsch ist, wird der `Tun`-Block nicht ausgeführt.

**Verwenden** :

Wir möchten, dass Eliobot sich vorwärts bewegt, wenn ein Sensor ein Hindernis erkennt, und rückwärts, wenn kein Hindernis erkannt wird, aber auch, dass der Roboter anhält, wenn ein anderer Sensor ein Hindernis erkennt.

> #### Beispiel
>
> <img src={require('@site/static/img/elioblocs/blocs/conditions/example-if.jpg').default} style={{ width: '30%', verticalAlign: 'middle' }} alt="Example Si" />
>
> In diesem Beispiel wird nur die erste Bedingung ausgeführt, da sie die erste in der Liste ist, die wahr ist. Wenn die erste Bedingung falsch gewesen wäre, wäre die zweite Bedingung wahr gewesen, und wenn diese ebenfalls falsch gewesen wäre, hätte der „else“-Block eingegriffen und gehandelt, wenn keine der vorherigen Bedingungen wahr wäre.

## Vergleich

![Vergleichsblock](/img/elioblocs/blocs/conditions/est-egal.png)

**Typ**: Boolescher Block

**Definition**:

Mit diesem Block können Sie zwei Werte vergleichen. Es besteht aus zwei Teilen:

- **Erster Wert und zweiter Wert**: die zu vergleichenden Werte.
- **Vergleichsoperator**: die Art des durchzuführenden Vergleichs (gleich, unterschiedlich, größer, kleiner, größer oder gleich, kleiner oder gleich).

**Verwenden** :

Wenn wir wissen wollen, ob zwei Werte gleich sind, ob ein Wert größer als ein anderer ist usw.

## Logische Operation

![Logischer Operationsblock](/img/elioblocs/blocs/conditions/et.png)

**Typ**: Boolescher Block

**Definition**:

Mit diesem Block können Sie eine logische Operation zwischen zwei Bedingungen durchführen. Es besteht aus zwei Teilen:

- **Erste Bedingung und zweite Bedingung**: die zu vergleichenden Bedingungen.
- **Logischer Operator**: die Art der auszuführenden logischen Operation (AND, OR).

**Verwenden** :

Wenn wir wissen wollen, ob zwei Bedingungen wahr sind oder ob eine Bedingung wahr ist.

## NEIN

![Block Nr.](/img/elioblocs/blocs/conditions/no.png)

**Typ**: Boolescher Block

**Definition**:

Mit diesem Block können Sie eine Bedingung negieren. Das bedeutet, dass unabhängig von der Bedingung, wenn sie wahr ist, sie falsch wird und umgekehrt.

**Verwenden** :

Wenn wir eine Bedingung von wahr in falsch oder umgekehrt ändern wollen.

## Richtig/Falsch

![True / False block](/img/elioblocs/blocs/conditions/vrai.png)

**Typ**: Boolescher Block

**Definition**:

Mit diesem Block können Sie einen booleschen Wert definieren. Das bedeutet, dass der Wert entweder wahr oder falsch ist.

**Verwenden** :

Wenn wir eine Startbedingung definieren wollen.

## Null

![Null Block](/img/elioblocs/blocs/conditions/bloc-nul.png)

**Typ**: Wert

**Definition**:

Mit diesem Block können Sie einen Nullwert definieren. Dies bedeutet, dass der Wert nicht definiert ist.
Null wird oft verwendet, um zu bedeuten, dass eine Variable keinen Wert hat oder nicht definiert ist.

:::warning
Seien Sie vorsichtig, der Nullwert ist nicht gleich dem Nullwert.
:::

**Verwenden** :

Wenn wir eine Variable definieren möchten, ohne ihr einen Wert zu geben.

## Prüfen

![Testblock](/img/elioblocs/blocs/conditions/test.png)

**Typ**: Wert

**Definition**:

Mit diesem Block können Sie eine Bedingung testen. Es besteht aus zwei Teilen:

- **Bedingung**: die zu testende Bedingung.
- **Zu verwendender Wert**: Abhängig vom Ergebnis der Bedingung der zu verwendende Wert.

**Verwenden** :

Wenn wir eine Bedingung testen und je nach Ergebnis einen anderen Wert verwenden möchten.

## Beispiel

Erfahren Sie im folgenden Beispiel, wie Sie Bedingungen verwenden:

<Jump to="/docs/tutorial/elioblocs/avoid-obstacles-elioblocs">Hindernisse vermeiden - Elioblocs</Jump>
