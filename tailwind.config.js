
/** @type {import('tailwindcss').Config} */
import { colord, extend } from "colord";
import mixPlugin from "colord/plugins/mix";

extend([mixPlugin]);
const generateDarkenColorFrom = (input, percentage = 0.07) =>
  colord(input).darken(percentage).toHex();
const generateForegroundColorFrom = (input, percentage = 0.08) =>
  colord(input).mix(colord(input).isDark() ? 'white' : 'black', percentage).toHex();

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        current: "currentColor",
        transparent: "transparent",
        white: "#F9F9F9",
        primary: "#007BEC",
        "primary-focus": generateDarkenColorFrom("#007BEC"),
        "primary-content": "#FFFFFF",
        secondary: "#6c5ce7",
        "secondary-content": "#FFFFFF",
        "secondary-focus": generateDarkenColorFrom("#6c5ce7"),
        accent: "#1FB2A5",
        "accent-focus": generateDarkenColorFrom("#1FB2A5"),
        "accent-content": "#FFFFFF",
        neutral: "#2a323c",
        "neutral-content": generateForegroundColorFrom("#FFFFFF"),
        "neutral-focus": generateDarkenColorFrom("#2a323c", 0.03),
        "base-25": "#353d47",
        "base-50": "#2a323c",
        "base-75": "#20272e",
        "base-100": "#1d232a",
        "base-200": "#191e24",
        "base-300": "#15191e",
        "base-content": "#A6ADBB",
        info: "#3abff8",
        "info-content": generateForegroundColorFrom("#3abff8"),
        success: "#36d399",
        "success-content": generateForegroundColorFrom("#36d399"),
        warning: "#fbbd23",
        "warning-content": generateForegroundColorFrom("#fbbd23"),
        error: "#f87272",
        "error-content": generateForegroundColorFrom("#f87272"),
        "dark-current": "currentColor",
        "dark-transparent": "transparent",
        "dark-white": "#E5E5E5",
        "dark-primary": "#005BB5",
        "dark-primary-content": "#E5E5E5",
        "dark-secondary": "#5439D4",
        "dark-secondary-content": "#E5E5E5",
        "dark-accent": "#128675",
        "dark-accent-content": "#E5E5E5",
        "dark-neutral": "#1e242b",
        "dark-base-25": "#2c343e",
        "dark-base-50": "#242b33",
        "dark-base-75": "#1a2028",
        "dark-base-100": "#151a22",
        "dark-base-200": "#12161d",
        "dark-base-300": "#0f1218",
        "dark-base-content": "#8a929f",
        "dark-info": "#3491C1",
        "dark-success": "#2AA470",
        "dark-warning": "#C8961B",
        "dark-error": "#D04D4D",
      }
    },
  },
  plugins: [],
}

