import { signOut } from "next-auth/react"
import { useRouter } from "next/navigation"

const MemberDialog = () => {
    const router = useRouter()

    const toPersonalPage = () => {
        alert("마이페이지는 아직 준비 중이에요!")
    }

    const handleSignOut = async () => {
        await signOut({ redirect: false })
        router.push("/")
    }

    return (
        <ul className="w-[180px] h-[80px] absolute top-[100px] right-[60px] border rounded-lg mr-12 flex-center flex-col bg-SYSTEM-SpringRain z-50">
            <li
                onClick={toPersonalPage}
                className="w-[90%] h-20 mt-2 mb-1 my-2 flex-center hover:bg-SYSTEM-OrientalPink hover:text-SYSTEM-white rounded-md transition duration-250 cursor-pointer"
            >
                마이페이지
            </li>
            <li
                onClick={handleSignOut}
                className="w-[90%] h-20 mt-1 mb-2 my-2 flex-center hover:bg-SYSTEM-OrientalPink hover:text-SYSTEM-white rounded-md transition duration-250 cursor-pointer"
            >
                로그아웃
            </li>
        </ul>
    )
}
export default MemberDialog
