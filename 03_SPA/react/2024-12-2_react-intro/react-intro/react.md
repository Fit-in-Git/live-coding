REACT
 
SPA => Single Page Application => With SPA our Website => Works very fast - Page will not load 
That loads a single HTML Page. The Website feels like an App.

How we can use SPA?
1. React => is a JS library for SPA
2. Vue.js => JS framework 
3. AngularJS => JS framework


React Ecosystem:
- React => Create Webpages
- React Native => develop Apps => Android, iOS, Android TV
- Next.js =>  react with backend
- Gatsby => e.g  for SEO 


History of React:
In 2004 => Facebook => 2011, the number of users => 900 mil  
They started facing issues with codes, so we need a fast Facebook => That's why they created react
Jordan Walke => 2013 

- Facebook
- Instagram
- Netflix 
- Paypal 
- Klarna
- Airbnb 
- Uber 
- GitHub 

------

Why we use react? 

1. Components => Combination => HTML + JS + CSS. All in react

2. Virtual DOM => make a copy from original DOM, when original DOM changes => Virtual DOM changes just updated parts and not the whole DOM 

WHY REACT => COMPONENTS - VIRTUAL DOM 

------

Modern react with Hooks: React version 16.8
- We code with FUNCTIONS and NOT CLASSES 
- With Hooks => Improves Error Handling - Reusability - Make our code clean - We don't need class anymore


Create React App with Vite: 
1. npm create vite@latest 
2. Give your Project name
3. Select a framework => react
4. select a variant => JavaScript
5. cd (your path) and after that code .
6. npm install
7. npm run dev

------
Hot Module Replacement => HMR => We are able to see changes in Browser without refreshing the Browser

eslint => for showing errors and help us to fix our code (The red line below our code) (e.g <img src="" = >) => It give us an Error

JSX => JavaScriptXML => allow you to write HTML with JS 

public vs. src: public means assets like images, icons, fonts.

public: anything that is NOT used by your app when it compiles. 

src: anything that is used when our App compiled like => JavaScript - CSS and other assets 

main.jsx => is for rendering => virtual DOM Engine and it's connection between DOM and react

App.jsx => It's root component of the react App 

NPM scripts: In package.json => change =>  "dev": "vite" to  "start": "vite", => in Terminal you can give => npm start 




Alternative Way to install react:
- npx create-react-app project-name (npx create-react-app@latest project-name)

index.css vs.app.css => index.css => like font-size / font-family, but you can delete index.css if you want 

App.css => for your App.jsx