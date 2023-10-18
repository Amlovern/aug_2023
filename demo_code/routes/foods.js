const express = require('express');
const router = express.Router();
const { Food, Foodnicity, Meal } = require('../db/models');
const { Op } = require("sequelize");

router.get('/', async (req, res) => {
    const foods = await Food.findAll({
        include: [
            {
                model: Foodnicity,
                // where: {
                //     name: 'American'
                // },
                attributes: ['name', 'tasteGood']
            },
            {
                model: Meal,
                attributes: ['id', 'name'],
                through: {
                    attributes: []
                }
            }

        ]
        // include: [Foodnicity, Meal]
    });

    res.json(foods)
})


module.exports = router;