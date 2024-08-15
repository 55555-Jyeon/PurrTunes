import { Search } from "lucide-react"
import React, { useEffect, useRef, useState } from "react"
import { useSearch } from "../../hooks/useSearch"
import { SearchBarProps } from "./type"
import SearchInput from "./searchInput"
import Suggestions from "./suggestions"

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
