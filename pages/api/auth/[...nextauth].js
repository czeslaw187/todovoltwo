import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google"


export default NextAuth({
    site: process.env.NEXTAUTH_URL,
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        }),
    ]
})
