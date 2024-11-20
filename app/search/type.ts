import { YouTubeThumbnail } from "../_/api/type"

export type AlbumType = {
    id: {
        kind: string
        videoId: string
    }
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

export type SearchPageProps = {
    searchParams: { q?: string }
}
