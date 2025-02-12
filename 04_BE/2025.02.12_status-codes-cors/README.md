## HTTP-Statuscodes

- Was eine HTTP-Anfrage ausmacht
  - Methode, URL, Header, Body

- Was eine HTTP-Antwort ausmacht
    - Statuszeile
    - Header
    - Body

- Die Header und der Body sind im Grunde genommen die gleichen wie bei Anfragen
- Die Statuszeile enthält vor allem den HTTP-Statuscode
- Der Statuscode gibt den Status der Antwort an
- Du kennst wahrscheinlich bereits mindestens einen Statuscode
- Du musst nicht alle lernen
- Aber einige sind wichtig genug, dass es eine gute Idee ist, sie zu merken
    - 200 OK
    - 301 Dauerhaft verschoben
    - 400 Ungültige Anfrage
    - 401 Nicht autorisiert
    - 403 Verboten
    - 404 Nicht gefunden
    - 500 Interner Serverfehler

## CORS

- Wir bringen Frontend und Backend zusammen und machen eine Anfrage
- Unsere Anfragen werden blockiert
- Was war nochmal CORS?
  - Die Same Origin Policy des Browsers blockiert Anfragen zwischen Ursprüngen
  - Wir müssen unserem Frontend-Ursprung Zugriff auf unser Backend gewähren
  - Wir tun dies durch die Verwendung von CORS

`npm i cors`

Im Server fügen wir diese Middleware hinzu:

`app.use(cors())` // Erlaubt alle CORS-Anfragen

Wir können cors auch nur für bestimmte Origins konfigurieren

`app.use(cors({origin: ["http://example.org", "http://example.com"]}))`