import { useEffect, useRef } from "react"
import { useModalCloseProps } from "./type"

/**
 * @function useModalClose 모달 외부 클릭 시 모달을 닫는 기능을 제공하는 React 커스텀 훅
 * @param {Object} params - 훅의 매개변수 객체
 * @param {Function} params.onClose - 모달이 닫혀야 할 때 호출될 함수
 *
 * @returns {React.RefObject<HTMLDivElement>} 모달의 컨테이너 요소에 연결할 ref 객체를 반환
 *
 * @example
 * const ModalComponent = ({ onClose }) => {
 *      const modalRef = useModalClose({ onClose });
 *      return (
 *          <div ref={modalRef}>{모달 내부 코드}</div>
 *      )
 * }
 */

export const useModalClose = ({ onClose }: useModalCloseProps) => {
    const modalRef = useRef<HTMLDivElement>(null)

    /**
     * 문서의 mousedown 이벤트를 처리
     * 클릭이 모달 외부에서 발생한 경우 onClose 함수를 호출
     *
     * @param {MouseEvent} event - mousedown 이벤트 객체
     */
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                onClose()
            }
        }
        // 컴포넌트가 마운트될 때 이벤트 리스너를 추가
        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            // 컴포넌트가 언마운트될 때 이벤트 리스너를 제거
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [onClose])

    return modalRef
}
