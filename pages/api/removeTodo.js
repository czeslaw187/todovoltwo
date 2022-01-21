import axios from 'axios'
import { sql_query } from '../../lib/db'

export default async function deleteTodo(req, res) {
    const {id} = req.body
    try {
        let response = await sql_query(`
            DELETE FROM posts WHERE id = ?
        `,[id])
        return res.json(id)
    } catch(e) {
        res.json({message: e.message})
    }
}