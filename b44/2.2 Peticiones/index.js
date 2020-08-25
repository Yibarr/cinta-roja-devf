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

const getPokemonById = (pokemonId) => {
  request.get(`${URI}/pokemon/${pokemonId}`, (error, response, body) => {
    if (response.statusCode === 200) {
      const parsedJson = JSON.parse(response.body);
      console.log(`Información pokemon:`, parsedJson);
    } else {
      console.log(`Hubo un error de código: ${response.statusCode}`);
    }
  });
};


const getPokemonMoves = (pokemonId) => {
  request.get(`${URI}/pokemon/${pokemonId}`, (error, response, body) => {
    if (response.statusCode === 200) {
      const parsedJson = JSON.parse(response.body);
      const movesNames = parsedJson.moves.map(move => move.move.name)
      console.log(movesNames);
    } else {
      console.log(`Hubo un error de código: ${response.statusCode}`);
    }
  });
};


getPokemonMoves(10)

//Crear función "getPokemonById" que reciba como parametro el nombre del pokemon y lo busque
// Crear función "getPokemonTypes" e imprimirlos en la consola