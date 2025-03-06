# Fortsetzung Authentifizierung

- Unsere App von gestern hat noch ein relevantes Sicherheitsproblem
  - Sie sendet das gehashte Passwort zurück
  - Das sollte niemals preisgegeben werden
  - Selbst mit einer fantastischen Passwortrichtlinie sind Hashes immer noch sehr privat

- Wir wollen keine zusätzlichen Informationen verraten
  - Wir sollten nicht einmal verraten, welche Art von Hash verwendet wird
  - Wir sollten nicht einmal verraten, dass Daten in MongoDB gespeichert sind
  - Wir sollten nicht einmal verraten, dass unser Server ein Express-Server ist
  - Je mehr Informationen wir preisgeben, desto einfacher ist es für Angriffe

- Grundsätzlich werden alle Konten ständig angegriffen
- Automatisierte Bots versuchen ständig, sich anzumelden
- Große Unternehmen haben einen extrem guten Schutz gegen Brute-Force-Angriffe
- Aber das ist auch bei kleineren APIs zu berücksichtigen
- Für solche Dinge braucht man Architekten, Senioren und Spezialisten
- Bei sicherheits- oder datenschutzkritischen Apps müssen sogar Fehlermeldungen gesichert werden
- Wenn unsere App abstürzt, wollen wir den Benutzern nicht sagen, welche Software abgestürzt ist

- Wenn eine Anmeldung fehlschlägt, teilst du dem Benutzer mit, was falsch war; Passwort oder E-Mail?
  - In einigen Ländern könnte es schlecht sein, wenn sogar preisgegeben wird, wer eine App benutzt

## E-Mail-Verifizierung von Konten

- Benutzerkonten-E-Mails werden sehr häufig verifiziert
  - Du registrierst dich
  - Die senden dir eine E-Mail
  - Die Mail enthält einen Link
  - Du kannst dein Konto erst nach Klick auf den Link nutzen

- Wegen dem blöden Spam
- Man will sicherstellen, dass die Nutzer die E-Mail auch wirklich erhalten
- Man möchte Werbetreibenden Listen von verifizierten E-Mails verkaufen, die unsere Seite nutzen

- Wie funktioniert es technisch, wenn man eine E-Mail verifizieren möchte?

- DB-Eintrag für das Benutzerkonto
```js
{
    id: 42,
    email: "John@work.de",
    password: "12345678",
    token: "3242jjgfklsj9023wejfjweo"
    verified: false,
    created: "08.04.2024 10:33"
}
```

- Eine E-Mail mit Verifizierungslink wird gesendet
```js
<h1>Willkommen bei Foo</h1>
<p>
    <a href="https://localhost:3000/verify/3242jjgfklsj9023wejfjweo">
        Klicke hier, um dein Konto zu verifizieren
    </a>
</p>
```

- Klickt ein Benutzer auf den Link, wird ein Endpunkt erreicht
```js
app.get("/verify/:token", async (req, res)=>{
const {token} = req.params;
const entry = await User.find({token});
if (!entry){
    return res.status(404).json({msg: Token nicht gefunden})
}
if (entry.created > 30 min. ago){
    return res.status(400).json({msg: Link abgelaufen})
}

// Setze verified auf aktuelles Datum und Uhrzeit (oder true)
})
```

- Der schwierige Teil besteht eigentlich nur darin, die E-Mail zu senden
  - Eine E-Mail zu erstellen ist theoretisch einfacher
  - Aber in der Praxis sieht es etwas anders
    - E-Mail ist eine sehr alte Technologie
    - Sie ist seltsam
    - Es gibt viele Standards und Konzepte die damit zusammenhängen
  - Es ist eine Welt voll von Einschränkungen und Konzepten
    - Domain-Vertrauen
    - Sender Policy Framework
    - DomainKeys Identified Mail
    - Domain-based Message Authentication, Reporting, and Conformance

- Die einfachste Methode ist die Verwendung von SMTP
  - Simple Mail Transport Protocol
  - Wir können ein Paket wie `nodemailer` benutzen
  - Damit können wir E-Mails erstellen und verschicken
  - Die Mail wird dann an einen SMTP-Server gesendet
  - z.B. Google
  - Wir müssen authentifizieren wer der Absender ist
  - Es gibt auch Drittanbieterdienste
  - Diese stellen eine API zur Verfügung, die man aufrufen kann
  - Sie kümmern sich um das senden
  - z.B. `https://resend.com/`