import http from 'node:http'
import { json } from './middlewares/json.js'
import { Database } from './database.js'

const database = new Database()

const server = http.createServer(async (req, res) => {
	const { method, url } = req

	await json(req, res)

	if (method === 'GET' && url === '/users') {
		const users = database.select('users')
		return res
			.setHeader('Content-Type', 'application/json')	
			.end(JSON.stringify(users)) //Early return
	}

	if (method === 'POST' && url === '/users') {
		const { name, email } = req.body

		const user = {
			id: 1,
			name,
			email
		}

		database.insert('users', user)

		return res.writeHead(201).end()
	}

	return res.writeHead(404).end()
})

console.log('Server running in port: 3333')
server.listen(3333)