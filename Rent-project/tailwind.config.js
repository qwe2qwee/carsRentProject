/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./Apps/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#FF6600', // Your primary color
        secondary: '#FFFFFF', // Your secondary color
        thridC:'#D6D6D6'
        // Add more colors as needed
      },
    },
  },
  plugins: [],
};
