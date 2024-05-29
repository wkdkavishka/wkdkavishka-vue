/** @type {import("tailwindcss").Config} */
module.exports = {
  // content: ["./src/**/*.{html,js}"],
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-dark": "#282D33",
        "custom-darker": "#161618",
        "custom-mid-dark": "#1F2326",
      },
    },
  },
  darkMode: "class",
  plugins: [
    // ...
    require("@tailwindcss/forms"),
  ],
};
