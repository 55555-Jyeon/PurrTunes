import Image from "next/image"
import { useCallback, useEffect, useRef, useState } from "react"

const CatLayout = () => {
    const [position, setPosition] = useState<number>(50)
    const directionRef = useRef(1)
    const speedRef = useRef(0.5)

    useEffect(() => {
        const moveInterval = setInterval(() => {
            setPosition(prevPosition => {
                const newPosition = prevPosition + directionRef.current * speedRef.current

                if (newPosition > 95 || newPosition < 0) {
                    directionRef.current *= -1
                    speedRef.current = Math.random() * 0.5 + 0.2
                    return prevPosition
                }
                return newPosition
            })
        }, 50)

        return () => clearInterval(moveInterval)
    }, [])

    return (
        <div className="relative w-[2480px] h-40 overflow-hidden">
            <div
                className="absolute bottom-0 transition-all duration-[50ms] ease-linear"
                style={{ left: `${position}%` }}
            >
                <div className="w-[200px] h-[120px]">
                    <Image
                        src={"/right_working_cat.gif"}
                        alt="cat"
                        fill
                        className={`text-gray-700 transition-transform duration-300 ${directionRef.current > 0 ? "scale-x-1" : "scale-x-[-1]"}`}
                    />
                </div>
            </div>
        </div>
    )
}
export default CatLayout
