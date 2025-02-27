## Seitenaufteilung / Pagination

- Angenommen wir haben eine Datenbank mit 9000 Benutzern
- Das alles auf einer Seite aufzulisten wäre einfach zu viel!
- Besser wäre es, z.B. nur 10 Einträge auf einmal anzuzeigen
- Für den Rest haben wir einzelne Seiten zum Durchsuchen
- Die Seitenaufteilung wird am häufigsten mit `limit` und `skip` realisiert
- Du erstellst zuerst eine Basisabfrage und fügst dann die spezifischen Details hinzu

```js
const query = User.find() // Abfrage vorbereiten
query.limit(10) // Begrenzung auf maximal 10 Einträge aus der Datenbank
query.skip(0) // Wie viele Einträge wollen wir überspringen

// Wenn wir die ersten 0 Ergebnisse überspringen, dann zeigen wir die Beiträge 1-10 an
// Wenn wir die ersten 10 Ergebnisse überspringen, dann zeigen wir die Beiträge 11-20 an
// Wenn wir die ersten 20 Ergebnisse überspringen, dann zeigen wir die Beiträge 21-30 an
// Wenn wir die ersten 30 Ergebnisse überspringen, dann zeigen wir die Beiträge 31-40 an

// limit = wie viele pro Seite
// skip = (aktuelle Seitennummer - 1) * limit
```

## Sortieren / Filtern

- Neben limit / skip können wir die Ergebnisse auch sortieren und Filtern
- Stellen wir uns wieder die 9000 Benutzer vor
  - Wir wollen nur die Admins auflisten
  - Oder zeige nur die User mit dem Alter > 17
  - Sortiere das Ganze von alt nach neu

```js
const query = User.find() // Abfrage vorbereiten
query.where("role").equals("admin") // Zeige nur die Administratoren
query.where("age").gt(17) // Zeige nur die, die älter als 17 Jahre sind
query.sort({createdAt: "asc"}) // Sortiere nach Erstellungszeit aufsteigend

const users = await query.exec() // Abfrage ausführen
```

## Advanced Queries

```js
// Zähle alle Dokumente der Collection
countDocuments()

// Pagination

// Zeige nur die ersten 5 Dokumente
find().limit(5)

// Überspringe die ersten 2 Dokumente
find().skip(2)

// Sortieren

// Sortiere aufsteigend nach dem Titel
find().sort({title: "asc"})

// Sortiere absteigend nach dem Titel
find().sort({title: "desc"})

// Sortiere absteigend nach release und anschließend aufsteigend nach country
find().sort({release:-1, country: 1})

// Finde alle Dokumente und gib uns nur den title zurück
find().select("title")

// Gib uns nur title und release für alle Dokumente zurück
find().select("title release")

// Weitere Queries

// Finde alle deren title mit "J" anfängt (regular expression)
find({title: /^J/})

// Finde alle bei denen im title das Wort "example" vorkommt (regular expression)
find({title: /example/})

// Finde alle die eine length haben die größer als 90 ist
find({length: {$gt: 90}})
```