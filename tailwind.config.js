/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
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
          200: '#A1A1AA'
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
      }
    },
  },
  plugins: [],
};