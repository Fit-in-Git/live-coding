# SQL

- Excel-Dateien sind wie SQL-Datenbanken
- Ein SQL-Server kann mehrere Datenbanken haben (wie Excel-Dateien in einem Ordner)
- Eine SQL-Datenbank kann mehrere Tabellen haben (wie Excel-Tabellen in einer Datei)
- Eine SQL-Tabelle kann mehrere Spalten haben (wie Spalten in einer Excel-Tabelle)
- Eine SQL-Tabelle kann mehrere Zeilen haben (wie Zeilen in einer Excel-Tabelle)

- Die Art und Weise, wie SQL funktioniert, ist, dass man diese Schlüsselwörter wie SELECT oder FROM oder CREATE oder TABLE hat, und man hat sich geeinigt, sie in Großbuchstaben zu schreiben.

- Mit dieser strukturierten Abfragesprache können wir Tabellen erstellen, sie manipulieren, aktualisieren, wieder löschen, etc.

- Bei jedem einzelnen Datenbanktyp bestehen die Hauptaufgaben darin, Tabellen zu erstellen, zu lesen, zu aktualisieren und zu löschen. Im Datenbankjargon nennt man das CRUD.

- C => CREATE(Erstellen)
- R => READ(Lesen)
- U => UPDATE(Aktualisieren)
- D => DELETE/ DESTROY(Löschen)

- Für jede einzelne Datenbank muss man sich also erst einmal daran gewöhnen, CRUD mit den jeweils speziellen Datenbankoperationen durchzuführen.

### CRUD

## CREATE

Tabelle erstellen

```SQL
CREATE TABLE employees (
  id SERIAL PRIMARY KEY, -- Automatisch inkrementierte id
  name VARCHAR(100) NOT NULL, -- Name darf nicht leer sein
  position VARCHAR(50),
  salary DECIMAL(10, 2), -- Gehalt mit 2 Nachkommastellen
  verified BOOLEAN DEFAULT FALSE, -- Standardwert, false
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP -- Zeitstempel bei Erstellung
);
```

Tabelle befüllen
```SQL
INSERT INTO employees (name, position, salary) VALUES
('Alice Smith', 'Developer', 50000),
('Bob Johnson', 'Manager', 60000),
('Carol White', 'Analyst', 45000),
('David Black', 'Designer', 35000);
```
- Wir geben explizit die Spalten an (name, position, salary)
- `id` und `created_at` werden automatisch gesetzt

Ohne die Spalten anzugeben (alle Spalten in der richtigen Reihenfolge, auch die automatisch generierten, außer den default Werten)

```SQL
INSERT INTO employees
VALUES (DEFAULT, 'John Doe', 'Shoemaker', 30000, FALSE);
```

Alle Daten anzeigen

`SELECT * FROM employees`

- In SQL werden String in einfache Anführungszeichen gesetzt ('')
- Doppelte Anführungszeichen werden für Spaltennamen benutzt, nicht Werte

Tabelle mit Bedinungen erstellen
```SQL
CREATE TABLE customers (
id SERIAL PRIMARY KEY,
name VARCHAR(100) NOT NULL,
position VARCHAR(50),
orders DECIMAL(10,2) CHECK (orders >= 0), -- Keine Bestellung unter 0
verified BOOLEAN DEFAULT FALSE
);
```

```SQL
INSERT INTO customers (name, position, orders) VALUES
('Mae West', 'Developer', 10),
('George Dean', 'Manager', 50);
```

Daten aus einer anderen Tabelle einfügen

```SQL
INSERT INTO employees (name, position)
SELECT name, position FROM customers;
```

Zusätzliche Spalten nachträglich hinzufügen

`ALTER TABLE employees ADD COLUMN department VARCHAR(50);`

Einzelne Spalten wieder löschen

`ALTER TABLE employees DROP COLUMN department;`


# READ

Alle Spalten anzeigen

`SELECT * FROM employees;`

Einzelne Spalten anzeigen

