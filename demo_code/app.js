const express = require('express');
const app = express();
require('dotenv').config();

const FoodnicitiesRouter = require('./routes/foodnicities');
const FoodRouter = require('./routes/foods');

app.use(express.json());
app.use('/css', express.static('assets/css'));
app.use('/images', express.static('assets/img'));

app.use('/foodnicities', FoodnicitiesRouter);
app.use('/food', FoodRouter);

const port = process.env.PORT;
app.listen(port, () => console.log(`Listening on port ${port}...`))