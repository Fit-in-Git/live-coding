## Grundlagen der Datenbank

- Eine Datenbank ist eine strukturierte Sammlung von Daten
- Datenbanken speichern, greifen auf und manipulieren riesige Mengen an Informationen zu
- Technisch gesehen könntest du einfach Textdateien zur Datenspeicherung verwenden
  - Aber tatsächlich ist die Festplatten-I/O dafür viel zu langsam
  - Und Datenbanken haben viele spezialisierte Funktionen

- Datenbanken sind ein umfangreiches Thema
  - Viele Ingenieure spezialisieren sich speziell auf Datenbankadministration
  - Wir werden die grundlegenden Konzepte behandeln

- Es gibt VIELE verschiedene Arten von Datenbanken
  - SQL-Datenbanken
    - Sehr verbreitet
    - Basieren auf der SQL-Sprache
    - Sehr strukturierte Daten
    - Wir werden später noch einen Workshop dazu haben

  - NoSQL-Datenbanken
    - Im Grunde jede Datenbank, die nicht SQL ist
    - Viele verschiedene Arten
      - Einige basieren auf Dokumenten, wie ein Array von Objekten
      - Einige basieren auf Schlüssel-Wert-Paaren, wie ein Objekten

- Wir werden uns hauptsächlich auf eine NoSQL-Datenbank konzentrieren

## MongoDB

- MongoDB ist eine auf Dokumenten basierende NoSQL-Datenbank
  - Du speicherst Daten, die als Dokumentensammlungen organisiert sind
  - Eine Dokumentensammlung könnte zum Beispiel sein
    - Produkte
    - Benutzer
    - Kommentare
    - Beiträge
- Die Arbeit mit MongoDB ist sehr ähnlich wie die Arbeit mit JavaScript
  - Du könntest die Dokumentensammlungen als Arrays von Objekten betrachten

- Den MongoDB-Server beim Booten automatisch starten
- `systemctl enable mongod`

- Den Server manuell starten
- `systemctl start mongod`

- Den Server manuell stoppen
- `systemctl stop mongod`

- Eine Verbindung zu MongoDB herstellen 
- `mongosh`

- Shell beenden
- `exit`

- Alle Datenbanken anzeigen
- `show dbs`

- Eine neue Datenbank "myShop" erstellen und dahin wechseln
- `use myShop`

- In einem Datenbankserver können wir viele Datenbanken haben
- Normalerweise bedient eine Datenbank eine Anwendung
- myShop für deine E-Commerce-Webseite

- Normalerweise würdest du mehrere Benutzer für den Datenbankserver haben
- Du würdest dich auch mit einem spezifischen Benutzernamen und Passwort anmelden
- Unser lokaler Server hat dafür keinen Bedarf
- Für die Produktion BRAUCHST du sehr hohe Sicherheit

- Eine neue Collection "products" erstellen
- `db.createCollection("products")`

- Alle Collections einer Datenbank anzeigen
- `show collections`

```js
["tree", "toilet", "pillow"].forEach(item => {
    const price = Math.round(Math.random()*10)
    db.products.insertOne({ name: "Cat "+ item, price })
})
```

- Hier ist `products` eine Sammlung (Collection)
  - Wir haben einige Dokumente in die Sammlung eingefügt
  - Du kannst auch grundlegende JS-Operationen ausführen

- Technische Anmerkung: Die Dokumente sind eigentlich nicht JSON
  - Sie sind BSON
  - Ein speziell für MongoDB entwickeltes Format, das auf JSON basiert
  - Es gibt unterschiedliche Datentypen als bei JSON
  - Welche Datentypen hatten wir für JSON
    - string
    - number
    - object
    - Array
    - boolean
    - null
  - für BSON
  - https://www.mongodb.com/basics/bson#bson-specifications-and-bson-types

- Jedes Dokument hat automatisch eine `_id` Eigenschaft bekommen
  - Das ist eine ObjektID
  - Das ist praktisch, da wir für praktisch jedes Dokument einen eindeutigen Identifikator brauchen

- Es gibt zwei Hauptwege, wie man ID's erstellen kann
  - Automatisch inkrementierte Zahlen
  - {id: 1}
  - {id: 2}
  - {id: 3}

- Vollständig zufällige Strings
  - { id: "62255c53-3984-4c55-8a80-5ab2be6b176c" }
  - { id: "053693df-9112-4305-84f2-0ad8f367acb8" }
  - { id: "59b7b4d9-3737-4c69-b2f3-dcba35790f43" }

## IDs durch inkrementierte Ganzzahlen
- Pro:
  - Einfach zu tippen
  - Einfach für Menschen zu merken
  - kurz: http://example.org/users/42

- Kontra:
- Das Zusammenführen von Sammlungen von überlappenden ids ist sehr schwierig
- Das Verschieben der Daten zwischen den Sammlungen kann id-Konflikte verursachen

## IDs durch zufällige Strings
- Pro:
  - Das Verschieben von Daten und Zusammenführen von Datenbanken/Sammlungen ist trivial
  - Mit UUIDs wirst du nie auf einen Id-Konflikt stoßen
    - Universally Unique IDS

- Kontra:
  - Schwierig zu tippen oder zu merken
  - Lang: `http://example.org/users/053693df-9112-4305-84f2-0ad8f367acb8`

## ObjectIDs
- Die ObjectIDs in MongoDB sind eher inkrementell als völlig zufällig
  - Sie haben aber einen Aspekt an Zufälligkeit

Die 12-Byte-ObjectID besteht aus:
 - Einem 4-Byte-Zeitstempel, der die Erstellungszeit der ObjectId darstellt
 - Einem 5-Byte-Zufallswert, der pro Prozess generiert wird, einzigartig für Maschine und Prozess
 - Einem 3-Byte-inkrementierenden Zähler, der mit einem zufälligen Wert initialisiert wird

Alle Dokumente einer Collection anzeigen
`db.collectionName.find({})`

Eine Collection löschen
`db.collectionName.drop()`

Eine Datenbank löschen
`db.dropDatabase()`

## Mini-Übung
Aufgabe: Wechsel in der MongoDB-Shell zur Datenbank mit dem Namen schule. Wenn diese Datenbank noch nicht existiert, soll sie automatisch erstellt werden.

Aufgabe: Erstelle in der Datenbank schule eine Sammlung mit dem Namen schueler.

Aufgabe: Füge in die Sammlung schueler ein Dokument ein, das den Namen und das Alter eines Schülers enthält. Der Name soll Hanna Meyer und das Alter 16 sein.

Aufgabe: Füge in die Sammlung schueler mehrere Dokumente gleichzeitig ein. Die Schüler sollen folgende Namen und Alter haben:
Lisa Meier, 17 Jahre Mark Hansen, 15 Jahre Mona Müller, 16 Jahre 