const express = require('express');
const router = express.Router();

router.get('/:actorId/movie/:movieId', (req, res) => {
    res.json(req.params)
})

router.get('/', (req, res) => {
    res.json(req.query);
})


module.exports = router;