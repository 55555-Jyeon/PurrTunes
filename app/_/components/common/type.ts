import { AlbumType } from "@/app/search/type"

export type AlbumCardProps = {
    album: AlbumType
    onClick?: (album: AlbumType) => void
}
