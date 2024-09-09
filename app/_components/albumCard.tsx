import { SearchResultType } from "@/app/search/type"
import Image from "next/image"
import { truncateText } from "../_/utils/length-helper"

const AlbumCard = ({ album }: { album: SearchResultType }) => {
    const { title, description, thumbnail } = album

    return (
        <div className="w-[300px] h-[300px] overflow-hidden relative group">
            <Image
                width={300}
                height={300}
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
