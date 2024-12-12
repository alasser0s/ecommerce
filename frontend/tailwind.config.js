/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#faf6f3',
          100: '#f6eee5',
          200: '#ede2d6',
          300: '#e4d5c7',
          400: '#dbc9b8',
          500: '#443d39',
          600: '#3a3431',
          700: '#302b29',
          800: '#262220',
          900: '#1c1918',
        },
        secondary: {
          50: '#f8f7f7',
          100: '#8b7e72',
          200: '#7d7267',
          300: '#6f665c',
          400: '#615a51',
          500: '#534e46',
          600: '#45423b',
          700: '#373530',
          800: '#292925',
          900: '#1b1c1a',
        },
        neutral: {
          50: '#f9f9f9',
          100: '#7b7c7d',
          200: '#6e6f70',
          300: '#616263',
          400: '#545556',
          500: '#474849',
          600: '#3a3b3c',
          700: '#2d2e2f',
          800: '#202122',
          900: '#131415',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}