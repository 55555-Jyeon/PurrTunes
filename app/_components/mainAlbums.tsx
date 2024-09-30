"use client"

import useSWR from "swr"
import { AlbumType } from "../search/type"
import { fetchPopularAlbums } from "../_/api/youtubeAPI"
import AlbumCard from "../_/components/common/albumCard"
import { useState } from "react"
import AlbumDetail from "../_/components/common/albumDetail"

const MainAlbums = () => {
    const [selectAlbum, setSelectAlbum] = useState<AlbumType | null>(null)

    const {
        data: albums,
        error,
        isLoading,
    } = useSWR<AlbumType[]>("popular-albums", fetchPopularAlbums, {
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
    })

    const handleAlbumClick = (album: AlbumType) => {
        setSelectAlbum(album)
    }

    const handleCloseModal = () => {
        setSelectAlbum(null)
    }

    if (error) return <div>추천 앨범을 가져오는 중 오류가 발생했습니다.</div>
    if (isLoading) return <div>Loading...</div>
    if (!albums || albums.length === 0) return <div>추천 앨범이 없습니다.</div>

    return (
        <>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <h1 className="text-3xl text-GREY-70 mb-10">인기 재생 목록</h1>
                <div className="w-[1335px] h-[644px] grid grid-cols-4 gap-4">
                    {albums.map((album, index) => (
                        <AlbumCard
                            key={album.id ? album.id : index}
                            album={album}
                            onClick={() => handleAlbumClick(album)}
                        />
                    ))}
                </div>
            </div>
            {selectAlbum && <AlbumDetail album={selectAlbum} onClose={handleCloseModal} />}
        </>
    )
}
export default MainAlbums
