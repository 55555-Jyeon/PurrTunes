import { Pause, Play } from "lucide-react"
import { PlayButtonProps } from "./type"

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
