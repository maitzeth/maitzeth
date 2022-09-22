/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        app: "url('/src/assets/background.webp')",
      },
      colors: {
        "window-header": "#393939",
        silver: "#abacae",
        black: "#333333",
        "light-black": "#4d4d4d",
        navbar: "#333333d4",
      },
    },
  },
  plugins: [],
};
