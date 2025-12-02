/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{html,js}"],

  theme: {
    extend: {
      colors: {
        bluecustom: "#00baf2",
        nilla: "#00baf2",
      },
    },
  },

  plugins: [],
};
