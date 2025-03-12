# Cookies

- Die Informationen die per HTTP-Request übertragen werden:
  - Methode, URL
  - Header
  - Body/Payload

- Die Informationen die per HTTP-Response übertragen werden:
  - HTTP-Antwortcode
  - Header
  - Body/Payload

- Cookies sind kleine Datenstücke, die in den Headern übertragen werden
  - Üblicherweise sendet der Server Cookies an den Client
  - Der Client speichert dann diese Cookies

- Ein Cookie-Header enthält Namen, Wert und einige Metadaten
- Ein Cookie-Header kann z.B. so aussehen:
  - `Set-Cookie: sessionId=abc123 Expires=Wed, 31 Oct 2028 13:37:00 GMT; Secure; HttpOnly`
  - `sessionId` ist der Name
  - `abc123` ist der Wert des Cookies
  - `Expires=Wed, 31 Oct 2028 13:37:00 GMT` ist das Ablaufdatum, danach wird er vom Browser gelöscht
  - `Secure` und `HttpOnly` definieren um welche Art von Cookie es sich handelt

- Dieser Cookie würde im Browser gespeichert werden und bei jeder Anfrage an den Server mitgeschickt werden

- Wir haben zwei verschiedene Arten von Cookies erstellt
  - Das eine war `Secure` und `HttpOnly`
  - Das andere ein einfacher Cookie

- `Secure` Cookies werden nur über eine HTTPS-Verbindung mitgeschickt
  - Der Browser akzeptiert das Cookie
  - Der Browser speichert das Cookie
  - Der Browser sendet das Cookie nur über HTTPS-Verbindungen zurück
  - Eine Ausnahme ist localhost
    - Grund ist, dass localhost für die Entwicklung benutzt wird
    - Es wäre zu umständlich immer eine lokale HTTPS-Entwicklung einzurichten

- Auf `HttpOnly` Cookies kann vom Browser aus mit JS nicht darauf zugegriffen werden
  - Das erhöht die Sicherheit
  - Stellen wir uns einen XSS-Angriff vor
    - Wenn mein Github-Profil etwas JS hätte, was die GH-Cookies ausliest
    - Und die dann an mich geschickt werden, wenn du mein Profil besuchst
    - Ich könnte dich dann imitieren oder einige möglicherweise private Daten lesen
- Cookies immer sicher verwahren, JS sollte nicht darauf zugreifen können

- Cookies werden immmer nach Herkunft getrennt
  - Cookies die von https://github.com gespeichert wurden, werden nur für diese Herkunft gespeichert
  - Cookies die von http://example.org:3000/ gespeichert wurden, werden nur für diese Herkunft gespeichert
  - Seiten sollten niemals Cookies von anderen Seiten sehen!

## Sitzungen (Sessions)

- Welche Informationen werden in Cookies gespeichert?
  - Eine ganze Menge
    - z.B. bevorzugt der User einen darkmode
    - was ist die Zeitzone von dem User
    - usw.

- Aber ein typischer Anwendungsfall wäre, dass eine `sessionId` gespeichert wird
- Sitzungen sind interessant und nützlich
- Sitzungen sind eine Möglichkeit Benutzeranmeldungen durchzuführen
  - Wenn Gary loggt sich erfolgreich ein `POST / login`, wir erstellen eine zufällige sessionId
  - Wir speichern diese ID mit dem Benutzernamen in irgendeiner Art von Speicher
  - Dann senden wir diese ID als Cookie `session=99152`
  - Jedes Mal, wenn eine Anfrage kommt mit `session=99152`, dann wissen wir, oha Gary ist wieder da!

- Aber wir könnten auch anonyme Sitzungen haben
  - Du könntest z.B. alle Anfrage von einer einzigen Quelle erkennen
  - Und dann kann man daraus eine Statistik erstellen
  - Das erste Mal wenn ein Benutzer unsere Seite öffnet setzen wir eine id: `session=52`
  - Wenn der Benutzer zu einer anderen Seite geht, erhalten wir im Request `session=52`
    - So könnten wir ein Tracking erstellen
    - Session 52 besuchte: Home, Produkte, Kontakt, Galerie
    - Session 41 bersucht: Werbelink, Karriere, Galerie