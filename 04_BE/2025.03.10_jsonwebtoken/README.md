## Token-Authentifizierung

- Wir bauen Login- und Registrierungssysteme
- Der Benutzer gibt sein Login/Passwort ein
- JS sendet eine Anfrage an `POST/login`
- Super, Login erfolgreich!

- Wie geht's jetzt weiter?
- Der Benutzer versucht z.B. `GET /reports` aufzurufen
- Wie weiß das Backend, dass die Anfrage von einem eingeloggten Benutzer kommt?
- Das HTTP-Protokoll ist zustandslos (stateless)
- Eine Anfrage hat keine Verbindung zu vorherigen Anfragen
- Sie werden alle als Einzelabfragen ohne jegliche Verbindung zueinander verarbeitet
- Also muss `POST/login` identifizierbare Informationen zurückgeben
- Dann muss der Browser diese Informationen irgendwie speichern und privat halten
- Diese Informationen müssen mit nachfragenden Anfragen gesendet werden
- Das Backend muss diese Informationen identifizieren
- Also müssen diese Informationen vertrauenswürdig sein
- Es gibt viele Möglichkeiten das zu tun
- Eine davon ist Token-Authentifizierung
- Was wir heute uns ansschauen wird teilweise auch in echten Apps so benutzt

## JSONWEBTOKEN (JWT)

- Ein System zur Erstellung von identifizierbaren Informationen
- Ein jwt hat drei Teile und sieht so aus: AAAA.BBBB.CCCC
  - AAAA = Header-Teil
  - BBBB = Payload-Teil
  - CCCC = Signature-Teil

- Der Header beschreibt den JWT, z.B. welcher Hashing-Algorythmus wird verwendet
- Der Payload enthält Daten, die darin transportiert werden. Jeder kann diese Daten lesen
- Die Signatur ist ein Hash
  - Dieser wird aus dem Payload und einem geheimen Wert, der auf dem Server gespeichert ist, erstellt
  - Dies wird mit dem im Header definierten Algorythmus gemacht

- Mit dieser Struktur kann jeder den Payload-Teil lesen
  - Niemand kann den Payload-Teil ändern

- Server verwenden den Signatur-Hash auch, um zu überprüfen, dass dieser jwt von ihm erstellt wurde
  - Denn der geheime Teil ist nur dem Server bekannt