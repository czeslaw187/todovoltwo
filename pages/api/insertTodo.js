import {sql_query} from '../../lib/db.js'

export default async function insertTodo(req, res) {
    const {data, active} = JSON.parse(req.body)
    try {
        const result = await sql_query(`
            INSERT INTO posts(content, isActive) VALUES(?,?)
        `,[data, active])
        return res.json(result)
    } catch(e) {
        res.json({message: e.message, p: data, d:active})
    }
}