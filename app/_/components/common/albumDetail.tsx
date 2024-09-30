import Image from "next/image"
import { AlbumDetailProps } from "./type"
import { useState } from "react"
import YoutubePlayer from "./youtubePlayer"

const AlbumDetail = ({ album, onClose }: AlbumDetailProps) => {
    const [isPlaying, setIsPlaying] = useState(false)
    const [player, setPlayer] = useState<any>(null)

    const onReady = (event: any) => {
        setPlayer(event.target)
    }

    const onStateChange = (state: number) => {
        setIsPlaying(state === 1) // 1 means the video is playing
    }

    const togglePlay = () => {
        if (player) {
            if (isPlaying) {
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
                <div className="w-[300px] h-[300px] absolute bottom-40 right-24 z-10 rounded-xl overflow-hidden shadow-2xl">
                    <Image
                        src={album.thumbnail?.high?.url || ""}
                        alt={album.title}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-xl"
                    />
                </div>
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-20 text-white hover:text-gray-300 transition-colors duration-200"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <div className="absolute bottom-10 left-10 z-20">
                    <button
                        onClick={togglePlay}
                        className="bg-white text-black rounded-full p-3 hover:bg-gray-200 transition-colors duration-200"
                    >
                        {isPlaying ? (
                            <svg
                                className="w-8 h-8"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M6.75 5.25a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V5.25zm7.5 0A.75.75 0 0115 4.5h1.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H15a.75.75 0 01-.75-.75V5.25z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        ) : (
                            <svg
                                className="w-8 h-8"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        )}
                    </button>
                    <span className="text-white ml-4 text-lg">{album.title}</span>
                </div>
            </div>
            <YoutubePlayer videoId={album.id} onReady={onReady} onStateChange={onStateChange} />
        </div>
    )
}

export default AlbumDetail
