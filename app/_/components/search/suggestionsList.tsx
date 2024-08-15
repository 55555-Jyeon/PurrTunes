import React from "react"
import { SuggestionsListProps } from "./type"

/**
 *  @component SuggestionsList
 *  @description
 *  검색어 제안목록을 표시하는 컴포넌트.
 *  사용자가 입력한 검색어에 기반한 제안 목록을 드롭다운 형태로 표시.
 *
 *  @param {object} props
 *  @param {string[]} props.suggestions - 표시할 검색어 제안 목록
 *  @param {function} props.onSuggestionClick - 제안 항목 클릭 시 호출되는 콜백 함수
 *
 *  @returns {React.ReactElement} 검색어 제안 목록을 포함하는 React 엘리먼트
 */
export const SuggestionsList = ({ suggestions, onSuggestionClick }: SuggestionsListProps) => (
    <div className="absolute w-full mt-2 bg-white bg-opacity-90 rounded-lg shadow-lg z-10">
        {suggestions.map((suggestion, index) => (
            <div
                key={index}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-black"
                onClick={() => onSuggestionClick(suggestion)}
            >
                {suggestion}
            </div>
        ))}
    </div>
)
