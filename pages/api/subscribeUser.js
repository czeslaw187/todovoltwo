import {sql_query} from '../../lib/db.js'

export default async function subscribeUser(req, res) {
    const {name, email} = req.body
    const duration = Date.now() + 30*86400000
    const response = await sql_query(`
        UPDATE users
        SET subscription=?
        WHERE name=? AND email=?
    `,[duration, name, email])
    res.json(response)
}