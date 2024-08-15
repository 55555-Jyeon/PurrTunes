import { ReactNode } from "react"

export type AppProviderProps = {
    children: ReactNode
}

type WindowWithYT = Window & {
    YT: any
    onYouTubeIframeReady: () => void
}

declare global {
    interface Window extends WindowWithYT {}
}
