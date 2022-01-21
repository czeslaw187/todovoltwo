import {sql_query} from '../../lib/db.js'

export default async function insertTodo(req, res) {
    const {content, isActive} = req.body
    try {
        const result = await sql_query(`
            INSERT INTO posts(content, isActive) VALUES(?,?)
        `,[content, isActive])
        return res.json(result)
    } catch(e) {
        res.json({message: e.message, rest:req})
    }
}