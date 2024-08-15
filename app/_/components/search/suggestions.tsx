import { SuggestionsProps } from "./type"

/**
 *  @component Suggestion
 *  @description
 *  검색어 제안을 표시하는 컴포넌트
 *  사용자가 입력한 검색어에 기반한 제안 목록을 표시
 *
 *  @param {Object} props
 *  @param {string[]} props.suggestions - 표시할 검색어 제안 목록
 *  @param {React.ReactObject<HTMLDivElement>} props.suggestionRef - 제안 컨테이너에 대한 ref
 *  @param {funciton} props.onSuggestionClick - 제안 항목 클릭 시 호출되는 콜백 함수
 *
 *  @returns 검색어 제안 목록을 포함하는 React 엘리먼트
 */
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
