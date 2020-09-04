import React from 'react'
import {
  Card,
  CardContent,
  Typography
} from '@material-ui/core'

import './GifCard.css'

const GifCard = (props) => {

  return (
    <React.Fragment>
      <Card className="full-heigth">
        <img src={ props.src } className="gif-size" alt="Gif"/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            { props.title }
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          { props.src }
          </Typography>
        </CardContent>
      </Card>
    </React.Fragment>
  )
}

export default GifCard