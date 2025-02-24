# Ein Blick auf Schemas

- Was war noch einmal die Rolle von Schemas?
  - Sie definieren die Form von Dokumenten in einer Collection
  - Sie generieren das Modell für uns

- Schemas nehmen ein Objekt mit veschiedenen Eigenschaften entgegen
  - Manchmal auch Felder genannt
  - Jeder Schlüssel definiert eine bestimmte Eigenschaft, die ein Dokument haben kann
  - Felder können sein:
    - String
    - Number
    - Date
    - Boolean
    - Man kann ein Feld als erforderlich festlegen: `required: true`

- Schemas können wir viele veschiedene Typen für unsere Dokumente definieren

```js
const userSchema = new Schema({
    accountNumber: Number,
    email:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true
    },
    isVerfied: {
        type: Boolean,
        required: true
    }
})
```

- Das Number ist die Kurzform von `{type: Number}`
- Das `required: true` ist eine Schema-Typ Option
  - Es verhindert, dass wir Dokumente ohne diese Felder einfügen können
  - Wie bei Schematypen gibt es viele Schematyp-Optionen
  - Zwei weitere die wichtig sind:
    - `default` setzt den Standardwert
    - `unique` macht die Feldwerte einzigartig für die Collection

```js
const userSchema = new Schema({
    accountNumber: Number,
    email: {
        type: String,
        required: true,
        unique: true // darf nur einmal in der Form vorkommen
    },
    password: {
        type: String,
        required: true
    },
    isVerfied: {
        type: Boolean,
        required: true,
        default: false // Neue User sind standardmäßig nicht verifiziert
    },
    roles: {
        type: [String] // Ein Benutzer kann mehrere Rollen haben
        required: true,
        default: ["user"]
    }
})
```

- Wir können Mongoose auch dazu bringen, Zeitstempel für Erstellungs- und Aktualisierungszeiten hinzuzufügen
- Diese sind eine Option für das Schema
```js
const userSchema = new Schema({
    ...
}, {timestamps: true})
```

## Mongoose Terminologie: Validator

- In Mongoose ist `required` ein Beispiel für einen Validator
- Einstellungen wie diese können Regeln für die Daten eines Feldes festlegen
- Welche Validatoren benutzt werden können, hängt vom `type` eines Feldes accountNumber
  - Bei Zahlen können wir z.B. `min` oder `max` benutzen
  - Es gibt auch einen `enum` Validator

## Subdocuments / Unterdokumente

- Es ist ziemlich üblich, deine Daten in verschachtelten Objekten organisieren zu wollen
- In Mongoose sind das Schemas, die in anderen Schemas verschachtelt sind
- Wenn wir ein Unterdokument erstellen, betten wir ein Dokument in ein anderes Ein
- Als ob wir ein Objekt in einem anderen Objekt hätten

### Verschachtelte Pfade

```js
const userSchema = new Schema({
    name: String,
    email: String,
    address: {
        country: String,
        city: String,
        street: String,
        zip: Number
    },
    age: Number
})

const newUser = new User({
    name: "Peggy",
    email: "peggy@work.de",
    address: {
        country: "Deutschland",
        ...
    }
    // Alternativ:
    address.country: "Deutschland",
    ...
})
```

### Einfach verschachtelte Unterdokumente

```js
const addressSchema = new Schema({
    country: String,
    city: String,
    street: String,
    zip: Number
})

const userSchema = new Schema({
    name: String,
    email: String,
    address: addressSchema,
    age: Number
})

const User = model("User", userSchema)

const newUser = new User({
    name: "Peggy",
    email: "peggy@work.de",
    address: {
        country: "Deutschland",
        street: "Hauptstr. 1",
        ...
    }
})
```

### Array aus Unterdokumenten

```js
const ingredientsSchema = new Schema({
    name: String,
    quantity: String
});

const recipeSchema = new Schema({
    title: String,
    kcal: Number,
    carb: Number,
    fat: Number,
    protein: Number,
    ingredients: [ingredientsSchema]
});

const Recipe = model("Recipe", recipeSchema);

const newRecipe = new Recipe({
    title: "Spaghetti Carbonara",
    kcal: 580,
    carb: 55,
    fat: 30,
    protein: 15,
    ingredients: [
        {name: "Spaghetti", quantity: "200g"},
        {name: "Eier", quantity: "2"},
        {name: "Parmesan", quantity: "50g"}
    ]
})
```