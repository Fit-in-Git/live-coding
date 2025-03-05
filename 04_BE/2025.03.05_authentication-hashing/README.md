## Verschlüsselung vs. Hashing

- Erinnern wir uns an HTTPS. Was ist das und was macht es?
- Daten werden während der Übertragung verschlüsselt
- Niemand kann das Passwort lesen, während es online übertragen wird
- Das Passwort kommt beim Server an und der kann es lesen
- Dann kann der Server den Vergleich machen - Eingabe vs. Datenbank
- Die Kommunikation verläuft verschlüsselt

- Sicherheit sollte in Schichten vorhanden sein

- Traurige Wahreit viele Benutzerdatenbanken wurden gestohlen/geleaked
  - Einschließlich großer Unternehmen
    - Dropbox
    - LinkedIn
    - Twitter

- Wenn das LinkedIn-Passwort duchsickert
  - Angreifer werden versuchen sich bei eurem GMail-Account, Netflix, Bank, etc. einzuloggen
  - Daher nicht dasselbe Passwort an vielen Stellen benutzen

- Es reicht nicht aus, dass die Daten währen der Übertragung sicher sind (HTTPS)
  - Sie müssen auch im Ruhezustand sicher sein

- Wenn der Inhalt in der Datenbank gestohlen wird
  - Es soll nie möglich sein, Passwörter als Klartext zu lesen
  - Die anderen Daten, E-Mail, etc. werden i.d.R. als Klartext gespeichert

## Verschlüsselung

- Verschlüsselung ist umkehrbar
- Ich mag Katzen - verschlüsselt - `02lsdlslpSD`
- `02lsdlslpSD` - entschlüsselt - Ich mag Katzen

- Es gibt viele verschiedene Verschlüsselungsalgorythmen

- xnssrr // Kaffee
- ZbatbQO // MongoDB
- xnuivgryyn // Finnisch "kahvitella" > Kaffee trinken

- Die Wörter sind mit ROT13 verschlüsselt
- ROT13 ist ein sehr einfacher Algorythmus
- Die meisten Algorythmen verwenden zusätzlich noch ein Geheimnis zur Verschlüsselung
- Das ist näher an dem, wie HTTPS funktioniert

- Das Geheimnis ist das, worauf sich Client und Server einigen
- Der Client verschlüsselt das Geheimnis
- Der Server entschlüsselt es

- Am wichtigsten: Verschlüsselung kann umgekehrt werden

## Hashing

- Hashing ist nicht umkehrbar

- Ich mag Katzen --- hash --- `2c2a3390a9fc4bf9e67ac638f9b2f3ee`

- `2c2a3390a9fc4bf9e67ac638f9b2f3ee` kann nicht umgekehrt werden

- Die gleiche Eingabe erzeugt immer die gleiche Ausgabe
    - Die Ausgabe wird "Hash" genannt

- Auch hier gibt es viele verschiedene Algorythmen

- Passwörter sollten immer gehasht werden
  - Wenn jemand die Datenbank stiehlt
  - Sie können das Passwort nicht einfach entschlüsseln
  - Auf diese Weise ist es VIEL langsamer und schwieriger, Zugang zu den tatsächlichen Passwörtern zu bekommen
  - Aber immer noch nicht unmöglich

## Passwort-Cracking

- Du erhältst eine Liste von Benutzerkonten mit gehashten Passwörtern


```js
const accounts = [
    { user: "Ace", password: "5f4dcc3b5aa765d61d8327deb882cf99" },
    { user: "Pam", password: "96bd6436d12ee3301f81a24498fe072e" },
    { user: "Jim", password: "f25a2fc72690b780b2a14e140ef6a9e0" },
]
```

- Du kannst sie nicht entschlüsseln, aber du erkennst, dass der Algorithmus MD5 ist
- Glück gehabt! Das ist ein schlechter für Passwörter!
- Du kennst auch die 3 häufigsten Passwörter
  - 12345
  - password
  - 12345678

