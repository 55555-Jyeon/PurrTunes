import { AlbumType } from "@/app/search/type"

export type AlbumCardProps = {
    album: AlbumType
    onClick?: (album: AlbumType) => void
}

export type AlbumDetailProps = {
    album: AlbumType
    onClose: () => void
}

export type YoutubePlayerProps = {
    videoId: string
    onReady?: (event: any) => void
    onStateChange: (event: any) => void
}

declare global {
    interface Window {
        YT: any
        onYouTubeIframeAPIReady: () => void
    }
}
