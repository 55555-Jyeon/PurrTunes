import { atom, useAtom } from "jotai"

export const signInModalAtom = atom(false)

export const useSignInModal = () => {
    const [isOpen, setIsOpen] = useAtom(signInModalAtom)

    const openModal = () => setIsOpen(true)
    const closeModal = () => setIsOpen(false)

    return { isOpen, openModal, closeModal }
}
