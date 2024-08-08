import { NextResponse } from "next/server"

export const GET = async (request: Request) => {
    const { searchParams } = new URL(request.url)
    const keyword = searchParams.get("keyword")
    const searchType = searchParams.get("searchType")

    const apiKey = "skek298@gmail.com"
    const version = "0.5"
    const display = "10"

    const url = `https://www.maniadb.com/api/search/${encodeURIComponent(keyword as string)}/?sr=${searchType}&display=${display}&key=${apiKey}&v=${version}`

    try {
        const response = await fetch(url)
        const data = await response.text()
        return new NextResponse(data, {
            status: 200,
            headers: { "Content-Type": "application/xml" },
        })
    } catch (error) {
        return NextResponse.json({ error: "Error fetching data" }, { status: 500 })
    }
}
