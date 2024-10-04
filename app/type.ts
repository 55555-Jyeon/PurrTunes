import { ReactNode } from "react"

export type AppProviderProps = {
    children: ReactNode
}

declare global {
    interface Window {
        YT: any
        onYouTubeIframeAPIReady: () => void
    }
}
