'use strict';
const express = require('express');
const router = express.Router();

router.route('/')
    .get((req, res) => {
        res.send('From this endpoint you can get cats.')
    })
    .post((req, res) => {
        res.send('With this endpoint you can add cats.')
    })
    .put((req, res) => {
        res.send('With this endpoint you can edit cats.')
    })
    .delete((req, res) => {
        res.send('With this endpoint you can delete cats.')
    });

router.route('/:id')
    .get((req, res) => {
    res.send('You reqested a cat whose id is ' + req.params.id)
});

module.exports = router;

