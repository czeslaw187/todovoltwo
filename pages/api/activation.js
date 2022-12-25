import { Client } from "pg"

export default async function activate(req, res) {
    const {id, isActive, email} = req.body
    const client = new Client(process.env.NEXT_PUBLIC_COCKROACHDB_URL)
    await client.connect()
    try {
        const result = await client.query(`
            UPDATE todos
            SET todos.isActive=$1
            WHERE todos.todo_id=$2 AND todos.email=$3
        `,[isActive, id, email])
        return res.json(result)
    } catch(e) {
        res.json({message: e.message})
    } finally {
        client.end()
    }
}