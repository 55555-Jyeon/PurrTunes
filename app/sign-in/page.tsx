"use client"

import { signIn } from "next-auth/react"
import Image from "next/image"

const SignIn = () => {
    return (
        <div className="modal-outside flex-center">
            <div className="w-[895px] h-[582px] rounded-3xl modal-inside flex-center flex-col">
                <Image width={249} height={99} src={"/PurrTunes.png"} alt="purrTunes logo" />
                <div className="w-full flex-center flex-row my-8">
                    <div className="w-[260px] h-[1px] bg-GREY-50" />
                    <p className="text-GREY-50 mx-10">SNS 간편 로그인</p>
                    <div className="w-[260px] h-[1px] bg-GREY-50" />
                </div>
                <div className="flex-center flex-col my-4">
                    <button
                        onClick={() => signIn("google", { callbackUrl: "/" })}
                        className="w-[480px] h-[72px] flex-center flex-row rounded-full bg-SYSTEM-white bg-opacity-50 hover:bg-opacity-100 transition-opcity duration-[600ms] my-2"
                    >
                        <Image width={32} height={32} className="mr-5" src={"/icon/google.svg"} alt="google login" />
                        구글 계정으로 간편 로그인하기
                    </button>
                    <button
                        onClick={() => signIn("kakao", { callbackUrl: "/" })}
                        className="w-[480px] h-[72px] flex-center flex-row rounded-full bg-SNS-kakao bg-opacity-50 hover:bg-opacity-100 transition-opcity duration-[600ms] my-2"
                    >
                        <Image width={32} height={32} className="mr-5" src={"/icon/kakao.svg"} alt="kakao login" />
                        카카오톡으로 간편 로그인하기
                    </button>
                </div>
            </div>
        </div>
    )
}
export default SignIn
