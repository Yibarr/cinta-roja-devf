const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const moviesSchema = new Schema({
    title: String,
    genre: {
        type:String,
        enum:['DR','TR','AC'],
        required:true
    },
    year: Number,
    premier: Date,
    img_url:{
        type:String,
        default:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fplantillasdememes.com%2Fimg%2Fplantillas%2Fyo-habia-ponido-mis-cosas-aqui01561772600.jpg&f=1&nofb=1"
    },
    active: {
        type:Boolean,
        default:true
    }
},{ timestamps:true })

const Movies  = mongoose.model('Movies', moviesSchema);

module.exports = {
    Movies
}