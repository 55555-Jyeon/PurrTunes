import { YouTubeEvent } from "@/app/_components/albumDetail/type"
import { useCallback, useEffect, useRef, useState } from "react"
import { YTPlayer } from "./type"

/**
 * YouTube 플레이어 초기화 및 제어할 수 있는 커스텀 훅
 *
 * YouTube IFrame API를 사용하여 비디오 플레이어를 보여줍니다.
 *
 * @param {string} videoId
 * @returns {{
 *      Player: YTPlayer | null,
 *      isPlaying: boolean,
 *      playerRef: React.RefObject<HTMLDivElement>
 * }}
 *      - player: YouTube 플레이어, 준비가 되지않으면 null
 *      - isPlaying: 현재 비디오 재생 상태
 *      - playerRef: 플레이어 DOM ref
 */

export const useYouTubePlayer = (videoId: string) => {
    const [isPlaying, setIsPlaying] = useState(false)
    const [player, setPlayer] = useState<YTPlayer | null>(null)
    const playerRef = useRef<HTMLDivElement>(null)

    const handlePlayerReady = useCallback((event: YouTubeEvent) => {
        setPlayer(event.target as unknown as YTPlayer)
    }, [])

    const handlePlayerStateChange = useCallback((event: YouTubeEvent) => {
        setIsPlaying(event.data === window.YT.PlayerState.PLAYING)
    }, [])

    const initPlayer = useCallback(() => {
        if (!playerRef.current && !window.YT && !window.YT.player) return

        const newPlayer = new window.YT.Player(playerRef.current, {
            height: "360",
            width: "640",
            videoId: videoId || "",
            events: {
                onReady: handlePlayerReady,
                onStateChange: handlePlayerStateChange,
            },
        })
        setPlayer(newPlayer)
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
