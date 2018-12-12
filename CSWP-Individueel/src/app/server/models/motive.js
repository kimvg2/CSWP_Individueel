const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MotiveSchema = new Schema({
    name: {type: String, required: true},
    description: String,
    killers: Array

});

const Motive = mongoose.model('motive', MotiveSchema);

module.exports = Motive;