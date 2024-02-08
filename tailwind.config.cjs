/** @type {import('tailwindcss').Config} */
import { TW_CONFIG } from "./src/utils/constants";

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: TW_CONFIG,
  plugins: [],
};
