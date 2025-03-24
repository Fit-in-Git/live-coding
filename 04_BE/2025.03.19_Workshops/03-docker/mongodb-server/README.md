1. Dockerfile erstellen
2. .dockerignore
3. Image erstellen `sudo docker build -t my-mongodb-app .`
4. Container starten `sudo docker run -d -p 3000:3000 my-mongodb-app`

## Server und MongoDB in eigenen Containern starten

1. `sudo docker build -t my-mongodb-app .`
2. `sudo docker pull mongo`
3. ```
docker network create mynetwork

docker run -d \
  --network=mynetwork \
  --name my-mongo \
  -p 27017:27017 \
  -e MONGO_INITDB_DATABASE=docker \
  mongo

```