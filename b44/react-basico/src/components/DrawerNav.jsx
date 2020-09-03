import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Link
} from 'react-router-dom'
import {
  Drawer,
  IconButton
} from '@material-ui/core'

import MenuIcon from '@material-ui/icons/Menu';

const DrawerNav = () => {
  const [ open, setOpen ] = useState(false)


  return (
    <React.Fragment>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="end"
        onClick={ () => setOpen(true) }
      >
        <MenuIcon/>
      </IconButton>
      <Drawer
        variant="persistent"
        anchor="left"
        open={ open }
      >
        <IconButton
          onClick={() => setOpen(false)}
          color="inherit"
          aria-label="open drawer"
          edge="end"
        >
          <MenuIcon/>
        </IconButton>
          <ul>
          <li>
            <Link to="/">Colores</Link>
          </li>
          <li>
            <Link to="/gifs">Gifs</Link>
          </li>
          <li>
            <Link to="/asteroids">Asteroides en peligro 3</Link>
          </li>
          </ul>
      </Drawer>
    </React.Fragment>
  )

}


export default DrawerNav