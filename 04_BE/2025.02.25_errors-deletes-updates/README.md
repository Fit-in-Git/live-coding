## Fehlerhandling

- Was für Fehler tauchen typischerweise auftreten?
- Wenn man versucht eine doppelte E-Mail in ein unique-Feld einzufügen
- Wenn wir ein Dokument updaten wollen, das nicht existiert

- Welche Technik hatten wir zum Fehlerhandling?
- `try...catch`
- Wie funktioniert das
  - Wir erstellen einen Codeblock zum ausführen
  - Wenn irgendetwas innerhalb des try-Bereichs einen Fehler wirft (throw)
  - dann wird das im catch-Block aufgefangen

```js
try {
    await Product.deleteOne({id: "bananas"})
} catch (error) {
    // mach etwas um den Fehler zu behandeln
}
```

- Der globale Errorhandler
  - In den Endpunktfunktionen leiten wir den Fehler weiter im catch-Block mit next(err)
  - Am Ende unserer Routen haben wir den Errorhandler definiert, der alle Fehler auffängt

```js
app.use((error, req, res, next)=>{
    console.log(error);
    res.status(500).json({error: "Server error"})
})
```

## Soft delete

- Wenn wir etwas löschen, dann ist es weg aus der Datenbank
- Problem: Versehentliches löschen
- Anstatt es endgültig zu löschen, kann man ein sanftes Löschen durchführen
- Eine Möglichkeit, ein sanftes Löschen durchzuführen:
  - Füge ein Datumsfeld `deleted` hinzu, das standardmäßig null ist
  - `DELETE` wir tatsächlich nur das `deleted` Feld auf die aktuelle Zeit setzen
  - In der `GET`-Route würden wir nur Artikel mit `deleted:null` zurückgeben

- Man könnte eine Automatisierung für die Datenbankreinigung erstellen
  - Täglich ausführen, um Elemente zu löschen, die seit > 30 Tagen soft gelöscht wurden