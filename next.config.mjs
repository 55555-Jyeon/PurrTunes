/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ["lucide-react"],
    images: {
        domains: ["i.maniadb.com", "lh3.googleusercontent.com", "k.kakaocdn.net", "t1.kakaocdn.net", "i.ytimg.com"],
    },
}

export default nextConfig
