import { useYouTubePlayer } from "../../_/hooks/useYouTubePlayer"
import { AlbumDetailProps } from "./type"
import AlbumImage from "./albumImage"
import { X } from "lucide-react"
import PlayButton from "./playButton"
import { useEffect } from "react"
import { getVideoId } from "@/app/_/utils/getVideoId"

/**
 * AlbumDetail 컴포넌트
 *
 * @param {Object} props
 * @param {AlbumType} props.album
 * @param {() => void} props.onClose
 *
 * @returns {JSX.Element} 앨범 상세 정보와 YouTube 플레이어를 포함한 모달
 */
const AlbumDetail = ({ album, onClose }: AlbumDetailProps) => {
    const { player, isPlaying, playerRef } = useYouTubePlayer(getVideoId(album.id))

    useEffect(() => {
        if (player && player.playVideo) {
            player.playVideo()
        }
    }, [, player])

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
            <div className="size-[500px] absolute bottom-0 right-0">
                <div
                    className="size-full bg-cover bg-center blur-md"
                    style={{ backgroundImage: `url(${album.thumbnail?.high?.url})` }}
                />
                <div className="size-full absolute bottom-0 right-0 bg-SYSTEM-black bg-opacity-30" />

                <AlbumImage src={album.thumbnail?.high?.url || ""} alt={album.title} />

                <X onClick={onClose} className="absolute top-4 right-4 z-20 text-SYSTEM-white cursor-pointer" />

                <div className="absolute bottom-10 left-10 z-20">
                    <PlayButton togglePlay={togglePlay} isPlaying={isPlaying} />
                    <span className="text-SYSTEM-white ml-4 text-lg">{album.title}</span>
                </div>
            </div>
            <div ref={playerRef} className="hidden"></div>
        </div>
    )
}

export default AlbumDetail
