/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./Apps/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#FF6600', // Your primary color
        secondary: '#FFFFFF', // Your secondary color
        thridC:'#D6D6D6',
        bg_main:'#F6F6F8',
        texttt:'#6C6C6C'
        // Add more colors as needed
      },
      boxShadow: {
        'bottom-shadow': '0px 5px 10px rgba(0, 0, 0, 0.25)', // Adjust shadow properties as needed
      },
    },
  },
  plugins: [],
};
