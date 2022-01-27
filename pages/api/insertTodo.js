import {sql_query} from '../../lib/db.js'

export default async function insertTodo(req, res) {
    const data = JSON.parse(JSON.stringify(req.body))
    let dbName = data.email.split('@')
    dbName = dbName[0]
    try {
        const result = await sql_query(`
            INSERT INTO ${dbName}(content, isActive) VALUES("${data.content}",${data.isActive})
        `)
        return res.json(result)
    } catch(e) {
        res.json({message: e.message, rest:data})
    }
}