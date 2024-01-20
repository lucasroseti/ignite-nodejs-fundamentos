import http from 'node:http'

const server = http.createServer((req, res) => {
	const { method, url } = req

	if (method === 'GET' && url === '/users') {
		return res.end('Users list') //Early return
	}

	if (method === 'POST' && url === '/users') {
		return res.end('User create')
	}

	return res.end('Hello')
})

console.log('Server running in port: 3333')
server.listen(3333)