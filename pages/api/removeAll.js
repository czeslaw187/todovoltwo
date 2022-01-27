import axios from 'axios'
import {sql_query} from '../../lib/db.js'

export default async function removeAll(req, res) {
    const {email} = req.body
    let dbName = email.split('@')
    dbName = dbName[0]
    try {
        const result = await sql_query(`
            DELETE FROM ${dbName}
        `)
        res.json(result)
    } catch(e) {
        res.json({message: e.message, rest: req.body})
    }
}