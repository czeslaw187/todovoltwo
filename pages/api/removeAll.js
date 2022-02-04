import axios from 'axios'
import {sql_query} from '../../lib/db.js'

export default async function removeAll(req, res) {
    const {email} = req.body
    try {
        const result = await sql_query(`
            DELETE FROM todos WHERE email = ?
        `, [email])
        res.json(result)
    } catch(e) {
        res.json({message: e.message, rest: req.body})
    }
}