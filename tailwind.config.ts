import type { Config } from "tailwindcss"

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {
                "white-80": "rgba(255, 255, 255, 0.8)",
                "white-70": "rgba(255, 255, 255, 0.7)",
                "white-60": "rgba(255, 255, 255, 0.6)",
                "white-20": "rgba(255,255,255, 0.2)",
                "OrientalPink-50": "rgba(196,154,168, 0.5)",
            },
        },
    },
    plugins: [],
}
export default config
