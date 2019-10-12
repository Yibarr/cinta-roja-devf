import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import popper from 'popper.js';
import $ from 'jquery'
import 'bootstrap/dist/js/bootstrap.bundle.min';

// import Saludo from './components/Saludo/Saludo';
import Navbar from './components/Navbar/Navbar'
import MovieContainer from './components/MovieContainer/MovieContainer.jsx'
import MovieUploader from './components/MovieUploader/MovieUploader'
import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <MovieUploader/>
      <MovieContainer propiedad={'Esta es una propiedad'}/>
    </div>
  );
}

export default App;
