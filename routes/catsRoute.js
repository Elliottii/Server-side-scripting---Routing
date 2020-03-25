'use strict';
// catsRoute
const express = require('express');
const cat = require('../model/cat');
const router = express.Router();

router.route('/')
    .post(async (req, res) => {
        const post = await cat.create({
            name: req.body.name,
            age: req.body.age,
            gender: req.body.gender,
            color: req.body.color,
            weight: req.body.weight,
        });
        res.send(`cat created created with id: ${post._id}`)
    })
    .get(async (req, res) => {
        res.send(await cat.find())
    });


module.exports = router;
