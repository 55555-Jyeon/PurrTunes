"use client"

import useSWR from "swr"
import { SearchResultProps } from "./type"

import { fetchSearchResult } from "../../_/api/youtubeAPI"
import { SearchResultType } from "@/app/search/type"
import Image from "next/image"
import { useEffect, useState } from "react"
import AlbumCard from "@/app/_/components/albumCard"

const SearchResult = ({ query, initialResults }: SearchResultProps) => {
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    const {
        data: results,
        error,
        isLoading,
    } = useSWR<SearchResultType[]>(isClient ? [query] : null, () => fetchSearchResult(query), {
        fallbackData: initialResults,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
    })

    if (error) return <div>검색 결과를 가져오는 중 오류가 발생했습니다.</div>
    if (isLoading) return <div>Loading...</div>
    if (!results || results.length === 0) return <div>검색 결과가 없습니다.</div>

    return (
        <div className=" grid grid-cols-4 gap-4">
            {results.map(result => (
                <AlbumCard key={result.id} album={result} />
            ))}
        </div>
    )
}

export default SearchResult
