'use strict';
const express = require('express');
const router = express.Router();
const catController = require('../controllers/catController');
const multer = require('multer');
const upload = multer({dest: 'uploads/'});

router.route('/')
    .get(catController.cat_list_get)
    .post(upload.single('cat'), function (req, res, next) {
    })
    .put((req, res) => {
        res.send('With this endpoint you can edit cats.')
    })
    .delete((req, res) => {
        res.send('With this endpoint you can delete cats.')
    });

router.route('/:id')
    .get(catController.cat_get);

module.exports = {
    router,
}