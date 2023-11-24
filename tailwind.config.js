/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'league-spartan': ['League Spartan', 'sans-serif'],
        // Add more font families here if needed
      },
    },
  },
  plugins: [],
}