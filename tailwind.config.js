/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "color-primary-1": "#FF0046",
        "color-primary-2": "#DC0000",
        "color-secondary-1": "#001E28",
        "color-secondary-2": "#00141E",
        "color-secondary-3": "#0F2D37",
        "color-combination-1": "#010A0F",
        "color-support-1": "#EEE",
        "color-support-2": "#C8CDCD",
        "color-support-3": "#999",
        "color-support-4": "#555E61",
        "color-favorite": "#FFF2CE",
        "color-highlight": "#EEF7FF",
        "color-green-1": "#14DC4B",
        "color-yellow-1": "#FFCD00",
        "color-red-1": "#DC000",
      },
      screens: {
        xs: "450px",
      },
    },
  },
  plugins: [],
};
