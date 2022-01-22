import mysql from 'serverless-mysql'

export const db = mysql({
    config: {
        host: 'eu-cdbr-west-02.cleardb.net',
        database: 'heroku_faa22905fef5e7b',
        user: 'b20294b95b6668',
        password: 'aa9c44c9',
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