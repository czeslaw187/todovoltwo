import {sql_query} from '../../lib/db.js'

export default async function subscribeUser(req, res) {
    const {email} = req.body
    const duration = Date.now() + 30*86400000
    const response = await sql_query(`
        UPDATE users
        SET subscription=?
        WHERE email=?
    `,[duration, email])
    res.json(response)
}