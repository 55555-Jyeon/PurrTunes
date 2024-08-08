"use client"

import React, { useEffect, useRef, useState } from "react"
import { SearchResult, YouTubeEvent } from "./type"

const YOUTUBE_API_KEY = "AIzaSyDdq36Gn7ztf_bvdx95pgbO3ziE48D8JKU" // YouTube Data API 키를 여기에 입력하세요

declare global {
    interface Window {
        YT: any
        onYouTubeIframeAPIReady: () => void
    }
}

const YouTubeSearch: React.FC = () => {
    const [keyword, setKeyword] = useState("")
    const [results, setResults] = useState<SearchResult[]>([])
    const [selectedVideo, setSelectedVideo] = useState<string | null>(null)
    const [player, setPlayer] = useState<any>(null)
    const [isPlaying, setIsPlaying] = useState(false)
    const [volume, setVolume] = useState(50)
    const playerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const tag = document.createElement("script")
        tag.src = "https://www.youtube.com/iframe_api"
        const firstScriptTag = document.getElementsByTagName("script")[0]
        firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag)

        window.onYouTubeIframeAPIReady = () => {
            if (playerRef.current) {
                const newPlayer = new window.YT.Player(playerRef.current, {
                    height: "360",
                    width: "640",
                    videoId: selectedVideo || "",
                    events: {
                        onReady: (event: YouTubeEvent) => {
                            setPlayer(event.target)
                        },
                        onStateChange: (e: YouTubeEvent) => {
                            setIsPlaying(e.data === window.YT.PlayerState.PLAYING)
                        },
                    },
                })
                setPlayer(newPlayer)
            }
        }
    }, [])

    useEffect(() => {
        if (player && selectedVideo) {
            player.loadVideoById(selectedVideo)
        }
    }, [selectedVideo])

    const handleSearch = async () => {
        try {
            const response = await fetch(
                `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(
                    keyword,
                )}&key=${YOUTUBE_API_KEY}&type=video&maxResults=10`,
            )
            const data = await response.json()

            const searchResults: SearchResult[] = data.items.map((item: any) => ({
                id: item.id.videoId,
                title: item.snippet.title,
                thumbnail: item.snippet.thumbnails.default.url,
            }))

            setResults(searchResults)
        } catch (error) {
            console.error("Error searching YouTube:", error)
        }
    }

    const togglePlay = () => {
        if (player) {
            if (isPlaying) {
                player.pauseVideo()
            } else {
                player.playVideo()
            }
            setIsPlaying(!isPlaying)
        }
    }

    const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newVolume = parseInt(e.target.value, 10)
        setVolume(newVolume)
        if (player) {
            player.setVolume(newVolume)
        }
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">YouTube Music Search</h1>
            <div className="mb-4">
                <input
                    type="text"
                    value={keyword}
                    onChange={e => setKeyword(e.target.value)}
                    className="border p-2 mr-2"
                    placeholder="Search for music"
                />
                <button onClick={handleSearch} className="bg-blue-500 text-white p-2 rounded">
                    Search
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <h2 className="text-xl font-semibold mb-2">Search Results</h2>
                    <ul>
                        {results.map(result => (
                            <li key={result.id} className="mb-2">
                                <img src={result.thumbnail} alt={result.title} className="inline-block mr-2" />
                                <span>{result.title}</span>
                                <button
                                    onClick={() => setSelectedVideo(result.id)}
                                    className="ml-2 bg-green-500 text-white p-1 rounded"
                                >
                                    Play
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h2 className="text-xl font-semibold mb-2">Video Player</h2>
                    <div ref={playerRef}></div>
                    <div className="mt-4">
                        <button onClick={togglePlay} className="bg-blue-500 text-white p-2 rounded mr-2">
                            {isPlaying ? "Pause" : "Play"}
                        </button>
                        <input
                            type="range"
                            min="0"
                            max="100"
                            value={volume}
                            onChange={handleVolumeChange}
                            className="align-middle"
                        />
                        <span className="ml-2">{volume}%</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default YouTubeSearch
