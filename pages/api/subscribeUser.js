import { Client } from "pg"

export default async function subscribeUser(req, res) {
    const {email} = req.body
    const duration = Date.now() + 30*86400000
    const client = new Client(process.env.NEXT_PUBLIC_COCKROACHDB_URL)
    await client.connect()
    const response = await client.query(`
        UPDATE users
        SET subscription=$1
        WHERE email=$2
    `,[duration, email])
    res.json(response)
}