# Docker

- Docker packt deine App samt allem, was sie braucht (Code, Abhängigkeiten, Konfigurationen), in einen Container – so läuft sie überall gleich!

- Egal ob auf deinem Laptop, dem Server oder in der Cloud – ein Docker-Container verhält sich überall gleich.

- Keine Probleme mehr mit fehlenden Abhängigkeiten oder unterschiedlichen Versionen.

- Einfaches Setup: Anstatt zig Tools manuell zu installieren, sagst du Docker einfach: "Bau mir das hier!" (per Dockerfile oder docker-compose.yml)

- Perfekt für moderne Web-Apps! Jede App-Komponente (Datenbank, Backend, Frontend) kann in einem eigenen Container laufen.

- Im Vergleich zu klassischen virtuellen Maschinen (VMs) sind Docker-Container viel leichter und starten schneller, denn sie teilen den Kernel des Hostsystems.

- Große Community: Mit Docker Hub gibt’s Unmengen an fertigen Images (z. B. für MySQL, Node.js, Nginx), die du direkt nutzen kannst.

- https://hub.docker.com/

## Grundlagen

- `Docker Hub`: Ein öffentliches Repository, in dem Docker-Images gespeichert und geteilt werden können.
- `Image`: Eine schreibgeschützte Vorlage, die alle Anweisungen enthält, um einen Container zu erstellen.
- `Dockerfile` - Eine Textdatei (ohne Dateiendung), die alle Anweisungen enthält, um ein Docker-Image zu erstellen.
- `docker-compose.yml` - Eine YAML-Datei, die die Konfiguration für mehrere Container definiert und verwaltet.
- `Container`: Eine laufende Instanz eines Images. Container sind isoliert, aber teilen den Kernel des Host-Betriebssystems.

Beispiel Dockerfile
```Dockerfile
FROM alpine:3.14
WORKDIR /app
COPY . .
RUN npm install
CMD ["node", "app.js"]
```

Beispiel docker-compose.yml
```yml
services:
    web:
        image: my-web-app
        ports:
        - "80:80"
    db:
        image: mysql:5.7
        environment:
        MYSQL_ROOT_PASSWORD: example
            ports:
            - "3306:3306"
```

## Wichtige Befehle

- Docker-Image aus einem Dockerfile erstellen `docker build -t <image-name>`

- Container aus einme Image starten `docker run -d -p 80:80 <image-name>` 

- Alle aktiven Container anzeigen `docker ps`

- Alle aktiven Container stoppen `docker stop <container-id>`

- Docker Container entfernen `docker rm <container-id>`

- Image entfernen `docker rmi <image>`

- Alle Container aus einer docker-compose.yml starten `docker-compose up -d`

- Alle Container aus einer docker-compose.yml stoppen `docker-compose down`

- Docker Version anzeigen `docker --version`

- Docker superuser hinzufügen `sudo usermod -aG docker $USER`
- danach:
- `newgrp docker`

## Docker installieren

https://docs.docker.com/engine/install/ubuntu/