# Datebeziehungen

- Denkt an Apps wie Facebook/Twitter/Mastodon/Instagram
- Ein Benutzer hat Beiträge
  - Ein Beitrag hat Likes
  - Ein Beitrag hat Kommentare
    - Ein Kommentar hat Likes
    - Ein Kommentar hat Kommentare

- Ein Benutzer hat andere Benutzer, denen er folgt
- Ein Benutzer hat seine Lieblingsbeiträge

- Collections sind sehr häufig miteinander verknüpft

- Eins-zu-Eins (one-to-one) 
  
    - Ein `Like` gehört zu einem `Post` oder `Comment`
    - Ein `Post` gehört zu einem `User`

- Eins-zu-viele (one-to-many)

    - Ein `Post` hat viele `Likes`
    - Ein `Post` gehört zu einem `User`

- Viele-zu-viel (many-to-many)

    - Ein `User` hat viele `Posts` in seiner Favoritenliste
    - Ein `Post` hat viele `Users` die ihn zur Favoritenliste hinzugefügt haben

## ONE-TO-ONE

```js
const ownerSchema = new Schema({
    name: String,
    email: String,
    phone: String,
    house: {type: Schema.Types.ObjectId, ref: "House", unique: true}
});

const houseSchema = new Schema({
    address: String,
    size: Number,
    price: Number
})

const Owner = model("Owner", ownerSchema);
const House = model("House", houseSchema);
```

## ONE-TO-MANY

```js
const departmentSchema = new Schema({
    name: String,
    location: String,
    employee: [{type: Schema.Types.ObjectId, ref:"Employee"}]
});

const employeeSchema = new Schema({
    name: String,
    email: String,
    salary: Number,
    hireDate: Date,
    department: {type:Schema.Types.ObjectId, ref:"Department"}
});

const Department = model("Department", departmentSchema);
const Employee = model("Employee", employeeSchema);
```

MANY-TO-MANY

```js
const courseSchema = new Schema({
    name: String,
    description: String,
    students: [{type:Schema.Types.ObjectId, ref:"Student"}]
});

const studentSchema = new Schema({
    name: String,
    email: String,
    courses: [{type:Schema.Types.ObjectId, ref:"Course"}]
});

const Course = model("Course", courseSchema);
const Student = model("Student", studentSchema);
```