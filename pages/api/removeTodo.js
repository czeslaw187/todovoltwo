import axios from 'axios'
import { sql_query } from '../../lib/db'

export default async function deleteTodo(req, res) {
    const {id, email} = req.body
    try {
        let response = await sql_query(`
            DELETE FROM todos WHERE todos.todo_id = ? AND todos.email = ?
        `, [id, email])
        return res.json({id:id, email:email, response})
    } catch(e) {
        res.json({message: e.message})
    }
}