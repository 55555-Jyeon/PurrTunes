import { signOut } from "next-auth/react"
import { DialogListType } from "./type"
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime"

export const DialogList: DialogListType[] = [
    { label: "마이페이지", onClick: () => alert("마이페이지는 아직 준비 중이에요!") },
    {
        label: "로그아웃",
        onClick: async (router: AppRouterInstance) => {
            await signOut({ redirect: false })
            router.push("/")
        },
    },
]
