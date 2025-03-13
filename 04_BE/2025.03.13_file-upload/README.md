# Datei-Uploads

- Sicherheitsbedenken
- Das Hochladen von Dateien ist ein potenzieller Angriffsvektor (nicht ein riesiger, aber immer noch!)
  - Was, wenn ein Benutzer anfängt, eine Datei hochzuladen, die nur Terrabytes "heißer Luft" enthält?
  - Das Übertragen, Verarbeiten und Speichern davon kostet Geld und Ressourcen!
  
- Was, wenn ein Benutzer einen Virus hochlädt?
  - Sie wissen vielleicht nicht einmal, dass sie das tun!
  - Dein Server ist wahrscheinlich in Ordnung, aber was ist mit den Benutzern, die es dann herunterladen?

- Wusstest du, dass du tatsächlich Dateien in Fotos verstecken kannst?
  - Können deine Benutzer ein Profilbild mit einigen geheimen Daten darin hochladen?

- Um Sicherheitsprobleme zu mildern, sollten Datei-Uploads validiert werden
  - Du kannst die Größe der Uploads begrenzen
  - Du kannst Bilder automatisch verarbeiten, um sicherzustellen, dass sie Sinn ergeben
  - Du kannst nach Viren scannen, nachdem eine Datei hochgeladen wurde

- Eine Möglichkeit, hochgeladene Dateien auf Viren zu prüfen
  - Wenn eine Datei hochgeladen wird, wird sie in einem separaten Ordner aufbewahrt
  - Dann führst du einen Antivirus-Checker auf der Datei aus
  - Nachdem der Antivirus die Datei freigegeben hat, verschiebst du sie in den permanenten Speicher
  - https://www.npmjs.com/package/clamscan
    - Dies verwendet ClamAV, um Dateien zu prüfen https://www.clamav.net
  
- Für Fotos könntest du etwas wie sharp oder jimp verwenden
  - Stelle sicher, dass Fotos komprimiert sind, um Platz zu sparen
  - Stelle sicher, dass Fotos nicht gigantisch groß sind
  - Du könntest ein paar Versionen generieren, wie Thumbnail und Original
  - https://www.npmjs.com/package/sharp
  - https://www.npmjs.com/package/jimp

## Theorie, wie es in der Produktion gemacht wird

- In einer Produktionsumgebung solltest du die Dateien wirklich nicht einfach auf der Festplatte speichern
  - Es ist einfach, /filez zu erstellen und alles hineinzuschieben
  - Aber das wird früher oder später problematisch!

- Den ursprünglichen Dateinamen nicht behalten!
  - Sehr bald werden zwei Benutzer "profile.jpg" hochladen
  - Namen mit UUID zu benennen
  - `7ede71d6-8d78-44f3-9b5a-9521945e2402.pdf`
  - `ea477375-98d7-4f08-b5ec-19d4bcbfc44a.jpg`
  - `b0df7b49-71cb-49f0-8bfa-da79a964c88f.png`

- Wenn deine Anwendung jemals groß werden könnte, möchtest du wahrscheinlich Dateien organisieren
- Sie in der Datenbank zu speichern, ist normalerweise eine schlechte Idee
- Datenbanken sind nicht für Dateien optimiert, sie werden verlangsamt
- Datenbankspeicher kostet viel mehr als Dateispeicher
- Eine gängige Methode, um Dateien tatsächlich in der Cloud-Objektspeicherung zu speichern
- Dienste wie Amazon S3 ermöglichen die Speicherung von Dateien
- Sie sind isoliert von deinem Anwendungscode und deiner Datenbank
- Während des Uploads, speichere die Metadaten der Datei und in deiner Datenbank
  - Generiere einen Namen wie ea477375-98d7-4f08-b5ec-19d4bcbfc44a.jpg
- Speichere die Datei in Amazon S3
  - Wenn ein Benutzer die Datei anfordert, kannst du die Datenbank überprüfen
  - Du kannst dann die Datei von S3 mit ihren Metadaten abrufen

- Entscheidungen über die Datenspeicherung werden oft von Senior-Entwicklern getroffen
  - Oder Software-Architekten