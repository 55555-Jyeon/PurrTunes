import { AuthProviderType } from "@/app/_/constants/type"
import { signIn } from "next-auth/react"
import Image from "next/image"

const AuthProviderButton = ({ provider }: { provider: AuthProviderType }) => (
    <button
        onClick={() => signIn(provider.name, { callbackUrl: "/" })}
        className={`w-[480px] h-[72px] flex-center flex-row rounded-full ${provider.bgColor} opacity-50 hover:opacity-100 transition-opacity duration-600 my-2`}
    >
        <Image width={32} height={32} className="mr-5" src={provider.icon} alt={`${provider.name} login`} />
        {provider.displayName}으로 간편 로그인하기
    </button>
)
export default AuthProviderButton
