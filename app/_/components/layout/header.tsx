import { Search } from "lucide-react"
import Image from "next/image"

const Header = () => {
    return (
        <div className="relative top-0 max-w-[1920px] w-full h-20 px-[120px] flex-items justify-between border-b header-glass-effect">
            <div>
                <Image width={96} height={40} src="/logo.png" alt="purr-tunes logo" />
            </div>
            <div className="flex-center">
                <Search color="#464646" size={24} />
                <div className="w-[100px] h-10 border border-GREY-70 rounded-[20px] flex-center ml-[30px]">로그인</div>
            </div>
        </div>
    )
}
export default Header
