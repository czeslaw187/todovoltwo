import { Client } from "pg"

export default async function deleteTodo(req, res) {
    const {id, email} = req.body
    const client = new Client(process.env.NEXT_PUBLIC_COCKROACHDB_URL)
    await client.connect()
    try {
        let response = await client.query(`
            DELETE FROM todos WHERE todos.todo_id = $1 AND todos.email = $2
        `, [id, email])
        return res.json({id:id, email:email, response})
    } catch(e) {
        res.json({message: e.message})
    }
}