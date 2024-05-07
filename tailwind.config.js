import tailwindScrollbar from 'tailwind-scrollbar';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,json}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#27272A',
          200: '#18181B'
        },

        secondary: {
          100: '#FFFFFF',
          200: '#A1A1AA',
          300: '#6A6A6F',
          400: '#525255',
        },

        accent: {
          100: '#D6A3E4',
          200: '#D596E7',
          300: '#D584EB',
          400: '#C856E7'
        }
      },

      fontFamily: {
        poppins: ["Poppins", "sans-serif"]
      },

      borderWidth: {
        3: '3px'
      },

      borderColor: {
        silver: '#9ca3af'
      },

      ringColor: {
        silver: '#9ca3af'
      }
    },
  },
  plugins: [
    tailwindScrollbar
  ],
};