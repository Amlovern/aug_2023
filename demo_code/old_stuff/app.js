const express = require('express');
const app = express();
require('dotenv').config();
const sqlite3 = require('sqlite3');

const db = new sqlite3.Database(process.env.DB_FILE, sqlite3.OPEN_READWRITE);

const nameRouter = require('./routes/name')

app.use(express.json())

app.use('/name', nameRouter)

const test = (req, res, next) => {
    console.log(`path: ${req.path}`);
    next()
}

app.get('/', (req, res) => {
    const sql = 'SELECT * FROM foods;'
    db.all(sql, [], (err, rows) => {
        if (err) return res.json(err);
        res.json(rows);
    })
})

app.get('/:foodId', (req, res) => {
    const sql = 'SELECT * FROM foods WHERE id = ?;'
    const params = [req.params.foodId]
    db.get(sql, params, (err, row) => {
        if (err) return res.json(err);
        res.json(row)
    })
})

// app.use((req, res, next) => {
//     console.log('error test');
//     const error = new Error('There was an error :(');
//     // error.statusCode = 404;
//     next(error)
// })

app.use('/name/:actorId', test)

const checkUserInput = (req, res, next) => {
    if (!req.body.stuff) {
        return res.send("Please include a stuff property")
    }
    next();
}

app.get(['/test', '/status'], test, (req, res) => {
    console.log(process.env.TEST)
    res.send('Hello from your first Express API')
})

app.post('/create', test, checkUserInput, (request, response) => {
    response.json(request.body)
})

// app.get('/name/:actorId/movie/:movieId', (req, res) => {
//     res.json(req.params)
// })

// app.get('/name', (req, res) => {
//     res.json(req.query);
// })

//Error handling middleware
app.use((err, req, res, next) => {
    console.log(err);
    const status = err.statusCode || 500;
    res.status(status)
    res.json({
        message: err.message || 'Something went wrong',
        status // same as status: status
    })
})

app.listen(8000, () => console.log('Listening on port 8000...'))