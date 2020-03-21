'use strict';
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.route('/')
    .get(userController.user_list_get)
    .post((req, res) => {
        res.send('With this endpoint you can add users.')
    })
    .put((req, res) => {
        res.send('With this endpoint you can edit users.')
    })
    .delete((req, res) => {
        res.send('With this endpoint you can delete users.')
    });

router.route('/:id')
    .get(userController.user_get);

module.exports = router;