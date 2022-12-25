import { Client } from "pg"

export default async function removeAll(req, res) {
    const {email} = req.body
    const client = new Client(process.env.NEXT_PUBLIC_COCKROACHDB_URL)
    await client.connect()
    try {
        const result = await client.query(`
            DELETE FROM todos WHERE email = $1
        `, [email])
        res.json(result)
    } catch(e) {
        res.json({message: e.message, rest: req.body})
    } finally {
        client.end()
    }
}