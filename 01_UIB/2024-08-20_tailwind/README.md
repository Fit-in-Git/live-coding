INSTALL TAILWIND FOR HTML - CSS PROJECT

1. Create a folder and name it Whatever you want
2. Open it with VSCode and open the Terminal in VSCode
3. npm init -y (Now we have package.json)
4. npm install -D tailwindcss (Now we have tailwind in dependencies and node_modules)
5. npx tailwindcss init (Now we have tailwind.config.js)
6. Open the config file and give it in the content => content: ["./src/**/*.{html,js}"]
7. Now create dist folder
8. In dist folder create index.html and change the config => ["./dist/**/*.{html,js}"] (change src to dist)
9. Now create src folder and in it create input.css
10. In src/styles.css give => @tailwind base; @tailwind components; @tailwind utilities;
11. give it in Terminal => npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
