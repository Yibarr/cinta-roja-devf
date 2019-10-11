const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')

const { Movie,Director } = require('./modelos');

const app = express();

/* 
5d9fd25d239485333f62158a
5d9fd2d577f77a350a49c5e6
5d9fd31e7a4457356efb018d
*/

app.use(cors())
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


const PORT = process.env.PORT || 4000;


app.get('/',(req,res)=>{
    res.send({message:'API funcionando'})
})

//Movie
app.post('/create/movie',(req,res)=>{
    const {title, image_url, genre, directors} = req.body;

    const newMovie = Movie({
        title,
        image_url,
        genre,
        directors
    })

    newMovie.save((error,model)=>{
        !error
        ? res.status(201).send({message:'Documento creado en la DB',documento:model})
        : res.status(400).send({message:'No se pudo guardar en la BD', error:error})
    })
})

app.get('/movie/genre',(req,res)=>{
    const {genre} = req.query;
    Movie.find({genre:`${genre}`}).exec()
    .then(movies => res.send(movies))
    .catch(err => res.status(409).send(err));
})

app.get('/all/movies',(req,res)=>{
    Movie.find().populate('directores').exec()
    .then(movies => res.send(movies))
    .catch(err => res.status(409).send(err));
});

app.patch('/add/director/:movieid',(req,res)=>{
    const {movieid} = req.params;
    Movie.findByIdAndUpdate(movieid,{$push:{directores:[req.body.id]}},{new:true}).exec()
    .then(movie => res.status(200).send({message:'Se ha añadido un director',movie:movie}))
    .catch(err => res.status(409).send({message:'No se ha podido añadir el director',error:error}));
})

app.delete('/delete/movie/:id',(req,res)=>{
    const { id } = req.params;
    Movie.findByIdAndDelete(id).exec()
    .then(movie => res.status(200).send({message:'Se ha borrado exitosamente',movie:movie}) )
    .catch(error => res.status(409).send({message:'No se ha podido borrar la película',error:error}))
});

//Director
app.post('/create/director',(req,res) => {
    const {
        name,
        nationality
    } = req.body

    const newDirector = Director({
        name,
        nationality
    });

    newDirector.save((err,director)=>{
        err
        ? res.status(400).send(err)
        : res.status(201).send({message:'Has publicado una nuevo director',director:director})
    })
});

app.listen(PORT,()=>{
    console.log(`Servidor inicializado en el puerto: ${PORT}`);
})