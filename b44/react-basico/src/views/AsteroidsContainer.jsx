import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {
  Container,
  Grid,
  Paper,
  TextField
} from '@material-ui/core'


const AsteroidsContainer = () => {
  const [dangerousAsteroids, setDangerousAsteroids] = useState([])
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)
  const [error, setError] = useState(null)
  
  useEffect(() => {
    getDAsteroids()
  }, [startDate, endDate])
  

  const getDAsteroids = async () => {
    try {
      const start_date = startDate || '1997-07-03'
      const end_date = endDate || '1997-07-03'

      if (startDate !== null, endDate !== null) {
        const NASA_URI = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${start_date}&end_date=${end_date}&api_key=7s0ep6LwhAf8zcd0EIQDjK1TptDPWvNUIRIXF1S8`
        const response = await axios.get(NASA_URI)
        const NEOArr = Object.values(response.data.near_earth_objects)
        const flatDates = NEOArr.flat()
        const dangerousAsteroids = flatDates.filter(asteroid => asteroid.is_potentially_hazardous_asteroid)
        console.log(dangerousAsteroids);
        setDangerousAsteroids(dangerousAsteroids)
      }
    } catch (error) {
      setError(error.response.data.error_message)
      setTimeout(() => {
        setError(null)
      }, 3000);
      console.error(error)
    }
  }

  const setDate = (date, dateType) => {
    console.log(date, dateType);
    switch (dateType) {
      case 'start':
          setStartDate(date)
        break;
        case 'end':
          setEndDate(date)
        break;
    }
  }

  const handleDateChange = (e) => {
    let date = {
      date: '',
      type: ''
    }
    if (startDate === null && endDate === null) {
      date.date = startDate
      date.type = 'start'
    } else if (endDate !== null && startDate === null) {
      date.date = startDate
      date.type = 'start'
    } else if (startDate !== null && endDate === null) {
      date.date = endDate
      date.type = 'end'
    } else {
      setStartDate(null)
      setEndDate(null)
      date.date = startDate
      date.type = 'start'
    }
    setDate(e.target.value, date.type)
  }


  return (
    <React.Fragment>
      <Container maxWidth="lg">
        <Grid container justify="center" align-items="center">
          <Grid item>
            <h1>Inicio</h1>
            <h3>{startDate}</h3>
            <h1>Final</h1>
            <h3>{endDate}</h3>
          </Grid>
          <Grid xs={12} item>
            <Paper>
              <TextField
                label={`Ingresa una fecha de ${'hola, ya veo que hago acá'}`}
                type="date"
                default= {'1997-07-03'}
                onChange={handleDateChange}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <div>
                {error}
            </div>
            </Paper>
          </Grid>
        </Grid>
      </Container>
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
    </React.Fragment>
  )
}

export default AsteroidsContainer

