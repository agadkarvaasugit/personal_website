import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'rose': '#E5A8B7',
        'slate': '#868686',
        'lavender': '#c8a8e5',
        'sky': '#6EB5FF',
        'mint': '#77DD77',
        'banana': '#FFFF99',
        'coral': '#FFA07A',
        'crimson': '#FF6F61',
        'mahogany': '#A52A2A',
        'aqua': '#00FFFF',
        'indigo': '#8A2BE2',
        'gold': '#FFD700',
        'black': '#000000',
        'white': '#FFFFFF',
    },    
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
