import {sql_query} from '../../lib/db.js'

export default async function subscribeUser(req, res) {
    const {name, email} = req.body
    const response = await sql_query(`
        UPDATE users
        SET subscription=30*86400000
        WHERE name=? AND email=?
    `,[name, email])
    res.json(response)
}