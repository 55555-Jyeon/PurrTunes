import { SuggestionsListProps } from "./type"

export const SuggestionsList: React.FC<SuggestionsListProps> = ({ suggestions, onSuggestionClick }) => (
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
