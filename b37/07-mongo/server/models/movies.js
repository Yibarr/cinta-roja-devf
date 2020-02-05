const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const moviesSchema = new Schema({
    title: String,
    genre: String,
    year: Number
})

const Movies  = mongoose.model('Movies', moviesSchema);

module.exports = {
    Movies
}