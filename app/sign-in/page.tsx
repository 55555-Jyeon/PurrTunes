"use client"

import { signIn, useSession } from "next-auth/react"

const SignIn = () => {
    const { data, status } = useSession()

    console.log("data", data)

    return (
        <div>
            <div>
                <button onClick={() => signIn("google", { callbackUrl: "/" })}> google login</button>
                <button onClick={() => signIn("kakao", { callbackUrl: "/" })}>kakao login</button>
            </div>
        </div>
    )
}
export default SignIn
