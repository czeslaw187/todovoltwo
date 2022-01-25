import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google"
import { TypeORMLegacyAdapter } from "@next-auth/typeorm-legacy-adapter"
import { ConnectionOptions } from "typeorm"
import { SnakeNamingStrategy } from 'typeorm-naming-strategies'


const connection = {
    type: "mysql",
    host: process.env.MYSQL_HOST,
    port: 3306,
    username: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    namingStrategy: new SnakeNamingStrategy()
}
const options = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        })
    ],
    //database: 'mysql://b20294b95b6668:aa9c44c9@eu-cdbr-west-02.cleardb.net:3306/heroku_faa22905fef5e7b?synchronize=rue'
    adapter: TypeORMLegacyAdapter(connection),
    
}

export default (req, res) => NextAuth(req, res, options)