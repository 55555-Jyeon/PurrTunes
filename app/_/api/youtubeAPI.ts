import { SearchResultType } from "@/app/search/type"
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

export const fetchSearchResult = async (query: string): Promise<SearchResultType[]> => {
    if (!query) return []

    try {
        const params = new URLSearchParams({
            part: "snippet",
            q: query,
            key: YOUTUBE_API_KEY || "",
            type: "video",
            videoCategoryId: "10",
            maxResults: "20",
        })

        const url = `${YOUTUBE_URI}search?${params.toString()}`
        console.log("Requesting URL:", url) // URL 로깅 추가

        const response = await fetch(url)

        if (!response.ok) {
            const errorBody = await response.text()
            console.error("API 응답 에러:", response.status, errorBody)
            throw new Error(`HTTP error! status: ${response.status}, body: ${errorBody}`)
        }

        const data: YouTubeSearchResponse = await response.json()

        if (!data.items || data.items.length === 0) {
            console.warn("검색 결과가 없습니다.")
            return []
        }

        return data.items.map(item => ({
            id: item.id.videoId,
            title: decodeURIComponent(item.snippet.title),
            description: decodeURIComponent(item.snippet.description),
            thumbnail: {
                default: item.snippet.thumbnails.default,
                medium: item.snippet.thumbnails.medium,
                high: item.snippet.thumbnails.high,
            },
            channelTitle: item.snippet.channelTitle,
            publishedAt: item.snippet.publishedAt,
        }))
    } catch (error) {
        console.error("검색 결과 가져오기 오류:", error)
        if (error instanceof Error) {
            throw new Error(`검색 결과 가져오기 오류: ${error.message}`)
        } else {
            throw new Error("알 수 없는 오류가 발생했습니다.")
        }
    }
}
