/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }
      sm: { max: "480px" },
      // => @media (max-width: 639px) { ... }
    },
    fontSize: {
      sm: ["12px", "150%"],
      base: ["28px", "100%"],
      lg: ["36px", "100%"],
      "2xl": ["64px", "100%"],
      "3xl": ["144px", "100%"],
    },
    fontFamily: {
      rubik: ["Rubik", "sans-serif"],
      "rubik-italic": ["Rubik Italic", "sans-serif"],
    },
    colors: {
      neutral: {
        100: "#FAF5F3",
        200: "#E6E1DF",
        700: "#385159",
        900: "#062630",
      },
      "light-salmon": {
        50: "#FFF5EF",
        100: "rgb(255, 226, 209)",
        500: "#FEA36F",
      },
    },
    extend: {},
    container: {
      center: true,
      padding: "1rem",
    },
    backgroundColor: {
      gradient: {
        "text-gr": "linear-gradient(107deg, #FF9A60 -11.37%, #062630 61.84%);",
        "light-gr": "linear-gradient(90deg, #FFE2D1 0%, #FFF5EF 100%)",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
