## Vorarbeit:
- Dockerfile für den Express-Server erstellen
- .dockerignore erstellen

## Server und MongoDB in eigenen Containern starten

1. Express-Server-Image bauen `sudo docker build -t my-mongodb-app .`
2. Netzwerk erstellen `sudo docker network create mynetwork`
3. Den lokalen MongoDB-Dienst stoppen `sudo systemctl stop mongod` (Verhindert Konflikte mit dem MongoDB-Container auf Port 27017)
4. MongoDB Container im Netzwerk starten (lädt MongoDB vom Docker-Hub)
```
sudo docker run -d \
  --network=mynetwork \
  --name my-mongo \
  -p 27017:27017 \
  -e MONGO_INITDB_DATABASE=docker \
  mongo

```
4. Server Container mit dem Netzwerk verbinden
```
sudo docker run -d \
  --network=mynetwork \
  --name my-express-app \
  -p 3000:3000 \
  -e MONGO_URL=mongodb://my-mongo:27017 \
  -e DATABASE=mongodb-server \
  my-mongodb-app
```