## Fortgeschrittene Shell Befehle

Dokumente finden

- Alle Dokumente
`db.cars.find()`

- Ein spezifisches Dokumente
`db.cars.findOne({model: "Camaro)})`

Dokumente aktualisieren / updaten

- Ein Dokument
`db.cars.updateOne({make:"Mitsubishi"}, {$set:{model:"Pajero"}})`

- Mehrere Dokumente
`db.cars.updateMany({make:"Mitsubishi"}, {$set:{model:"Pajero"}})`

Dokumente löschen

- Ein Dokument

`db.cars.deleteOne({year:2000})`

- Mehrere Dokumente

`db.cars.deleteMany()`

Dokumente zählen

`db.cars.countDocuments()`

- Mit Parameter

`db.cars.countDocuments({model: "Honda"})`

Dokumente sortieren

- Aufsteigend sortieren

`db.cars.find().sort({year: 1})`

- Absteigend sortieren

`db.cars.find().sort({year: -1})`

Limitieren / überspringen

Suchergebnisse auf eine bestimmte Anzahl Limitieren

`db.cars.find().limit(2)`

Suchergebnisse überspringen

`db.cars.find().skip(2)`