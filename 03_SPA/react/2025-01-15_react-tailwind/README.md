# React + Tailwind 
1. npm create vite@latest react-tailwind
2. cd react-tailwind
3. npm install -D tailwindcss postcss autoprefixer
4. npx tailwindcss init -p (now we have tailwind.config.js )
5. in tailwind.config.js: 
/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

6. In index.css 
@tailwind base;
@tailwind components;
@tailwind utilities;

7. npm run dev