'use strict';
// catRoute
const express = require('express');
const cat = require('../model/cat');
const router = express.Router();
const multer = require('multer');
const upload = multer({dest: './uploads/'});
const catController = require('../controllers/catController');

router.route('/')
    .post(async (req, res) => {
        const post = await cat.create({
            name: 'karvinen',
            age: 34
        });
        res.send(`cat created created with id: ${post._id}`)
    })
    .get(catController.cat_list_get)
    .put((req, res) => {
        res.send('With this endpoint you can edit cats')
    })
    .delete((req, res) => {
        res.send('With this endpoint you can delete cats');
    });
router.route('/:id')
    .get(catController.cat_get);

/*
router.post('/', upload.single('cat'), catController.cat_post);
 */

module.exports = router;
