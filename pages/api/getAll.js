import {sql_query} from '../../lib/db.js'

export default async function getAll(req, res) {
    try {
        const response = await sql_query(`
            SELECT * FROM posts
        `)
        return res.json(response)
    } catch(e) {
        res.json({message: e.message})
    }
}