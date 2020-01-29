// Importación del objeto con funciones de request.
const request = require('request');
const axios = require('axios');

// Función que pasará como parámetro
//Nota: A pesarde ser escrita por nosotros, debe tener el formato que pide la documentación de request.
// const showPokemon = (error, response, body) => {
    // Validando el código de error, por buenas prácticas
//     if (response.statusCode === 200) {
//         console.log(JSON.parse(body).name);
//     } else {
//         console.log(response.statusCode)
//     }
// }; 

// request.get('https://pokeapi.co/api/v2/pokemon/mewtwo', showPokemon);


// pokemonById('https://pokeapi.co/api/v2/pokemon/150')
//     .then(res => {
    //         console.log(res)
    //         return res
    //     })
    //     .catch(error => {
        //         console.log(error)
        //         return error
        //     });
        
        // const getPokeById = (id) => {
        //         return axios.get(`${URL_BASE}/${id}`)
        //     };
            
            
        //     getPokeById(150)
        //         .then( res => {
        //                 console.log(res.data.name)
        //                 return res.data.name
        //             })
        //             .catch( error => {
        //                     console.log(error);
        //                     return error
        //                 })
const URL_BASE = 'https://pokeapi.co/api/v2/pokemon';

const pokemonById = (id) => {
    return new Promise((resolve,  reject)=>{
        request.get(`${URL_BASE}/${id}` , (error, response, body) => {
            if(response.statusCode === 200) {
                const pokemon = JSON.parse(body);
                const pokeName = pokemon.name;
                resolve(pokeName)

            } else {
                reject(`código: ${response.statusCode}`);
            }
        })
    })
};

 const getPId = async (id) => {
     const x = await pokemonById(id) 
     console.log(x)
    return  x

}

// getPId(150)

let data = [];

const getMoves = async (id) => {
     const x = await axios.get(`${URL_BASE}/${id}`)
     const moves = x.data.moves;
     const mappedMOves = moves.map(move => move.move.name)
     data = mappedMOves

     console.log(data.length)
};

getMoves(35)

console.log(data)


// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }