/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        coffee: {
          dark: "#1a0d0a",
          light: "#f5e6d3",
          gold: "#d4a373",
          border: "#3b2318",
          soft: "#2b1712",
          cursor: "#4b1e1e",
        },
      },

      keyframes: {
        pop: {
          "0%": { transform: "scale(0)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        
      },

      animation: {
        pop: "pop 0.4s ease forwards",
      },
    },
     animation: {
    "gradient-x": "gradient-x 6s ease infinite",
  },
  keyframes: {
    "gradient-x": {
      "0%, 100%": { "background-position": "0% 50%" },
      "50%": { "background-position": "100% 50%" },
    },
  },
  backgroundSize: {
    "200%": "200% 200%",
  },
  },
  plugins: [],
};