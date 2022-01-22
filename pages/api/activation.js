import axios from 'axios'
import { sql_query } from '../../lib/db'

export default async function(req, res) {
    const {id, isActive} = req.body
    try {
        const result = await sql_query(`
            UPDATE posts
            SET isActive=?
            WHERE id=?
        `,[isActive, id])
        return res.json(result)
    } catch(e) {
        res.json({message: e.message})
    }
}