/** @type {import('tailwindcss').Config} */
export default {
  // tailwind.config.js

  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html', 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'], // Specify your content sources
  // ... rest of your configuration

  theme: {
    extend: {
      fontFamily: {
        'CoveredByYourGrace': ['Covered By Your Grace', "cursive"],
        'Raleway': ['Raleway', "sans-serif"],
        "StyleScript" : ["Style Script", "cursive"]
      }
    },
  },
  plugins: [require("daisyui")],
};
