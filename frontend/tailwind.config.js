/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        wedding: {
          white: '#FFFFFF',
          ivory: '#FFFFF0',
          gold: '#FFD700',
          pink: '#FFB6C1',
          blue: '#E6F3FF',
          green: '#90EE90',
          orange: '#FFE4B5',
          brown: '#D2B48C'
        }
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}