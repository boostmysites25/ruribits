/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2ECC71",       // Vibrant teal
        secondary: "#34495E",     // Professional dark grey
        background: "#ECF0F1",    // Light grey/off-white
        white: "#FFFFFF",         // Clean white
        black: "#000000",         // Pure black
        accent: "#FFA500",        // Bright orange/amber
        text: {
          primary: "#34495E",     // Main text color
          secondary: "#7F8C8D",   // Secondary text color
          light: "#ECF0F1",       // Light text for dark backgrounds
        },
      },
    },
  },
  plugins: [],
};
