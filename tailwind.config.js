/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Nunito Sans", "sans-serif"],
      },
      backgroundColor: {
        'my-background-color': 'rgba(0, 0, 0, 0.5)' // Replace with your desired color
      },
    },
  },
  plugins: [],
}