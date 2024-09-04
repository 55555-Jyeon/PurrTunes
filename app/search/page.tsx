"use client"

import { Suspense } from "react"
import { SearchPageProps } from "./type"
import SearchResult from "../_/components/search/searchResult"

const SearchPage = ({ searchParams }: SearchPageProps) => {
    const query = searchParams.q

    return (
        <div>
            <div>
                <Suspense fallback={<div>Loading...</div>}>
                    <SearchResult query={query} />
                </Suspense>
            </div>
        </div>
    )
}
export default SearchPage
