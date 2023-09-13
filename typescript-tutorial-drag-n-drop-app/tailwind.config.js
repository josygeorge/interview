/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html,css}"],
  theme: {
    extend: {
      backgroundImage: {
        'todocard': "url('../public/todo-card-photo.webp')"
      }
    },
  },
  plugins: [],
}