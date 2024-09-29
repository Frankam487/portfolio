/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screen: {
        '700px': '700px',
      }
    },
  },
  plugins: [],
}

