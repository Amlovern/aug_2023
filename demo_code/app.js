const express = require('express');
const app = express();
require('dotenv').config();
const { Op } = require('sequelize');

const { Food, FoodGroup } = require('./db/models');

const FoodnicitiesRouter = require('./routes/foodnicities');
const FoodRouter = require('./routes/foods');

app.use(express.json());
app.use('/css', express.static('assets/css'));
app.use('/images', express.static('assets/img'));

app.use('/foodnicities', FoodnicitiesRouter);
app.use('/food', FoodRouter);

app.get('/pagination', async (req, res) => {
    let { size, page } = req.query;

    if (!page) page = 1;
    if (!size) size = 3;
    
    const pagination = {
        limit: size,
        offset: size * (page - 1)
    };

    // if (!page) pagination.offset = 0;
    // if (!size) pagination.limit = 3;

    if (size < 1 || page < 1) {
        delete pagination.limit;
        delete pagination.offset;
    }

    const food = await Food.findAll({
        ...pagination
    });

    res.json(food)
})

app.get('/search', async (req, res) => {
    const { name, foodGroup, maxPrice } = req.query;
    
    const queryObj = {
        include: [],
        where: {}
    };

    if (name) {
        queryObj.where.name = {
            [Op.substring]: name
        };
    };

    if (maxPrice) {
        queryObj.where.price = {
            [Op.lte]: maxPrice
        };
    };

    if (foodGroup) {
        queryObj.include.push({
            model: FoodGroup,
            where: {
                name: foodGroup
            },
            attributes: {
                exclude: ['createdAt' , 'updatedAt']
            }
        });
    };

    const foodData = await Food.findAll({
        ...queryObj
    });

    res.json(foodData)
})

const port = process.env.PORT;
app.listen(port, () => console.log(`Listening on port ${port}...`))