# Websocket

- HTTP-Anfragen wie GET und POST werden verwendet um Daten vom Client and den Server zu senden - und umgekehrt
- HTTP-Anfragen sind in bestimmten Szenarien ungeeignet, da für jede Interaktion eine neue Verbindung aufgebaut werden muss
- Um kontinuierlich neue Daten zu erhalten, müsste der Client immer wieder neue HTTP-Anfragen stellen.
- Um kontinuierlich neue Daten zu erhalten, müsste der Client immer wieder neue HTTP-Anfragen stellen.
- Die Kommunikation bei HTTP-Anfragen ist nicht echtzeitfähig. Es gibt immer eine gewisse Verzögerung zwischen Anfrage und Antwort

- Hier kommt socket.io ins Spiel https://socket.io/

- WebSockets sind eine Technologie, die es ermöglicht, eine bidirektionale Kommunikation zwischen einem Client und einem Server über das HTTP-Protokoll aufzubauen
- Sie sind nützlich, weil sie eine effiziente und schnelle Kommunikation zwischen einem Client und einem Server ermöglichen, ohne dass der Client ständig eine Anfrage an den Server senden muss

## Was macht Socket.io

- Socket.io ist eine Bibliothek, die es ermöglicht, in Echtzeit zwischen einem Client und einem Server Daten auszutauschen.

- Der Client und der Server können zu jeder Zeit miteinander "sprechen", nicht nur, wenn eine Anfrage gesendet wird

## Unterschied zu normalen GET/POST-Anfragen

- Bei normalen Anfragen (GET/POST) muss der Client ständig den Server anfragen, um zu wissen, ob es neue Daten gibt. Bei Socket.io werden die Daten sofort gesendet, sobald sich etwas ändert, ohne dass der Client etwas tun muss

- Bidirektionale Kommunikation: Bei GET/POST wird die Anfrage nur in eine Richtung gesendet – entweder vom Client an den Server oder umgekehrt. Bei Socket.io können der Client und der Server ständig in beide Richtungen miteinander kommunizieren.

## Anwendungsfälle für Websocket

- Chats: Nachrichten sollten sofort bei allen Benutzern erscheinen.
- Multiplayer-Spiele: Aktionen der Spieler müssen in Echtzeit synchronisiert werden.
- Push-Benachrichtigungen: Man muss Benachrichtigungen sofort senden, ohne dass der Benutzer die Seite manuell aktualisieren muss.
- Aktienkurse, Kryptowährungen oder Forex: WebSockets ermöglichen das Streaming von Marktpreisinformationen in Echtzeit, sodass Benutzer sofort auf Kursänderungen reagieren können.
- Kollaborations-Tools: Tools wie Google Docs, bei denen mehrere Benutzer gleichzeitig an einem Dokument arbeiten, profitieren von WebSockets, um Änderungen in Echtzeit zu synchronisieren.
