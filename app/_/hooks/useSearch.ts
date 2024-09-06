import { useCallback, useEffect, useState } from "react"
import useSWR from "swr"
import { fetchSuggestion } from "../api/youtubeAPI"
import { debounce } from "lodash"

/**
 *  @function useSearch
 *  @returns {Object}
 *      @property {string} keyword - 현재 검색 키워드
 *      @property {function} - 검색 키워드를 업데이트하는 함수
 *      @property {string[]} - suggestions - 현재 키워드를 기반으로 한 검색 제안 배열
 *      @property {boolean} - showSuggestions - 현재 키워드를 포함한 결과를 표시할지 여부를 나타내는 불리언
 *      @property {function} - setShowSuggestions - 현재 키워드를 포함한 결과 표시를 전환하는 함수
 *
 *  @example
 *  const{
 *  keyword,
 *  setKeyword,
 *  suggestions,
 *  showSuggestions,
 *  setShowSuggestions
 *  } = useSearch();
 *
 *  @description
 *  검색 입력과 그에 따른 결과를 표시하는 div의 상태를 관리한다.
 *  youtube API의 fetchSuggestion 함수를 사용하여 현재 키워드를 기반으로 가져온다.
 *  디바운싱을 통해 과도한 API 호출을 방지하며, 300ms의 지연 후 업데이트 된다.
 */
export const useSearch = () => {
    const [keyword, setKeyword] = useState("")
    const [debouncedKeyword, setDebouncedKeyword] = useState("")
    const [showSuggestions, setShowSuggestions] = useState<boolean>(false)

    // 디바운스된 키워드 업데이트 함수
    const debouncedSetKeyword = useCallback(
        debounce((value: string) => {
            setDebouncedKeyword(value)
        }, 300),
        [],
    )

    // 키워드 엡데이트 시 디바운스 함수 호출
    useEffect(() => {
        debouncedSetKeyword(keyword)
    }, [keyword, debouncedSetKeyword])

    /**
     * SWR fetcher 함수
     * @param {string} key - SWR 키 문자열
     * @returns {Promise<string[]>} 검색 제안 배열을 반환하는 Promise
     */
    const fetcher = (key: string) => {
        const [, query] = key.split("?")
        return fetchSuggestion(query)
    }

    const { data: suggestions = [] } = useSWR(
        debouncedKeyword ? `api/suggestions?${debouncedKeyword}` : null,
        fetcher,
        {
            dedupingInterval: 60000, // 1분간 중복 요청 방지
            revalidateOnFocus: false,
            revalidateOnReconnect: false,
        },
    )

    useEffect(() => {
        setShowSuggestions(suggestions.length > 0 && debouncedKeyword !== "")
    }, [suggestions, debouncedKeyword])

    return {
        keyword,
        setKeyword,
        suggestions,
        showSuggestions,
        setShowSuggestions,
    }
}
