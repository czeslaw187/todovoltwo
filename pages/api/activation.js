import axios from 'axios'
import { sql_query } from '../../lib/db.js'

export default async function activate(req, res) {
    const {id, isActive, email} = req.body
    try {
        const result = await sql_query(`
            UPDATE todos
            SET todos.isActive=${isActive}
            WHERE todos.todo_id=${id} AND todos.email = '${email}'
        `)
        return res.json(result)
    } catch(e) {
        res.json({message: e.message})
    }
}