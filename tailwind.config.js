/** @type {import('tailwindcss').Config} */

const { nextui } = require("@nextui-org/react");
const withMT = require("@material-tailwind/react/utils/withMT");
 


module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },  // esto es para el modo oscuro
  darkMode:"class",
  plugins: [
    nextui({
      themes: {
        dark: {
          // colors: {
          //   primary: {
          //     DEFAULT: "#BEF264",
          //     foreground: "#000000",
          //   },
          //   focus: "#BEF264",
          // },
        },
      },
    }),
  ],
};
