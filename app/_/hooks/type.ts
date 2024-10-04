export type useModalCloseProps = {
    onClose: () => void
}
export type YTPlayer = {
    playVideo(): void
    pauseVideo(): void
    stopVideo(): void
    seekTo(seconds: number, allowSeekAhead: boolean): void
    getPlayerState(): number
    destroy(): void
}
