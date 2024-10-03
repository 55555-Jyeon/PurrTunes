import Image from "next/image"
import { truncateText } from "../../utils/length-helper"
import { AlbumCardProps } from "./type"

const AlbumCard = ({ album, onClick }: AlbumCardProps) => {
    const { title, description, thumbnail } = album

    const handleClick = () => {
        if (onClick) {
            onClick(album)
        }
    }

    return (
        <div className="size-[300px] overflow-hidden relative group cursor-pointer" onClick={handleClick}>
            <Image
                fill
                sizes="300px"
                priority
                src={thumbnail?.high?.url}
                alt={title}
                className="object-cover object-center w-full h-full cursor-pointer"
            />
            <div className="absolute inset-0 flex-justify items-end bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                <div className="p-4">
                    <h3 className="text-xl font-bold text-SYSTEM-white mb-2">{truncateText(title, 20)}</h3>
                    <p className="text-sm text-GREY-10">{truncateText(description, 80)}</p>
                </div>
            </div>
        </div>
    )
}

export default AlbumCard
