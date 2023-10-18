const express = require('express');
const app = express();
require('dotenv').config();

const FoodnicitiesRouter = require('./routes/foodnicities');

app.use(express.json());

app.use('/foodnicities', FoodnicitiesRouter);

const port = process.env.PORT;
app.listen(port, () => console.log(`Listening on port ${port}...`))