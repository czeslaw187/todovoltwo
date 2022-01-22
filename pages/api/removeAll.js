import axios from 'axios'
import {sql_query} from '../../lib/db.js'

export default async function removeAll(req, res) {
    try {
        const result = await sql_query(`
            DELETE FROM posts
        `)
        res.json(result)
    } catch(e) {
        res.json({message: e.message})
    }
}