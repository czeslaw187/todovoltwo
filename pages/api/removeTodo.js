import axios from 'axios'
import { sql_query } from '../../lib/db'

export default async function deleteTodo(req, res) {
    const {id, email} = req.body
    let dbName = email.split('@')
    dbName = dbName[0]
    try {
        let response = await sql_query(`
            DELETE FROM ${dbName} WHERE id = ${id}
        `,[id])
        return res.json({id:id,email:email})
    } catch(e) {
        res.json({message: e.message})
    }
}