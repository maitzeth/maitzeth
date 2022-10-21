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
        navbar: "#333333d4",
        window: {
          red: "#e5635b",
          green: "#39ac48",
        },
        black: {
          DEFAULT: "#333333",
          light: "#4d4d4d",
        },
        blue: {
          light: "#6693e8",
        },
      },
      width: {
        desktop: "768px",
      },
      height: {
        "window-full": "calc(100vh - 35px)",
      },
    },
  },
  plugins: [],
};
