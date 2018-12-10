const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CountrySchema = new Schema({
    name: {type: String, required: true},
    continent: {type: String,  required: true},
    firstmurder: String,
    killers: Array

});

const Country = mongoose.model('country', CountrySchema);

module.exports = Country;