/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fdf4f3',
          100: '#fce7e4', 
          200: '#f9d0ca',
          300: '#f4aca3',
          400: '#ec7a6b',
          500: '#dc5840',
          600: '#c93d26',
          700: '#a8301d',
          800: '#8b2a1c',
          900: '#74271e',
        },
        warm: {
          50: '#fdfcf9',
          100: '#fcf8f1',
          200: '#f8ede0',
          300: '#f2dec6',
          400: '#e9c296',
          500: '#dfa666',
          600: '#c78a4a',
          700: '#a66e3a',
          800: '#875836',
          900: '#6e4931',
        },
        sage: {
          50: '#f6f8f6',
          100: '#e3ebe4',
          200: '#c7d8c9',
          300: '#9fb9a4',
          400: '#759179',
          500: '#5a7361',
          600: '#475c4d',
          700: '#3b4a40',
          800: '#323e36',
          900: '#2b342e',
        }
      },
      fontFamily: {
        'display': ['Playfair Display', 'Georgia', 'serif'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      backdropBlur: {
        'xs': '2px',
      }
    },
  },
  plugins: [],
};