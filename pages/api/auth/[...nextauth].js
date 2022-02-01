import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google"
import { TypeORMLegacyAdapter } from "@next-auth/typeorm-legacy-adapter"
import axios from 'axios'


export default NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        }),
    ],
    secret: process.env.SECRET,
    session: {
        jwt: true
    },
    
    callbacks: {        
        session: async (session, token) => {
          if (!session?.user || !token?.account) {
            return session
          }
          
          session.user.id = token.account.id
          session.accessToken = token.account.accessToken
      
          return session
        },
      }
   
})
