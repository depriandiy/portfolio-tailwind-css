/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#f97316", //orange
        secondary: "#64748b",
        dark: "#0f172a",
        dark_primary: "#020202",
        dark_second: "#252525",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
