import { Search } from "lucide-react"
import { SearchInputProps } from "./type"

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
            <div className="absolute top-[24px] left-[28px]">
                <Search width={24} height={24} color="#464646" />
            </div>
        </div>
    )
}
export default SearchInput
