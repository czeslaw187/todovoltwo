import {sql_query} from '../../lib/db.js'

export default async function getAll(req, res) {
        const {email, image, name} = req.body.session.user
        console.log(email)
    try {
        let userData = await sql_query(`
            SELECT * FROM users WHERE email = "${email}"
        `)
        console.log(userData, 'getall')
        if (userData.length <= 0) {
            await sql_query(`
                INSERT INTO users (name, email) VALUES ('${name}', '${email}')
            `)
            let newUser = await sql_query(`
                SELECT * FROM users WHERE email = '${email}'
            `)    
            res.json(newUser)       
        } else {
            res.json(userData)
        }        
    } catch(e) {
        res.json({
            message: e.message
        })
    }
}