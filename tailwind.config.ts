import type { Config } from "tailwindcss"
import { COLORS } from "./app/_styles/color"

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
    plugins: [],
}
export default config
