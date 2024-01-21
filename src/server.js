import http from 'node:http'

const users = []

const server = http.createServer((req, res) => {
	const { method, url } = req

	if (method === 'GET' && url === '/users') {
		return res
			.setHeader('Content-Type', 'application/json')	
			.end(JSON.stringify(users)) //Early return
	}

	if (method === 'POST' && url === '/users') {
		users.push({
			id: 1,
			name: 'John Doe',
			email: 'johndoe@example.com'
		})

		return res.end('User create')
	}

	return res.end('Hello')
})

console.log('Server running in port: 3333')
server.listen(3333)