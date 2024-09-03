import { atom, useAtom } from "jotai"

// search modal
const isOpenAtom = atom(false)

export const useSearchModal = () => {
    const [isOpen, setIsOpen] = useAtom(isOpenAtom)

    const openModal = () => setIsOpen(true)
    const closeModal = () => setIsOpen(false)

    return { isOpen, openModal, closeModal }
}
