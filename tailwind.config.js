"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {
                // old colors we need to replace them
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
                // New Colors
                tealDark: "#1f8e89", // Equivalent to a dark teal
                tealLight: "#76c0ba", // Equivalent to a light teal
                blueDark: "#1d5b68", // Equivalent to a dark blue-teal
                tealGray: "#80b2b4", // Equivalent to a muted teal
                lightGray: "#dfe3e3", // Equivalent to a light gray
                navy: "#1e3f4e", // Equivalent to a navy blue
                grayBlue: "#657b7f", // Equivalent to a grayish blue
                charcoal: "#1b232a", // Equivalent to a dark charcoal gray
                slate: "#525454", // Equivalent to a slate gray
                graphite: "#313434", // Equivalent to a dark graphite gray
                // fun colors
                rose: "#e07176", // Equivalent to a soft rose red
                maroon: "#893f45", // Equivalent to a deep maroon
                peach: "#e2a497", // Equivalent to a soft peach
                brick: "#7f4d4b", // Equivalent to a muted brick red
                onyx: "#201c1c", // Equivalent to a very dark onyx
                cream: "#e1c0b1", // Equivalent to a cream color
                taupe: "#9a8480", // Equivalent to a taupe brown
                ivory: "#e4dcd5", // Equivalent to an ivory color
                silver: "#adabab", // Equivalent to a silver gray
                lightGrayAlt: "#cecbcb", // Alternative to light gray
                // Contrast colors
                yellowBright: "#FDE305", // Bright yellow
                plum: "#8C3B60", // Plum color
                lime: "#98DB14", // Bright lime green
                burgundy: "#6B0142", // Deep burgundy
                // Text colors
                black: "#000000", // Standard black
                deepBlack: "#030d0c", // Deep black
                darkTeal1: "#061a19", // Dark teal shade 1
                darkTeal2: "#082725", // Dark teal shade 2
                darkTeal3: "#0b3432", // Dark teal shade 3
                darkTeal4: "#0e413e", // Dark teal shade 4
                darkTeal5: "#114d4b", // Dark teal shade 5
                darkTeal6: "#145a57", // Dark teal shade 6
                darkTeal7: "#176764", // Dark teal shade 7
                darkTeal8: "#197470", // Dark teal shade 8
                darkTeal9: "#1c817d", // Dark teal shade 9
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
exports.default = config;
