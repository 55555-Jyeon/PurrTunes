"use client"

import { useRouter } from "next/navigation"
import { useSearchModalStore } from "../../libs/zustand/modal"
import SearchBar from "./searchBar"
import Image from "next/image"

/**
 *  @component SearchModal
 *  @description
 *  검색 기능을 위한 모달 컴포넌트.
 *  화면 크기 1680px 이상엔 1580px로 고정,
 *  화면 크기 1680px 미만 전체화면에 95%
 *  @returns {React.ReactElement | null} 모달이 열려있을 때는 React 엘리먼트를, 닫혀있을 때는 null을 반환.
 *
 *  @see {@link SearchBar} 검색 입력을 처리하는 컴포넌트
 *  @see {@link useSearchModalStore} 모달의 상태를 관리하는 Zustand 스토어
 */

const SearchModal = () => {
    const { isOpen, closeModal } = useSearchModalStore()
    const router = useRouter()

    if (!isOpen) return null

    const handleSearch = (keyword: string) => {
        router.push(`/search?q=${keyword}`)

        closeModal()
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="w-full flex justify-center">
                <div className=" relative w-[95%] max-w-[1580px] h-[907px] border-2 border-white bg-WHITE-20 backdrop-filter backdrop-blur-lg p-[129px] rounded-[45px] shadow-lg">
                    <div className="w-full flex justify-end absolute top-[37px] right-[32px]">
                        <div className=" relative w-[42px] h-[42px] cursor-pointer" onClick={() => closeModal()}>
                            <Image src={"/XButton.svg"} alt="X" fill />
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <SearchBar onSearch={handleSearch} />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SearchModal
