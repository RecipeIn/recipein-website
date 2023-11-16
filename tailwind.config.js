/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFD32D',
        secondary: '#3F5D97',
        font: '#4D4D4D',
        field: '#E6E6E6'
      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
