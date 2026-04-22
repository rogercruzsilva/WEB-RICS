/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0a2342', // azul oscuro
          light: '#2e5c9a',   // azul medio
          dark: '#06172b',    // azul más oscuro
        },
        accent: {
          DEFAULT: '#ffd700', // dorado/amarillo
        },
        neutral: {
          DEFAULT: '#ffffff', // blanco
          dark: '#f4f6fa',    // gris muy claro
        },
      },
      fontFamily: {
        sans: ['Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        heading: ['Montserrat', 'Segoe UI', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

