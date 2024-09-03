import { getSession } from "next-auth/react"
import { NextRequest, NextResponse } from "next/server"

const matchersForMember = ["/myPage"]
const matchersForNonMember = ["/", "/sign-in/*", "/sign-up/*", "/search"]

// 경로 일치 확인
const isMatch = (pathname: string, urls: string[]) => {
    return urls.some(url => pathname.startsWith(url) || pathname === url)
}

export const middleware = async (request: NextRequest) => {
    // 인증이 필요한 페이지 접근 제어
    // if (isMatch(request.nextUrl.pathname, matchersForMember)) {
    //     return (await getSession()) ? NextResponse.next() : NextResponse.redirect(new URL("/", request.url))
    // }
    // if (isMatch(request.nextUrl.pathname, matchersForNonMember)) {
    //     return (await getSession()) ? NextResponse.redirect(new URL("/", request.url)) : NextResponse.next()
    // }
    return NextResponse.next()
}
