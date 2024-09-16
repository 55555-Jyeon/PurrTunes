"use client"

import { signIn } from "next-auth/react"
import Image from "next/image"
import { AUTH_PROVIDERS } from "../_/constants/authProviders"
import { useModalClose } from "../_/hooks/useModalClose"
import { useSignInModal } from "../_/libs/jotai/signInModal"

const SignIn = () => {
    const { closeModal } = useSignInModal()
    const modalRef = useModalClose({ onClose: closeModal })

    return (
        <div className="modal-outside flex-center z-50">
            <div ref={modalRef} className="w-[895px] h-[582px] rounded-3xl modal-inside flex-center flex-col">
                <Image width={249} height={99} src={"/PurrTunes.png"} alt="purrTunes logo" />
                <div className="w-full flex-center flex-row my-8">
                    <div className="w-[260px] h-[1px] bg-GREY-70" />
                    <p className="text-GREY-70 mx-10">SNS 간편 로그인</p>
                    <div className="w-[260px] h-[1px] bg-GREY-70" />
                </div>
                <div className="flex-center flex-col my-4">
                    {AUTH_PROVIDERS.map(provider => (
                        <button
                            key={provider.name}
                            onClick={() => signIn(provider.name, { callbackUrl: "/" })}
                            className={`w-[480px] h-[72px] flex-center flex-row rounded-full ${provider.bgColor} opacity-50 hover:opacity-100 transition-opacity duration-600 my-2`}
                        >
                            <Image
                                width={32}
                                height={32}
                                className="mr-5"
                                src={provider.icon}
                                alt={`${provider.name} login`}
                            />
                            {provider.displayName}으로 간편 로그인하기
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default SignIn
