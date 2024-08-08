export type SearchResult = {
    id: string
    title: string
    thumbnail: string
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
