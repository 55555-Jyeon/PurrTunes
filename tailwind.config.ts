import type { Config } from "tailwindcss"
import { COLORS } from "./app/_/styles/color"
import { PluginAPI } from "tailwindcss/types/config"
const plugin = require("tailwindcss/plugin")

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                ...COLORS,
                "white-80": "rgba(255, 255, 255, 0.8)",
                "white-70": "rgba(255, 255, 255, 0.7)",
                "white-60": "rgba(255, 255, 255, 0.6)",
                "white-20": "rgba(255,255,255, 0.2)",
                "OrientalPink-50": "rgba(196,154,168, 0.5)",
            },
        },
    },
    plugins: [
        plugin(function ({ addUtilities }: PluginAPI) {
            const newUtilities = {
                ".header-glass-effect": {
                    background: "rgba(255, 255, 255, 0.1)",
                    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                    backdropFilter: "blur(9px)",
                    WebkitBackdropFilter: "blur(9px)",
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                },
            }
            addUtilities(newUtilities)
        }),
    ],
}
export default config
