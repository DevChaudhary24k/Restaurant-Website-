/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      montserrat: ["Montserrat"],
    },
    colors: {
      trasparent: "trasparent",
      white: "white",
      primary: "#F2EEEB",
      seconday: "#102039",
      teritary: "#C5C5C7",
      divider: "#878F9B",
    },
    extend: {},
  },
  plugins: [],
};
