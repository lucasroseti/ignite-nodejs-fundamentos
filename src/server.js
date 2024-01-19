import http from 'node:http'

const server = http.createServer((req, res) => {
	return res.end('Hello')
})

console.log('Server running in port: 3333')
server.listen(3333)