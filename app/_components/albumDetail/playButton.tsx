import { Pause, Play } from "lucide-react"
import { PlayButtonProps } from "./type"

/**
 *
 * @param {Object} props
 * @param {() => void} props.togglePlay
 * @param {boolean} props.isPlaying
 * @returns {JSX.Element} 재생 / 일시정지 버튼
 */
const PlayButton = ({ togglePlay, isPlaying }: PlayButtonProps) => {
    return (
        <button
            onClick={togglePlay}
            className="bg-white text-black rounded-full p-3 hover:bg-gray-200 transition-colors duration-200"
        >
            {isPlaying ? <Pause /> : <Play />}
        </button>
    )
}
export default PlayButton
