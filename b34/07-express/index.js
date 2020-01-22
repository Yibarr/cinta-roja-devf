const express = require('express');
const bodyParser = require('body-parser')

const app = express();

const PORT = 6660;

//Configuración para poder recibir el body
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('/',(request,response)=>{
    response.send({id:10,name:'Yael',age:22})
})

app.get('/pokemon/:id',(req,res)=>{
    const {id} = req.params;
    console.log(req.params)
    res.send({_id:id})
});

app.get('/search',(req,res)=>{
    const {gato,vidas,color} = req.query
    console.log(gato,vidas,color)
    res.send({message:`El gato buscado es de color: ${color}, tiene ${vidas} vidas y se llama: ${gato}`})
});

app.post('/create/user',(req,res)=>{
    const {name, password, email, id} = req.body;
    console.log(req.body)
    res.send({message:`Usuario ${name} con id ${id} ha sido creado`, user:{name:name,password:password,email:email,id:id}})
})


app.listen(PORT,()=>{
    console.log(`Servidor inicializado en el puerto: ${PORT}`)
});
