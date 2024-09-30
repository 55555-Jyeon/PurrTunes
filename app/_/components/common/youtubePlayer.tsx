import { useEffect, useRef, useState } from "react"
import { YoutubePlayerProps } from "./type"

const YoutubePlayer = ({ videoId, onReady, onStateChange }: YoutubePlayerProps) => {
    const playerRef = useRef<any>(null)
    const [isAPIReady, setIsAPIReady] = useState(false)

    useEffect(() => {
        // YouTube IFrame Player API 코드를 비동기적으로 로드
        const loadYouTubeAPI = () => {
            const existingScript = document.getElementById("youtube-api")
            if (!existingScript) {
                const script = document.createElement("script")
                script.src = "https://www.youtube.com/iframe_api"
                script.id = "youtube-api"
                script.async = true
                script.defer = true
                document.body.appendChild(script)
            }
        }

        loadYouTubeAPI()

        // API가 준비되면 호출될 콜백 함수
        window.onYouTubeIframeAPIReady = () => {
            setIsAPIReady(true)
        }
    }, [])

    useEffect(() => {
        if (!isAPIReady) return

        const tag = document.createElement("script")
        tag.src = "https://www.youtube.com/iframe_api"
        const firstScriptTag = document.getElementsByTagName("script")[0]
        firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag)

        window.onYouTubeIframeAPIReady = () => {
            playerRef.current = new window.YT.Player("ytplayer", {
                height: "360",
                width: "640",
                videoId: videoId,
                events: {
                    onReady: onReady,
                    onStateChange: onStateChange,
                },
            })
        }
        return () => {
            if (playerRef.current) {
                playerRef.current.destroy()
            }
        }
    }, [videoId, onReady, onStateChange])

    return <div id="ytplayer"></div>
}
export default YoutubePlayer
