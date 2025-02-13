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