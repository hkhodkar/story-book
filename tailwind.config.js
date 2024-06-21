/** @type {import('tailwindcss').Config} */
import { colord, extend } from "colord";
import mixPlugin from "colord/plugins/mix";
import themeColors from "./src/theme/colors";

extend([mixPlugin]);
const generateDarkenColorFrom = (input, percentage = 0.07) =>
  colord(input).darken(percentage).toHex();
const generateForegroundColorFrom = (input, percentage = 0.08) =>
  colord(input)
    .mix(colord(input).isDark() ? "white" : "black", percentage)
    .toHex();

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
