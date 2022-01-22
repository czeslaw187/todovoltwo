import mysql from 'serverless-mysql'

export const db = mysql({
    config: {
        host: process.env.NEXT_PUBLIC_MYSQL_HOST,
        database: process.env.NEXT_PUBLIC_MYSQL_DATABASE,
        user: process.env.NEXT_PUBLIC_MYSQL_USERNAME,
        password: process.env.NEXT_PUBLIC_MYSQL_PASSWORD,
    }
})

export async function sql_query(query_string, values=[]) {
    try {
        const results = await db.query(query_string, values)
        await db.end()
        return results
    } catch(e) {
        throw Error(e.message)
    }
}