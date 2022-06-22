const http = require('http')

const server = http.createServer(function (request, response) {
	// console.log('this is the url: ', request.url)
	// these urls that we can respond to are called routes
	if (request.url === '/') {
		response.end('<h1>This is the Home Page</h1>')
	}
	if (request.url === '/about') {
		response.end('<h1>This is the About Page</h1>')
	}
	else {
		response.end('<h1>404 - Not found</h1>')
	}
})

server.listen(3000, function () {
	console.log('server listening on port 3000')
})