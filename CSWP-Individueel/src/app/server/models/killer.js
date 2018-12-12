const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const KillerSchema = new Schema({
    photo: String,
    name: {type: String, required: true},
    alias: String,
    birthdate: {type: String, required: true},
    birthplace: String,
    countryactive: Array,
    dateactive: String,
    victimcount: Number,
    victims: Array,
    motive: Array,
    description: {type: String, required: true},
    status: String

});

const Killer = mongoose.model('killer', KillerSchema);

module.exports = Killer;
