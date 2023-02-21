/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light: "#f8f9fa",
        primary: "#0d6efd",
        danger: "#dc3545 ",
      },
    },
  },
  plugins: [],
};
