export type SuggestionsListProps = {
    suggestions: string[]
    onSuggestionClick: (suggestion: string) => void
}
export type SearchBarProps = {
    onSearch: (keyword: string) => void
}
