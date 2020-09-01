import React, { useEffect, useState } from 'react'
import axios from 'axios'

import GifCard from '../components/GifCard'


const CardsContainer = () => {
  const [gifs, setGifs] = useState([])
  

  useEffect(() => {
    console.log('Al Montar el componente');
    axios.get('https://api.giphy.com/v1/gifs/trending?api_key=7ejd73FIFeDTTXP814G3kYp9UameVcT7')
      .then(res => {
        setGifs(res.data.data)
        console.log(gifs);
      })
      .catch(err => console.log(err))
    return () => {
      console.log('Al borrar el componente');
    }
  }, [])

  return (
    <div>
      <h1>Gifs</h1>
      <div>
        {
          gifs.map(gif => <GifCard key={gif.id} src={gif.images.original.url} />)
        }
      </div>
    </div>
  )
}

export default CardsContainer