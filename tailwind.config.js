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
      colors: {
        "DarkBlue": " hsl(209, 23%, 22%)",
        "VeryDarkBlue": "hsl(207, 26%, 17%)",
        "DarkGray": "hsl(0, 0%, 52%)",
        "VeryLightGray": "hsl(0, 0%, 98%)"
      }
    },
  },
  plugins: [],
}