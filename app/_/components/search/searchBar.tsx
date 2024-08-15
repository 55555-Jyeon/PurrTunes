import { Search } from "lucide-react"
import React, { useEffect, useRef, useState } from "react"
import { useSearch } from "../../hooks/useSearch"
import { SearchBarProps } from "./type"
import SearchInput from "./searchInput"
import Suggestions from "./suggestions"

/**
 *  @component SearchBar
 *  @description
 *  검색 기능을 제공하는 컴포넌트.
 *  검색어 입력, 자동 완성 제안, 검색 실행 기능을 포함한다.
 *  SearchInput과 Suggestions 컴포넌트를 하위 컴포넌트로 사용한다.
 *
 *  @param {Object} props
 *  @param {funtion} props.onSearch - 검색 실행 시 호출될 콜백 함수
 *
 *  @returns 검색바와 검색 제안을 포함하는 JSX 함수
 *
 *  @see {@link SearchInput} 검색어 입력을 처리하는 컴포넌트
 *  @see {@link Suggestions} 검색어 제안을 표시하는 컴포넌트
 *  @see {@link useSearch} 검색 관련 상태와 로직을 관리하는 커스텀 훅
 */

const SearchBar = ({ onSearch }: SearchBarProps) => {
    const { keyword, setKeyword, showSuggestions, setShowSuggestions, suggestions } = useSearch()
    const suggestionRef = useRef<HTMLDivElement>(null)
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (
                suggestionRef.current &&
                !suggestionRef.current.contains(e.target as Node) &&
                inputRef.current &&
                !inputRef.current.contains(e.target as Node)
            ) {
                setShowSuggestions(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [setShowSuggestions])

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (keyword.trim()) {
            onSearch(keyword)
        }
        setShowSuggestions(false)
    }

    const handleSuggestionClick = (suggestion: string) => {
        setKeyword(suggestion)
        onSearch(suggestion)
        setShowSuggestions(false)
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setKeyword(value)
        if (!value.trim()) {
            setShowSuggestions(false)
        }
    }

    const handleInputFocus = () => {
        if (keyword.trim() && suggestions.length > 0) {
            setShowSuggestions(true)
        }
    }

    return (
        <div className="relative">
            <form onSubmit={handleSearch}>
                <SearchInput
                    keyword={keyword}
                    onInputChange={handleInputChange}
                    onInputFocus={handleInputFocus}
                    showSuggestions={showSuggestions}
                    inputRef={inputRef}
                />
            </form>
            {showSuggestions && suggestions.length > 0 && (
                <Suggestions
                    suggestions={suggestions}
                    onSuggestionClick={handleSuggestionClick}
                    suggestionRef={suggestionRef}
                />
            )}
        </div>
    )
}
export default SearchBar
