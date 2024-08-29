"use client"

import { signIn } from "next-auth/react"

const SignIn = () => {
    return (
        <div>
            <button onClick={() => signIn("google", { callbackUrl: "/" })}> google login</button>
            <button onClick={() => signIn("kakao", { callbackUrl: "/" })}>kakao login</button>
        </div>
    )
}
export default SignIn
