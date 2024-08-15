import { SuggestionsProps } from "./type"

const Suggestions = ({ suggestions, suggestionRef, onSuggestionClick }: SuggestionsProps) => {
    return (
        <div
            ref={suggestionRef}
            className="absolute w-full h-[580px] bg-WHITE-80 rounded-t-none rounded-b-[35px] shadow-lg z-10 px-[27px]"
        >
            {suggestions.map((suggestion, index) => (
                <div key={index} className="pb-[21px]">
                    <div
                        className="hover:bg-ORIENTALPINK-50 hover:text-SYSTEM-white cursor-pointer text-GREY-30 text-2xl leading-none pt-[16px] pb-[12px] px-[48px] truncate rounded-lg"
                        onClick={() => onSuggestionClick(suggestion)}
                    >
                        {suggestion}
                    </div>
                </div>
            ))}
        </div>
    )
}
export default Suggestions
