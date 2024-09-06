import { Suspense } from "react"
import { SearchPageProps, SearchResultType } from "./type"
import SearchResult from "./_components/searchResult"
import { fetchSearchResult } from "../_/api/youtubeAPI"

/**
 * SearchPage 컴포넌트
 *
 * 이 컴포넌트는 검색 페이지의 메인 컴포넌트입니다.
 * URL 쿼리 파라미터를 기반으로 초기 검색 결과를 가져오고,
 * SearchResult 컴포넌트를 Suspense로 감싸 렌더링합니다.
 *
 * @async
 * @param {Object} props - 컴포넌트 props
 * @param {Object} props.searchParams - URL 검색 파라미터
 * @param {string} [props.searchParams.q] - 검색 쿼리 문자열
 *
 * @returns {Promise<JSX.Element>}
 */

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
