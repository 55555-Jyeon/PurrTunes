import Image from "next/image"
import { AlbumCardProps } from "./type"

const AlbumCard = ({ album }: AlbumCardProps) => {
    return (
        <div className="p-4 h-[400px] w-[300px]">
            <p>{album.title}</p>
            <div className=" relative w-[200px] h-[200px]">
                <Image src={album.thumbnail.medium.url} alt={album.title} fill sizes="200px" priority />
            </div>
        </div>
    )
}
export default AlbumCard
