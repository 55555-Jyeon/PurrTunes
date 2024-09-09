/**
 * 문자열의 길이를 제한하고 초과 시 "..."을 추가하는 유틸리티 함수
 *
 * @param text - 길이를 제한할 문자열
 * @param maxLength - 최대 길이
 * @returns 길이가 제한된 문자열
 */
export const truncateText = (text: string, maxLength: number): string => {
    return text.length > maxLength ? text.substring(0, maxLength) + "..." : text
}
