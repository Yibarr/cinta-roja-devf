import React, { useEffect, useState } from 'react'
import axios from 'axios'

import {
  Container, 
  Grid,
  InputBase,
  IconButton,
  LinearProgress
} from '@material-ui/core'

import SearchIcon from '@material-ui/icons/Search';
import GifCard from '../../components/GifCard/GifCard'

import './CardsContainer.css'

const CardsContainer = () => {
  const [ gifs, setGifs ] = useState([])
  const [ query, setQuery ] = useState('Pokemon')
  const [ loading, setLoading ] = useState(false)
  
  
  useEffect(() => {
    console.log('Al Montar el componente');
    getGifs()
    return () => {
      console.log('Al borrar el componente');
    }
  }, [query])
  
  const getGifs = async () => {
    try {
      setLoading(true)
      const URL = `https://api.giphy.com/v1/stickers/search?q=${query}&api_key=7ejd73FIFeDTTXP814G3kYp9UameVcT7`
      const res = await axios.get(URL)
      setGifs(res.data.data)
      console.log(res.data.data);
      setLoading(false)
      console.log(gifs);
    } catch (error) {
      throw new Error(error.message)
    }
  }
 

  const handleInput = (e) => {
    setQuery(e.target.value)
  }


  const showLinearProgress = () => {
    if(loading) return <LinearProgress color="secondary" />
  }


  return (
    <React.Fragment>
      <Container maxWidth="lg">
        <Grid container>
          <Grid item sm={12}>
            <h1>Buscando: {query}</h1>
            <InputBase
              placeholder="Search GIFS"
              inputProps={{ 'aria-label': 'search GIPHY' }}
              onChange={handleInput}
            />
            <IconButton type="submit" aria-label="search">
              <SearchIcon />
            </IconButton>
            {
              showLinearProgress()
            }
          </Grid>
        </Grid>
        <Grid container direction="row" alignItems="stretch" spacing={5}>
          {
               gifs.map(gif => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={gif.id}>
                  <GifCard src={gif.images.original.url} title={gif.title} />
                </Grid>
              ))
          }
        </Grid>
      </Container>
    </React.Fragment>
  )
}

export default CardsContainer