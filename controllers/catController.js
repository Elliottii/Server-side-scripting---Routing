'use strict';
const catModel = require('../models/catModel');

const cats = catModel.cats;

const cat_list_get = (req, res) => {
    res.json(cats);
};

const cat_get = (req, res) => {
    res.json(cats.filter(cats => cats.id === req.params.id))
};

module.exports = {
    cat_list_get,
    cat_get,
};
// catController
