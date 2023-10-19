const express = require('express');
const router = express.Router();
const { Food, Foodnicity, Meal, FoodGroup } = require('../db/models');
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

router.get('/:foodId(\\d+)', async (req, res) => {
    const foodId = req.params.foodId;
    // (1)
    // const food = await Food.findByPk(foodId, {
    //     include: FoodGroup
    // });

    // (2)
    const food = await Food.findByPk(foodId);
    const foodGroup = await food.getFoodGroup();
    // const foodGroup = await FoodGroup.findByPk(food.foodGroupId)

    res.json({
        food,
        foodGroup
    })
});

router.post('/:foodId(\\d+)/newFoodGroup', async (req, res) => {
    const { name } = req.body
    const foodId = req.params.foodId;
    const food = await Food.findByPk(foodId);

    const newFoodGroup = await food.createFoodGroup({
        name
    })

    res.json({
        food,
        newFoodGroup
    })
});

router.post('/:foodId/newMealFood/:mealId', async (req, res) => {
    // const { mealId } = req.body;
    const {foodId, mealId} = req.params;
    const food = await Food.findByPk(foodId);

    // console.log(mealId)

    const newMealFood = await food.addMeal(mealId);

    res.json({
        food,
        newMealFood
    })
});

router.get('/agg', async (req, res) => {
    const highestKcal = await Food.max('kcal');
    let mostExpensiveFood = await Food.findOne({
        where: {
            kcal: highestKcal
        }
    });

    const lowestPrice = await Food.min('price');
    const highestPrice = await Food.max('price');
    const foodCount = await Food.count();
    const totalPrice = await Food.sum('price');
    const avgPrice = totalPrice / foodCount;
    const hotFoodCount = await Food.count({
        where: {
            temp: 'hot'
        }
    })

    mostExpensiveFood = mostExpensiveFood.toJSON();

    mostExpensiveFood.lowestPrice = lowestPrice;
    mostExpensiveFood.highestPrice = highestPrice;
    mostExpensiveFood.foodCount = foodCount;
    mostExpensiveFood.totalPrice = totalPrice;
    mostExpensiveFood.avgPrice = avgPrice;
    mostExpensiveFood.hotFoodCount = hotFoodCount;

    res.json({
        mostExpensiveFood
    })
})


module.exports = router;