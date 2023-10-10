const express = require('express');
const app = express();

app.use(express.json())

const test = (req, res, next) => {
    console.log(`path: ${req.path}`);
    next()
}

app.use((req, res, next) => {
    console.log('error test');
    const error = 'There was an error :(';
    next(error)
})

app.use('/name/:actorId', test)

const checkUserInput = (req, res, next) => {
    if (!req.body.stuff) {
        return res.send("Please include a stuff property")
    }
    next();
}

app.get(['/test', '/status'], test, (req, res) => {
    res.send('Hello from your first Express API')
})

app.post('/create', test, checkUserInput, (request, response) => {
    response.json(request.body)
})

app.get('/name/:actorId/movie/:movieId', (req, res) => {
    res.json(req.params)
})

app.get('/name', (req, res) => {
    res.json(req.query);
})

app.use((err, req, res, next) => {
    console.log(err);
    res.send(err)
})

app.listen(8000, () => console.log('Listening on port 8000...'))