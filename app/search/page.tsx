import { Suspense } from "react"
import { SearchPageProps, SearchResultType } from "./type"
import SearchResult from "./_components/searchResult"
import { fetchSearchResult } from "../_/api/youtubeAPI"

const SearchPage = async ({ searchParams }: SearchPageProps) => {
    const query = searchParams.q || ""
    let initialResults: SearchResultType[] = []

    if (query) {
        initialResults = await fetchSearchResult(query)
    }

    return (
        <div>
            <div>
                <Suspense fallback={<div>Loading...</div>}>
                    <SearchResult query={query} initialResults={initialResults} />
                </Suspense>
            </div>
        </div>
    )
}
export default SearchPage
