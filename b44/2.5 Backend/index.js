const express = require('express')

const app = express()

const PORT = 3000


app.get('/api/saludo', (request, response) => {
  response.send({ salud: 'Hola' })
})

app.get('/api/despedida', (request, response) => {
  response.send({despedida: 'Adiós'})
})

//Parámetro en url
app.get('/pet/:name/:owner/', (req, res) => {
  const { name, owner } = req.params

  res.send({msg: `Dueño de ${name} es ${owner}`})
})
//Query en url
app.get('/pet/search', (req, res) => {
  const { search_query } = req.query
  res.send(search_query)
})

//CRUD
//Create post
//Read get
//Update put y patch
//Delete delete


app.listen(PORT, () => {
  console.log(`Aplicación inicializada en el puesrto: ${PORT}`);
})
