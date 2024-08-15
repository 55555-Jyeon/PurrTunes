import { Search } from "lucide-react"
import React, { useEffect, useRef, useState } from "react"
import { useSearch } from "../../hooks/useSearch"
import { SearchBarProps } from "./type"

const SearchBar = ({ onSearch }: SearchBarProps) => {
    const { keyword, setKeyword, showSuggestions, setShowSuggestions, suggestions } = useSearch()
    const [isFocused, setIsFocused] = useState(false)
    const suggestionRef = useRef<HTMLDivElement>(null)
    const inputRef = useRef<HTMLInputElement>(null)

    const handleClickOutside = (e: MouseEvent) => {
        if (
            suggestionRef.current &&
            !suggestionRef.current.contains(e.target as Node) &&
            inputRef.current &&
            !inputRef.current.contains(e.target as Node)
        ) {
            setShowSuggestions(false)
            setIsFocused(false)
        }
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

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
                <div className="relative w-[850px] h-[70px]">
                    <input
                        ref={inputRef}
                        type="text"
                        value={keyword}
                        onChange={handleInputChange}
                        onFocus={handleInputFocus}
                        placeholder="듣고 싶은 노래를 검색하세요"
                        className={`w-[850px] h-[70px] rounded-[35px] bg-white-60 focus:outline-none focus:ring-0 px-[74px] text-2xl text-[#797979] transition-all duration-300
                        ${showSuggestions ? "border-none rounded-b-none" : "border-2 border-white"}`}
                    />
                    <div className="absolute top-[24px] left-[28px]">
                        <Search width={24} height={24} />
                    </div>
                    <button type="submit" className="hidden">
                        Search
                    </button>
                </div>
            </form>
            {showSuggestions && suggestions.length > 0 && (
                <div
                    ref={suggestionRef}
                    className="absolute w-full h-[580px] bg-white-60 rounded-t-none rounded-b-[35px] shadow-lg z-10 px-[27px]"
                >
                    {suggestions.map((suggestion, index) => (
                        <div className="">
                            <div
                                key={index}
                                className="hover:bg-OrientalPink-50 cursor-pointer text-[#797979] text-2xl pt-[16px] pb-[12px] px-[48px] truncate rounded-lg "
                                onClick={() => handleSuggestionClick(suggestion)}
                            >
                                {suggestion}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}
export default SearchBar