`SELECT name, position FROM employees`;

Mit `WHERE` bestimmte Daten abrufen

`SELECT * FROM employees WHERE name = 'Alice Smith'`

`SELECT * FROM employees WHERE salary > 40000`

Mehrere Bedingung

`SELECT * FROM employees WHERE position = 'Developer' AND salary > 40000`

`SELECT * FROM employees WHERE position = 'Developer' OR position = 'Manager'`

`SELECT * FROM employees WHERE salary BETWEEN 35000 AND 70000`

`SELECT * FROM employees WHERE position IN ('Developer', 'Analyst', 'Designer')`

Sortieren

`SELECT * FROM employees ORDER BY salary ASC`

Gruppieren

Anzahl der Mitarbeiter pro Position zählen
`SELECT position, COUNT(*) FROM employees GROUP BY position`

## UPDATE

- Einzelne Werte einer Tabelle aktualisieren

```SQL
UPDATE employees
SET salary = 42000
WHERE name = 'Mae West';
```
Wichtig: Ohne WHERE wird jede Zeile geändert!

- Mehrere Spalten gleichzeitig ändern
George bekommt ein neues Gehalt und einen neuen verified Status

```SQL
UPDATE employees
SET salary = '40000', verified = TRUE
WHERE name = 'George Dean';
```

Alle Gehälter um 5% erhöhen:

```SQL
UPDATE employees
SET salary = salary * 1.05;
```
Hier fehlt WHERE, daher wird jede Zeile geändert!

Mitarbeiter mit weniger als 40.000 € bekommen zusätzlich 3000 €
```SQL
UPDATE employees
set salary = salary + 3000
WHERE salary < 40000;
```

## DELETE

- Einzelne Zeilen aus einer Tabelle löschen
  
```SQL
DELETE FROM customers
WHERE name = 'George Dean';
```

- Mehrere Zeilen auf einmal löschen
```js
DELETE FROM employees
WHERE salary > 50000;
```

- Alles aus einer Tabelle löschen (die Tabelle wird behalten)
- `TRUNCATE TABLE customers;`

## Beziehungen

- Ein Primärschlüssel (PRIMARY KEY) identifiziert jede Zeile eindeutig
- Ein Fremdschlüssel (FOREIGN KEY) verweist auf einen Primärschlüssel einer anderen Tabelle

Tabelle departments erstellen:

```SQL
CREATE TABLE departments (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL
);
```

Tabelle employees mit Fremdschlüssel zu departments erstellen
```SQL
CREATE TABLE employees (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  position VARCHAR(50) NOT NULL,
  salary DECIMAL(10, 2) NOT NULL,
  department_id INT REFERENCES departments(id) ON DELETE CASCADE
);
```
- REFERENCES departments(id) verbindet employees mit departments.
- ON DELETE CASCADE sorgt dafür, dass beim Löschen einer Abteilung alle zugehörigen Mitarbeiter auch gelöscht werden.
- Alternativ: SET NULL, falls die Mitarbeiter behalten werden sollen

- Verknüpfte Daten abrufen (JOIN oder INNER JOIN)
Mitarbeiter und ihre Abteilungen anzeigen (zeigt nur Übereinstimmungen)

## PostgreSQL Installation

https://www.postgresql.org/download/linux/ubuntu/

Status checken
`sudo systemctl status postgresql`

Mit Postgres verbinden (postgres user)
`sudo -u postgres psql`

Einen neuen Benutzer erstellen
```SQL
CREATE USER testuser WITH
    SUPERUSER
    CREATEDB
    CREATEROLE
    CONNECTION LIMIT -1;

ALTER USER testuser WITH PASSWORD 'ilovemongodb';

CREATE DATABASE test;
```

Datenbank beenden
`exit;`

Mit dem neuen Benutzer anmelden
`psql -U testuser -h localhost -d test`

Mit einer Datenbank verbinden
`\c name`

Alle Tabellen anzeigen
`\dt`