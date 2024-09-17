import { useDialogAtom } from "@/app/_/libs/jotai/dialog"
import { useSignInModal } from "@/app/_/libs/jotai/signInModal"
import { useSession } from "next-auth/react"
import Image from "next/image"

const AuthStatusButton = () => {
    const { data: userData } = useSession()
    const { toggleDialog } = useDialogAtom()
    const { openModal } = useSignInModal()

    return (
        <>
            {userData?.isLoggedIn ? (
                <div
                    onClick={toggleDialog}
                    className="relative w-12 h-12 rounded-full overflow-hidden ml-[30px] cursor-pointer"
                >
                    <Image fill priority sizes="48" src={userData.user.image || ""} alt="profile" />
                </div>
            ) : (
                <button
                    onClick={openModal}
                    className="w-[100px] h-10 border border-GREY-70 rounded-[20px] flex-center ml-[30px]"
                >
                    로그인
                </button>
            )}
        </>
    )
}
export default AuthStatusButton
