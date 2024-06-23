/** @type {import('tailwindcss').Config} */
import themeColors from "./src/theme/colors";


module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: ["class", '[data-mode="dark"]'],
  theme: {
    extend: {
      colors: themeColors,
    },
  },
  plugins: [],
};
