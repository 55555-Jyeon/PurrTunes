import { useYouTubePlayer } from "../../_/hooks/useYouTubePlayer"
import { AlbumDetailProps } from "./type"
import AlbumImage from "./albumImage"
import { Pause, Play, X } from "lucide-react"
import PlayButton from "./playButton"

const AlbumDetail = ({ album, onClose }: AlbumDetailProps) => {
    const { player, isPlaying, playerRef } = useYouTubePlayer(album.id)

    const togglePlay = () => {
        if (player && player.getPlayerState) {
            if (player.getPlayerState() === window.YT.PlayerState.PLAYING) {
                player.pauseVideo()
            } else {
                player.playVideo()
            }
        }
    }

    return (
        <div className="fixed inset-0 z-50 overflow-hidden">
            <div className="w-[500px] h-[500px] absolute bottom-0 right-0">
                <div
                    className="w-full h-full bg-cover bg-center blur-md"
                    style={{ backgroundImage: `url(${album.thumbnail?.high?.url})` }}
                ></div>
                <div className="w-[500px] h-[500px] absolute bottom-0 right-0 bg-black bg-opacity-30"></div>

                <AlbumImage src={album.thumbnail?.high?.url || ""} alt={album.title} />

                <X onClick={onClose} className="absolute top-4 right-4 z-20 text-SYSTEM-white cursor-pointer" />

                <div className="absolute bottom-10 left-10 z-20">
                    <PlayButton togglePlay={togglePlay} isPlaying={isPlaying} />
                    <span className="text-white ml-4 text-lg">{album.title}</span>
                </div>
            </div>
            <div ref={playerRef} className="hidden"></div>
        </div>
    )
}

export default AlbumDetail
