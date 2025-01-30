/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.jsx'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Typewriter', 'sans-serif'], // Set as default
      },
      colors: {
        background: {
          light: '#ffffff', // Light mode background
          dark: '#060606', // Dark mode background (black)
        },
        text: {
          light: '#060606', // Light mode text color (black)
          dark: '#ffffff', // Dark mode text color (white)
        },
      },
    },
  },
  plugins: [],
};
