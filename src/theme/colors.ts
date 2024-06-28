import { colord, extend } from "colord";
import mixPlugin from "colord/plugins/mix";

extend([mixPlugin]);
const generateDarkenColorFrom = (input: string, percentage = 0.07) =>
  colord(input).darken(percentage).toHex();
const generateForegroundColorFrom = (input: string, percentage = 0.08) =>
  colord(input)
    .mix(colord(input).isDark() ? "white" : "black", percentage)
    .toHex();

const themeColors: any = {
  current: "currentColor",
  transparent: "transparent",
  white: "#F9F9F9",
  primary: "#007BEC",
  "primary-focus": generateDarkenColorFrom("#007BEC"),
  "primary-content": "#FFFFFF",
  "primary-disabled": "#A0C7ED",
  secondary: "#6c5ce7",
  "secondary-content": "#FFFFFF",
  "secondary-focus": generateDarkenColorFrom("#6c5ce7"),
  "secondary-disabled": "#B3A5F5",
  accent: "#1FB2A5",
  "accent-focus": generateDarkenColorFrom("#1FB2A5"),
  "accent-content": "#FFFFFF",
  "accent-disabled": "#A3DAD5",
  neutral: "#2a323c",
  "neutral-content": generateForegroundColorFrom("#FFFFFF"),
  "neutral-focus": generateDarkenColorFrom("#2a323c", 0.03),
  "neutral-disabled": "#A8B0BA",
  "base-25": "#353d47",
  "base-50": "#2a323c",
  "base-75": "#20272e",
  "base-100": "#1d232a",
  "base-200": "#191e24",
  "base-300": "#15191e",
  "base-content": "#A6ADBB",
  info: "#3abff8",
  "info-disabled": "#AEDDFD",
  "info-content": generateForegroundColorFrom("#3abff8"),
  success: "#36d399",
  "success-content": generateForegroundColorFrom("#36d399"),
  "success-disabled": "#A8E8C9",
  warning: "#fbbd23",
  "warning-content": generateForegroundColorFrom("#fbbd23"),
  "warning-disabled": "#FDD891",
  error: "#f87272",
  "error-content": generateForegroundColorFrom("#f87272"),
  "error-disabled": "#FDC4C4",
  "dark-current": "currentColor",
  "dark-transparent": "transparent",
  "dark-white": "#E5E5E5",
  "dark-primary": "#005BB5",
  "dark-primary-content": "#E5E5E5",
  "dark-primary-disabled": "#7DAAE0",
  "dark-secondary": "#5439D4",
  "dark-secondary-content": "#E5E5E5",
  "dark-secondary-disabled": "#A99CEF",
  "dark-accent": "#128675",
  "dark-accent-content": "#E5E5E5",
  "dark-accent-disabled": "#86C8B9",
  "dark-neutral": "#1e242b",
  "dark-neutral-disabled": "#8A929F",
  "dark-base-25": "#2c343e",
  "dark-base-50": "#242b33",
  "dark-base-75": "#1a2028",
  "dark-base-100": "#151a22",
  "dark-base-200": "#12161d",
  "dark-base-300": "#0f1218",
  "dark-base-content": "#8a929f",
  "dark-info": "#3491C1",
  "dark-info-disabled": "#8BB8D8",
  "dark-success": "#2AA470",
  "dark-success-disabled": "#81C5A0",
  "dark-warning": "#C8961B",
  "dark-warning-disabled": "#DBB06C",
  "dark-error": "#D04D4D",
  "dark-error-disabled": "#E19494",
};
export default themeColors;
