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


getPokemonById('ditto')
  .then(resolve => console.log(resolve))
  .catch(error => console.log(error))



const asyncPokeId = async () => {
    try {
      const response = await axios.get(`${URI}/pokemon/${id}`)
      if (response.status === 200) {
        const body = response.data
        console.log(body);
        return body
      } else {
        throw new Error('Mensaje de error')
      }
    } catch (error) {
      console.log(error.message);
    }
}
  

const getDangerousAsteroids = async (start_date, end_date, api_key) => {
  const NASA_URI = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${start_date}&end_date=${end_date}&api_key=${api_key}`
  const response = await axios.get(NASA_URI)
  return response.data
}

// getDangerousAsteroids('2021-08-24', '2020-08-24', '7s0ep6LwhAf8zcd0EIQDjK1TptDPWvNUIRIXF1S8')
//   .then(resolve => console.log(resolve))
//   .catch(error => console.log(error.message))
  
  
  
const getDangerousAsteroids2 = async (start_date, end_date, api_key) => {
  try {
    const NASA_URI = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${start_date}&end_date=${end_date}&api_key=${api_key}`
    
    const response = await axios.get(NASA_URI)

    const body = response.data

    const NEOarray = body.near_earth_objects

    const flattedNEO = NEOarray.flat()

    const dangerousAsteroids = flattedNEO.filter(asteroid => asteroid.is_potentially_hazardous_asteroid)

    console.log(dangerousAsteroids);
    return dangerousAsteroids
  } catch (error) {
    throw new Error(error.message)
  }
}



// getDangerousAsteroids2('2020-08-18', '2020-08-24', '7s0ep6LwhAf8zcd0EIQDjK1TptDPWvNUIRIXF1S8')






// const dates = {
//   '2020-08-18': [{},{},{}],
//   '2020-08-18': [{},{}],
//   '2020-08-18': [{}],
//   '2020-08-18': []
// }


const axios = require('axios');

const fetchMyApi = (id) => {
  return axios.get(`http://localhost:3000/pet/${id}/Gunter`)
  
}

// fetchMyApi()
//   .then(response => {
    
//     const statusCode = response.status
//     console.log(response.data);
//     return response.data
    
//   })
//   .catch(error => console.log(error.message))




const getDangerousAsteroidsByDate = async (start_date, end_date, api_key) => {
  const response = await axios.get(
    `https://api.nasa.gov/neo/rest/v1/feed?start_date=${start_date}&end_date=${end_date}&api_key=${api_key}`
  )

  const near_earth_objects = response.data.near_earth_objects

  const NEOEntries = Object.entries(near_earth_objects)
  const obj = {}
  NEOEntries.forEach(array => {
    const key = array[0]
    const value = array[1]
    const filteredAsteroids= value.filter(asteroid => asteroid.is_potentially_hazardous_asteroid)
    obj[key] = filteredAsteroids
  })
  console.log(obj);
  return obj

}

getDangerousAsteroidsByDate('2020-08-18', '2020-08-24', '7s0ep6LwhAf8zcd0EIQDjK1TptDPWvNUIRIXF1S8')




