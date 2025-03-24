## PostgreSQL im Container starten und vom Terminal aus bedienen

1. docker-compose.yml erstellen
   
2. docker-compose installieren:
   Aufpassen, diese Version: `docker-compose-plugin`
   NICHT diese (alte Version): `docker-compose`

3. Falls postgres lokal läuft, stoppen mit: 
   `sudo systemctl stop postgresql`

4. docker compose starten: `docker-compose up -d`

5. Mit psql verbinden aus dem Container heraus
   `docker exec -it postgres-container psql -U myuser -d mydatabase`