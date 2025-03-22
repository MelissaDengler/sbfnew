/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f8f9ff',
          100: '#e8ebfe',
          200: '#c9cffe',
          300: '#a5aafe',
          400: '#8185fd',
          500: '#6366f1',
          600: '#4d4bd8',
          700: '#3d3ab3',
          800: '#2f2d8a',
          900: '#242469',
        },
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
    },
  },
  plugins: [],
};
