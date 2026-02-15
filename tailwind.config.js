/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
  extend: {
    colors: {
      primary: "#0E0E0E",
      secondary: "#181818",
      accent: "#C6A75E",
      sand: "#D9CFC1",
      ivory: "#F5F3EF",
      muted: "#9C9C9C",
      glass: "rgba(255,255,255,0.04)"
    },
    fontFamily: {
      heading: ["Playfair Display", "serif"],
      body: ["Poppins", "sans-serif"],
    },
  },
},
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0E0E0E",
        secondary: "#1C1C1C",
        accent: "#C6A75E",
        light: "#F8F6F2",
        muted: "#A3A3A3",
      },
    },
  },
  plugins: [],
};
