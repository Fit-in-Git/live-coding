How to use scss: 

Global:
- Open VSCode and create index.html and styles.scss
- In Terminal => npm install -g sass
- In Terminal => sass --watch styles.scss:styles.css

-------------------------

Local:
- Open VSCode and create index.html and styles.scss
- In Terminal => npm init -y (Now we have package.json)
- In Terminal => npm install sass
- In package.json in dependencies you should see the sass with its version
- In package.json =>   "scripts": {
    "sass": "sass --watch styles.scss style.css"
  }
- npm run sass

--------------------------------------
With extension:
- Just install the live Sass compiler