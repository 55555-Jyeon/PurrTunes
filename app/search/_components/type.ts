import { AlbumType } from "@/app/search/type"
import React from "react"

export type SuggestionsListProps = {
    suggestions: string[]
    onSuggestionClick: (suggestion: string) => void
}
export type SearchBarProps = {
    onSearch: (keyword: string) => void
}

export type SearchInputProps = {
    keyword: string
    onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    onInputFocus: () => void
    showSuggestions: boolean
    inputRef: React.RefObject<HTMLInputElement>
}

export type SuggestionsProps = {
    suggestions: string[]
    onSuggestionClick: (suggestion: string) => void
    suggestionRef: React.RefObject<HTMLDivElement>
}

export type SearchResultProps = {
    initialResults: AlbumType[]
    query: string
}
