'use strict';
const express = require('express');
const router = express.Router();
const catController = require('../controllers/catController');

router.route('/')
    .get(catController.cat_list_get)
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
    .get(catController.cat_get);

module.exports = router;

/*
router.route('/:id')
    .get((req, res) => {
    res.send('You reqested a cat whose id is ' + req.params.id)
});
 */