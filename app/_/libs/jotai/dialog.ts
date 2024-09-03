import { atom, useAtom } from "jotai"

// header member dialog
const memberDialogAtom = atom(false)

export const useDialogAtom = () => {
    const [isDialogOpen, setIsDialogOpen] = useAtom(memberDialogAtom)

    const toggleDialog = () => setIsDialogOpen(prev => !prev)

    return { isDialogOpen, toggleDialog }
}
