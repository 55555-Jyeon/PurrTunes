"use client"

import { Search } from "lucide-react"
import Image from "next/image"
import SearchModal from "../../../search/_components/searchModal"
import Link from "next/link"
import { useDialogAtom } from "../../libs/jotai/dialog"
import { useSearchModal } from "../../libs/jotai/searchModal"
import { useSession } from "next-auth/react"
import { useSignInModal } from "../../libs/jotai/signInModal"
import SignIn from "@/app/sign-in/page"
import AuthStatusButton from "./membersOnly/authStatus"
import MemberDialog from "./membersOnly/dialog"

const Header = () => {
    const { isOpen: isSearchOpen, openModal: openSearchModal } = useSearchModal()
    const { isDialogOpen } = useDialogAtom()
    const { data: userData } = useSession()
    const { isOpen: isSignInOpen } = useSignInModal()

    return (
        <>
            {isSearchOpen && <SearchModal />}
            <div className="fixed top-0 w-full h-20 px-[120px] flex-items justify-between border-b header-glass-effect z-10">
                <Link href="/" className="relative w-24 h-10">
                    <Image
                        priority
                        fill
                        sizes="96px"
                        src="/logo.png"
                        alt="purr-tunes logo"
                        className="cursor-pointer"
                    />
                </Link>
                <div className="flex-center">
                    <Search color="#464646" size={24} onClick={() => openSearchModal()} className="cursor-pointer" />
                    <AuthStatusButton />
                </div>
            </div>
            {userData && isDialogOpen && <MemberDialog />}
            {isSignInOpen && <SignIn />}
        </>
    )
}
export default Header
