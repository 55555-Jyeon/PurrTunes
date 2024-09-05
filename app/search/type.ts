import { YouTubeThumbnail } from "../_/api/type"

export type SearchResultType = {
    id: string
    title: string
    thumbnail: Thumbnail
    description: string
    channelTitle: string
    publishedAt: string
}

export type Thumbnail = {
    default: YouTubeThumbnail
    medium: YouTubeThumbnail
    high: YouTubeThumbnail
}

export type YouTubePlayer = {
    loadVideoById: (videoId: string) => void
    playVideo: () => void
    pauseVideo: () => void
    setVolume: (volume: number) => void
}

export type YouTubeEvent = {
    target: YouTubePlayer
    data: number
}

export type YouTubePlayerState = {
    PLAYING: number
}

export type YouTubeIframeAPI = {
    Player: new (
        elementId: string | HTMLElement,
        options: {
            height: string
            width: string
            videoId: string
            events: {
                onReady: (e: YouTubeEvent) => void
                onStateChange: (e: YouTubeEvent) => void
            }
        },
    ) => YouTubePlayer
    PlayerState: YouTubePlayerState
}

export type SearchPageProps = {
    searchParams: { q?: string }
}
