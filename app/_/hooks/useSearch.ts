import { useEffect, useState } from "react"
import { fetchSuggestion } from "../api/youtubeAPI"

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
 *  과도한 API 호출을 방지하기 위해 100ms의 지연 후 업데이트 된다.
 */
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
