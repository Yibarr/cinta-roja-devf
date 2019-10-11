const mongoose = require('mongoose');

const URL_MONGO = "mongodb+srv://AL1206:12345al@cluster0-4smrv.mongodb.net/Peliculas?retryWrites=true&w=majority";

mongoose.connect(URL_MONGO,{ useNewUrlParser: true },(error)=>{
    !error
    ? console.log('Conexión exitosa a MongoDB')
    : console.log(error)
})

const Schema = mongoose.Schema;

const MovieSchema = new Schema({
    title:String,
    image_url:{
        type:String
    },
    genre:{
        type:String,
        enum:['CD','HR','SF']
    },
    directores:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Director'
        }
    ]
},{timestamps:true})


const DirectorSchema = new Schema({
    name:String,
    nationality:String,

},{timestamps:true})

const Movie = mongoose.model('Movie',MovieSchema);
const Director = mongoose.model('Director',DirectorSchema);

module.exports = {
    Movie,
    Director
} 

