## Umgebungsvariablen (Environment Variables)

- Normalerweise benötigst du unterschiedliche Konfigurationen für Entwicklung und Produktion
- In der Produktion könntest du andere API-Schlüssel verwenden
- In der Produktion könntest du eine andere URL benötigen

-Angenommen, du erstellst eine eCommerce-Seite zum Kauf von Kunst 
- Entwicklung: Du sendest deine Produktbestellungen an eine Test-Zahlungs-API-URL 
- Produktion: Du sendest deine Produktbestellungen an die echte Zahlungs-API-URL

- Umgebungsvariablen sind sehr beliebt für diese Konfiguration
- Wir speichern diese Variablen in einer Datei mit dem Namen `.env`
    Dort wo die Variablen der `.env` benötigt werden können sie einfach genutzt werden:
    - z.B. `const PORT = process.env.PORT` (In der .env steht: PORT=3000)

- Früher wurde ein Paket benötigt um mit process.env auf die Variablen zuzugreifen
```js
npm install dotenv -D

import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 3000;
```
- Seit Node Version 20 können wir Dateien aus der .env direkt benutzen
  - Dazu das start-Skript der package.json anpassen:
  - `"start": "node --env-file=.env test.js"`
  - Damit sagen wir Node, wo die .env Datei liegt (hier wäre sie im Stammverzeichnis, wie die package.json)

## Geheimnisse (Secrets)
- Es ist sehr üblich, dass eine API keinen anonymen Zugriff erlaubt
- Eine gängige Strategie ist, dass du einen API-Schlüssel erhältst
- COMMITTE KEINE GEHEIMNISSE WIE API-SCHLÜSSEL
- `.env` gehört in `.gitignore`
- Du könntest aber .env.example (oder .env.sample) in git haben, um Entwicklern bei der Einrichtung zu helfen!

## Wiederholung Deployment Webserver

### Vorbereitungen im Frontend

1. `npm run build` ausführen, um den `build`-Ordner zu bekommen
2. Den dist-Ordner in das Backend verschieben
3. In der `.gitignore` prüfen, dass kein Eintrag mit `dist` vorhanden ist, ansonsten diesen entfernen

WICHTIG: Sobald im Frontend eine Änderung gemacht wird, müssen die Schritte 1. und 2. wiederholt werden!

### Vorbereitungen im Backend

- Überprüfen ob die `.env` und `.env.sample` vorhanden sind. Die `.env` sollte sowohl key als auch value enthalten
- `.env.sample` enthält nur den key!
- In der `.gitignore` prüfen, dass dass `.env` als Eintrag vorhanden ist und die Datei ausgegraut im Explorer dargestellt wird
- Die `.env.sample` wird nicht in die .gitignore aufgenommen, weil sie bei Github hochgeladen werden sollte

In der `package.json` sollten zwei Skripte erstellt werden, einmal für development und einmal für production, z.B. so:
```js
"dev":"nodemon --env-file=.env server.js",
"start": "node server.js" // wird bei Render benutzt
```

Da wir mit ES6 Modules arbeiten, müssen wir uns erst ein paar Dateien erstellen, die den absoluten Pfad zu unserer Server-Datei und dem Backend-Ordner anzeigen.

```js
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
```

Anschließend die folgenden zwei Zeilen unterhalb der Routen einfügen. Dadurch werden die statischen Dateien und die index.html bei jeder Anfrage an den Client geschickt

```js
app.use("/", express.static(path.join(__dirname, "/dist"))); 
app.get("/*", (req, res) => res.sendFile(__dirname + "/dist/index.html"));
```

- Jetzt kann geprüft werden ob die App funktioniert, `npm run dev` ausfühen und anschließend die Adresse auf der der Server läuft, also z.B. `localhost:3000` im Browser öffnen. Das Frontend muss nicht gestartet werden!

- Wenn alles funktioniert, adden, commiten und zu Github pushen

- Für den Ablauf bei Render, die PDF mit dem Beispiel ansehen.