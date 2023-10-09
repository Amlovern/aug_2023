const express = require('express');
const app = express();

app.use(express.json())

app.get(['/test', '/status'], (req, res) => {
    res.send('Hello from your first Express API')
})

app.post('/create', (request, response) => {
    console.log(request.body)
})

app.get('/name/:actorId/movie/:movieId', (req, res) => {
    console.log(req.params)
})

app.get('/name', (req, res) => {
    console.log(req.query);
})

app.listen(8000, () => console.log('Listening on port 8000...'))