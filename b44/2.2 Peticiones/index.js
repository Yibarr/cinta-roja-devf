const request = require('request')


const URI = `https://pokeapi.co/api/v2`

const getDitto = () => {
  request.get(`${URI}/pokemon/ditto`, (error, response) => {
    if (response.statusCode === 200) {
      const parsedJson = JSON.parse(response.body)
      console.log(parsedJson.name);
    } else {
      console.log(`Hubo un error: código ${response.statusCode}`);
    }
  })
}


getDitto()


//Crear función "getPokemonById" que reciba como parametro el nombre del pokemon y lo busque
// Crear función "getPokemonTypes" e imprimirlos en la consola