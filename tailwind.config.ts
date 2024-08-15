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
