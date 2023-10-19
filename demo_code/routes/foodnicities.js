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
});

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

router.post('/build', async (req, res) => {
    const { name, tasteGood } = req.body;
    const newFoodnicity = Foodnicity.build({
        name,
        tasteGood
    });
    // await Foodnicity.validate()
    await newFoodnicity.validate()

    // await Foodnicity.save()
    await newFoodnicity.save()

    res.json(newFoodnicity);
});

router.post('/create', async (req, res) => {
    const { name, tasteGood } = req.body;
    const newFoodnicity = await Foodnicity.create({
        name,
        tasteGood
    });

    res.json(newFoodnicity);
});

router.put('/:foodnicityId/update', async (req, res) => {
    const id = req.params.foodnicityId;
    const { name, tasteGood } = req.body;
    const data = await Foodnicity.findByPk(id);

    if (name) {
        data.name = name;
    }
    if (tasteGood !== undefined) {
        data.tasteGood = tasteGood;
    }

    await data.save();

    res.json(data);
})

router.delete('/:foodnicityId/delete', async (req, res) => {
    const id = req.params.foodnicityId;
    const data = await Foodnicity.findByPk(id);

    await data.destroy();

    res.json({
        message: 'Successfully deleted',
        data
    })
})

router.post('/:foodnicityId/newFood', async (req, res) => {
    const { name, temp, kcal, price, foodGroupId, healthy } = req.body
    const id = req.params.foodnicityId;
    const foodnicity = await Foodnicity.findByPk(id);

    const newFood = await foodnicity.createFood({
        name,
        temp,
        kcal,
        price,
        foodGroupId,
        healthy
    });

    res.json({
        foodnicity,
        newFood
    })
})


module.exports = router;