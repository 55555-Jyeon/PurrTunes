import { create } from "zustand"
import { SearchModalState } from "./type"

export const useSearchModalStore = create<SearchModalState>(set => ({
    isOpen: false,
    openModal: () => set({ isOpen: true }),
    closeModal: () => set({ isOpen: false }),
}))
