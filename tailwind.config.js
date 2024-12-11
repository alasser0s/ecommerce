/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          cream: '#f6eee5',
          'cream-hover': '#ede5dc',
          dark: '#1a1a1a',
          'dark-hover': '#2a2a2a',
        },
        secondary: {
          charcoal: '#443d39',
          'charcoal-hover': '#524a45',
          light: '#f5f5f5',
          'light-hover': '#ffffff',
        },
        accent: {
          taupe: '#8b7e72',
          'taupe-hover': '#9a8c80',
          gray: '#7b7c7d',
          'gray-hover': '#898a8b',
          dark: '#2d2d2d',
          'dark-hover': '#3d3d3d',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale': 'scale 0.3s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scale: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.05)' },
        },
      },
    },
  },
  plugins: [],
} 