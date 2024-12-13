/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-brown': '#9b7c67', 
        'brown-secondary': '#c2a28a', 
        'light-brown': '#ddc5b2'
      },
    },
  },
  plugins: [],
}

