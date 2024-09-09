import Image from "next/image"
import { useEffect, useState } from "react"

const CatLayout = () => {
    const [position, setPosition] = useState<number>(50)
    const [direction, setDirection] = useState(1)
    const [speed, setSpeed] = useState(0.5)

    useEffect(() => {
        const moveInterval = setInterval(() => {
            setPosition((prevPosition: number) => {
                const randomMove = (Math.random() - 0.5) * 2
                const newPosition = prevPosition + direction * speed + randomMove

                if (newPosition > 95 || newPosition < 0) {
                    setDirection((prevDirection: number) => -prevDirection)
                    setSpeed(Math.random() * 0.5 + 0.3)
                    return prevPosition
                }
                return newPosition
            })
        }, 50)

        return () => clearInterval(moveInterval)
    }, [direction, speed])

    return (
        <div className="relative w-[1920px] h-40 overflow-hidden">
            <div
                className="absolute bottom-0 transition-all duration-[50ms] ease-linear"
                style={{ left: `${position}%` }}
            >
                <div className="w-[200px] h-[120px]">
                    <Image
                        src={"/right_working_cat.gif"}
                        alt="cat"
                        fill
                        className={`text-gray-700 transition-transform duration-300 ${direction > 0 ? "scale-x-1" : "scale-x-[-1]"}`}
                    />
                </div>
            </div>
        </div>
    )
}
export default CatLayout
