"use client"

import { useRouter } from "next/navigation"
import { useSearchModalStore } from "../../libs/zustand/modal"
import SearchBar from "./searchBar"
import Image from "next/image"

const SearchModal = () => {
    const { isOpen, closeModal } = useSearchModalStore()
    const router = useRouter()

    if (!isOpen) return null

    const handleSearch = (keyword: string) => {
        router.push(`/search?q=${encodeURIComponent(keyword)}`)

        closeModal()
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="">
                <div className=" relative w-[1580px] h-[907px] border-2 border-white bg-white-20 backdrop-filter backdrop-blur-lg p-[129px] rounded-[45px] shadow-lg">
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
