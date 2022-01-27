import axios from 'axios'
import { sql_query } from '../../lib/db'

export default async function(req, res) {
    const {id, isActive, email} = req.body
    let dbName = email.split('@')
    dbName = dbName[0]
    try {
        const result = await sql_query(`
            UPDATE ${dbName}
            SET isActive=${isActive}
            WHERE id=${id}
        `,[isActive, id])
        return res.json(result)
    } catch(e) {
        res.json({message: e.message})
    }
}