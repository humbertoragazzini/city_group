import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "the-red": "#e0363e",
        "the-black": "#010101",
        "the-darkGrey": "#b3b0b1",
        "the-lightGrey": "#10555E",
        "the-lightRed": "#178A95",
        "the-darkWhite": "#FF6F61",
        "the-darkerGrey": "#F5F7F7",
        "the-lightWhite": "#333333",
        "the-white": "#FFFFFF",
        "the-darkBlack": "#000000",
        "the-yellow": "#FFC107",
      },
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }

        "3xl": "1920px",
        // => @media (min-width: 1536px) { ... }

        "4xl": "2560px",
        // => @media (min-width: 1536px) { ... }

        "5xl": "3850px",
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [],
};
export default config;
