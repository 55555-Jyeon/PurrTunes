import { AuthProviderType } from "@/app/_/constants/type"
import { signIn } from "next-auth/react"
import Image from "next/image"

const AuthProviderButton = ({ provider }: { provider: AuthProviderType }) => (
    <button
        onClick={() => signIn(provider.name, { callbackUrl: "/" })}
        className={`w-[480px] h-[72px] flex-center flex-row rounded-full ${provider.bgColor} opacity-50 hover:opacity-100 transition-opacity duration-600 my-2`}
    >
        <div className="relative w-8 h-8">
            <Image priority fill sizes="32px" className="mr-5" src={provider.icon} alt={`${provider.name} login`} />
        </div>
        {provider.displayName}으로 간편 로그인하기
    </button>
)
export default AuthProviderButton
