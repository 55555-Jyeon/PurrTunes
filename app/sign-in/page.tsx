"use client"

import { useModalClose } from "../_/hooks/useModalClose"
import { useSignInModal } from "../_/libs/jotai/signInModal"
import ModalTitle from "../_/components/layout/_components/modalTitle"
import AuthProviderButtons from "../_/components/layout/_components/authButtons"

const SignIn = () => {
    const { closeModal } = useSignInModal()
    const modalRef = useModalClose({ onClose: closeModal })

    return (
        <div className="modal-outside flex-center z-50">
            <div ref={modalRef} className="w-[895px] h-[582px] rounded-3xl modal-inside flex-center flex-col">
                <ModalTitle />
                <AuthProviderButtons />
            </div>
        </div>
    )
}
export default SignIn
