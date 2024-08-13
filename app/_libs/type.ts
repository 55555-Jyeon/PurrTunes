import { ReactNode } from "react"

export type SearchModalContextType = {
    isOpen: boolean
    openModal: () => void
    closeModal: () => void
}

export type SearchModalProviderProps = {
    children: ReactNode
}
