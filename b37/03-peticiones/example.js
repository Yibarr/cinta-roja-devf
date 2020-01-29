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

const URL_BASE = 'https://pokeapi.co/api/v2/pokemon';

const pokemonById = (url) => {
    return new Promise((resolve,  reject)=>{
        request.get(url , (error, response, body) => {
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

pokemonById('https://pokeapi.co/api/v2/pokemon/150')
    .then(res => {
        console.log(res)
        return res
    })
    .catch(error => {
        console.log(error)
        return error
    });

const getPokeById = (id) => {
    return axios.get(`${URL_BASE}/${id}`)
};


getPokeById(150)
    .then( res => {
        console.log(res.data.name)
        return res.data.name
    })
    .catch( error => {
        console.log(error);
        return error
    })