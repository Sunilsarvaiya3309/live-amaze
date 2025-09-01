// tailwind.config.js
module.exports = {
  content: [
    "./public/index.html",     // <- Vue CLI uses public folder
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class', 
  theme: {
    extend: {},
  },
  plugins: [],
}
