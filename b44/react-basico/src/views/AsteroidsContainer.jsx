import React, { useEffect, useState } from 'react'
import axios from 'axios'


const AsteroidsContainer = () => {

  const [dangerousAsteroids, setDangerousAsteroids] = useState([])
  
  useEffect(() => {
    getDAsteroids()
  }, [])


  const getDAsteroids = async () => {
    try {
      const NASA_URI = `https://api.nasa.gov/neo/rest/v1/feed?start_date=2020-08-24&end_date=2020-08-30&api_key=7s0ep6LwhAf8zcd0EIQDjK1TptDPWvNUIRIXF1S8`
      const response = await axios.get(NASA_URI)
      const NEOArr = Object.values(response.data.near_earth_objects)
      const flatDates = NEOArr.flat()
      const dangerousAsteroids = flatDates.filter(asteroid => asteroid.is_potentially_hazardous_asteroid)
      console.log(dangerousAsteroids);
      setDangerousAsteroids(dangerousAsteroids)
    } catch (error)  {
      throw new Error(error.message)
    }
  }

  return (
    <div>
      <h1>Asteroides potencialmente peligrosos para la tierra</h1>
      { 
        dangerousAsteroids.map(asteroid => {
          return(
            <div key={asteroid.id}>
              <h1> {asteroid.id}  </h1>
              <h1> {asteroid.name}  </h1>
            </div>
          )
        })
      }
    </div>
  )
}

export default AsteroidsContainer

