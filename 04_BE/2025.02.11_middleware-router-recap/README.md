## Express Middleware

- Express ist ein Routing- und Middleware-Web-Framework, das minimale Funktionalität von sich aus hat: Eine Express-Anwendung ist im Wesentlichen eine Serie von Middleware-Funktionsaufrufen.

- Technisch gesehen sind alle unsere Endpunkte Middleware
- app.get("/posts", (req,res) => res.send(guestbook))
- Hier ist die anonyme Funktion technisch gesehen eine Middleware

- In der Praxis bedeutet "Middleware" jedoch normalerweise etwas wie:
- app.use(express.json())
- app.use(something)
- Hier ist das "something" eine Middleware

- In Express durchläuft jede Anfrage die Middlewares, bis eine sie stoppt
  
- Middleware-Funktionen können folgende Aufgaben ausführen:
  - Jeden Code ausführen.
  - Änderungen an den Request- und Response-Objekten vornehmen.
  - Den Request-Response-Zyklus beenden.
  - Die nächste Middleware-Funktion im Stack aufrufen.

- Middleware-Funktionen erhalten drei Argumente: Anfrage, Antwort und next
  - Die Anfrage repräsentiert die gerade verarbeitete HTTP-Anfrage
  - Die Antwort repräsentiert die HTTP-Antwort, die gesendet wird
  - Die next Funktion ruft die nächste Middleware in der Kette auf

- Eine eingehende Anfrage durchläuft immer die Middlewares von oben nach unten
  - Bis eine von ihnen next() nicht aufruft

- Erinnerst du dich an app.use(express.json())?
  - Middleware, die es uns ermöglicht, req.body zu verwenden, um eingehendes JSON zu sehen
  - req.body existiert nicht standardmäßig in Express.

## Express Router

- Bisher haben wir uns angesehen, wie Anfragen mit einem Ressourcenpfad und einer Methode behandelt werden
- app.get('/posts', )
- app.put('/posts', )
- app.patch('/posts', )
- app.post('/posts', )
- app.delete('/posts', )

- Jede dieser Funktionen könnte 10+ Zeilen Code enthalten
- Eine große Anwendung kann Tausende von diesen haben

- Router in Express ermöglichen es uns, Endpunkte in handhabbare Größen zu gruppieren
- Ein Router-Objekt ist eine isolierte Instanz von Middleware und Routen. Du kannst es als eine "Mini-Anwendung" betrachten, die nur in der Lage ist, Middleware- und Routing-Funktionen auszuführen.
- In deiner Hauptdatei server.js könntest du einige Endpunkte haben
- Das ist sozusagen dein Haupt-Router
- Dann registrierst du andere Router, die den Rest deiner Endpunkte enthalten
- Oft sind diese anderen Router nach Ressourcennamen gruppiert
  - products.js
  - guestbook.js
  - feedback.js

- Router-Dateien werden üblicherweise in einem "routers" Ordner gespeichert