/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#101010",
        secondary: "#1a1a1a",
        br: "#444444",
        txt: "#cccccc",
      },
    },
  },
  plugins: [],
};
