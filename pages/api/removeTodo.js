import axios from 'axios'
import { sql_query } from '../../lib/db'

export default async function deleteTodo(req, res) {
    console.log(req.body, 'api')
    const {id, email} = req.body
    try {
        let response = await sql_query(`
            DELETE FROM todos WHERE todos.todo_id = ${id} AND todos.email = '${email}'
        `)
        return res.json({id:id, email:email, response})
    } catch(e) {
        res.json({message: e.message})
    }
}