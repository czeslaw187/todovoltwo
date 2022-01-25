import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google"


export default NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        })
    ],
    callbacks: {
        async session({ session, token, user }) {
          session.accessToken = token.accessToken,
          session.user = user
          return session
        }
      }
})
