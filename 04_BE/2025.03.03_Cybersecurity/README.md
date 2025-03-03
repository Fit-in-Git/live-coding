# Sicherheitskonzepte

Wie haben uns eine Reihe von Begriffen im Zusammenhang mit Cybersecurity angesehen.

## Social Engineering

Angreifer manipulieren und täuschen andere zu Handlungen

Veröffentlichung vertraulicher Informationen, etwas tun

Psychologische Manipulation statt technischer Exploits

Tailgating, Impersonating

## OWASP Top 10

https://owasp.org/Top10

Open Worldwide Application Security Project

Stiftung zur Verbesserung der Software-Sicherheit

Schätzung der kritischsten Sicherheitsrisiken für Webanwendungen

## XSS Injection

Cross-Site-Scripting

Zum Beispiel, JavaScript auszuführen, wenn jemand einen Forenkommentar ansieht

Für unsichere Websites könnten sie deren Login stehlen oder so tun, als wären sie sie

- Mini-Beispiel

In deiner README.md auf GitHub schreibst du etwas JS

Jeder, der das Repo ansieht, führt das JS aus

Das JS leitet den Benutzer auf eine andere Website um

Eine genaue Kopie von github.com aber github.x0zf1.com

x0zf1.com zeigt "Für zusätzliche Sicherheit, bitte erneut einloggen"

Benutzer gibt GH-Benutzernamen und Passwort auf gefälschter Seite ein

Gefälschte Seite stiehlt die Infos und leitet Benutzer zurück

Benutzer bemerkt nie, dass seine Anmeldedaten gestohlen wurden

- Deshalb

Wir können es niemandem erlauben, sein eigenes JS auf unserer Seite zu injizieren

Verwende überall Multi-Faktor-Authentifizierung

## Multi-Faktor-Authentifizierung

Normaler Benutzername/Passwort kann ein bisschen zu leicht geknackt oder gestohlen werden

Zwei oder mehr Faktoren erforderlich zur Authentifizierung

- Faktoren
  
Etwas, das du weißt: Passwort, PIN, Antworten auf geheime Fragen

Etwas, das du hast: physisches Gerät wie eine Smartcard oder Telefon (SMS)

Etwas, das du bist: Biometrie wie Fingerabdruck, Iris- oder Gesichtsscan

Selbst wenn dein Passwort durchsickert, benötigen Angreifer noch etwas anderes, um sich einzuloggen

Manchmal wissen wir nicht einmal, dass unser Passwort durchgesickert ist

Es ist eine gute Idee, ab und zu deine wichtigen Passwörter zu ändern

Und verwende keine Passwörter erneut

- Schadenskontrolle

Jemand stiehlt dein GitHub-Passwort

Sie versuchen, sich mit dem gleichen Passwort in deine E-Mail/Amazon/Adobe usw. einzuloggen

Werden sie reinkommen?

## Was ist Phishing?

Social-Engineering-Angriff

Angreifer geben sich als legitime Organisationen oder Personen aus

Angreifer versuchen, Menschen dazu zu bringen, sensible Informationen preiszugeben

E-Mail, Textnachrichten, automatisierte Sprachanrufe...

Kann ein allgemeiner Angriff oder gezielt sein (Spear Phishing)

## VPN

Virtual Private Network

Wird verwendet, um eine sichere Verbindung von einem Netzwerk zu einem anderen herzustellen

Z.B. unsicheres Wifi im Café zum internen Netzwerk des Unternehmens

Kann ein hohes Maß an Sicherheit für den Internetverkehr bieten

Alle Daten zwischen deinem PC und dem Internet werden über den VPN-Server geleitet

Für Webserver sieht es so aus, als kämen deine Anfragen von deiner Firmen-IP

Weil sie es tun!

## Red Team vs Blue Team

- Militärischer Begriff
- 
Blue Team: Verteidiger

Red Team: Angreifer

Große Unternehmen und Nationen haben oft ein Sicherheitsteam

Blue Teamer arbeiten daran, das Netzwerk zu sichern

Red Teamer versuchen, das Netzwerk anzugreifen, um Sicherheit zu testen & Probleme zu finden

## Ransomware

Anwendung, die ein Gerät verschlüsselt, den Besitzer daran hindert, es zu benutzen

Fordert eine Zahlung

Wenn die Zahlung erfolgt, wird das Gerät entschlüsselt und die Kontrolle zurückgegeben

## Black Hat vs White Hat Hacker

- Black Hat Hacker nutzen ihre Fähigkeiten für böswillige Zwecke

Finden und missbrauchen Sicherheitslücken für persönlichen Gewinn

Stehlen, verkaufen persönliche Infos

Stören Systeme und Menschen für Profit/Spaß/Rache/Böses

- White Hat Hacker

AKA ethische Hacker

Nutzen ihre Fähigkeiten, um die Sicherheit zu verbessern

Finden von Schwachstellen und Schwächen

Dann informieren über das Problem, damit es behoben werden kann

Könnten die gleichen Methoden wie Black Hats verwenden
