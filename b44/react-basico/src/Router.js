import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch, 
  Route,
  Link
} from 'react-router-dom'
import {
  Drawer,
  IconButton,
  AppBar,
  Toolbar
} from '@material-ui/core'

import MenuIcon from '@material-ui/icons/Menu';

import CardsContainer from './views/CardsContainer/CardsContainer.jsx'
import ColorsContainer from './views/ColorsContainer.jsx'
import AsteroidsContainer from './views/AsteroidsContainer.jsx'

import './App.css'

function App() {
  const [ open, setOpen ] = useState(false)

  return (
    <React.Fragment>
      <Router>
        <div>
          <AppBar position="relative" className="nav_bar" color="secondary">
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={ () => setOpen(true) }
              >
                <MenuIcon/>
              </IconButton>
            </Toolbar>
          </AppBar>



          <Switch>
            <Route exact path="/">
              <ColorsContainer/>
            </Route>
            <Route path="/gifs">
              <CardsContainer/>
            </Route>
            <Route path="/asteroids">
              <AsteroidsContainer/>
            </Route>
            <Route>
              <h1>404 Not found</h1>
            </Route>
          </Switch>


        </div>
        <Drawer
          variant="persistent"
          anchor="left"
          open={ open }
        >
          <IconButton
            onClick={() => setOpen(false)}
            color="inherit"
            aria-label="open drawer"
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
      </Router>
    </React.Fragment>
  );
}

export default App;
