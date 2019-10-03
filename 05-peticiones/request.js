const request = require('request');

const URL_BASE = 'https://pokeapi.co/api/v2'

// request.get('https://pokeapi.co/api/v2/pokemon/ditto/',(error,response,body)=>{
//     const json = JSON.parse(body)
//     console.log(json.name)
// });


const pokeById = (id) => {
    const url = `${URL_BASE}/pokemon/${id}`
    
    request.get(url,(error,response,body)=>{
        if(response.statusCode === 200){
            const json = JSON.parse(body)
            console.log(json.name)
            return json.name
        }else if(response.statusCode === 400){
            console.log('Lo hiciste mal, intenta otra vez, menso')
        }else if(response.statusCode === 404){
            console.log(`${response.statusCode} Not Found`)
        }
    })
};

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

const buscaPokemon = new Promise((res, rej) => {
    const url = "https://pokeapi.co/api/v2/pokemon/pikachu/"
    request.get(url, (error, response, body)=> {
        const json = JSON.parse(body);
        response.statusCode === 200 
        ? res(json.name) 
        : rej(error)
        
    })
});


buscaPokemon
    .then((res) => {
        return res;
    })
    .catch((rej) => {
        return rej;
    })

console.log(buscaPokemon.then((res) => {
    return res;
})
.catch((rej) => {
    return rej;
}))
console.log('Hilo de ejecución principal')

// for (let i = 0; i < 999999; i++){
//     console.log(i)
// };
