1. Backend-Server erstellen
2. .dockerignore erstellen
3. Dockerfile erstellen
4. Image erstellen `docker build -t my-express-app .`
5. Container starten `docker run -d -p 3000:3000 my-express-app`
6. Container stoppen `docker stop <container-id>`
7. Container entfernen `docker rm <container-id>`
8. Image entfernen `docker rmi my-express-app`