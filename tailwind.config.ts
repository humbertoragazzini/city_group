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
      animation: {
        "gradient-x": "gradient-x 15s ease infinite",
        "gradient-y": "gradient-y 15s ease infinite",
        "gradient-xy": "gradient-xy 15s ease infinite",
        marquee1: "marquee 1s linear infinite",
        marquee2: "marquee 2s linear infinite",
        marquee3: "marquee 3s linear infinite",
        marquee4: "marquee 4s linear infinite",
        marquee5: "marquee 5s linear infinite",
        marquee6: "marquee 6s linear infinite",
        marquee7: "marquee 7s linear infinite",
        marquee8: "marquee 8s linear infinite",
        "fade-in": "fade-in 1s ease-in-out 2.5s forwards",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        "gradient-y": {
          "0%, 100%": {
            "background-size": "400% 400%",
            "background-position": "center top",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "center center",
          },
        },
        "gradient-x": {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        "gradient-xy": {
          "0%, 100%": {
            "background-size": "400% 400%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animationDelay: {
        "custom-delay": "2s", // Custom delay of 2 seconds
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
