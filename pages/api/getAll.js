import {sql_query} from '../../lib/db.js'

export default async function getAll(req, res) {
        const {email, image, name} = req.body.session.user
    try {
        let userData = await sql_query(`
            SELECT * FROM users WHERE email=? 
        `,[email])
        if (Date.now() > userData) {
            res.json({message: 'not subscribed'})
        }

        if (userData.length <= 0) {
            await sql_query(`
                INSERT INTO users (name, email) VALUES (?,?)
            `, [name, email])                   
        }
        
        let newUser = await sql_query(`
            SELECT todos.todo_id, todos.content, todos.isActive, todos.email FROM todos LEFT JOIN users ON users.email = todos.email WHERE users.email = ?
            `, [email]) 
        res.json([newUser, userData[0].subscription])
        

    } catch(e) {
        res.json({
            message: e.message
        })
    }
}