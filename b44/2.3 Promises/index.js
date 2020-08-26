// const error = false

// const promiseTest = new Promise((resolve, reject) => {
//   if (!error) {
//     resolve('Cuando la promesa es resuelta')
//   } else {
//     reject('Cuando falla')
//   }
// })

// promiseTest
//   .then(resolve => {
//     console.log(resolve);
//   } )
//   .catch(error => {
//     console.log(error);
//   })

const request = require('request');
const URI = `https://pokeapi.co/api/v2`

const getPokemonById = (id) => {
  return new Promise((resolve, reject) => {
    request.get(`${URI}/pokemon/${id}`, (error, response, body) => {
      if (response.statusCode === 200) {
        const body = JSON.parse(response.body)
        resolve(body.name)
      } else {
        reject(`Hubo un error. ${response.body}`)
      }
    })
  })
}


// getPokemonById('ditto')
//   .then(resolve => console.log(resolve))
//   .catch(error => console.log(error))


const axios = require('axios');

const getPokeById = (id) => {
  return axios.get(`${URI}/pokemon/${id}`)
  
}

getPokeById(18)
  .then(response => {
    
    const statusCode = response.status
    const body = response.data
    console.log(body.name, statusCode)
  
  })
  .catch(error => console.log(error))


const asyncPokeId = async () => {
    try {
      const response = await axios.get(`${URI}/pokemon/${id}`)
      if (response.status === 200) {
        const body = response.data
        return body
      } else {
        throw new Error('Mensaje de error')
      }
    } catch (error) {
      console.log(error.message);
    }
  }