import {sql_query} from '../../lib/db.js'

export default async function getAll(req, res) {
        const {user, expiration} = req.body.session
        let dbName = user.email
        dbName = dbName.split('@')
        dbName = dbName[0]
    try {
        await sql_query(`
            CREATE TABLE IF NOT EXISTS ${dbName} (
                id int not null auto_increment,
                content varchar(255) not null,
                isActive boolean not null,
                primary key (id)
            )
        `,)
        const response = await sql_query(`
            SELECT * FROM ${dbName}
        `,)
        return res.json(response)
    } catch(e) {
        res.json({
            message: e.message, 
            resp: dbName 
        })
    }
}