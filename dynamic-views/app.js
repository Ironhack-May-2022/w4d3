const express = require('express')
const app = express()

// this sets hbs as the view engine
app.set('view engine', 'hbs')

app.get('/', function (req, res) {
	const todos = ['learn node', 'learn react', 'watch bee and puppycat']
	const user = 'marco'
	// this is render() now not sendFile() anymore
	// render(<name of the view file>, <data as one object>)
	const someHTML = '<h1>this is a heading coming from the server</h1>'
	res.render('home', { user: user, todos: todos, text: someHTML })
})

const movies = require('./movies.json')

app.get('/movies', function (req, res) {
	console.log(movies)
	res.render('movies/index', { movieList: movies })
})

app.listen(3000, function () {
	console.log('server listening')
})