const { get } = require('request')


const URI = `https://pokeapi.co/api/v2`

const getDitto = () => {
  get(`${URI}/pokemon/ditto`, (error, response) => {
    if (response.statusCode === 200) {
      const parsedJson = JSON.parse(response.body)
      console.log(parsedJson.name);
    } else {
      console.log(`Hubo un error: código ${response.statusCode}`);
    }
  })
}

const getPokemonById = (pokemonId) => {
  get(`${URI}/pokemon/${pokemonId}`, (error, response, body) => {
    if (response.statusCode === 200) {
      const parsedJson = JSON.parse(response.body);
      console.log(`Información pokemon:`, parsedJson);
    } else {
      console.log(`Hubo un error de código: ${response.statusCode}`);
    }
  });
};


const getPokemonMoves = (pokemonId) => {
  get(`${URI}/pokemon/${pokemonId}`, (error, response, body) => {
    if (response.statusCode === 200) {
      const parsedJson = JSON.parse(response.body);
      const movesNames = parsedJson.moves.map(move => move.move.name)
      console.log(movesNames);
    } else {
      console.log(`Hubo un error de código: ${response.statusCode}`);
    }
  });
};

const NASA_URI = `https://api.nasa.gov/neo/rest/v1/feed?start_date=2020-08-24&end_date=2020-08-30&api_key=7s0ep6LwhAf8zcd0EIQDjK1TptDPWvNUIRIXF1S8`

const getDangerousAsteroids = () => {
  get(
    `${NASA_URI}`,
    (error, response) => {
      if (response.statusCode === 200) {
        const body =  JSON.parse(response.body)
        
        const NEOArr = Object.values(body.near_earth_objects)
        // Objeto inicial, tomamos solo los valores del objeto y lo guardamos en la variable NEOArr
        // const near_earth_objects = {
        //   '2020-08-24': [],
        //   '2020-08-25': []
        // }
        const flatDates = NEOArr.flat()
        //[[{},{},{}], [{},{},{}], [{},{},{}]] => [{},{},{},{},{},{},{},{},{}] 
        const dangerousAsteroids = flatDates.filter(asteroid => asteroid.is_potentially_hazardous_asteroid)
        //arreglo filtrado
        
        console.log(dangerousAsteroids);
        
      } else {
        console.log(`Hubo un error. Código: ${response.statusCode}`);
        console.log(error, response);
      }
    }
  )
}


// getDangerousAsteroids()

//Crear función "getPokemonById" que reciba como parametro el nombre del pokemon y lo busque
// Crear función "getPokemonTypes" e imprimirlos en la consola



// const arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

// console.log(arr.flat());





//Despues de Object.values()




// ['2020-08-24', '2020-08-25']