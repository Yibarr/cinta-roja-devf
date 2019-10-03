const request = require('request');

// const URL_BASE = 'https://pokeapi.co/api/v2'

// request.get('https://pokeapi.co/api/v2/pokemon/ditto/',(error,response,body)=>{
//     const json = JSON.parse(body)
//     console.log(json.name)
// });


// const pokeById = (id) => {
//     const url = `${URL_BASE}/pokemon/${id}`
    
//     request.get(url,(error,response,body)=>{
//         if(response.statusCode === 200){
//             const json = JSON.parse(body)
//             console.log(json.name)
//             return json.name
//         }else if(response.statusCode === 400){
//             console.log('Lo hiciste mal, intenta otra vez, menso')
//         }else if(response.statusCode === 404){
//             console.log(`${response.statusCode} Not Found`)
//         }
//     })
// };

// console.log(pokeById(150));


// getPokeMovesByID(150)

// const request = require('request');

// Promesa
// Pending 
// Resolved 
// Rejected 

// const promesa = new Promise((resolved, rejected) => {
//     const meTratoBien = false;
//     if(meTratoBien === true) {
//         resolved();
//     } else {
//         rejected();
//     }
// });

// promesa
//     .then(() => {
//         console.log("Tengo celular nuevo :)");
//     })
//     .catch(() => {
//         console.log("A veces la vida no es como queremos");
//     })

// Cliente
// Usuario Password

// HTTP

// Servidor
// Respuesta

// const buscaPokemon = new Promise((res, rej) => {
//     const url = "https://pokeapi.co/api/v2/pokemon/pikachu/"
//     request.get(url, (error, response, body)=> {
//         const json = JSON.parse(body);
//         response.statusCode === 200 
//         ? res(json.name) 
//         : rej(error)
        
//     })
// });

// let result = await buscaPokemon;

// console.log(result)


// buscaPokemon
//     .then((res) => {
//         return res;
//     })
//     .catch((rej) => {
//         return rej;
//     })


// console.log('Hilo de ejecución principal')

// for (let i = 0; i < 999999; i++){
//     console.log(i)
// };

// const getAsyncPokeById = async (id) => {
//     const pokemon = await new Promise((resolve,reject)=>{
//         request.get(`${URL_BASE}/pokemon/${id}`,(error,response,body) => {
//             resolve( JSON.parse(body).name)
//         });
//     });
    
//     console.log(pokemon)
//     return pokemon
// };

// getAsyncPokeById(150)

// const getAsyncPokeById = (id) => {
//     return  new Promise((resolve,reject)=>{
//         request.get(`${URL_BASE}/pokemon/${id}`,(error,response,body) => {
//             resolve( JSON.parse(body).name)
//         });
//     });
// };

// getAsyncPokeById(150).then((res)=>{
//     console.log(res)
// })



const miPromesa = new Promise((resolve,reject)=>{

    request.get('https://pokeapi.co/api/v2/pokemon/mewtwo/',(error,response,body)=>{
        if(response.statusCode === 200){
            const moves = JSON.parse(body).moves

            for (let i = 0; i < moves.length; i++) {
                console.log(moves[i].move.name)
            }
            // resolve(JSON.parse(body).moves)
        }else{
            reject(error)
        }

    })
});

miPromesa
    .then(res => console.log(res+' Desde el then'))
    .catch(res => console.log(res+' Desde el catch'))