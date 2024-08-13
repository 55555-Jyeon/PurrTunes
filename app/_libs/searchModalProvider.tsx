import { useState } from "react"
import { SearchModalContext } from "./context"
import { SearchModalProviderProps } from "./type"

export const SearchModalProvider = ({ children }: SearchModalProviderProps) => {
    const [isOpen, setIsOpen] = useState(false)

    const openModal = () => setIsOpen(true)
    const closeModal = () => setIsOpen(false)

    return (
        <SearchModalContext.Provider value={{ isOpen, openModal, closeModal }}>{children}</SearchModalContext.Provider>
    )
}
