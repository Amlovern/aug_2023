const express = require('express');
const router = express.Router();
const { Foodnicity } = require('../db/models');
const { Op } = require("sequelize");

router.get('/', async (req, res) => {
    const data = await Foodnicity.findAll({
        attributes: ['id', 'name'],
        order: [['name', 'DESC']]
    });
    res.json(data);
});

router.get('/:foodnicityId(\\d+)', async (req, res) => {
    const data = await Foodnicity.findByPk(req.params.foodnicityId, {
        attributes: ['id', 'name']
    });

    res.json(data)
})

router.get('/:foodnicityName', async (req, res) => {
    const { foodnicityName } = req.params;
    // const name = foodnicityName[0].toUpperCase() + foodnicityName.slice(1)
    const data = await Foodnicity.findOne({
        where: {
            name: {
                [Op.substring]: foodnicityName
            }
        },
        attributes: ['id', 'name']
    });
    res.json(data);
});


module.exports = router;