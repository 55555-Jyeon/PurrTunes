import NextAuth, { DefaultSession } from "next-auth"
import Google from "next-auth/providers/google"
import Kakao from "next-auth/providers/kakao"

declare module "next-auth" {
    interface Session {
        isLoggedIn: boolean
        user: {} & DefaultSession["user"]
    }
}

const handler = NextAuth({
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
        }),
        Kakao({
            clientId: process.env.KAKAO_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
        }),
    ],
    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60, // 세션 만료 시간 (30일)
    },
    pages: {
        signIn: "/sign-in",
        signOut: "/",
    },
    callbacks: {
        signIn: async () => {
            return true
        },
        jwt: async ({ token }) => {
            return token
        },
        session: async ({ session, token }) => {
            if (session.user) {
                session.user.email = token.email
                session.user.name = token.name
                session.user.image = token.picture
                session.isLoggedIn = true
            }
            return session
        },
    },
})

export { handler as GET, handler as POST }
