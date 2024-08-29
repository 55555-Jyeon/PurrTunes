import { useSession } from "next-auth/react"
import Image from "next/image"
import Link from "next/link"
import { useDialogAtom } from "../../libs/jotai/dialog"

const AuthStatusButton = () => {
    const { data: userData } = useSession()
    const { toggleDialog } = useDialogAtom()

    return (
        <>
            {userData?.isLoggedIn ? (
                <div
                    onClick={toggleDialog}
                    className="relative w-12 h-12 rounded-full overflow-hidden ml-[30px] cursor-pointer"
                >
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
        </>
    )
}
export default AuthStatusButton
