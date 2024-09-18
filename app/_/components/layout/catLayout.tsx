"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

const CatLayout = () => {
    const [position, setPosition] = useState<number>(50)
    const directionRef = useRef(1)
    const speedRef = useRef(0.2)

    useEffect(() => {
        const moveInterval = setInterval(() => {
            setPosition(prevPosition => {
                const newPosition = prevPosition + directionRef.current * speedRef.current

                if (newPosition > 95 || newPosition < 0) {
                    directionRef.current *= -1
                    speedRef.current = Math.random() * 0.3 + 0.1
                    return prevPosition
                }
                return newPosition
            })
        }, 50)

        return () => clearInterval(moveInterval)
    }, [])

    return (
        <div className="fixed bottom-0 left-0 w-full h-40  overflow-hidden z-50">
            <div className="relative w-full h-full">
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
        </div>
    )
}
export default CatLayout
