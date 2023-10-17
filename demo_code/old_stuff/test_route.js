const express = require('express');
const router = express.Router();

//NOT N+1
router.get('/:gameId(\\d+)', (req, res, next) => {
    const sql = 'SELECT boardgames.name, boardgames.max_players, categories.category, reviews.content, users.username FROM boardgames JOIN categories ON (boardgames.category_id = categories.id) JOIN reviews ON (boardgames.id = reviews.game_id) JOIN users ON (reviews.user_id = users.id) WHERE boardgames.id = ?;';
    const params = [req.params.gameId];
    db.all(sql, params, (err, rows) => {
        res.json(rows)
    })
});

//N+1
router.get('/', (req, res, next) => {
    const params = [];
    const sql = 'SELECT boardgames.id, boardgames.name, boardgames.max_players, boardgames.category_id FROM boardgames;';
    db.all(sql, params, (err, rows) => {
        for(let i = 0; i < rows.length; i++) {
            console.log(rows[i]);
            const sql2 = `SELECT categories.category FROM categories WHERE id = ${rows[i].category_id};`;

            db.get(sql2, params, (err, row) => {
                //add each category to corresponding game object
            })
        }
        req.json({ games: rows })
    })
});

//Settlers of Catan; DROP TABLE boardgames;
router.post('/search', (req, res, next) => {
    const searchTerm = req.body.filter;
    const sql = `SELECT * FROM boardgames WHERE name = ${searchTerm};`
    //SELECT * FROM boardgames WHERE name = Settlers of Catan; DROP TABLE boardgames;;

    db.exec(sql, () => {
        db.all(sql, [], (err, rows) => {
            console.log(rows);
            res.json(rows)
        })
    })
})


module.exports = router;