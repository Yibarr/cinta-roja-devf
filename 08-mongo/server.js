const express = require('express');
const bodyParser = require('body-parser');

const {Pelicula} = require('./Peliculas')

console.log(Pelicula)

const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

const PORT = 4000;

app.get('/',(request,response)=>{
    response.send({message:'Server on'})
})

app.post('/create/movie',(req,res) => {
    const {
        title,
        year,
        classification,
        synopsis,
        duration,
        genre,
        cover_img,
        directores
    } = req.body

    const newMovie = Pelicula({
        title,
        year,
        classification,
        synopsis,
        duration,
        genre,
        cover_img,
        directores
    });

    newMovie.save((err,documentoPelicula)=>{
        err
        ? res.status(400).send(err)
        : res.status(201).send({message:'Has publicado una nueva película',pelicula:documentoPelicula})
    })
});


app.listen(PORT,() => {
    console.log(`Server inicializado en el puerto ${PORT}`)
});

