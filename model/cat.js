const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const catSchema = new Schema({
    name: String,
    age: Number,
    gender: {
        type: String,
        enum: ['male', 'female'],
        required: true,
    },
    color: String,
    weight: Number,
    owner: mongoose.ObjectId
});

module.exports = mongoose.model('Cat', catSchema);