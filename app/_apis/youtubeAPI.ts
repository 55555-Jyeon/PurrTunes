import { YouTubeSearchResponse } from "./type"

const YOUTUBE_API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY
const YOUTUBE_URI = process.env.NEXT_PUBLIC_YOUTUBE_URI

export const fetchSuggestion = async (input: string) => {
    try {
        const response = await fetch(
            `${YOUTUBE_URI}search?part=snippet&q=${input}&key=${YOUTUBE_API_KEY}&type=video&videoCategoryId=10&maxResults=8`,
        )
        const data: YouTubeSearchResponse = await response.json()

        const searchSuggestion: string[] = data.items.map(item => item.snippet.title)
        return searchSuggestion
    } catch {
        return []
    }
}
