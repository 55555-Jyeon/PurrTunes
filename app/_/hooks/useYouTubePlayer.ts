import { YouTubeEvent } from "@/app/_components/albumDetail/type"
import { useCallback, useEffect, useRef, useState } from "react"
import { YTPlayer } from "./type"

/**
 * YouTube 플레이어 초기화 및 제어할 수 있는 커스텀 훅
 *
 * @param {string} videoId
 * @returns {{}}
 */

export const useYouTubePlayer = (videoId: string) => {
    const [isPlaying, setIsPlaying] = useState(false)
    const [player, setPlayer] = useState<YTPlayer | null>(null)
    const playerRef = useRef<HTMLDivElement>(null)

    const initPlayer = useCallback(() => {
        if (playerRef.current && window.YT && window.YT.Player) {
            const newPlayer = new window.YT.Player(playerRef.current, {
                height: "360",
                width: "640",
                videoId: videoId || "",
                events: {
                    onReady: (event: YouTubeEvent) => {
                        setPlayer(event.target as unknown as YTPlayer)
                    },
                    onStateChange: (e: YouTubeEvent) => {
                        setIsPlaying(e.data === window.YT.PlayerState.PLAYING)
                    },
                },
            })
            setPlayer(newPlayer)
        }
    }, [videoId])

    useEffect(() => {
        let isMounted = true

        if (!window.YT) {
            const tag = document.createElement("script")
            tag.src = "https://www.youtube.com/iframe_api"
            const firstScriptTag = document.getElementsByTagName("script")[0]
            firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag)

            window.onYouTubeIframeAPIReady = () => {
                if (isMounted) {
                    initPlayer()
                }
            }
        } else {
            initPlayer()
        }

        return () => {
            isMounted = false
            if (player && player.destroy) {
                player.destroy()
            }
        }
    }, [videoId, initPlayer])

    return { player, isPlaying, playerRef }
}
