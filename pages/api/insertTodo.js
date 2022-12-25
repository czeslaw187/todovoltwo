import { Client } from "pg"
export default async function insertTodo(req, res) {
    const {content, isActive, email} = req.body
    const client = new Client(process.env.NEXT_PUBLIC_COCKROACHDB_URL)
    await client.connect()
    try {
        const result = await client.query(`
            INSERT INTO todos (content, isActive, email) VALUES($1,$2,$3)
        `, [content, isActive, email])
        return res.json(result)
    } catch(e) {
        res.json({message: e.message})
    } finally {
        client.end()
    }
}