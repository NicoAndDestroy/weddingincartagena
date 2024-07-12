/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/preline/preline.js",
  ],
  darkMode: "class",
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000000",
      white: "#ffffff",
      gray: colors.gray,
      indigo: colors.indigo,
      neutral: colors.neutral,  // Used mainly for text color
      yellow: {
        50: "#faf5e4", // Lightest shade
        100: "#f5ebc8",
        200: "#f0e1ac",
        300: "#ebd790",
        400: "#e6cd74",
        500: "#d4af37", // Main color
        600: "#b9972f",
        700: "#9e7f27",
        800: "#83671f",
        950: "#68500f", // Darkest shade
      }, // Accent colors, used mainly for star color, heading and buttons
      orange: {
        50: "#faf5e4", // Lightest shade
        100: "#f5ebc8",
        200: "#f0e1ac",
        300: "#ebd790",
        400: "#e6cd74",
        500: "#d4af37", // Main color
        600: "#b9972f",
        700: "#9e7f27",
        800: "#83671f",
        950: "#68500f", // Darkest shade
      },
      orange1: {
        100: "#ffedd5",
        200: "#fed7aa",
        300: "#fb713b",
        400: "#fa5a15",
        500: "#e14d0b",
        600: "#ea580c",
      }, // Primary colors, used mainly for links, buttons and svg icons
      red: colors.red, // Used for bookmark icon
      zinc: colors.zinc, // Used mainly for box-shadow
    },
    extend: {},
  },
  plugins: [
    require("tailwindcss/nesting"),
    require("preline/plugin"),
    require("@tailwindcss/forms"),
  ],
};
