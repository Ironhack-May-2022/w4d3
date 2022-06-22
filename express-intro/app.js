const express = require('express')
const app = express()
const port = 3000

// this registers the public folder for express
app.use(express.static(__dirname + '/public'))

app.get('/', function (req, res) {
	// res.send('<h1>This is the Home Page</h1>')
	// __dirname__ is provided by Node js
	console.log(__dirname)
	res.sendFile(__dirname + '/views/home.html')
})

app.get('/about', function (req, res) {
	res.send('<h1>This is the About Page</h1>')
})

app.get('/cat', function (req, res) {
	res.sendFile(__dirname + '/views/cat.html')
})

app.get('/dog', function (req, res) {
	res.sendFile(__dirname + '/views/dog.html')
})

app.listen(port, function () {
	console.log(`Server listening on port ${port}`)
})