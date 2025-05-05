/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#13AA52",           // MongoDB Green Buttons, Links, Highlights
        accent: "#17B75E",            // Bright Leaf (Green Hover/Accent)
        secondary: "#7BBF9E",        // Muted Green (Mint Gray-Green) Subtle Backgrounds or Cards
        lightGreen: "#E6F4EA",        // Light Mint (Soft Green) Light Backgrounds or Cards
        backgroundDark: "#1A1A1A",   // Charcoal Black (Background)
        backgroundGray: "#2C2C2C",   // Deep Gray (Card/Section BG)
        textPrimary: "#f5f5f5e7",       // Off-White (Primary Text)
        textSecondary: "#6E6E6E",     // Slate Gray (Secondary Text)
        borderGray: "#4D4D4D",        // Medium Gray (Borders/Muted UI)
        lightGray: "#D3D3D3",         // Light Gray (Soft Background)
      },
    },
  },
  plugins: [],
};
