## Einführung

- Unsere Datenbank sollte nur saubere Daten zulassen
- `streeAddress:String` sollte nicht 9999 Zeichen lang sein
- `email:String` sollte tatsächlich wie eine E-Mail sein
- `biography:String` sollte kein HTML/JS enthalten

- Das Backend sollte dem Frontend niemals vertrauen, saubere Daten zu liefern
  - Eine Anfrage könnte vom Browser, von curl oder Postman kommen
  - Es gibt keine Möglichkeit sicher zu sein
  - Jede Validierung kann umgangen werden
  - Jede Frontend-JS-Validierung kann umgangen werden

## Validierung

- `streeAddress:String` sollte nicht 9999 Zeichen lang sein
- `email:String` sollte tatsächlich wie eine E-Mail sein
- Das sind Beispiele für Validierung
- Wenn unser Backend erhält für ein E-Mail-Feld eine Zeichenkette `asdfghg`
- Es sollte nicht versuchen damit ein Konto zu erstellen oder eine Bestätigungs-E-Mail zu senden
- Frontend-Validierung hilft dem Benutzer
- Wir brauchen auch Backend-Validierung
- Mit Mongooose-Validatoren kannst du viel machen
- Es gibt auch viele spezialisierte Validierungsbibliotheken

## Bereinigung (Sanitization)

- `biography: String` sollte kein HTML/JS enthalten
  - Das ist ein Beispiel für Bereinigung
  - Die Daten sollten bereinigt werden
  - Dies ist ein viel schwierigeres Problem und hängt stark von deinem Inhalt ab

- Unsere Anwendung erlaubt es Usern eine Textbiografie zu haben
  - Welche Zeichen erlauben?
  - Sind < und > erlaubt?
  - Sind spezielle Steuerzeichen wie Text-Richtungsüberschreibung erlaubt?

```js
// Beispiel Text-Richtungsüberschreibung
const textLTR = '\u202DThis is a left-to-right text\u202C';
const textRTL = '\u202Eهذا نص من اليمين إلى اليسار\u202C';

console.log(textLTR);
console.log(textRTL);
```

- Du könntest Zeichen verbieten, von denen du weißt, dass sie Probleme verursachen könnten
- Blockiere vielleicht < und \n zum Beispiel
- Der sicherste Weg wäre wahrscheinlich nur sichere Zeichen zuzulassen
  - Aber welche?
  - A-Z, Leerzeichen, Komma, Punkt, Bindestrich, Fragezeichen, Ausrufezeichen...
  - Was ist mit Arabisch oder Chinesich?

- Ist schlechte oder beleidigende Sprache erlaubt?
  - Auch auf Finnisch und Koreanisch und Hebräisch und Isländisch?
  - Ist es überhaupt theoretisch möglich das rauszufiltern?
  - Oder gehört diese Aufgabe menschlichen Moderatoren?

- Was ist Benutzernamen?
  - Ist >9000 ein gültiger Benutzername? Oder 日本?
  
## Warum doppelte Validierung?

Das Ergebnis meiner Anfrage an die KI:

Stellt euch vor, ihr baut ein Haus. Würdet ihr nur auf das Fundament vertrauen und dann direkt das Dach draufklatschen? Nö, oder? Genauso ist es mit unserem Backend!

Mongoose Schema Validierung: Das ist wie unser Fundament. Es sorgt dafür, dass unsere Daten schon mal grundsätzlich in Ordnung sind, bevor sie überhaupt in die Datenbank wandern. Es ist wie ein strenger Türsteher vor dem Club "MongoDB" - nur wer die richtigen Klamotten anhat, kommt rein!

Express-validator oder ajv als Middleware: Das ist wie unser Sicherheitssystem im Haus. Klar, wir haben schon 'ne solide Tür (Mongoose), aber ein zusätzlicher Alarm schadet nie! Diese Middleware fängt die Daten ab, bevor sie überhaupt an Mongoose weitergereicht werden. Es ist wie ein Vorcheck, bevor man zum Türsteher kommt.

Aber warum der doppelte Aufwand, fragt ihr? 🤔

Sicherheit: Doppelt hält besser! Wenn ein Hacker irgendwie unsere Express-Route umgeht, haben wir immer noch Mongoose als Backup.

Flexibilität: Express-validator gibt uns mehr Möglichkeiten für komplexe Validierungen. Wir können zum Beispiel prüfen, ob ein Benutzer volljährig ist, bevor wir ihn in unseren "Ü18-Club" lassen.

Performance: Wir können "schlechte" Anfragen früh abfangen, bevor sie überhaupt zur Datenbank gelangen. Das spart Ressourcen!

Benutzerfreundlichkeit: Mit Express-validator können wir schönere, spezifischere Fehlermeldungen zurückgeben. Statt "Ungültige Daten" können wir sagen "Hey, dein Passwort braucht mindestens einen Großbuchstaben und eine Zahl!"

Zukunftssicherheit: Wenn wir uns irgendwann entscheiden, die Datenbank zu wechseln, haben wir immer noch eine Validierungsschicht, die unabhängig von MongoDB funktioniert.

Also, denkt dran: Validierung ist wie guter Sonnenschutz - lieber zweimal auftragen als einmal verbrennen! 🏖️😎

Noch Fragen? Oder seid ihr bereit, eure Backend-Festung uneinnehmbar zu machen? 💪🏰