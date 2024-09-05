"use client"

import { Search } from "lucide-react"
import Image from "next/image"
import SearchModal from "../../../search/_components/searchModal"
import Link from "next/link"
import { useDialogAtom } from "../../libs/jotai/dialog"
import MemberDialog from "./dialog"
import { useSearchModal } from "../../libs/jotai/modal"
import AuthStatusButton from "./authStatus"
import { useSession } from "next-auth/react"

const Header = () => {
    const { isOpen, openModal } = useSearchModal()
    const { isDialogOpen } = useDialogAtom()
    const { data: userData } = useSession()

    return (
        <>
            {isOpen && <SearchModal />}
            <div className="fixed top-0 w-[1920px] max-w-full h-20 px-[120px] flex-items justify-between border-b header-glass-effect z-10">
                <Link href="/" className=" relative w-24 h-10">
                    <Image fill src="/logo.png" alt="purr-tunes logo" className="cursor-pointer" />
                </Link>
                <div className="flex-center">
                    <Search color="#464646" size={24} onClick={() => openModal()} className="cursor-pointer" />
                    <AuthStatusButton />
                </div>
            </div>
            {userData && isDialogOpen && <MemberDialog />}
        </>
    )
}
export default Header
