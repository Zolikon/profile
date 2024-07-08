export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-side-from": "#581c87",
        "dark-side-to": "#a855f7",
        "dark-bg-from": "#0f172a",
        "dark-bg-to": "#7e22ce",
        "dark-text": "#f3e8ee",
        "light-side-from": "#3b82f6",
        "light-side-to": "#93c5fd",
        "light-bg-from": "#0ea5e9",
        "light-bg-to": "#bae6fd",
        "light-text": "#1f2937",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
