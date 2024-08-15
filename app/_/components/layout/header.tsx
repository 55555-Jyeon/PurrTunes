"use client"

import { Search } from "lucide-react"
import Image from "next/image"
import { useSearchModalStore } from "../../libs/zustand/modal"
import SearchModal from "../search/searchModal"

const Header = () => {
    const { isOpen, openModal } = useSearchModalStore()

    return (
        <>
            {isOpen && <SearchModal />}
            <div className="relative top-0 w-[1920px] max-w-full h-20 px-[120px] flex-items justify-between border-b header-glass-effect">
                <div>
                    <Image width={96} height={40} src="/logo.png" alt="purr-tunes logo" />
                </div>
                <div className="flex-center">
                    <Search color="#464646" size={24} onClick={() => openModal()} className="cursor-pointer" />
                    <div className="w-[100px] h-10 border border-GREY-70 rounded-[20px] flex-center ml-[30px]">
                        로그인
                    </div>
                </div>
            </div>
        </>
    )
}
export default Header
