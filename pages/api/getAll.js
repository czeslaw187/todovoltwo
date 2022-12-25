import { Client } from "pg"

export default async function getAll(req, res) {
    const {name, email, image} = req.body.session.user
    const client = new Client(process.env.NEXT_PUBLIC_COCKROACHDB_URL)
    await client.connect()
    try {
        let userData = await client.query(`
            SELECT * FROM users WHERE email=$1 
        `,[email])
        if (userData.length <= 0) {
            await client.query(`
                INSERT INTO users (name, email) VALUES ($1,$2)
            `, [name, email])                   
        }

        let userSubscriptionStatus = await client.query(`
            SELECT subscription FROM users WHERE email=$1
        `,[email])
        let newUser = await client.query(`
            SELECT todos.todo_id, todos.content, todos.isActive, todos.email FROM todos LEFT JOIN users ON users.email = todos.email WHERE users.email = $1
            `, [email]) 
        res.json([newUser, userSubscriptionStatus[0].subscription])
        

    } catch(e) {
        res.json({
            message: e.message
        })
    } finally {
        client.end()
    }
}