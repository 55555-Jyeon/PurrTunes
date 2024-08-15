import { useEffect, useState } from "react"
import { fetchSuggestion } from "../_apis/youtubeAPI"

export const useSearch = () => {
    const [keyword, setKeyword] = useState("")
    const [suggestions, setSuggestions] = useState<string[]>([])
    const [showSuggestions, setShowSuggestions] = useState<boolean>(false)

    useEffect(() => {
        const getData = setTimeout(async () => {
            if (keyword) {
                const result = await fetchSuggestion(keyword)
                setSuggestions(result)
                setShowSuggestions(result.length > 0)
            } else {
                setSuggestions([])
                setShowSuggestions(false)
            }
        }, 100)

        return () => clearTimeout(getData)
    }, [keyword])

    return {
        keyword,
        setKeyword,
        suggestions,
        showSuggestions,
        setShowSuggestions,
    }
}
