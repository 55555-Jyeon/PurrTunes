"use client"

import { Search } from "lucide-react"
import Image from "next/image"
import { useSearchModalStore } from "../../libs/zustand/modal"
import SearchModal from "../search/searchModal"
import Link from "next/link"
import { useSession } from "next-auth/react"

const Header = () => {
    const { isOpen, openModal } = useSearchModalStore()
    const { data: userData, status } = useSession()

    if (status !== "authenticated") return null
    return (
        <>
            {isOpen && <SearchModal />}
            <div className="relative top-0 w-[1920px] max-w-full h-20 px-[120px] flex-items justify-between border-b header-glass-effect">
                <Link href="/" className=" relative w-24 h-10">
                    <Image fill src="/logo.png" alt="purr-tunes logo" />
                </Link>
                <div className="flex-center">
                    <Search color="#464646" size={24} onClick={() => openModal()} className="cursor-pointer" />
                    {userData.isLoggedIn ? (
                        <div className="relative w-12 h-12 rounded-full overflow-hidden ml-[30px]">
                            <Image fill src={userData.user.image || ""} alt="profile" />
                        </div>
                    ) : (
                        <Link
                            href="/sign-in"
                            className="w-[100px] h-10 border border-GREY-70 rounded-[20px] flex-center ml-[30px]"
                        >
                            로그인
                        </Link>
                    )}
                </div>
            </div>
        </>
    )
}
export default Header
