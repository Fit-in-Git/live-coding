## Autorisierung

- Abgrenzung zu Authentifizierung
  - Authentifizierung: Wer bist du?
  - Autorisierung: Was darfst du tun?
- Normalerweise haben verschiedene Benutzer Zugang zu verschiedenen Teilen unserer App
- Alle Benutzer können GET/posts ausführen
- Nur Admins können DELETE /posts/:id ausführen
- Es gibt viele verschiedene Ansätze

## Einfache rollenbasierte (RBAC - Role-Based Access Control)

- Deine App hat Benutzer und verschiedene Rollen: Admin, User, Editor, Moderator...
- Deine Benutzer haben vielleicht eine spezifische Rolle
- Deine Benutzer haben vielleicht mehrere Rollen gleichzeitig
- Einige Endpunkte erfordern spezifische Rollen um zu funktionieren
- Eine App definiert verschiedene Rollen wie:
  - Admin (darf alles)
  - Editor (darf Inhalte bearbeiten)
  - Moderator (darf Kommentare moderieren)
  - User (darf Inhalte lesen)

- Endpunkte (API-Routes) werden so konfiguriert, dass sie nur von bestimmten Rollen aufgerufen werden können
- 
```js
app.delete('/foo/:id', authenticated, roles(['admin']), (req,res) => {
    ...
})

app.put('/foo/:id', authenticated, roles(['admin','editor']), (req,res) => {
    ...
})
```

## Berechtigungsbasiert (PBAC - Permission-Based Access Control)

- Statt Rollen werden bestimmte Berechtigungen für bestimmte Aktionen vergeben
- Deine App Benutzer und viele Berechtigungen
- Jeder Benutzer hat eine Liste von Berechtigungen (Permissions, ähnlich wie Rollen)
    EDIT_POSTS (Darf Beiträge bearbeiten)
    DELETE_POSTS (Darf Beiträge löschen)
    DELETE_USER (Darf Benutzer löschen)

- Einige Endpunkte erfordern spezifische Berechtigungen um zu funktionieren

```js
app.delete('/user/:id', authenticated, require('DELETE_USER'), (req,res) => {
    ...
})

app.delete('/foo/:id', authenticated, require('DELETE_FOO'), (req,res) => {
    ...
})
```

## Gemischt (RBAC + PBAC + Benutzergruppen)

- Viele Systeme kombinieren Rollen, Berechtigungen und Benutzergruppen um maximale  Flexibilität zu erreichen
- Kann alles mögliche sein
- Deine App hat eine Mischung aus verschiedenen Konzepten
- Benutzer, Rollen, Benutzergruppen, Berechtigungen...
- Berechtigungen können spezifischen Benutzern gewährt werden
- Berechtigungen können Rollen gewährt werden
- Berechtigungen können Benutzergruppen gewährt werden
- Ein Benutzer kann:
  - Rollen haben (Admin, Editor, Moderator...)
  - Spezifische Berechtigungen erhalten (z.B. DELETE_POSTS)
  - Teil einer Benutzergruppe sein (z.B. Team A, das bestimmte Rechte hat)

```js
app.delete('/users/:id', authenticated, roles(['superuser']), (req,res) => {
    ...
})

app.delete('/posts/:id', authenticated, permission('DELETE'), (req,res) => {
    ...
})

app.delete('/comments/:id', authenticated, requireGroup(['Moderatoren']), (req, res) => {
    ...
});
```