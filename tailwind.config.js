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
        secondary: '#1E2C48',
        font: '#111111',
        field: '#E6E6E6',
        putih: '#FFFEFE',
        abu: '#4D4D4D'
      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
