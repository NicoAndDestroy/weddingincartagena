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
      primary: {
        400: "#e1ba8e",
        500: "#d7b286", // Main color
        600: "#c19a6e",
        700: "#a8835a",
        800: "#8f6c46",
        900: "#765533",
        950: "#5d3e20"  // Darkest shade
      },
      yellow: {
        50: "#faf5e4",  // Lightest shade
        100: "#f5ebc8",
        200: "#f0e1ac",
        300: "#d7b286",
        400: "#d7b286",
        500: "#d7b286", // Main color
        600: "#c19a6e",
        700: "#a8835a",
        800: "#8f6c46",
        900: "#765533",
        950: "#5d3e20"  // Darkest shade
      }, // Accent colors, used mainly for star color, heading and buttons
      orange: {
        50: "#faf5e4",  // Lightest shade
        100: "#f5ebc8",
        200: "#f0e1ac",
        300: "#ebd790",
        400: "#d7b286",
        500: "#d7b286", // Main color
        600: "#c19a6e",
        700: "#a8835a",
        800: "#8f6c46",
        900: "#765533",
        950: "#5d3e20"  // Darkest shade
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
