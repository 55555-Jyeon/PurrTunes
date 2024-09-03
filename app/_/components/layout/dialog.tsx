import { signOut } from "next-auth/react"
import { useRouter } from "next/navigation"

const MemberDialog = () => {
    const router = useRouter()

    const handleSignOut = async () => {
        await signOut({ redirect: false })
        router.push("/")
    }

    return (
        <ul className="absolute top-[100px] right-[60px] border">
            <li className="cursor-pointer">마이페이지</li>
            <li onClick={handleSignOut} className="cursor-pointer">
                로그아웃
            </li>
        </ul>
    )
}
export default MemberDialog
