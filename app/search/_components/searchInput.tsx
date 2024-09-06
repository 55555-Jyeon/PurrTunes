import { Search } from "lucide-react"
import { SearchInputProps } from "./type"

/**
 *  @component SearchInput
 *  @description
 *  검색어를 입력받는 입력 필드 컴포넌트
 *  검색 아이콘과 함께 스타일링된 입력 필드를 제공
 *
 *  @param {Object} props
 *  @param {string} props.keyword - 현재 입력된 검색어
 *  @param {funtion} props.onInputChange - 입력값 변경 시 호출되는 콜백 함수
 *  @param {funciton} props.onInputFocus - 입력 필드에 포커스될 때 호출되는 콜백 함수
 *  @param {boolean} props.showSuggestions - 검색어 제안을 표시할지 여부
 *  @param {React.RefObject<HTMLElement>} props.inputRef - 입력 필드에 대한 ref
 *
 *  @returns 검색 입력 필드와 검색 아이콘을 포함하는 React 엘리먼트
 */
const SearchInput = ({ keyword, onInputChange, onInputFocus, showSuggestions, inputRef }: SearchInputProps) => {
    return (
        <div className="relative w-[850px] h-[70px]">
            <input
                ref={inputRef}
                type="text"
                value={keyword}
                onChange={onInputChange}
                onFocus={onInputFocus}
                placeholder="듣고 싶은 노래를 검색하세요"
                className={`w-[850px] h-[70px] rounded-[35px] bg-WHITE-80 focus:outline-none focus:ring-0 px-[74px] text-2xl text-GREY-30 transition-all duration-300
      ${showSuggestions ? "border-none rounded-b-none" : "border-2 border-white"}`}
            />
            <div className="absolute top-6 left-7">
                <Search width={24} height={24} className="text-GREY-70" />
            </div>
        </div>
    )
}
export default SearchInput
