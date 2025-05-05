/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],  
  theme: {
    extend: {
      fontFamily: {
        DM: ["DM-Serif-Text", "sans-serif"],
        DMdisplay: ["DM-Serif-Display", "serif"],
        Poppins: ["Poppins", "sans-serif"],
        Inter: ["Inter", "sans-serif"],
        Roboto: ["Roboto", "serif"],
      }
    },
  },
  plugins: [],
}

