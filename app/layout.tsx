import "./globals.css"
import type { Metadata } from "next"
import { Noto_Sans_KR } from "next/font/google"
import Layout from "./_/components/layout/layout"
import SessionLayout from "./sessionLayout"
import { getServerSession } from "next-auth"

const NotoSans = Noto_Sans_KR({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "PurrTunes",
    description: "music recommendation by cat Jester",
    icons: {
        icon: "/favicon.png",
    },
}

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    const session = await getServerSession()
    return (
        <html lang="en">
            <body className={NotoSans.className}>
                <SessionLayout session={session}>
                    <Layout>{children}</Layout>
                </SessionLayout>
            </body>
        </html>
    )
}
