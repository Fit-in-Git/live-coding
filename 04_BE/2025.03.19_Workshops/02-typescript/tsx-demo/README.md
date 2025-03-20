1. `main.ts` erstellen
2. `npm init -y`
3. `npm i typescript tsx -D`
4. `npx tsc --init`
5. package.json konfigurieren
   `"dev": "tsc --noEmit && tsx ./main.ts"`
   Alternative mit nodemon
   `"dev": "tsc --noEmit && nodemon --exec tsx ./main.ts`