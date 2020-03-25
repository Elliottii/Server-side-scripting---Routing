'use strict';
require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 3000;
const dbport = 27017;
const authRoute = require('./routes/authRoute');
const catRoute = require('./routes/catRoute');
const userRoute = require('./routes/userRoute');
const catsRoute = require('./routes/catsRoute');
const cat = require('./model/cat');
const passport = require('./utils/pass');
const db = require('./model/db');

db.on('connected', () => {
    app.listen(dbport, () => console.log(`app listening on port ${dbport}!`));
});



app.use(cors());
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({extended: true})); // for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({extended: false}));

app.use('/auth', authRoute);
app.use('/', express.urlencoded({extended: false}));
app.use('/cats', passport.authenticate('jwt', {session: false}), catsRoute);
app.use('/cat', passport.authenticate('jwt', {session: false}), catRoute);
app.use('/user', passport.authenticate('jwt', {session: false}), userRoute);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.get('/', async (req, res) => {
    res.send(await cat.find());
});
