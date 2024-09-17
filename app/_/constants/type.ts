import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime"
import { useRouter } from "next/router"

export type AuthProviderType = {
    name: string
    displayName: string
    icon: string
    bgColor: string
}

export type RouterType = ReturnType<typeof useRouter>

export type DialogListType = {
    label: string
    onClick: (router: AppRouterInstance) => void | Promise<void>
}