- Wir entscheiden uns sie auszuprobieren
- md5("123456") --> `e10adc3949ba59abbe56e057f20f883e`
- md5("password") --> `5f4dcc3b5aa765d61d8327deb882cf99`
- md5("12345678") --> `25d55ad283aa400af464c76d713c07ad`

- Sieht so aus, als ob das Passwort für "Ace" "password" ist

- Das war ein Beispiel für Passwort-Cracking mit einem Wörterbuchangriff
  - Du hast eine Liste von Millionen von gängigen Passwörtern
  - Du hasht jedes von ihnen einzeln und vergleichst die Hashs mit den Passwörtern
  - Wenn die Passwörter schwach sind, wirst du die meisten Konten knacken!

- Verwandtes Konzept: Rainbow Tables
  - Eine Rainbow Table ist im Grunde eine riesige Datenbank
  - Darin sind die Hashes für eine sehr große Anzahl von Passwörtern bereits gespeichert

- Einige Konten könnten starke Passwörter wie `ad283aa4` verwenden
- Ein Wörterbuchangriff könnte nicht funktionieren, es ist zu zufällig
- Also entscheidest du dich, jede einzelne mögliche Kombination zu hashen
    - md5("a") --> 0cc175b9c0f1b6a831c399e269772661
    - md5("b") --> 92eb5ffee6ae2fec3ad71c777531578f
    - md5("c") --> 4a8a08f09d37b73795649038408b5f33
    - usw.

- Das nennt man einen Brute-Force-Angriff
  - Sehr langsam, Geschwindigkeit hängt von der Passwortkomplexität und der Computerleistung ab
  - Starkes Passwort + guter Algorithmus könnte Millionen von Jahren zum Knacken brauchen
  - Aber es wird schließlich funktionieren

- Mit den Zeichen a-z, A-Z, 0-9 hast du 62 mögliche Zeichen
- Probiere jedes von ihnen aus und dann probiere "aa", "ab", "ac", usw.
- Du wirst Hunderte von Millionen ausprobieren müssen
- Die Anzahl der möglichen Kombinationen beträgt 218.340.105.584.896
- Etwa 218 Billionen mögliche Kombinationen
- Das ist eine harte for-Schleife zum Ausführen
- ABER: nicht unmöglich - Computer können verrückt schnell sein
- Unglaublicherweise ist das nicht genug
- Es empfiehlt sich Sonderzeichen hinzuzufügen, und je länger, desto besser

## Salting

- Hier kommt das Konzept des Salting ins Spiel.
- Beispiel:
- Passwort: `ad283aa4`
- Zufälliger Salt: `XyZ123`
- Kombiniert: `ad283aa4XyZ123`
- Der Hash wird dann auf die Kombination angewendet: md5("ad283aa4XyZ123")
- Ergebnis: Ein ganz anderer Hash als der für md5("ad283aa4")
- Dadurch wird jeder Hash einzigartig, selbst wenn zwei Benutzer das gleiche Passwort verwenden.

- Beispiel:
- Benutzer 1: Passwort `ad283aa4`, Salt `XyZ123`
- Benutzer 2: Passwort `ad283aa4`, Salt `AbC456`
- Hash von Benutzer 1: md5("ad283aa4XyZ123")
- Hash von Benutzer 2: md5("ad283aa4AbC456")
- Zwei völlig unterschiedliche Hashes, obwohl das Passwort identisch ist!
- Warum ist das wichtig?
- Salts verhindern effektiv den Einsatz von Rainbow Tables
- Der Angreifer kann nicht einfach eine vorgefertigte Tabelle verwenden
  - Selbst wenn jemand Zugriff auf die Hashes hat:
    - Müsste er einen neuen Brute-Force-Angriff starten
    - Für jedes Passwort und seinen individuellen Salt



