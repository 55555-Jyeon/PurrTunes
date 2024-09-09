"use client"

import useSWR from "swr"
import { SearchResultProps } from "./type"
import { fetchSearchResult } from "../../_/api/youtubeAPI"
import { SearchResultType } from "@/app/search/type"
import { useEffect, useState } from "react"
import AlbumCard from "@/app/_/components/common/albumCard"

/**
 * SearchResult 컴포넌트
 *
 * 이 컴포넌트는 YouTube API를 사용하여 검색 결과를 표시.
 * 서버에서 초기 결과를 받아 클라이언트 측에서 SWR을 사용하여 데이터를 관리.
 *
 * @param {Object} props - 컴포넌트 props
 * @param {string} props.query - 검색 쿼리 문자열
 * @param {SearchResultType[]} props.initialResults - 서버에서 가져온 초기 검색 결과
 *
 * @returns {JSX.Element}
 */

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
        <div className="my-20">
            <h1 className="text-3xl text-GREY-70 mb-10">
                <span className="text-SYSTEM-OrientalPink">{query}</span>에 대한 검색 결과{" "}
                <span className="text-SYSTEM-OrientalPink">({results.length})</span>
            </h1>
            <div className="grid grid-cols-4 gap-4">
                {results.map(result => (
                    <AlbumCard key={result.id} album={result} />
                ))}
            </div>
        </div>
    )
}

export default SearchResult
