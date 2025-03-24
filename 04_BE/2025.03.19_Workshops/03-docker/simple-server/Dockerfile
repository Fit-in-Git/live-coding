# Basis Image mit Node.js
FROM node:18

# Das Arbeitsverzeichnis im Container setzen
WORKDIR /app

# Kopiere package.json und package.lock.json (wenn vorhanden)
COPY package*.json ./

# Installiere die Abhängigkeiten (ohne devDependencies)
RUN npm install --omit=dev

# Kopiere den gesamten Code ins Arbeitsverzeichnis
COPY . .

# Die ENV für express setzen
ENV PORT=3000

# Exponiere den Port für den Container
EXPOSE 3000

# Starte die Anwendung
CMD ["node", "server.js"]