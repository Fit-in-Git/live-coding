/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      padding: {
        "5px": "5px",
      },
      animation: {
        spinning: "spin 10s linear infinite",
      },
    },
  },
  plugins: [],
};
