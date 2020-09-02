import React from 'react';
import {
  BrowserRouter as Router,
  Switch, 
  Route, 
  Link
} from 'react-router-dom'
import CardsContainer from './views/CardsContainer.jsx'
import ColorsContainer from './views/ColorsContainer.jsx'
import AsteroidsContainer from './views/AsteroidsContainer.jsx'

function App() {
  return (
    <Router>
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
    </Router>
  );
}

export default App;
