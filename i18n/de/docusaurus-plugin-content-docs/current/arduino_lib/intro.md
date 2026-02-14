---
sidebar_position: 0
---

# Introduction

Entdecken wir **Docusaurus in weniger als 5 Minuten**.

## Erste Schritte

Beginnen Sie mit der **Erstellung einer neuen Website**.

Oder **probieren Sie Docusaurus sofort aus** mit **[docusaurus.new](https://docusaurus.new)**.

### Was Sie brauchen

- [Node.js](https://nodejs.org/en/download/) Version 18.0 oder höher:
  – Bei der Installation von Node.js wird empfohlen, alle Kontrollkästchen im Zusammenhang mit Abhängigkeiten zu aktivieren.

## Erzeugen Sie eine neue Site

Erstellen Sie eine neue Docusaurus-Site mit der **klassischen Vorlage**.

Die klassische Vorlage wird Ihrem Projekt automatisch hinzugefügt, nachdem Sie den folgenden Befehl ausgeführt haben:

```bash
npm init docusaurus@latest my-website classic
```

Sie können diesen Befehl in die Eingabeaufforderung, Powershell, Terminal oder jedes andere integrierte Terminal Ihres Code-Editors eingeben.

Der Befehl installiert außerdem alle notwendigen Abhängigkeiten, die Sie zum Ausführen von Docusaurus benötigen.

## Starten Sie Ihre Website

Führen Sie den Entwicklungsserver aus:

```bash
cd my-website
npm run start
```

Der Befehl `cd` ändert das Verzeichnis, mit dem Sie arbeiten. Um mit Ihrer neu erstellten Docusaurus-Site arbeiten zu können, müssen Sie dort im Terminal navigieren.

Der Befehl `npm run start` erstellt Ihre Website lokal und stellt sie über einen Entwicklungsserver bereit, sodass Sie sie unter http://localhost:3000/. ansehen können.

Öffnen Sie `docs/intro.md` (diese Seite) und bearbeiten Sie einige Zeilen: Die Site wird **automatisch neu geladen** und zeigt Ihre Änderungen an.