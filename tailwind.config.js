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
                // Deep Dark Backgrounds
                background: "#09090b", // Zinc 950 (Main bg)
                surface: "#18181b", // Zinc 900 (Card bg)
                border: "#27272a", // Zinc 800 (Borders)

                // Vibrant Accents
                primary: "#8b5cf6", // Violet 500
                secondary: "#06b6d4", // Cyan 500

                // Text Colors
                muted: "#a1a1aa", // Zinc 400
            },

            // tailwind.config.js
           typography: ({ theme }) => ({
                primary: {
                    css: {
                        "--tw-prose-body": theme("colors.muted"),
                        "--tw-prose-headings": theme("colors.white"),
                        "--tw-prose-links": theme("colors.primary"),
                        "--tw-prose-bold": theme("colors.white"),
                        "--tw-prose-counters": theme("colors.muted"),
                        "--tw-prose-bullets": theme("colors.primary"),
                        "--tw-prose-hr": theme("colors.border"),
                        "--tw-prose-quotes": theme("colors.white"),
                        
                        // Code Block Resets for Sugar-High Compatibility
                        pre: {
                            backgroundColor: "transparent !important",
                            padding: "0 !important",
                            margin: "0 !important",
                        },
                        code: {
                            color: theme("colors.secondary"),
                            backgroundColor: "transparent !important",
                            fontWeight: "400",
                            fontSize: "0.9em",
                            padding: "0 !important",
                        },
                        "code::before": { content: '""' },
                        "code::after": { content: '""' },
                    },
                },
            }),

            animation: {
                "fade-in": "fadeIn 0.5s ease-in-out",
            },

            keyframes: {
                fadeIn: {
                    "0%": { opacity: "0", transform: "translateY(10px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
            },
        },
    },
    plugins: [require("@tailwindcss/typography")],
};
