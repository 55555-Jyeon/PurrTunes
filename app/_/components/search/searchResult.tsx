"use client"

import useSWR from "swr"
import { SearchResultProps } from "./type"

import { fetchSearchResult } from "../../api/youtubeAPI"
import { SearchResultType } from "@/app/search/type"
import Image from "next/image"

const SearchResult = ({ query }: SearchResultProps) => {
    const { data, error, isLoading } = useSWR<SearchResultType[]>(query ? [query] : null, () =>
        fetchSearchResult(query),
    )

    if (error) return <div>검색 결과를 가져오는 중 오류가 발생했습니다.</div>
    if (isLoading) return <div>Loading...</div>
    if (!data) return <div>검색 결과가 없습니다.</div>

    return (
        <div className=" grid grid-cols-4 gap-4">
            {data.map(result => (
                <div key={result.id} className="p-4 h-[400px] w-[300px]">
                    <p>{result.title}</p>
                    <div className=" relative w-[200px] h-[200px]">
                        <Image src={result.thumbnail.medium.url} alt={result.title} fill sizes="auto" priority />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default SearchResult
