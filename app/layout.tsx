import type { Metadata } from "next"
import { Noto_Sans_KR } from "next/font/google"
import "./globals.css"
import Layout from "./_/components/layout/layout"

const NotoSans = Noto_Sans_KR({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "PurrTunes",
    description: "recommendation by cat",
    icons: {
        icon: "/favicon.png",
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={NotoSans.className}>
                <Layout>{children}</Layout>
            </body>
        </html>
    )
}
