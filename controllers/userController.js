'use strict';
const userModel = require('../models/userModel');

const users = userModel.users;

const user_list_get = (req, res) => {
    res.json(users);
};

const user_get = (req, res) => {
    res.json();
};

module.exports = {
    user_list_get,
    user_get,
};
// userController