import Image from "next/image"
import { AlbumImageProps } from "./type"

const AlbumImage = ({ src, alt }: AlbumImageProps) => {
    return (
        <div className="w-[300px] h-[300px] absolute bottom-40 right-24 z-10 rounded-xl overflow-hidden shadow-2xl">
            <Image src={src || ""} alt={alt} layout="fill" objectFit="cover" className="rounded-xl" />
        </div>
    )
}
export default AlbumImage
