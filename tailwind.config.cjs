/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: {
          200: "#cec5ff",
          300: "#a599e9",
          400: "#302868",
          450: "#2d2b55",
          500: "#28284e",
          600: "#222244",
          700: "#1e1e3f",
        },
        violet: {
          500: "#4c20f8",
        },
      },
    },
  },
  plugins: [],
};
