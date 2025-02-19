## MVC

- Es gibt mehrere Möglichkeiten ein Projekt zu organisieren
  - Architekturmuster in der Softwareentwicklung
- Ein klassisches und sehr verbreitetes Modell ist MVC
  - Model, View, Controller
  - Es gibt davon verschiedene Variationen, wir konzentrieren uns auf das Grundlegende

- `Model` repräsentiert die Daten einer Anwendung
- `View` repräsentiert die Benutzeroberfläche
- `Controller` handhabt die Interaktion zwischen View und Model

- In einem REST-API Backend haben wir eigentlich kein View

- Nehmen wir ein Beispiel
  - Wir haben eine App mit einem Feedback-Formular
  - Angemeldete User können Feedback-Formulare einreichen
  - Admins können sich anmelden und Feedback-Formulare ansehen und löschen
  - Admins können auch Benutzer erstellen, auflisten, aktualisieren und löschen

Endpunkte:
GET /feedback - erfordert Admin-Login
POST /feedback - erfordert Admin- oder normalen Benutzer-Login
DELETE /feedback/:id - erfordert Admin-Login
GET /user - erfordert Admin-Login
POST /user - erfordert Admin-Login zur Erstellung von Benutzern
POST /user/login - ermöglicht Benutzern das Einloggen
PATCH /user/:id - erfordert Admin-Login
DELETE /user/:id - erfordert Admin-Login

- Hier haben wir zwei Hauptkonzepte: `feedback` und `user`
- Normalerweise würden wir für feedback und user einen Router bauen
- MVC
  - feedback und user sind die Modelle
  - feedbackRouter und userRouter sind die Controller
  
- feedback und user würden vermutlich in einer Datenbank gespeichert werden 

ODM / ORM

- Es ist sehr üblich, eine Bibliothek zur Arbeit mit Datenbanken zu verwenden
- Dies kann das Programmieren erleichtern und den Code angenehmer zu lesen machen
- Eine gängige Arbeitsweise von Datenbankbibliotheken wird ODM oder ORM genannt
  - Object Document Mapping (worauf wir uns konzentrieren werden)
  - Object Realtional Mapping

- In MongoDB "mappen" diese Bibliotheken eine collection zu einem Model
  - Ein Model ist im Grunde wie eine JavaScript-Klasse
    - Anstatt `db.feedbacks.find()` zu schreiben
    - Würdest du `Feedback.find()` schreiben

- Konzepte wie ein ODM sind ein großartiges Beispiel für "Abstraktionsebenen"
  - Sie ermöglichen es einem Programmierer, sich auf weniger auf einmal zu konzentrieren
  - Anstatt an Datenbank/Collection/Dokument denken zu müssen
  - Kannst du einfach an die Konzepte denken und die Details werden abstrahiert

- Das größte ODM für MongoDB heißt Mongoose
  - Mongoose ist ein ODM, es mappt Collections zu Modellen

## Nutzung von MongoDB in Node mit Mongoose

- Um Mongoose zu benutzen müssen wir die Form, die unsere Daten haben sollen, vorher definieren
- Wir definieren eine Art Blaupause unserer Daten
- Mit anderen Worten: Wie sehen unsere Daten auflisten

```js
const user = {
    _id: "123",
    email: "samy@example.org",
    password: "qwerty123",
    accountNumber: 8675309,
    description: "aber vor allem ist Samy mein Held"
    isVerified: true,
}

// Die Form unserer Daten könnte so aussehen
{
_id     // String, darf nicht leer sein
email: // String, darf nicht leer sein
password // String, darf nicht leer sein
accountNumber // Integer, darf nicht leer sein
description // String, kann auch leer sein (null)
isVerified // Boolean, standardmäßig auf false bis das Konto verifiziert ist
}
```

- In Mongoose definieren wir das, indem wir ein `Schema` erstellen
- Ein Schema ist ein Konfigurationsobjekt für ein Model
- Es definiert die Form der Dokumente innerhalb einer MongoDB-Collection
- Es ist mit einer MongoDB-Collection verbunden
- Wir wollen nicht irgendwelche zufälligen Dokumente in unserer Collection
  - jeder MUSS eine E-Mail haben
  - isVerified MUSS ein Boolean sein
  - Die Kontonummer MUSS eine Ganzzahl sein
  - usw.

- Basierend auf diesem Schema erstellen wir das Model

## Zusammenfassung

- MVC ist ein Softwarearchitekturmuster
- MODEL-VIEW-CONTROLLER
- Mongoose ist ein MongoDB ODM
- Object-Document-Mapper
- Mongoose hat Schemas, um die Form unserer Daten zu definieren
- Mongoose Schemas erstellen Mongoose Modelle
- Mongoose Modelle werden verwendet um Objekte zu steuern