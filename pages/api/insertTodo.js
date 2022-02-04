import {sql_query} from '../../lib/db.js'

export default async function insertTodo(req, res) {
    const {content, isActive, email} = req.body
    try {
        const result = await sql_query(`
            INSERT INTO todos (content, isActive, email) VALUES(?,?,?)
        `, [content, isActive, email])
        return res.json(result)
    } catch(e) {
        res.json({message: e.message})
    }
}